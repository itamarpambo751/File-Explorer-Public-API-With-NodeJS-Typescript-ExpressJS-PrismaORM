import * as yup from "yup"
import { validateSchema } from "../../../helpers/ensureRequestDatas.helper"
import { UserEntityProperties } from "../../../modules/User"

const createUserMiddleware = validateSchema(getSchema =>( {
    body: getSchema<UserEntityProperties> (
        yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
            role_id: yup.string().uuid().required(),
        })
    )
}))

export default createUserMiddleware