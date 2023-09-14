import { prismaClient } from "../../datasources/PrismaClient";
import { User } from "../../modules/User";
import { UserGatewayInterface } from "./UserGatewayInterface";

export class UserGatewayPrisma 
implements UserGatewayInterface {
    async save(properties: User): Promise<void> {
        await prismaClient.user.create({
            data: {...properties}
        })
    }
    async get(id: string): Promise<User | null> {
        return await prismaClient.user.findUnique({
            where: {
                id
            }
        })    
    }
    async getByEmail(email: string): Promise<User | null> {
        return await prismaClient.user.findUnique({
            where: {
                email
            }
        })
    }
    async getAll(...args: any[]): Promise<User[]> {
        return await prismaClient.user.findMany()
    }
    async patch(properties: Partial<User>): Promise<User> {
        return await prismaClient.user.update({
            where: {
                id: properties.id
            },
            data: {...properties}
        })
    }
    async remove(id: string): Promise<void> {
        await prismaClient.user.delete({
            where: {
                id
            }
        })
    }
}