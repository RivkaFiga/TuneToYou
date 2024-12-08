import Meeting from "../models/meeting.model";

export const addMeeting = async (newMeeting: any ) => {
    try {
        const meet = new Meeting(newMeeting);
        return await meet.save();
    }
    catch (error) {
        console.error('Error adding meeting:', error);
        throw new Error('Failed to add meeting.');
    }
};

export const getAllMeetings = async () => {
    try {
        const meetings = await Meeting.find().exec();
        return meetings;
    } catch (error) {
        console.error('Error getting meetings:', error);
        throw new Error('Failed to get meetings.');
    }
};

export const getMeetingById = async (id: any ) => {
    try {
        const meet = await Meeting.findOne({ meetingId: parseInt(id)}).exec();
        if (!meet) {
            throw new Error('Meeting not found');
        }
        return meet;
    } catch (error) {
        console.error('Error getting meeting by ID:', error);
        throw new Error('Failed to get meeting by ID.');
    }
};

export const updateMeeting = async (id: any, updateData: any ) => {
    try {
        const meet = await Meeting.findOneAndUpdate({ meetingId: parseInt(id)}, updateData, { new: true }).exec();
        if (!meet) {
            throw new Error('Meeting not found');
        }
        return meet;
    } catch (error) {
        console.error('Error updating meeting: ', error);
        throw new Error('Failed to update meeting.');
    }
};

export const deleteMeeting = async (id: any ) => {
    try {
        await Meeting.findOneAndDelete({ meetingId: parseInt(id)}).exec();
        return { success: true, message: 'Meeting deleted successfully' }
    } catch (error) {
        console.error('Error deleting meeting:', error);
        throw new Error('Failed to deleting meeting.');
    }
};

module.exports = { addMeeting, getAllMeetings, getMeetingById, updateMeeting, deleteMeeting };