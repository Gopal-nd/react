import express from "express"
import cors from "cors"
import mongose from "mongoose"

import { userRouter } from "./routes/users.js"
import { recipeRouter } from "./routes/Recipe.js"
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth',userRouter);
app.use('/recipes',recipeRouter)

mongose.connect("mongodb+srv://gopalnd999:gopalnd999@cluster0.j9fzffu.mongodb.net/cluster0")

app.listen(3001,()=>console.log("server Strted 3001"))


