import express from "express";
import { db } from "./db.js";
import routes from "./src/routes/routes.js";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();
db();

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/api", routes);

app.listen(port,()=>{
    console.log(`Up on ${port}`)
})