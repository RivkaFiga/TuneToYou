import Service from '../models/service.model';

export const addService = async (newService: any ) => {
    try {
        const service = new  Service(newService);
        return await service.save();
    }
    catch (error) {
        console.error('Error adding service:', error);
        throw new Error('Failed to add service.');
    }
};

export const getAllServices = async () => {
    try {
        const services = await Service.find().exec();
        return services;
    } catch (error) {
        console.error('Error getting services:', error);
        throw new Error('Failed to get services.');
    }
};

export const getServiceById = async (id: any ) => {
    try {
        const service = await Service.findOne({ serviceId: parseInt(id)}).exec();
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    } catch (error) {
        console.error('Error getting service by ID:', error);
        throw new Error('Failed to get service by ID.');
    }
};

export const updateService = async (id: any, updateData: any ) => {
    try {
        const service = await Service.findOneAndUpdate({ serviceId: parseInt(id)}, updateData, { new: true }).exec();
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    } catch (error) {
        console.error('Error updating service: ', error);
        throw new Error('Failed to update service.');
    }
};

export const deleteService = async (id: any ) => {
    try {
        await Service.findOneAndDelete({ serviceId: parseInt(id)}).exec();
        return { success: true, message: 'Service deleted successfully' }
    } catch (error) {
        console.error('Error deleting service:', error);
        throw new Error('Failed to deleting service.');
    }
};

module.exports = { addService, getAllServices, getServiceById, updateService, deleteService };