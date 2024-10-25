import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import path from "path";
import "./config/passport";
dotenv.config();

import authRoute from "./routes/auth.route";
import paymentRoute from "./routes/payment.route";
import contractsRoute from "./routes/contract.route";
import MongoStore from "connect-mongo";
import { handleWebHook } from "./controllers/payment.controller";
const app = express();

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("mongodb is connected"))
  .catch(() => console.log("mongodb is failed"));

const PORT = 5000;
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));

app.post(
  "/payments/webhook",
  express.raw({ type: "application/json" }),
  handleWebHook
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI! }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
app.use("/contracts", contractsRoute);
app.use("/payments", paymentRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/.next")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", ".next"));
  });
}
app.listen(PORT, () => {
  console.log(`server started on ports ${PORT}`);
});
