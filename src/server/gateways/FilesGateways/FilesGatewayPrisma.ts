import { prismaClient } from "../../datasources/PrismaClient";
import { File } from "../../modules/File";
import { FilesGatewayInterface } from "./FilesGatewayInterface";

export class FileGatewayPrisma 
implements FilesGatewayInterface {
    async save(properties: File): Promise<void> {
        await prismaClient.archive.create({
            data: {...properties}
        })
    }
    async get(id: string): Promise<File | null> {
        return await prismaClient.archive.findUnique({
            where: {
                id
            }
        })
    }
    async getAll(...args: any[]): Promise<File[]> {
        return await prismaClient.archive.findMany()    
    }
    async patch(properties: Partial<File>): Promise<File> {
        return await prismaClient.archive.update({
            where: {
                id: properties.id
            },
            data: {...properties}
        })    
    }
    async remove(id: string): Promise<void> {
        await prismaClient.archive.delete({
            where: {
                id
            }
        })
    }
}
