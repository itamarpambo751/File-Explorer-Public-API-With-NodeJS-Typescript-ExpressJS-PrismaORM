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
export interface FileProps {
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
    state?: "ON_HOLD" | "VIEWED" | "PAID_OUT" | "READ"
}
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
    state: string

    constructor (properties: FileProps) {
        super()
        this.fieldname = properties.fieldname
        this.originalname = properties.originalname
        this.encoding = properties.encoding
        this.mimetype = properties.mimetype
        this.destination = properties.destination
        this.filename = properties.filename
        this.path = properties.path
        this.size = properties.size
        this.reason_id = properties.reason_id
        this.user_id = properties.user_id
        this.state = properties.state ? properties.state : "ON_HOLD"
    }
}