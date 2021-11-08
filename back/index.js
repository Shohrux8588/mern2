import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import todoRouter from "./routes/todos.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/todos", todoRouter);

// mongodb url


const CONNECTION_URL = ""; // mongoDB atlas connect api
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    }))
    .catch(error => console.log(error.message));

// mongoose.set("useFindAndModify", false);
