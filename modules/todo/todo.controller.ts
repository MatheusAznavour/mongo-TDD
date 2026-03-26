import { Request, Response } from "express";
import * as todoService from "./todo.service";
import * as todoHelper from "./todo.helper";

async function getTodo(req: Request, res: Response){
    const result = await todoService.getAllTodo();

    res.status(200).json({
        message: result
    });
};

async function getUniqueTodo(req: Request, res: Response){
    const { id } = req.params;
    const result = await todoService.getUniqueTodo(id as string);

    res.status(200).json({
        message: result
    });
};

async function postTodo(req: Request, res: Response){
    let { title, done, difficulty_level } = req.body;
    const diff = Number(difficulty_level);
    done = todoHelper.convertBool(done);

    try {
        await todoService.insertTodo(title, done, diff);
    } catch(err){
        return res.status(500).json({
            error: "Could not perfom that action"
        })
    }

    res.status(200).json({
        title, done, difficulty_level: diff
    });
};

async function updateTodo(req: Request, res: Response){
    let {id, title, done, difficulty_level} = req.body;
    difficulty_level = Number(difficulty_level);
    done = todoHelper.convertBool(done);
    
    try {
        await await todoService.updateTodo(id, title, done, difficulty_level);
    } catch(err){
        return res.status(500).json({error: "Could not perfom that action"})
    }

    res.status(200).json({
        message: "UPDATE"
    });
};

async function deleteTodo(req: Request, res: Response){
    const { id } = req.body;
    try {
        await todoService.deleteTodo(id);
    } catch(err){
        return res.status(500).json("Could not perfom that action");
    }
    res.status(200).json({
        message: "DELETE"
    });
};

export {
    getTodo, getUniqueTodo,
    postTodo, updateTodo, deleteTodo
};