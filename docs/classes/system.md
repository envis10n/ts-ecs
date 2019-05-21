[ts-ecs](../README.md) > [System](../classes/system.md)

# Class: System

Entity System

## Hierarchy

**System**

## Index

### Properties

* [entities](system.md#entities)

### Methods

* [exists](system.md#exists)
* [find](system.md#find)
* [getComponents](system.md#getcomponents)
* [getEntitiesWithComponent](system.md#getentitieswithcomponent)
* [load](system.md#load)
* [spawn](system.md#spawn)

---

## Properties

<a id="entities"></a>

### `<Private>` entities

**● entities**: *[Entity](entity.md)[]* =  []

*Defined in [system.ts:11](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L11)*

Entity list.

___

## Methods

<a id="exists"></a>

###  exists

▸ **exists**(uuid: *`string`*): `boolean`

*Defined in [system.ts:29](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L29)*

Check if a uuid is already used by an existing entity.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  The uuid of the entity to find. |

**Returns:** `boolean`

___
<a id="find"></a>

###  find

▸ **find**(uuid: *`string`*): [Entity](entity.md) \| `undefined`

*Defined in [system.ts:22](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L22)*

Find an entity by uuid.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  The uuid of the entity to find. |

**Returns:** [Entity](entity.md) \| `undefined`

___
<a id="getcomponents"></a>

###  getComponents

▸ **getComponents**<`T`>(guard: *[ComponentGuard](../#componentguard)<`T`>*): `T`[]

*Defined in [system.ts:50](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L50)*

Return all components of a certain type from all entities managed by this system.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| guard | [ComponentGuard](../#componentguard)<`T`> |  Type guard to filter component types with. |

**Returns:** `T`[]

___
<a id="getentitieswithcomponent"></a>

###  getEntitiesWithComponent

▸ **getEntitiesWithComponent**<`T`>(guard: *[ComponentGuard](../#componentguard)<`T`>*): [Entity](entity.md)[]

*Defined in [system.ts:64](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L64)*

Get all entities in this system that have at least one of a specific component type.

**Type parameters:**

#### T :  [Component](component.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| guard | [ComponentGuard](../#componentguard)<`T`> |  The guard used to filter entities by component type. |

**Returns:** [Entity](entity.md)[]

___
<a id="load"></a>

###  load

▸ **load**(uuid: *`string`*, components: *[Component](component.md)[]*): [Entity](entity.md)

*Defined in [system.ts:37](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L37)*

Load an existing entity.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| uuid | `string` |  The uuid of the entity. |
| components | [Component](component.md)[] |  Any components to add to the entity. |

**Returns:** [Entity](entity.md)

___
<a id="spawn"></a>

###  spawn

▸ **spawn**(): [Entity](entity.md)

*Defined in [system.ts:15](https://github.com/envis10n/ts-ecs/blob/34df4af/src/system.ts#L15)*

Spawn a new entity.

**Returns:** [Entity](entity.md)

___

