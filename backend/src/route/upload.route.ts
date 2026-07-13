import { Router } from "express";
import { getFileUploadSignature } from "../controller/upload.controller";

export const uploadRouter = Router();

uploadRouter.get("/signature", getFileUploadSignature);
