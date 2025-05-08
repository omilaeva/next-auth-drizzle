import {boolean, integer, pgEnum, pgTable, primaryKey, text, timestamp, uuid, varchar} from 'drizzle-orm/pg-core';
import {sql} from "drizzle-orm";
import {AdapterAccountType} from "@auth/core/adapters";
//
// // Defining the Role Enum for Drizzle
// export const RoleEnum  = pgEnum("roles", ["tenant", "property_manager", "vendor", "admin", "super_admin"]);
//
// // Defining the User Table
// export const users = pgTable('user', {
//   id: uuid('id').primaryKey().defaultRandom(),
//   name: varchar('name', { length: 255 }),
//   email: varchar('email', { length: 255 }).unique().notNull(),
//   emailVerified: timestamp("emailVerified", { mode: "date" }),
//   password: varchar('password', { length: 255 }), // Used for email/password authentication
//   image: varchar('image', { length: 255 }),
//   role: RoleEnum('role').default('tenant'), // Default is 'TENANT'
//   isActive: boolean('isActive').default(false), // Initially inactive
//   createdAt: timestamp('createdAt').defaultNow(),
//   updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => sql`(now())`),
// });
//
// // Defining the Invitation Table
// export const invitations = pgTable('invitations', {
//   id: uuid('id').primaryKey().defaultRandom(),
//   email: varchar('email', { length: 255 }), // Can send multiple invitations
//   role: RoleEnum('role'), // Role assigned upon activation
//   token: varchar('token', { length: 255 }).unique(), // Secure invitation token
//   expiresAt: timestamp('expiresAt').notNull(),
//   acceptedAt: timestamp('acceptedAt'),
//   userId: uuid('userId'),
//   user: uuid('userId').references(() => users.id) // Relation to user
// });
//
// // Defining the Account Table
// export const accounts = pgTable('account', {
//   id: uuid('id').primaryKey().defaultRandom(),
//   userId: uuid("userId")
//     .notNull()
//     .references(() => users.id, { onDelete: "cascade" }),
//   type: text("type").$type<AdapterAccountType>().notNull(),
//   provider: text("provider").notNull(),
//   providerAccountId: text("providerAccountId").notNull(),
//   refresh_token: text("refresh_token"),
//   access_token: text("access_token"),
//   expires_at: integer("expires_at"),
//   token_type: text("token_type"),
//   scope: text("scope"),
//   id_token: text("id_token"),
//   session_state: text("session_state"),
// });
//
// // Defining the Session Table
// export const sessions = pgTable('session', {
//   sessionToken: text("sessionToken").primaryKey(),
//   userId: uuid("userId")
//     .notNull()
//     .references(() => users.id, { onDelete: "cascade" }),
//   expires: timestamp("expires", { mode: "date" }).notNull(),
// });



export const users = pgTable('users', {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})

export const accounts = pgTable(
  "accounts",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ]
)

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ]
)

export const authenticators = pgTable(
  "authenticators",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    },
  ]
)

// Defining the Role Enum for Drizzle
export const RoleEnum  = pgEnum("roles", ["tenant", "property_manager", "vendor", "admin", "super_admin"]);

// Defining the User Table
export const systemUsers = pgTable('systemUsers', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).unique().notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  password: varchar('password', { length: 255 }), // Used for email/password authentication
  image: varchar('image', { length: 255 }),
  role: RoleEnum('role').default('tenant'), // Default is 'TENANT'
  isActive: boolean('isActive').default(false), // Initially inactive
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().$onUpdate(() => sql`(now())`),
});

// Defining the Invitation Table
export const invitations = pgTable('invitations', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }), // Can send multiple invitations
  role: RoleEnum('role'), // Role assigned upon activation
  token: varchar('token', { length: 255 }).unique(), // Secure invitation token
  expiresAt: timestamp('expiresAt').notNull(),
  acceptedAt: timestamp('acceptedAt'),
  userId: uuid('userId'),
  user: uuid('userId').references(() => systemUsers.id) // Relation to user
});