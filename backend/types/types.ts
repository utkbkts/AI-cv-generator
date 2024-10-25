import { Request, Response, NextFunction } from "express";

declare global {
  type Middleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void | Promise<void>;
}
