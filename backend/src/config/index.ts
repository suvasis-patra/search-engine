import dotenv from "dotenv";

dotenv.config();

export const config = {
  DATABASE_URL: process.env.DATABASE_URL || "",
  PORT: Number(process.env.PORT) || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  SERVICE_NAME: process.env.SERVICE_NAME || "search-engine",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || "",
};
