import express from "express";
import { id_, edit, delete_ } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", id_);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", delete_);

export default storyRouter;