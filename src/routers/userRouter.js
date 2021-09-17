import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";
import { home, id_, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/logout", logout);
// userRouter.get("/:id(\\d+)", see);

//challenge
userRouter.get("/", home);
userRouter.get("/:id(\\d+)", id_);
userRouter.get("/edit-profile", editProfile);

export default userRouter;