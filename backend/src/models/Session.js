import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  problem: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "meduim", "hard"],
    required: true,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  participant: {
    
  }
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
