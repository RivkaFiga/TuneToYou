import * as meetingService from '../services/meeting.service';

export const addMeeting = async (req: any, res: any ) => {
    try {
        const data = req.body;
        const newMeeting = await meetingService.addMeeting(data);
        res.status(201).json(newMeeting);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllMeetings = async (req: any, res: any ) => {
    try {
        const meetings = await meetingService.getAllMeetings();
        res.status(200).json(meetings);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getMeetingById = async (req: any, res: any ) => {
    try {
        const MeetingId = req.params.id;
        const meet = await meetingService.getMeetingById(MeetingId);
        res.status(200).json(meet);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const updateMeeting = async (req: any, res: any ) => {
    try {
        const meetId = req.params.id;
        const newmeet = req.body;
        const event = await meetingService.updateMeeting(meetId, newmeet);
        res.status(200).json(event);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteMeeting = async (req: any, res: any ) => {
    try {
        const meetId = req.params.id;
        const event = await meetingService.deleteMeeting(meetId);
        res.status(200).json(event);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { addMeeting, getAllMeetings, getMeetingById, updateMeeting, deleteMeeting };