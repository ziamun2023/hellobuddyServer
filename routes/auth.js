import express from "express";
import {login} from "../controllers/auth"

const router=Express.Router()
router.post("/login",login)
export default router