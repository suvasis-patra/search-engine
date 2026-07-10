import { v2 as cloudinary } from "cloudinary";
import { config } from "../config/index";

export const getUploadSignature = () => {
  const timestamp = Math.round(Date.now() / 1000);
  const params = { timestamp, folder: "products" };

  const signature = cloudinary.utils.api_sign_request(
    params,
    config.CLOUDINARY_API_SECRET,
  );

  return {
    timestamp,
    signature,
    folder: "products",
    cloudName: config.CLOUDINARY_NAME,
    apiKey: config.CLOUDINARY_API_KEY,
  };
};
