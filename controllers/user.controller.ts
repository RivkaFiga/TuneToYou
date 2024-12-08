import * as userService from '../services/user.service';

export const addUser = async (req: any, res: any ) => {
    try {
        const data = req.body;
        const newUser = await userService.addUser(data);
        res.status(201).json(newUser);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllUsers = async (req: any, res: any ) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req: any, res: any ) => {
    try {
        const UserId = req.params.id;
        const user= await userService.getUserById(UserId);
        res.status(200).json(user);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req: any, res: any ) => {
    try {
        const userId = req.params.id;
        const newuser = req.body;
        const user = await userService.updateUser(userId, newuser);
        res.status(200).json(user);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteUser = async (req: any, res: any ) => {
    try {
        const userId = req.params.id;
        const user = await userService.deleteUser(userId);
        res.status(200).json(user);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { addUser, getAllUsers, getUserById, updateUser, deleteUser };