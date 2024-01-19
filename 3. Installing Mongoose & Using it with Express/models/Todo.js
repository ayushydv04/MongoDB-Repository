import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true, default: "Default Value"},
    desc: String,
    isdone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema);



// For more schema types like objcets, constructors, validations refer below link
// https://mongoosejs.com/docs/schematypes.html