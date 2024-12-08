import express from 'express';
import * as meetingController from '../controllers/meeting.controller';
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
router.post('/meetings', authenticateToken, checkIsAdmin, meetingController.addMeeting);

/**
 * @swagger
 * /
 */
router.get('/meetings', authenticateToken, meetingController.getAllMeetings);

/**
 * @swagger
 * /
 */
router.get('/meetings/:id',authenticateToken, meetingController.getMeetingById);

/**
 * @swagger
 * /
 */
router.put('/meetings/:id',authenticateToken, checkIsAdmin, meetingController.updateMeeting);

/**
 * @swagger
 * /
 */
router.delete('/meetings/:id',authenticateToken, meetingController.deleteMeeting);

export default router;