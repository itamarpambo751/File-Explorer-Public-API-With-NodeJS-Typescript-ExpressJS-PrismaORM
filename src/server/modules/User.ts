import { Entity } from "../../app/base/entity.base";
/**
 *id                  String @id @default(uuid())
  avatar              String
  email               String @unique
  password            String
  
  role_id             String

  role                Role @relation(fields: [role_id], references: [id])
  archives            Archive[]

  allSent             UploadedFiles[] @relation("sender")
  allReceived         UploadedFiles[] @relation("receiver")
 */
type UserEntityProperties = {
    email: string
    password: string
    role_id: string
    avatar?: string
}

export class User extends Entity {
    password: string
    email: string
    avatar: string
    role_id: string

    constructor (properties: UserEntityProperties) {
        super()
        Object.assign(this, properties)
    }
}