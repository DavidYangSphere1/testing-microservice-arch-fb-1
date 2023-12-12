import "dotenv/config";
import { onRequest } from "firebase-functions/v2/https";
import { setup } from "../../utils/setup";

// firebase setup
setup();

import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Express = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("User - Hello World!");
});

export const user = onRequest(app);