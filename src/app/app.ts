import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import { routes } from "./routes"

const app = express()

app.use(routes)

app.use((request: Request, response: Response, nextFunction: NextFunction) => {
    app.use(cors({
        origin: "*"
    }))

    nextFunction()
})

app.use(express.json())

export { app }