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

* [despawn](world.md#despawn)
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

*Defined in [world.ts:18](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L18)*

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

*Defined in [world.ts:13](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L13)*

___
<a id="lasttick"></a>

### `<Private>` lastTick

**● lastTick**: *`number`* =  Date.now()

*Defined in [world.ts:16](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L16)*

___
<a id="nexttick"></a>

### `<Private>` nextTick

**● nextTick**: *`number`* = 0

*Defined in [world.ts:18](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L18)*

___
<a id="shouldrun"></a>

### `<Private>` shouldRun

**● shouldRun**: *`boolean`* = false

*Defined in [world.ts:15](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L15)*

___
<a id="systems"></a>

### `<Private>` systems

**● systems**: *`Array`<[System](../interfaces/system.md)<`any`>>* =  []

*Defined in [world.ts:14](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L14)*

___
<a id="tickperiod"></a>

### `<Private>` tickPeriod

**● tickPeriod**: *`number`*

*Defined in [world.ts:17](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L17)*

___

## Methods

<a id="despawn"></a>

###  despawn

▸ **despawn**<`T`>(entity: *`T`*): `boolean`

*Defined in [world.ts:26](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L26)*

**Type parameters:**

#### T :  [ComponentTuple](../#componenttuple)
**Parameters:**

| Name | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `boolean`

___
<a id="get"></a>

###  get

▸ **get**<`T`>(id: *`number`*): [Entity](../#entity)<`T`>

*Defined in [world.ts:52](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L52)*

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

*Defined in [world.ts:35](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L35)*

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

*Defined in [world.ts:44](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L44)*

**Returns:** `void`

___
<a id="spawn"></a>

###  spawn

▸ **spawn**<`T`>(...components: *`T`*): `number`

*Defined in [world.ts:22](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L22)*

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

*Defined in [world.ts:49](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L49)*

**Returns:** `void`

___
<a id="tick"></a>

### `<Private>` tick

▸ **tick**(): `void`

*Defined in [world.ts:55](https://github.com/envis10n/ts-ecs/blob/173742f/src/world.ts#L55)*

**Returns:** `void`

___

