import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config"
import { middleware } from "./middleware";
import {CreateUserSchema,SiginSchema,CreateRoomSchema} from "@repo/common/types"
const app = express();
app.post("/signup", (req, res) => {
    //db call
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success)
    {
         res.json({
            message:"InCorrect inputs"
         })
        return;
    }
    res.json({
        userId:"124"
    })
})
app.post("/signin", (req, res) => {
    const data = SiginSchema.safeParse(req.body);
    if (!data.success)
    {
         res.json({
            message:"InCorrect inputs"
         })
        return;
    }
    const userId = 1;
    const token = jwt.sign({
      userId
    }, JWT_SECRET)
    res.json({
        token
    })
})

app.post("/room", middleware, (req, res) => {
    res.json({
        roomId:123
    })
})
 
app.listen(3001);