[ts-ecs](../README.md) > [Entity](../classes/entity.md)

# Class: Entity

Entity class. Add functionality by adding components.

## Hierarchy

**Entity**

## Index

### Constructors

* [constructor](entity.md#constructor)

### Properties

* [components](entity.md#components)
* [uuid](entity.md#uuid)

### Methods

* [addComponent](entity.md#addcomponent)
* [getComponents](entity.md#getcomponents)
* [hasComponent](entity.md#hascomponent)
* [removeComponent](entity.md#removecomponent)
* [removeComponents](entity.md#removecomponents)
* [serialize](entity.md#serialize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Entity**(uuid?: *`string`*, components?: *[Component](component.md)[]*): [Entity](entity.md)

*Defined in [entity.ts:16](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L16)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` uuid | `string` |  v4() |
| `Default value` components | [Component](component.md)[] |  [] |

**Returns:** [Entity](entity.md)

___

## Properties

<a id="components"></a>

### `<Private>` components

**● components**: *[Component](component.md)[]*

*Defined in [entity.ts:16](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L16)*

The component list for this entity.

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`string`*

*Defined in [entity.ts:18](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L18)*

___

## Methods

<a id="addcomponent"></a>

###  addComponent

▸ **addComponent**<`T`>(component: *`T`*): `void`

*Defined in [entity.ts:27](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L27)*

Add a component to this entity.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| component | `T` |  The component to add to this entity. |

**Returns:** `void`

___
<a id="getcomponents"></a>

###  getComponents

▸ **getComponents**<`T`>(guard: *[ComponentGuard](../#componentguard)<`T`>*): `T`[]

*Defined in [entity.ts:35](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L35)*

Return all components of a specific type.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| guard | [ComponentGuard](../#componentguard)<`T`> |  A type guard used to filter the component list. |

**Returns:** `T`[]

___
<a id="hascomponent"></a>

###  hasComponent

▸ **hasComponent**<`T`>(guard: *[ComponentGuard](../#componentguard)<`T`>*): `boolean`

*Defined in [entity.ts:44](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L44)*

Whether or not this entity has at least one of a specific type of component.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| guard | [ComponentGuard](../#componentguard)<`T`> |  The guard used to filter components by type. |

**Returns:** `boolean`

___
<a id="removecomponent"></a>

###  removeComponent

▸ **removeComponent**<`T`>(component: *`T`*): `void`

*Defined in [entity.ts:53](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L53)*

Remove a single component from this entity.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| component | `T` |  The component to remove. |

**Returns:** `void`

___
<a id="removecomponents"></a>

###  removeComponents

▸ **removeComponents**<`T`>(guard: *[ComponentGuard](../#componentguard)<`T`>*): `void`

*Defined in [entity.ts:63](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L63)*

Remove all components of a specific type.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| guard | [ComponentGuard](../#componentguard)<`T`> |  A type guard used when filtering out components that should be removed. |

**Returns:** `void`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): [IEntity](../interfaces/ientity.md)

*Defined in [entity.ts:70](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/entity.ts#L70)*

**Returns:** [IEntity](../interfaces/ientity.md)

___

