---
sidebar_position: 2
---

# 维度-Dimension

表示世界中特定维度（如下界、末地等）的类

参考链接：[**微软文档** Dimension](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/dimension?view=minecraft-bedrock-experimental)

## 属性 {#属性}

### id {#id}
***只读*** 维度的标识符
<details>
#### 类型：
str

#### 示例：
```python
dim_id = dimension.id
```
</details>

### dimId {#dimId}
***只读*** 维度的数字ID
<details>
#### 类型：
int

#### 示例：
```python
dim_num = dimension.dimId
```
</details>

## 方法 {#方法}

### getBlock {#getBlock}

返回给定位置的方块实例

<details>
`getBlock(location)`

#### 参数：
- location
    - 位置坐标
    - 类型：dict | Vector3

#### 返回值类型：
Block

#### 示例：
```python
block = dimension.getBlock({"x": 100, "y": 64, "z": 200})
```
</details>

### getEntities {#getEntities}

获取维度中的实体

<details>
`getEntities(options=EntityQueryOptions)`

#### 参数：
- options
    - 实体查询选项
    - 类型：dict | EntityQueryOptions

#### 返回值类型：
list[Entity]

#### 示例：
```python
# 获取所有实体
entities = dimension.getEntities()

# 根据条件获取实体
entities = dimension.getEntities({"type": "minecraft:zombie"})
```
</details>

### getEntitiesAtBlockLocation {#getEntitiesAtBlockLocation}

返回特定位置的一组实体

<details>
`getEntitiesAtBlockLocation(location)`

#### 参数：
- location
    - 位置坐标
    - 类型：dict | Vector3

#### 返回值类型：
list[Entity]

#### 示例：
```python
entities = dimension.getEntitiesAtBlockLocation({"x": 100, "y": 64, "z": 200})
```
</details>

### getPlayers {#getPlayers}

获取维度中的玩家

<details>
`getPlayers(options=EntityQueryOptions)`

#### 参数：
- options
    - 玩家查询选项
    - 类型：dict | EntityQueryOptions

#### 返回值类型：
list[Player]

#### 示例：
```python
# 获取所有玩家
players = dimension.getPlayers()

# 根据名称获取玩家
players = dimension.getPlayers({"name": "Jincarrot"})
```
</details>

### getPlayer {#getPlayer}

根据ID获取玩家

<details>
`getPlayer(playerId)`

#### 参数：
- playerId
    - 玩家ID
    - 类型：int | str

#### 返回值类型：
Player

#### 示例：
```python
player = dimension.getPlayer("player_id_123")
```
</details>

### runCommand {#runCommand}

在维度的上下文中同步运行命令

<details>
`runCommand(commandString)`

#### 参数：
- commandString
    - 要执行的命令
    - 类型：str

#### 返回值类型：
CommandResult

#### 示例：
```python
result = dimension.runCommand("say 在维度中执行命令")
```
</details>

### spawnEntity {#spawnEntity}

在指定位置创建新实体（如生物）

<details>
`spawnEntity(identifier, location, options=SpawnEntityOptions)`

#### 参数：
- identifier
    - 实体标识符
    - 类型：str
- location
    - 生成位置
    - 类型：dict | Vector3
- options
    - 生成选项
    - 类型：dict | SpawnEntityOptions

#### 返回值类型：
Entity

#### 示例：
```python
# 生成僵尸
zombie = dimension.spawnEntity("minecraft:zombie", {"x": 100, "y": 64, "z": 200})

# 使用选项生成实体
options = {
    "initialRotation": 45,
    "spawnEvent": "minecraft:entity_born"
}
entity = dimension.spawnEntity("minecraft:cow", {"x": 100, "y": 64, "z": 200}, options)
```
</details>

### spawnItem {#spawnItem}

在指定位置将新物品堆叠创建为实体

<details>
`spawnItem(itemStack, location)`

#### 参数：
- itemStack
    - 物品堆叠
    - 类型：ItemStack
- location
    - 生成位置
    - 类型：Vector3 | dict

#### 返回值类型：
Entity

#### 示例：
```python
# 创建物品实体
item_entity = dimension.spawnItem(item_stack, {"x": 100, "y": 64, "z": 200})
```
</details>

### createExplosion {#createExplosion}

在指定位置创建爆炸

<details>
`createExplosion(location, radius, explosionOptions={})`

#### 参数：
- location
    - 爆炸位置
    - 类型：Vector3 | dict
- radius
    - 爆炸半径
    - 类型：float
- explosionOptions
    - 爆炸选项
    - 类型：dict | ExplosionOptions

#### 返回值类型：
bool

#### 示例：
```python
# 创建简单爆炸
success = dimension.createExplosion({"x": 100, "y": 64, "z": 200}, 5.0)

# 创建带选项的爆炸
options = {
    "causesFire": True,
    "breaksBlocks": False
}
success = dimension.createExplosion({"x": 100, "y": 64, "z": 200}, 3.0, options)
```
</details>

### fillBlocks {#fillBlocks}

填充方块（暂未实现）

<details>
`fillBlocks(volume, block, options)`

#### 参数：
- volume
    - 方块体积
    - 类型：BlockVolumeBase
- block
    - 方块
    - 类型：BlockPermutation | str
- options
    - 填充选项
    - 类型：Any

#### 返回值类型：
Any

#### 示例：
```python
# 方法暂未实现
```
</details>

### setBlock {#setBlock}

设置方块（暂未实现）

<details>
`setBlock(type)`

#### 参数：
- type
    - 方块类型
    - 类型：Any

#### 无返回值

#### 示例：
```python
# 方法暂未实现
```
</details>

## DimensionLocation类 {#DimensionLocation类}

表示世界中的精确坐标，包括其维度和位置

### 属性 {#DimensionLocation属性}

#### dimension {#dimension}
维度对象
<details>
#### 类型：
Dimension

#### 示例：
```python
# 获取维度
dim = dim_location.dimension

# 设置维度
dim_location.dimension = new_dimension
```
</details>

#### x {#x}
X坐标
<details>
#### 类型：
float

#### 示例：
```python
# 获取X坐标
x_pos = dim_location.x

# 设置X坐标
dim_location.x = 100.5
```
</details>

#### y {#y}
Y坐标
<details>
#### 类型：
float

#### 示例：
```python
# 获取Y坐标
y_pos = dim_location.y

# 设置Y坐标
dim_location.y = 64.0
```
</details>

#### z {#z}
Z坐标
<details>
#### 类型：
float

#### 示例：
```python
# 获取Z坐标
z_pos = dim_location.z

# 设置Z坐标
dim_location.z = 200.3
```
</details>