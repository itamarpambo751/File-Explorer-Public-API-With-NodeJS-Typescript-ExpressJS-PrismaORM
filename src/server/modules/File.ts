import { Entity } from "../../app/base/entity.base";
/**
 *id                  String @id @default(uuid())
  fieldname           String
  originalname        String
  encoding            String
  mimetype            String
  destination         String
  filename            String
  path                String
  size                Int
  reason_id           String
  user_id             String

  uploadedAt          DateTime @default(now())

  user                User @relation(fields: [user_id], references: [id])
  reason              Reason @relation(fields: [reason_id], references: [id])  
 */
export class File extends Entity {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    destination: string
    filename: string
    path: string
    size: number
    reason_id: string
    user_id: string

    constructor (properties: File) {
        super()
        Object.assign(this, properties)
    }
}