import request from "supertest";
import { app } from "./app";

describe("GET /todo", ()=>{
    it("get all todos", ()=>{
        request(app)
            .get("/todo")
            .expect(200)
    })
});

describe("GET /todo", ()=>{

});