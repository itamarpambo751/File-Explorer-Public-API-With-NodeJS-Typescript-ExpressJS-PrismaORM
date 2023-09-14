import { Request, Response } from "express";

export abstract class Controller {
    abstract handle(request: Request, response: Response): Promise<Response>
}