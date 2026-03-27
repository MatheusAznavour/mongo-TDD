import request from "supertest";
import { app } from "./app";

describe("CRUD /todo", ()=>{
    const mockTodo = {
                title: "JEST working",
                done: true,
                difficulty_level: 3
            };
    it("GET --> all todo", ()=>{
        request(app)
            .get("/todo")
            .expect("Content-Type", /json/)
            .expect(200);
    });
    it("GET --> unique todo", ()=>{});
    it("POST --> create a todo", async ()=>{
        await request(app)
            .post("/todo")
            .send(`title=${mockTodo.title}&done=${mockTodo.done}&difficulty_level=${mockTodo.difficulty_level}`)
            .expect(200, mockTodo);
    });
    it("PUT --> update todo", async()=>{
        await request(app)
            .put("/todo")
            .send(`title=${mockTodo.title}&done=${mockTodo.done}&difficulty_level=${mockTodo.difficulty_level}`)
            .expect(200)
    });
    it("DELETE --> delete todo", async()=>{
        await request(app)
            .delete("/todo")
            .send(`title=${mockTodo.title}`)
            .expect(200);
    });
});
