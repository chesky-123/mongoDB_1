import express, { Router } from "express";
import { connectCreateScore } from "../ctrls/postCtrl.js";
import { isValidData } from "../middlweres/postMiddlwere.js";




const router = express.Router();

router.post("/scores", isValidData, connectCreateScore);


export default router;

