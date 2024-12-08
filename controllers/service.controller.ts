import * as serviceService from '../services/service.service';

export const addService= async (req: any, res: any ) => {
    try {
        const data = req.body;
        const newSrvice = await serviceService.addService(data);
        res.status(201).json(newSrvice);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllServices = async (req: any, res: any ) => {
    try {
        const services = await serviceService.getAllServices();
        res.status(200).json(services);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const getServiceById= async (req: any, res: any ) => {
    try {
        const ServiceId = req.params.id;
        const service = await serviceService.getServiceById(ServiceId);
        res.status(200).json(service);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}

export const updateService = async (req: any, res: any ) => {
    try {
        const serviceId = req.params.id;
        const newservice = req.body;
        const service = await serviceService.updateService(serviceId, newservice);
        res.status(200).json(service);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteService = async (req: any, res: any ) => {
    try {
        const serviceId = req.params.id;
        const service = await serviceService.deleteService(serviceId);
        res.status(200).json(service);
    }
    catch (error: any ) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { addService, getAllServices, getServiceById, updateService, deleteService };