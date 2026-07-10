import express from "express";
import cors from "cors";
import { healtCheckController } from "./controller/healt.controller";

const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/health", healtCheckController);

export default app;
