import { Request, Response } from "express";

import { asyncHandler } from "../utils/handler";
import { getUploadSignature } from "../service/cloudinary.service";
import { ApiResponse } from "../utils/response";

export const getFileUploadSignature = asyncHandler(
  async (_req: Request, res: Response) => {
    const payload = getUploadSignature();
    return ApiResponse.success(res, payload);
  },
);
