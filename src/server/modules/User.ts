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
export type UserEntityProperties = {
    password: string
    email: string
    avatar?: string
    role_id: string
}
export class User extends Entity {
    password: string
    email: string
    avatar: string
    role_id: string

    constructor (properties: UserEntityProperties) {
        super()
        this.password = properties.password
        this.email = properties.email
        this.avatar = properties.avatar ? properties.avatar:''
        this.role_id = properties.role_id
    }
}