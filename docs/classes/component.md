[ts-ecs](../README.md) > [Component](../classes/component.md)

# Class: Component

An entity component. Base class should be extended and built upon.

## Hierarchy

 `EventEmitter`

**↳ Component**

## Implements

* [IComponentBase](../interfaces/icomponentbase.md)

## Index

### Properties

* [defaultMaxListeners](component.md#defaultmaxlisteners)

### Methods

* [addListener](component.md#addlistener)
* [deserialize](component.md#deserialize)
* [emit](component.md#emit)
* [eventNames](component.md#eventnames)
* [getMaxListeners](component.md#getmaxlisteners)
* [listenerCount](component.md#listenercount)
* [listeners](component.md#listeners)
* [off](component.md#off)
* [on](component.md#on)
* [onComponentAttach](component.md#oncomponentattach)
* [onComponentDetach](component.md#oncomponentdetach)
* [once](component.md#once)
* [prependListener](component.md#prependlistener)
* [prependOnceListener](component.md#prependoncelistener)
* [rawListeners](component.md#rawlisteners)
* [removeAllListeners](component.md#removealllisteners)
* [removeListener](component.md#removelistener)
* [serialize](component.md#serialize)
* [setMaxListeners](component.md#setmaxlisteners)
* [guard](component.md#guard)
* [listenerCount](component.md#listenercount-1)

---

## Properties

<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:9*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(obj: *`object`*): [Component](component.md)

*Defined in [component.ts:42](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L42)*

The method used to deserialize a JSON object into a component of this type. Please override in subclasses.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | `object` |  The object to deserialize into this component. |

**Returns:** [Component](component.md)

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:24*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:20*

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="oncomponentattach"></a>

###  onComponentAttach

▸ **onComponentAttach**(entity: *[Entity](entity.md)*): `void`

*Defined in [component.ts:49](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L49)*

A method to be called when the component is attached to an entity.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| entity | [Entity](entity.md) |  The entity this component was attached to. |

**Returns:** `void`

___
<a id="oncomponentdetach"></a>

###  onComponentDetach

▸ **onComponentDetach**(): `void`

*Defined in [component.ts:55](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L55)*

A method to be called when the component is detached from an entity.

**Returns:** `void`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `object`

*Defined in [component.ts:34](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L34)*

The method used to serialize this component to a JSON object. Please override in subclasses.

**Returns:** `object`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="guard"></a>

### `<Static>` guard

▸ **guard**(): [ComponentGuard](../#componentguard)<[Component](component.md)>

*Defined in [component.ts:27](https://github.com/envis10n/ts-ecs/blob/2ca746a/src/component.ts#L27)*

Static method that returns a ComponentGuard for this component type. Please override in subclasses.

**Returns:** [ComponentGuard](../#componentguard)<[Component](component.md)>

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/envis10n/Desktop/TSLib/ts-ecs/node_modules/@types/node/events.d.ts:8*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

