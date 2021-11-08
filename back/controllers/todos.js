import mongoose from "mongoose";
import Todos from "../models/todo.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todos.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTodo = async (req, res) => {
    const todo = req.body;

    const newTodo = new Todos(todo);
    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const todo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No todo with that id");

    const updatedTodo = await Todos.findByIdAndUpdate(id, todo, { new: true });

    res.json(updatedTodo);

}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No todo with that id");

    await Todos.findByIdAndRemove(id);

    res.json({ message: "Todo deleted successfully." })
}

export const completeTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No todo with that id");

    const todo = await Todos.findById(id);
    const updatedTodo = await Todos.findByIdAndUpdate(id, { completed: !todo.completed }, { new: true });
    
    res.json(updatedTodo);

}
