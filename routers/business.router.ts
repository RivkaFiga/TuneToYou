import express from 'express';
import * as businessController from '../controllers/business.controller';
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
router.post('/businesses', authenticateToken, checkIsAdmin, businessController.addBusibess);

/**
 * @swagger
 * /
 */
router.get('/businesses', authenticateToken, businessController.getAllBusibess);

/**
 * @swagger
 * /
 */
router.get('/businesses/:id', authenticateToken, businessController.getBusibessById);

/**
 * @swagger
 * /
 */
router.put('/businesses/:id', authenticateToken, checkIsAdmin, businessController.updateBusibess);

/**
 * @swagger
 * /
 */
router.delete('/businesses/:id', authenticateToken, checkIsAdmin, businessController.deleteBusibess);

export default router;
