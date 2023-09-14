import { StatusCodes } from "http-status-codes"
import * as yup from "yup"
import { Middleware } from "../../app/base/middleware.base"
import { AppError } from "../typeErrors/AppError"

type FieldTypes = 'body' | 'headers' | 'params' | 'query'

type GetSchema = <T>(schema: yup.Schema<T>) => yup.Schema<T>

type AllSchemas = Record<FieldTypes, yup.Schema<any>>

type GetAllSchemas = (schema: GetSchema) => Partial<AllSchemas>

export const validateSchema: Middleware<GetAllSchemas> = (get) => {
    return (request, response, next) => {
        const reportedErrors: Record<string, Record<string, string>> = {}

        if (get !== undefined) {
            const schemas = get(schema => schema)
    
            Object.entries(schemas).forEach(([key, schema]) => { try {
                schema.validateSync(request[key as FieldTypes], { abortEarly: false })
                } catch (err: any) {
                    const yupErrors = err as yup.ValidationError
                    const currentFieldErrors: Record<string, string> = {}
    
                    yupErrors.inner.forEach(error => { if (!error.path) return
                        currentFieldErrors[error.path] = error.message
                    })
    
                    reportedErrors[key] = currentFieldErrors
                }
            })
    
            if (Object.entries(reportedErrors).length === 0) return next()
    
            return response.status(StatusCodes.BAD_REQUEST).json(
                new AppError(reportedErrors)
            )
        } 
    }
}
