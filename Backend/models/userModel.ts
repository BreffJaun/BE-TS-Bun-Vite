// I M P O R T   D E P E N D E N C I E S
import { Schema, model } from "mongoose";

// S C H E M A  -  D A T A   S T R U C T U R E
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { strictQuery: true }
);
// Hidden properties of Mongoose Objects in the Node.js JSON Responses (Responses)
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

// M O D E L - T E M P L A T E   F O R   D B   E N T R I E S
const UserModel = model("User", userSchema, "users");
export default UserModel;
