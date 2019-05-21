[ts-ecs](../README.md) > [IComponentBase](../interfaces/icomponentbase.md)

# Interface: IComponentBase

Base class providing event definitions.

## Hierarchy

**IComponentBase**

## Implemented by

* [Component](../classes/component.md)

## Index

### Methods

* [emit](icomponentbase.md#emit)
* [on](icomponentbase.md#on)

---

## Methods

<a id="emit"></a>

###  emit

▸ **emit**(event: *"component/attach"*, entity: *[Entity](../classes/entity.md)*): `void`

▸ **emit**(event: *"component/detach"*): `void`

*Defined in [component.ts:15](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "component/attach" |
| entity | [Entity](../classes/entity.md) |

**Returns:** `void`

*Defined in [component.ts:16](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "component/detach" |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(event: *"component/attach"*, listener: *`function`*): `void`

▸ **on**(event: *"component/detach"*, listener: *`function`*): `void`

*Defined in [component.ts:13](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "component/attach" |
| listener | `function` |

**Returns:** `void`

*Defined in [component.ts:14](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "component/detach" |
| listener | `function` |

**Returns:** `void`

___

