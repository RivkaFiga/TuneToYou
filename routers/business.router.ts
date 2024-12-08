import express from 'express';
import * as businessController from '../controllers/business.controller';

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
router.post('/businesses', businessController.addBusibess);

/**
 * @swagger
 * /
 */
router.get('/businesses', businessController.getAllBusibess);

/**
 * @swagger
 * /
 */
router.get('/businesses/:id', businessController.getBusibessById);

/**
 * @swagger
 * /
 */
router.put('/businesses/:id', businessController.updateBusibess);

/**
 * @swagger
 * /
 */
router.delete('/businesses/:id', businessController.deleteBusibess);

export default router;
