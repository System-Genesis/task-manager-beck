import mongoose from 'mongoose';
import config from '../config/config';

// Mongoose schema of the merged object
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rule: { type: String, enum: ['manager', 'user'], required: true, },
    pages: { type: mongoose.Schema.Types.ObjectId , ref: 'pages', required: true},
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model(config.userCollection, userSchema);

export default userModel;

