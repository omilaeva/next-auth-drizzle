import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import {compare} from "bcrypt";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import {db} from "@/db";
import {accounts, authenticators, sessions, systemUsers, users} from "@/db/schema";
import {eq} from "drizzle-orm";
import {string, z} from "zod";

export const signInSchema = z.object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      sessionsTable: sessions,
      accountsTable: accounts,
      authenticatorsTable: authenticators,
    }),
    session: {
      strategy: "jwt",
    },
    providers: [Google,
      Credentials({
        name: "Email & Password",
        credentials: {
          email: {label: "Email", type: "email"},
          password: {label: "Password", type: "password"},
        },
        async authorize(credentials) {
          console.log("authorize");
          console.log(credentials);

          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing email or password");
          }

          const { email, password } = await signInSchema.parseAsync(credentials);

          const user = await db
            .select()
            .from(systemUsers)
            .where(eq(systemUsers.email, email))
            .limit(1)
            .execute();

          // If no user is found, throw an error
          if (!user || user.length === 0) {
            throw new Error("User not found");
          }

          // Get the user object from the array result (Drizzle returns an array)
          const foundUser = user[0];

          // if (user.status !== "approved") {
          //   throw new Error("Your account is not approved yet.");
          // }

          const passwordMatch = foundUser.password && await compare(password, foundUser.password);
          if (!passwordMatch) {
            throw new Error("Invalid credentials");
          }

          console.log(foundUser);
          return foundUser;
        },
      }),
    ],
    callbacks: {
      async signIn({user}) {
        console.log("signIn");
        console.log(user);
        const existingUser = await db
          .select()
          .from(systemUsers)
          .where(eq(systemUsers.email, user.email ?? ""))
          .limit(1) // Ensures we only get one result
          .execute(); // Executes the query

        // If no user is found, throw an error
        if (!existingUser || existingUser.length === 0) {
          throw new Error("Access Denied: Contact Admin");
        }

        const foundUser = existingUser[0];

        if (!foundUser) {
          throw new Error("Access Denied: Contact Admin");
        }
        if (!foundUser.isActive) {
          throw new Error("Account is not activated. Follow the link from the email to activate your account");
        }

        console.log("user is found. return true");
        // if (existingUser.status !== "approved") {
        //   throw new Error("Account Pending Approval");
        // }

        return true;
      },
      async session({session}) {
        console.log("session in auth");
        console.log(session);

        if (!session?.user?.email) return session;

        // Query the database for the user based on the email from the session
        const dbUser = await db
          .select()
          .from(systemUsers)
          .where(eq(systemUsers.email, session.user.email))
          .limit(1) // Ensure we get only one user (email should be unique)
          .execute();

        console.log(dbUser);

        // If user exists in the database, you can add custom logic here (e.g., assign role)
        // if (dbUser && dbUser.length > 0) {
        //   const foundUser = dbUser[0];
        //   // session.user.role = foundUser.role;
        // }

        // Return the session with potentially modified data
        return session;
      },
    },
    debug: true,
    pages: {
      signIn: "/signin",
    }
})