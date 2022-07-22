import bodyParser from "body-parser";
import { randomUUID } from "crypto";
import { Request, Response, Router } from "express";
import { Member, membersData } from "../../data/membersData";

const router = Router();

// Get all members
router.get("/", (req: Request, res: Response) => {
  res.json(membersData);
});

// Get member with id
router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const found = membersData.some((m) => m.id === id);

  if (!found) {
    return res.status(400).json({ msg: `Member with id ${id} not found` });
  }

  const member = membersData.filter((m) => m.id === id);

  res.json(member);
});

router.post("/", (req: Request, res: Response) => {
  const newMember: Member = {
    id: randomUUID(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "include name and email " });
  }

  membersData.push(newMember);

  res.json(membersData);
});

export default router;
