import dotenv from "dotenv";
dotenv.config();
import { app } from "./app"

const { PORT } = process.env || 5050;

app.listen(PORT, ()=>{
    console.log(`Listening at port:${PORT}`);
})