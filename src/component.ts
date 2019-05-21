import { EventEmitter } from "events";
import { Entity } from "./entity";

/**
 * Type guard for Component and subclasses of Component.
 */
export type ComponentGuard<T extends Component> = (el: Component) => el is T;

/**
 * Base class providing event definitions.
 */
declare interface IComponentBase {
    on(event: "component/attach", listener: (entity: Entity) => void): void;
    on(event: "component/detach", listener: () => void): void;
    emit(event: "component/attach", entity: Entity): void;
    emit(event: "component/detach"): void;
}

/**
 * An entity component. Base class should be extended and built upon.
 */
export class Component extends EventEmitter implements IComponentBase {
    /**
     * Static method that returns a ComponentGuard for this component type.
     * Please override in subclasses.
     */
    public static guard(): ComponentGuard<Component> {
        return (el): el is Component => el instanceof Component;
    }
    /**
     * The method used to serialize this component to a JSON object.
     * Please override in subclasses.
     */
    public serialize(): object {
        return {};
    }
    /**
     * The method used to deserialize a JSON object into a component of this type.
     * Please override in subclasses.
     * @param obj The object to deserialize into this component.
     */
    public deserialize(obj: object): Component {
        return new Component();
    }
    /**
     * A method to be called when the component is attached to an entity.
     * @param entity The entity this component was attached to.
     */
    public onComponentAttach(entity: Entity): void {
        //
    }
    /**
     * A method to be called when the component is detached from an entity.
     */
    public onComponentDetach(): void {
        //
    }
}
