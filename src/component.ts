/**
 * Type guard for Component and subclasses of Component.
 */
export type ComponentGuard<T extends Component> = (el: Component) => el is T;

/**
 * An entity component. Base class should be extended and built upon.
 */
export class Component {
    public serialize(): object {
        return {};
    }
    public deserialize(obj: object): Component {
        return new Component();
    }
}
