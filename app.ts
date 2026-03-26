import express from "express";
import { todoRouter } from "./modules/todo/todo.routes";


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/todo", todoRouter);

export {
    app
}