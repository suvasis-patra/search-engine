import cors from "cors";
import express from "express";

import { errorMiddleware } from "./middleware/error.middleware";
import { healtCheckController } from "./controller/healt.controller";

const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/health", healtCheckController);

app.use(errorMiddleware);

export default app;
