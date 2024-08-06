import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT: any = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  console.log("Hello, TypeScript + Node.js + Express!");
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
