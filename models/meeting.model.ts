import mongoose, { Schema, Document } from 'mongoose';
import { IService } from './service.model';


interface IMeeting extends Document {
  meetingId: number;
  date:Date;
  service: IService;
}

const MeetingSchema: Schema = new Schema({
  meetingId:{ type: Number },
  date: { type: Date },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
});

const Meeting = mongoose.model<IMeeting>('Meeting', MeetingSchema);

export default Meeting;
