import express from 'express';
import * as serviceController from '../controllers/service.controller';

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
router.post('/services', serviceController.addService);

/**
 * @swagger
 * /
 */
router.get('/services', serviceController.getAllServices);

/**
 * @swagger
 * /
 */
router.get('/services/:id', serviceController.getServiceById);

/**
 * @swagger
 * /
 */
router.put('/services/:id', serviceController.updateService);

/**
 * @swagger
 * /
 */
router.delete('/services/:id', serviceController.deleteService);

export default router;
