import { RequestHandler } from "express";

export type Middleware<T> = (param?: T) => RequestHandler