import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.send("This mother fucker server works. Oh yeah!!!");
});

export default router;
