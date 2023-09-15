import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import { AppRoutes } from "./routes"

const app = express()

app.use(express.json())

app.use((request: Request, response: Response, nextFunction: NextFunction) => {
    app.use(cors({
        origin: "*"
    }))
    
    nextFunction()
})

app.use(AppRoutes)

export { app }