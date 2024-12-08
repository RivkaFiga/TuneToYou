import * as businessService from '../services/business.service';

export const addBusibess = async (req: any, res: any ) => {
    try {
        const data = req.body;
        const newEvent = await businessService.addBusibess(data);
        res.status(201).json(newEvent);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllBusibess = async (req: any, res: any ) => {
    try {
        const events = await businessService.getAllBusibess();
        res.status(200).json(events);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getBusibessById = async (req: any, res: any ) => {
    try {
        const eventId = req.params.id;
        const event = await businessService.getBusibessById(eventId);
        res.status(200).json(event);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const updateBusibess = async (req: any, res: any ) => {
    try {
        const eventId = req.params.id;
        const newEvent = req.body;
        const event = await businessService.updateBusibess(eventId, newEvent);
        res.status(200).json(event);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteBusibess = async (req: any, res: any ) => {
    try {
        const eventId = req.params.id;
        const event = await businessService.deleteBusibess(eventId);
        res.status(200).json(event);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { addBusibess, getAllBusibess, getBusibessById, updateBusibess, deleteBusibess };