import { ObjectId } from "mongodb";
import { db } from "./../../config/database/db";

const todos = db.collection("todos");

async function getAllTodo() {
    const result = await todos.find().toArray();
    return result;
};

async function getUniqueTodo(id: string) {
    const result = await todos.find({_id: new ObjectId(id)}).toArray();
    return result;
};

async function insertTodo(title: string, done: boolean, diff: number) {
    const result = await todos.insertOne({
        title,
        done,
        difficulty_level: diff
    });
    return result;
};

async function updateTodo(id: string, title: string, done: boolean, diff: number) {
    const result = await todos.updateOne({_id: new ObjectId(id)}, {$set: {title, done, difficulty_level: diff}});
    return result;
};

async function deleteTodo(id: string) {
    const result = await todos.deleteOne({_id: new ObjectId(id)});
    return result;
};

export {
    getAllTodo, getUniqueTodo,
    insertTodo, updateTodo, deleteTodo
};