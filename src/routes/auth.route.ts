import { Router, Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import { sendAccountCreationEmail } from "../utils/email.utils";

const AuthRouter = Router();

AuthRouter.post("/register", async (req: Request, res: Response) => {
    await AuthService.registerUser(req.body.email, req.body.password)
    .then((data)=>{
        // sendAccountCreationEmail(req.body.email);
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    }) 
})

AuthRouter.post("/login", async (req: Request, res: Response) => {
    await AuthService.loginUser(req.body.email, req.body.password)
    .then((data)=>{
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    }) 
})






export default AuthRouter;