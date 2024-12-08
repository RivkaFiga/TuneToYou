import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  userId: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema: Schema = new Schema({
  userId:{ type: Number },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean }
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
