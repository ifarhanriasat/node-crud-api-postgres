import { Router, Request, Response } from "express";
import { UserRequestPayload } from "../request/user.request";
import UserService from "../services/user.service";
import { validateMiddleware } from "../middlewares/validation.middleware";
import { AuthMiddleware } from "../middlewares/auth.middleware"

const UserRouter = Router();

UserRouter.post("/add", AuthMiddleware, validateMiddleware, async (req: Request, res: Response) => {
    await UserService.addNewUser(req.body as UserRequestPayload)
    .then((data)=>{
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    })      
})

UserRouter.get("/findAll", AuthMiddleware, async (req: Request, res: Response) => {
    await UserService.getAllUsers()
    .then((data)=>{
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    }) 
})

UserRouter.get("/findById/:id", AuthMiddleware, async (req: Request, res: Response) => {
    await UserService.findUserById(Number(req.params.id))
    .then((data)=>{
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    }) 
})

UserRouter.post("/updateById", AuthMiddleware, validateMiddleware, async (req: Request, res: Response) => {
    await UserService.updateById(req.body.id, req.body as UserRequestPayload)
    .then((data)=>{
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    }) 
})

UserRouter.get("/delete/:id", AuthMiddleware, async (req: Request, res: Response) => {
    await UserService.deleteUser(Number(req.params.id))
    .then((data)=>{
        res.status(200).json({status: "success", data: data});
    })
    .catch((err)=>{
        res.status(501).json({status: "fail", error: err});
    }) 
})



export default UserRouter;