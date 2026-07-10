import cors from "cors";
import express from "express";

import { reqLogger } from "./middleware/reqLoggger.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import { healtCheckController } from "./controller/healt.controller";
import { uploadRouter } from "./route/upload.route";

const app = express();

app.use(reqLogger);
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));

app.get("/health", healtCheckController);
app.use("/api/v1/upload", uploadRouter);

app.use(errorMiddleware);

export default app;
