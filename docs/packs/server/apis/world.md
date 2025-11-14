---
sidebar_position: 1
---

# 世界-World

包含了一系列关于世界（mc环境，维度等）的操作

参考链接：[**微软文档** World](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/world?view=minecraft-bedrock-experimental)

## 属性 {#属性}
### afterEvents {#afterEvents}
***只读*** 包含了一系列事件，这些事件已经发生并完成
<details>
#### 类型：
[*WorldAfterEvents*](../events/afterEvents.md)

#### 示例：
```python
world.afterEvents.entityDie.subscribe(callback)
```
示例中使用的事件参见[*事件列表*](../events/afterEvents.md)
</details>

### beforeEvents {#beforeEvents}
***只读*** 包含了一系列事件，这些事件将要发生，未完成
<details>
#### 类型：
[*WorldBeforeEvents*](../events/beforeEvents.md)

#### 示例：
```python
world.beforeEvents.chatSend.subscribe(callback)
```
示例中使用的事件参见[*事件列表*](../events/beforeEvents.md)
</details>

## 方法 {#方法}
### getAllPlayers {#getAllPlayers}

返回当前所有玩家
<details>
`getAllPlayers()`

#### 返回值类型: 
List[[*Player*](player.md)]

#### 示例：
```python
players = world.getAllPlayers()
```
</details>

### getPlayers {#getPlayers}

返回满足特定条件的玩家，参数留空则为返回全部玩家

<details>
`getPlayers(options?)`

#### 参数:
- options?=*None*
    - 附加选项
    - 类型：[*EntityQueryOptions*](../extra/options.md#EntityQueryOptions)

#### 返回值类型:
List[[*Player*](player.md)]

#### 示例：
```python
players = world.getPlayers({"name": "Jincarrot"})
```
</details>

### getEntity {#getEntity}

通过实体运行id获取实体

<details>
`getEntity(id)`

#### 参数：
- id
    - 实体的运行id（uid）
    - 类型：str

#### 返回值类型：
[*Entity*](entity.md)

#### 示例：
```python
entityId = serverApi.GetOnlinePlayers()[0] 
# 举例通过modsdk获取玩家的uid（玩家也是实体）
entity = world.getEntity(entityId)
```
</details>

### getDimension {#getDimension}

获取维度
<details>
`getDimension(dimensionId)`

#### 参数：
- dimensionId
    - 维度名称，可填`overworld`, `nether`, `the_end`
    - 类型：str

#### 返回值类型：
[*Dimension*](player.md)

#### 示例：
```python
dim = world.getDimension("overworld")
```
</details>

### setDynamicProperty {#setDynamicProperty}

设置动态属性（即自定义属性）

<details>
`setDynamicProperty(identifier, value)`

#### 参数：
- identifier
    - 动态属性名称
    - 类型：str
- value
    - 存入的数据
    - 类型：Any（限python基本数据类型）

#### 无返回值

#### 示例：
```python
world.setDynamicProperty("customName", 1)
```
</details>

### getDynamicProperty {#getDynamicProperty}

获取动态属性（即自定义属性）
<details>
`getDynamicProperty(identifier)`

#### 参数：
- identifier
    - 动态属性名称
    - 类型：str

#### 返回值类型：
Any | None （先前存入的数据类型，没有存储过则返回None）

#### 示例：
```python
world.getDynamicProperty("customName")
```
</details>

### getTimeOfDay {#getTimeOfDay}

获取一天中的时间

<details>
`getTimeOfDay()`

#### 返回值类型：
int（范围从0-24000，单位：刻）

#### 示例：
```python
world.getTimeOfDay()
```
</details>