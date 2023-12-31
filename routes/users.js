import express from "express"
import {
    getUser,
    getUserFriend,
    addRemoveFriend
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"

const router=express.Router()
// read
router.get("/:id", verifyToken,getUser)
router.get("/:id/firends",verifyToken,addRemoveFriend)
export default router