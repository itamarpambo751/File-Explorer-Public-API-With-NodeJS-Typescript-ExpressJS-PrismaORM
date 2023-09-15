import * as yup from "yup"
import { validateSchema } from "../../../helpers/ensureRequestDatas.helper"

const uploadFileMiddleware = validateSchema(getSchema =>( {
    body: getSchema<{ user_id: string, reason_id: string }> (
        yup.object().shape({
           user_id: yup.string().required().uuid(),
           reason_id: yup.string().required().uuid()
        })
    )
}))

export default uploadFileMiddleware