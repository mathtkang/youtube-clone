import express from "express";
import { join, login } from "../controllers/userController";
import { trending, new_ } from "../controllers/storyController";



const globalRouter = express.Router();

export const home = (req, res) => res.send("global home");

globalRouter.get("/", home);
globalRouter.get("/join", join)
globalRouter.get("/login", login);

globalRouter.get("/trending", trending);
globalRouter.get("/new", new_);

export default globalRouter;