import express from 'express';
import * as serviceController from '../controllers/service.controller';
import { authenticateToken, checkIsAdmin } from '../middlewares/auth.middleware';

const router = express.Router();

/**
 * @swagger
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: The services managing API
 */

/**
 * @swagger
 * /
 */
router.post('/services', authenticateToken, checkIsAdmin, serviceController.addService);

/**
 * @swagger
 * /
 */
router.get('/services', authenticateToken, serviceController.getAllServices);

/**
 * @swagger
 * /
 */
router.get('/services/:id', authenticateToken, serviceController.getServiceById);

/**
 * @swagger
 * /
 */
router.put('/services/:id', authenticateToken, checkIsAdmin, serviceController.updateService);

/**
 * @swagger
 * /
 */
router.delete('/services/:id', authenticateToken, checkIsAdmin, serviceController.deleteService);

export default router;
