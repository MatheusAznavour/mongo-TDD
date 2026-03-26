import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { todoRouter } from "./modules/todo/todo.routes";

const { PORT } = process.env || 5050;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/todo", todoRouter);

app.listen(PORT, ()=>{
    console.log(`Listening at port:${PORT}`);
})

export {
    app
}