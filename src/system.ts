import { Component } from "./component";
import { Entity } from "./entity";

/**
 * Entity System
 */
export class System {
    /**
     * Entity list.
     */
    private entities: Entity[] = [];
    /**
     * Spawn a new entity.
     */
    public spawn(): Entity {
        return this.entities[this.entities.push(new Entity()) - 1];
    }
    /**
     * Find an entity by uuid.
     * @param uuid The uuid of the entity to find.
     */
    public find(uuid: string): Entity | undefined {
        return this.entities.find((e) => e.uuid === uuid);
    }
    /**
     * Check if a uuid is already used by an existing entity.
     * @param uuid The uuid of the entity to find.
     */
    public exists(uuid: string): boolean {
        return this.entities.find((e) => e.uuid === uuid) !== undefined;
    }
    /**
     * Load an existing entity.
     * @param uuid The uuid of the entity.
     * @param components Any components to add to the entity.
     */
    public load(uuid: string, components: Component[]): Entity {
        if (!this.exists(uuid)) {
            return this.entities[
                this.entities.push(new Entity(uuid, components)) - 1
            ];
        } else {
            throw new Error("Cannot load entity: UUID is already in use.");
        }
    }
    /**
     * Return all components of a certain type from all entities managed by this system.
     * @param guard Type guard to filter component types with.
     */
    public getComponents<T extends Component = Component>(
        guard: (el: Component) => el is T,
    ): T[] {
        const list = this.entities.map((entity) => entity.getComponents(guard));
        const fin: T[] = [];
        for (const l of list) {
            fin.concat(...l);
        }
        return fin;
    }
}
