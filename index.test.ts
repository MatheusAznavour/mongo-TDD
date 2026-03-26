import request from "supertest";
import { app } from "./app";

describe("CRUD /todo", ()=>{
    it("GET all todo", ()=>{
        request(app)
            .get("/todo")
            .expect("Content-Type", /json/)
            .expect(200)
    });
    it("GET unique todo", ()=>{});
    it("POST create a todo", async ()=>{
        await request(app)
            .post("/todo")
            .send(`title=JEST working&done=true&difficulty_level=3`)
            .expect(200, {
                title: "JEST working",
                done: true,
                difficulty_level: 3
            })
    });
});
