import { Router } from "express";
import { getUserDatas } from "./getUserDatas.js";

const router = new Router();

router.post("/", getUserDatas);

export default router;
