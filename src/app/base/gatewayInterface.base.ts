import { Entity } from "./entity.base"

export abstract class GatewayInterface<Module extends Entity> {
    abstract save(properties: Module): Promise<void>
    abstract get(id: string): Promise<Module | null>
    abstract getAll(...args: any[]): Promise<Module[]>
    abstract patch(properties: Partial<Module>): Promise<Module>
    abstract remove(id: string): Promise<void>
}