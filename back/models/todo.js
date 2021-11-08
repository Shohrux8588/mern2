import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: String,
    message: String,
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Todos = mongoose.model("Todos", todoSchema);

export default Todos;