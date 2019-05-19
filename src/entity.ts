import { v4 } from "uuid";
import { Component } from "./component";

/**
 * Entity class. Add functionality by adding components.
 */
export class Entity {
    /**
     * The component list for this entity.
     */
    private components: Component[];
    constructor(
        public readonly uuid: string = v4(),
        components: Component[] = [],
    ) {
        this.components = components;
    }
    /**
     * Add a component to this entity.
     * @param component The component to add to this entity.
     */
    public addComponent<T extends Component = Component>(component: T): void {
        this.components.push(component);
    }
    /**
     * Return all components of a specific type.
     * @param guard A type guard used to filter the component list.
     */
    public getComponents<T extends Component = Component>(
        guard: (el: Component) => el is T,
    ): T[] {
        return this.components.filter(guard);
    }
    /**
     * Remove a single component from this entity.
     * @param component The component to remove.
     */
    public removeComponent<T extends Component = Component>(
        component: T,
    ): void {
        this.components = this.components.filter((v) => v !== component);
    }
    /**
     * Remove all components of a specific type.
     * @param guard A type guard used when filtering out components that should be removed.
     */
    public removeComponents<T extends Component = Component>(
        guard: (el: Component) => el is T,
    ): void {
        this.components = this.components.filter((v) => !guard(v));
    }
}
