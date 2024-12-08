import mongoose, { Schema, Document } from 'mongoose';

interface IBusiness extends Document {
  name: string;
  adress: string;
  phone: string;
  email: string;
}

const BusinessSchema: Schema = new Schema({
    name: { type: String },
    adress: { type: String },
    phone: { type: String },
    email: { type: String }
});

const Business = mongoose.model<IBusiness>('Business', BusinessSchema);

export default Business;