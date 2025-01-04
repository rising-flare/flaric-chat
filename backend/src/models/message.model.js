import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Sender is required"],
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Receiver is required"],
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
},
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;