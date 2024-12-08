import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

/**
 * @swagger
 * 
 */

/**
 * @swagger
 * 
 */

/**
 * @swagger
 * /
 */
router.post('/users', userController.addUser);

/**
 * @swagger
 * /
 */
router.get('/users', userController.getAllUsers);

/**
 * @swagger
 * /
 */
router.get('/users/:id', userController.getUserById);

/**
 * @swagger
 * /
 */
router.put('/users/:id', userController.updateUser);

/**
 * @swagger
 * /
 */
router.delete('/users/:id', userController.deleteUser);

export default router;
