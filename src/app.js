import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // parses raw body text → req.body
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // parses form data → req.body
app.use(express.static("public")); //serves files directly from the disk
app.use(cookieParser()); //parses Cookie header → req.cookies

//routes import

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app };
