import express from "express";
import Connection from "./Database/db.js";
import dotenv from "dotenv";
import DefaultData from "./Defaults/default.js";
import Routes from "./Route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const PORT = 8000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server is listening  on port ${PORT} successfully.`);
});

DefaultData();
