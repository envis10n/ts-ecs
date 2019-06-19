
ts-ecs
======

Docs: Located conveniently in this repo under the docs folder.

## Index

### Classes

* [World](classes/world.md)

### Interfaces

* [System](interfaces/system.md)

### Type aliases

* [Component](#component)
* [ComponentTuple](#componenttuple)
* [Entity](#entity)
* [EntityGuard](#entityguard)
* [SystemCallback](#systemcallback)
* [SystemGuard](#systemguard)

---

## Type aliases

<a id="component"></a>

###  Component

**Ƭ Component**: *`object`*

*Defined in [component.ts:1](https://github.com/envis10n/ts-ecs/blob/3e2827e/src/component.ts#L1)*

#### Type declaration

___
<a id="componenttuple"></a>

###  ComponentTuple

**Ƭ ComponentTuple**: *`Array`<[Component](#component)<`any`>>*

*Defined in world.ts:5*

___
<a id="entity"></a>

###  Entity

**Ƭ Entity**: *`T`*

*Defined in [entity.ts:3](https://github.com/envis10n/ts-ecs/blob/3e2827e/src/entity.ts#L3)*

___
<a id="entityguard"></a>

###  EntityGuard

**Ƭ EntityGuard**: *`function`*

*Defined in world.ts:7*

#### Type declaration
▸(tuple: *[Entity](#entity)<[ComponentTuple](#componenttuple)>*, index: *`number`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| tuple | [Entity](#entity)<[ComponentTuple](#componenttuple)> |
| index | `number` |

**Returns:** `boolean`

___
<a id="systemcallback"></a>

###  SystemCallback

**Ƭ SystemCallback**: *`function`*

*Defined in [system.ts:4](https://github.com/envis10n/ts-ecs/blob/3e2827e/src/system.ts#L4)*

#### Type declaration
▸(entity: *`T`*, id: *`number`*, delta: *`number`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | `T` |
| id | `number` |
| delta | `number` |

**Returns:** `void`

___
<a id="systemguard"></a>

###  SystemGuard

**Ƭ SystemGuard**: *`function`*

*Defined in [system.ts:5](https://github.com/envis10n/ts-ecs/blob/3e2827e/src/system.ts#L5)*

#### Type declaration
▸(entity: *[Entity](#entity)<`Array`<[Component](#component)<`any`>>>*, index: *`number`*, array: *`Array`<[Entity](#entity)<`Array`<[Component](#component)<`any`>>>>*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | [Entity](#entity)<`Array`<[Component](#component)<`any`>>> |
| index | `number` |
| array | `Array`<[Entity](#entity)<`Array`<[Component](#component)<`any`>>>> |

**Returns:** `boolean`

___

