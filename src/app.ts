import express, { Application, Request, Response } from "express";
import { members } from "./data/members";
import logger from "./middleware/logger";

const app: Application = express();

// Init logger
app.use(logger);

// Get all members
app.get("/api/members", (req: Request, res: Response) => {
  res.json(members);
});

app.get("/api/members/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const found = members.some((m) => m.id === id);

  if (!found) {
    res.status(400).json({ msg: "Member not found" });
    return;
  }

  const member = members.filter((m) => m.id === id);

  res.json(member);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port:" + PORT));
