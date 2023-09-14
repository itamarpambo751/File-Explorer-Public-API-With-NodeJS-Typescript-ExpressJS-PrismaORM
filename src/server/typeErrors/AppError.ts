import { Error } from "../../app/base/error.base";

export class AppError implements Error {
    statusCode: number;
    message: any;

    constructor( message: any, statusCode:number = 400) {
        this.statusCode = statusCode
        this.message = message
    }
}