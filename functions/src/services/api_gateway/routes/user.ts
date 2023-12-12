import express, { Request, Response, Router } from "express";
import { sphereOneEndpoints, userServiceClient } from "../../../utils/api";

const userRouter: Router = express.Router();

// GET /users
userRouter.get("/", async (req: Request, res: Response) => {
  const params = req.params;
  const result = await userServiceClient.get(sphereOneEndpoints.users.get(), {
    params
  });
  res.status(200).send(result.data);
});

export default userRouter;