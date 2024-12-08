import express from 'express';
import * as userController from '../controllers/user.controller';
import { authenticateToken, checkIsAdmin } from '../middlewares/auth.middleware';

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
router.post('/users', authenticateToken, checkIsAdmin, userController.addUser);

/**
 * @swagger
 * /
 */
router.get('/users', authenticateToken, checkIsAdmin, userController.getAllUsers);

/**
 * @swagger
 * /
 */
router.get('/users/:id',authenticateToken, userController.getUserById);

/**
 * @swagger
 * /
 */
router.put('/users/:id', authenticateToken, checkIsAdmin, userController.updateUser);

/**
 * @swagger
 * /
 */
router.delete('/users/:id',authenticateToken, userController.deleteUser);

export default router;
