// import {db} from "@/db";
// import bcrypt from 'bcrypt'; // To hash the password
// import {users} from '@/db/schema';
//
// // Insert the superadmin into the database
// async function addSuperadmin(name : string, email: string, password = "", role = 'super', isActive = true) {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash password for security
//
//     const superadmin = await db.insert(users).values({
//       name: name,
//       email: email,
//       password: password? hashedPassword : null,  // Store the hashed password if available
//       role: role,
//       isActive: isActive,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });
//
//     console.log('Superadmin created:', superadmin);
//   } catch (error) {
//     console.error('Error inserting superadmin:', error);
//   }
// }
//
// // Run the addSuperadmin function
// addSuperadmin('Super Admin', 'superadmin@test.com', 'randompassword');
// addSuperadmin('Anastasiia', 'anastasiaomilaeva@gmail.com');
