import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body ?? {};

  if (typeof email !== "string" || !email.trim() ||
      typeof password !== "string" || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  return res.status(200).json({ message: "User logged in successfully" });
});

export default router;