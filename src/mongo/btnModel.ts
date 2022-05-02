import mongoose from 'mongoose';
import config from '../config/config';

// Mongoose schema of the merged object
const btnSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    params: { type: Object, required: true },
    name: { type: String, required: true },
    select: { type: String },
    message: { type: String },
    type: { type: String },
    methods: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const btnModel = mongoose.model(config.btnsCollection, btnSchema);

export default btnModel;
