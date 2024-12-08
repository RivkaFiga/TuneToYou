import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
  const DATABASE_URL = process.env.DATABASE_URL;
  try {
    await mongoose.connect(DATABASE_URL || '');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  } 
}






// import mongoose from "mongoose";
// mongoose.set("strictQuery", false);
// const DATABASE_URL = process.env.DATABASE_URL
// const mongoDB =DATABASE_URL;

// main().catch((err) => console.log(err));
// async function main() {
//     console.log(mongoDB);
    
//     await mongoose.connect(mongoDB || '');
// }

// export default mongoose



// import mongoose from 'mongoose';
// require('dotenv').config();

// const DATABASE_URL = process.env.DATABASE_URL;

// mongoose.set('strictQuery', false);

// async function main() {
//   try {
//     await mongoose.connect(DATABASE_URL || '');
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Could not connect to MongoDB', error);
//   }
  
// }

// main();

// import mongoose, { Schema, Document } from 'mongoose';
// import dotenv from 'dotenv';

// // טוען את המשתנים מקובץ ה- .env
// dotenv.config();

// // הגדרת ממשק עבור המשתמש
// interface IUser extends Document {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     isAdmin: boolean;
//   }
  
//   // הגדרת סכימה של משתמש
//   const UserSchema: Schema = new Schema({
//     id:{ type: Number, required: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean, required: true }
//   });

// // יצירת מודל של משתמש
// const User = mongoose.model<IUser>('User', UserSchema);

// // פונקציה ראשית להתחברות למסד הנתונים ויצירת משתמש חדש
// async function main() {
//   // הגדרת כתובת מסד הנתונים מתוך קובץ ה- .env
//   const DATABASE_URL = process.env.DATABASE_URL;

//   try {
//     // התחברות למסד הנתונים
//     await mongoose.connect(DATABASE_URL || '');
//     console.log('Connected to MongoDB');

//     // יצירת משתמש חדש
//     const newUser = new User({
//       id: 147,
//       name: 'Dan',
//       email: 'Dan@gmail.com',
//       password: 'password417',
//       isAdmin: false,
//     });

//     // שמירת המשתמש במסד הנתונים
//     const savedUser = await newUser.save();
//     console.log('User created:', savedUser);
//   } catch (error) {
//     console.error('Error connecting to MongoDB or creating user:', error);
//   } 
//   const users = await getAllUsers();
// console.log('Users fetched:', users);
// }

// async function getAllUsers(): Promise<IUser[]> {
//     try {
//       const users = await User.find(); // מחזירה את כל המשתמשים
//       return users;
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       throw new Error('Could not fetch users');
//     }
//   }

// // קריאה לפונקציה הראשית
// main();


// import mongoose from 'mongoose';
// import mongoose, { Schema, Document } from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// // הגדרת ממשק עבור המשתמש
// interface IUser extends Document {
//     id: string;
//     name: string;
//     email: string;
//     password: string;
//     isAdmin: boolean;
//   }
  
//   // הגדרת סכימה של משתמש
//   const UserSchema: Schema = new Schema({
//     id:{ type: String, required: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     isAdmin: { type: Boolean, required: true }
//   });

// // יצירת מודל של משתמש
// const User = mongoose.model<IUser>('User', UserSchema);

// // פונקציה לשליפת כל המשתמשים
// async function getAllUsers(): Promise<IUser[]> {
//   try {
//     const users = await User.find(); // מחזירה את כל המשתמשים
//     return users;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw new Error('Could not fetch users');
//   }
// }
// main();
// getAllUsers();
// async function deleteAllUsers(): Promise<void> {
//     try {
//       const result = await User.deleteMany({}); // מוחק את כל המשתמשים
//       console.log(`${result.deletedCount} users deleted.`);
//     } catch (error) {
//       console.error('Error deleting users:', error);
//       throw new Error('Could not delete users');
//     }
//   }
  

// פונקציה ראשית להתחברות למסד הנתונים ולשליפת המשתמשים
// export async function connectDB() {
//   const DATABASE_URL = process.env.DATABASE_URL;

//   try {
//     // התחברות למסד הנתונים
//     await mongoose.connect(DATABASE_URL || '');
//     console.log('Connected to MongoDB');

//     // שליפת כל המשתמשים
//     // const users = await getAllUsers();
//     // console.log('Users fetched:', users);
//   } catch (error) {
//     console.error('Error connecting to MongoDB: ', error);
//   } 
//   // finally {
//     // סגירת החיבור למסד הנתונים לאחר שהמשימה הושלמה
//     // mongoose.connection.close();
// // await deleteAllUsers();
// // } catch (error) {
// //   console.error('Error connecting to MongoDB or deleting users:', error);
// // } finally {
// //   // סגירת החיבור למסד הנתונים לאחר שהמשימה הושלמה
// //   mongoose.connection.close();
//   // }
// }

// קריאה לפונקציה הראשית
// main();
// export async function closeDB(){
//   try{
//   mongoose.connection.close();
//   console.log('MongoDB connection closed');
//   }
//   catch(error){
//     console.error('Error closing the MongoDB ', error);
//   }
// } 