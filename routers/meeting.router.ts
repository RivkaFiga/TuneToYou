import express from 'express';
import * as meetingController from '../controllers/meeting.controller';

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
router.post('/meetings', meetingController.addMeeting);

/**
 * @swagger
 * /
 */
router.get('/meetings', meetingController.getAllMeetings);

/**
 * @swagger
 * /
 */
router.get('/meetings/:id', meetingController.getMeetingById);

/**
 * @swagger
 * /
 */
router.put('/meetings/:id', meetingController.updateMeeting);

/**
 * @swagger
 * /
 */
router.delete('/meetings/:id', meetingController.deleteMeeting);

export default router;