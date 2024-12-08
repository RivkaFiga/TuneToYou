import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  serviceId: number;
  name: string;
}

const ServiceSchema: Schema = new Schema({
  serviceId:{ type: Number },
  name: { type: String },
});

const Service = mongoose.model<IService>('Service', ServiceSchema);

export default Service;