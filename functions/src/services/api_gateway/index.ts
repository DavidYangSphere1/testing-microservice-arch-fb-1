import "dotenv/config";
// firebase
import { onRequest } from "firebase-functions/v2/https";
import { setup } from "../../utils/setup";

// firebase setup
setup();

// express
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

// api routes
import userRouter from "./routes/user";

const app: Express = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Health: OK!");
});

app.use("/users", userRouter);

export const api = onRequest(
  {
    timeoutSeconds: 3600,
    memory: "1GiB",
    concurrency: 100,
    cpu: 1
  },
  app
);
