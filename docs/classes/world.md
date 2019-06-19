[ts-ecs](../README.md) > [World](../classes/world.md)

# Class: World

## Hierarchy

**World**

## Index

### Constructors

* [constructor](world.md#constructor)

### Properties

* [entities](world.md#entities)
* [lastTick](world.md#lasttick)
* [nextTick](world.md#nexttick)
* [shouldRun](world.md#shouldrun)
* [systems](world.md#systems)
* [tickPeriod](world.md#tickperiod)

### Methods

* [get](world.md#get)
* [register](world.md#register)
* [run](world.md#run)
* [spawn](world.md#spawn)
* [stop](world.md#stop)
* [tick](world.md#tick)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new World**(tickFrequency?: *`number`*): [World](world.md)

*Defined in world.ts:18*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` tickFrequency | `number` | 60 |

**Returns:** [World](world.md)

___

## Properties

<a id="entities"></a>

### `<Private>` entities

**● entities**: *`Array`<[Entity](../#entity)<[ComponentTuple](../#componenttuple)>>* =  []

*Defined in world.ts:13*

___
<a id="lasttick"></a>

### `<Private>` lastTick

**● lastTick**: *`number`* =  Date.now()

*Defined in world.ts:16*

___
<a id="nexttick"></a>

### `<Private>` nextTick

**● nextTick**: *`number`* = 0

*Defined in world.ts:18*

___
<a id="shouldrun"></a>

### `<Private>` shouldRun

**● shouldRun**: *`boolean`* = false

*Defined in world.ts:15*

___
<a id="systems"></a>

### `<Private>` systems

**● systems**: *`Array`<[System](../interfaces/system.md)<`any`>>* =  []

*Defined in world.ts:14*

___
<a id="tickperiod"></a>

### `<Private>` tickPeriod

**● tickPeriod**: *`number`*

*Defined in world.ts:17*

___

## Methods

<a id="get"></a>

###  get

▸ **get**<`T`>(id: *`number`*): [Entity](../#entity)<`T`>

*Defined in world.ts:43*

**Type parameters:**

#### T :  [ComponentTuple](../#componenttuple)
**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `number` |

**Returns:** [Entity](../#entity)<`T`>

___
<a id="register"></a>

###  register

▸ **register**<`T`>(system: *[SystemCallback](../#systemcallback)<`T`>*, guard: *[SystemGuard](../#systemguard)<`T`>*): `void`

*Defined in world.ts:26*

**Type parameters:**

#### T :  [ComponentTuple](../#componenttuple)
**Parameters:**

| Name | Type |
| ------ | ------ |
| system | [SystemCallback](../#systemcallback)<`T`> |
| guard | [SystemGuard](../#systemguard)<`T`> |

**Returns:** `void`

___
<a id="run"></a>

###  run

▸ **run**(): `void`

*Defined in world.ts:35*

**Returns:** `void`

___
<a id="spawn"></a>

###  spawn

▸ **spawn**<`T`>(...components: *`T`*): `number`

*Defined in world.ts:22*

**Type parameters:**

#### T :  [ComponentTuple](../#componenttuple)
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` components | `T` |

**Returns:** `number`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in world.ts:40*

**Returns:** `void`

___
<a id="tick"></a>

### `<Private>` tick

▸ **tick**(): `void`

*Defined in world.ts:46*

**Returns:** `void`

___

