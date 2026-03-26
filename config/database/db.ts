import dotenv from "dotenv";
dotenv.config()
import { MongoClient } from "mongodb";
const { MONGO_URI } = process.env || "mongodb://127.0.0.1:27017";

const client = new MongoClient(MONGO_URI as string);
const database = client.db("todo_test")

async function pingDb(){
    try {
        await client.connect();
        const result = await client.db("admin").command({ ping: 1 });
        return result;
    } catch(err){
        return console.log(err);
    }
};

pingDb();

export {
    database as db
};