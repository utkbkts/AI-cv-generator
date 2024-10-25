import { catchAsyncError } from "catchasyncerror";
import express, { NextFunction, Request, Response } from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

router.get(
  "/current-user",
  catchAsyncError(async (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).json({ message: "unathrozied" });
    }
  })
);

router.get(
  "/logout",
  catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.status(401).json({ message: "failed logout" });
    });
  })
);

export default router;
