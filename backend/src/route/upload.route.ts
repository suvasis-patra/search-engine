import { Router } from "express";
import { getUploadSignature } from "../service/cloudinary.service";

export const uploadRouter = Router();

uploadRouter.get("/signature", getUploadSignature);
