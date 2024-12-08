import Business from '../models/business.model';

export const addBusibess = async (newBusibess: any ) => {
    try {
        const event = new Business(newBusibess);
        return await event.save();
    }
    catch (error) {
        console.error('Error adding business:', error);
        throw new Error('Failed to add business.');
    }
};


export const getAllBusibess = async () => {
    try {
        const events = await Business.find().exec();
        return events;
    } catch (error) {
        console.error('Error getting business:', error);
        throw new Error('Failed to get business.');
    }
};

export const getBusibessById = async (id: any ) => {
    try {
        const event = await Business.findById(id).exec();
        if (!event) {
            throw new Error('Business not found');
        }
        return event;
    } catch (error) {
        console.error('Error getting business by ID:', error);
        throw new Error('Failed to get business by ID.');
    }
};

export const updateBusibess = async (id: any, updateData: any ) => {
    try {
        const event = await Business.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!event) {
            throw new Error('Business not found');
        }
        return event;
    } catch (error) {
        console.error('Error updating business: ', error);
        throw new Error('Failed to update business.');
    }
};

export const deleteBusibess = async (id: any ) => {
    try {
        await Business.findByIdAndDelete(id).exec();
        return { success: true, message: 'Business deleted successfully' }
    } catch (error) {
        console.error('Error deleting business:', error);
        throw new Error('Failed to deleting business.');
    }
};

module.exports = { addBusibess, getAllBusibess, getBusibessById, updateBusibess, deleteBusibess };