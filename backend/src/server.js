import express from "express";
import { env } from "./lib/env.js";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.listen(env.PORT, () => {
  console.log("server is running on port", env.PORT);
});
