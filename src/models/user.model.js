import mongoose from 'mongoose';

const { Schema } = mongoose;
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobilePhoneNumber: { type: Number, required: true },
  identityNumber: { type: Number, required: true },
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  date: {
    type: Date,
    default: Date.now()
  }
});
const User = mongoose.model('User', UserSchema);
export default User;
