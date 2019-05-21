/**
 * Type guard for Component and subclasses of Component.
 */
export type ComponentGuard<T extends Component> = (el: Component) => el is T;

/**
 * An entity component. Base class should be extended and built upon.
 */
export class Component {
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
}
