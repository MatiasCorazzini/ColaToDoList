import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.json({body:"This mother fucker server works. Oh yeah!!!"});
});

export default router;
