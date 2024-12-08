import { log } from 'console';
import User from '../models/user.model';

export const addUser = async (newUser: any ) => {
    try {
        const user = new  User(newUser);
        return await user.save();
    }
    catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Failed to add user.');
    }
};

export const getAllUsers = async () => {
    try {
        const users = await User.find().exec();
        return users;
    } catch (error) {
        console.error('Error getting users:', error);
        throw new Error('Failed to get users.');
    }
};

export const getUserById = async (id: any ) => {
    try {
        const user = await User.findOne({ userId: parseInt(id) }).exec();
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error('Error getting user by ID:', error);
        throw new Error('Failed to get user by ID.');
    }
};

export const updateUser = async (id: any, updateData: any ) => {
    try {
        const user = await User.findOneAndUpdate({ userId: parseInt(id)}, updateData, { new: true }).exec();
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user.');
    }
};

export const deleteUser = async (id: any ) => {
    try {
        await User.findOneAndDelete({ userId: parseInt(id)}).exec();
        return { success: true, message: 'User deleted successfully' }
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to deleting user.');
    }
};

// module.exports = { addUser, getAllUsers, getUserById, updateUser, deleteUser };