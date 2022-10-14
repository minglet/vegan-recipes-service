import { Response, Request, NextFunction } from "express";
declare function login_required(req: Request, res: Response, next: NextFunction): void;
export { login_required };
