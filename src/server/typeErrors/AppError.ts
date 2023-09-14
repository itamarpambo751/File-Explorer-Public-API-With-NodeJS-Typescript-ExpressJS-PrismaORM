import { Error } from "../../app/base/error.base";

export class AppError implements Error {
    statusCode?: number | undefined;
    message: any;

    constructor( message: any, statusCode:number | undefined = 400) {
        this.statusCode = statusCode
        this.message = message
    }
}