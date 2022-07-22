import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import logger from "./middleware/logger";
import members from "./routes/api/members";

const app: Application = express();

// Init logger
app.use(logger);

// Init body parser
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

// Members api route
app.use("/api/members", members);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port:" + PORT));
