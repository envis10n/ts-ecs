[ts-ecs](../README.md) > [Component](../classes/component.md)

# Class: Component

An entity component. Base class should be extended and built upon.

## Hierarchy

**Component**

## Index

### Methods

* [deserialize](component.md#deserialize)
* [serialize](component.md#serialize)
* [guard](component.md#guard)

---

## Methods

<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(obj: *`object`*): [Component](component.md)

*Defined in [component.ts:29](https://github.com/envis10n/ts-ecs/blob/37998b6/src/component.ts#L29)*

The method used to deserialize a JSON object into a component of this type. Please override in subclasses.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | `object` |  The object to deserialize into this component. |

**Returns:** [Component](component.md)

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `object`

*Defined in [component.ts:21](https://github.com/envis10n/ts-ecs/blob/37998b6/src/component.ts#L21)*

The method used to serialize this component to a JSON object. Please override in subclasses.

**Returns:** `object`

___
<a id="guard"></a>

### `<Static>` guard

▸ **guard**(): [ComponentGuard](../#componentguard)<[Component](component.md)>

*Defined in [component.ts:14](https://github.com/envis10n/ts-ecs/blob/37998b6/src/component.ts#L14)*

Static method that returns a ComponentGuard for this component type. Please override in subclasses.

**Returns:** [ComponentGuard](../#componentguard)<[Component](component.md)>

___

