---
sidebar_position: 7
---

# 方块-Block

包含了一系列关于方块的操作

参考链接：[**微软文档** Block](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/block?view=minecraft-bedrock-experimental)

### 属性 {#Block属性}

#### dimension {#dimension}
***只读*** 返回方块所在的维度
<details>
#### 类型：
Dimension

#### 示例：
```python
block_dim = block.dimension
```
</details>

#### location {#location}
***只读*** 指定方块的坐标
<details>
#### 类型：
Vector3

#### 示例：
```python
pos = block.location
print(f"方块位置: {pos.x}, {pos.y}, {pos.z}")
```
</details>

#### type {#type}
***只读*** 获取方块的类型
<details>
#### 类型：
BlockType

#### 示例：
```python
block_type = block.type
```
</details>

#### typeId {#typeId}
***只读*** 获取方块的类型ID
<details>
#### 类型：
str

#### 示例：
```python
type_id = block.typeId
```
</details>

#### isAir {#isAir}
***只读*** 如果方块是空气则返回true
<details>
#### 类型：
bool

#### 示例：
```python
if block.isAir:
    print("这是空气方块")
```
</details>

#### isLiquid {#isLiquid}
***只读*** 如果方块是液体方块则返回true
<details>
#### 类型：
bool

#### 示例：
```python
if block.isLiquid:
    print("这是液体方块")
```
</details>

#### isWaterloggeed {#isWaterloggeed}
***只读*** 返回或设置此方块是否有水
<details>
#### 类型：
bool

#### 示例：
```python
if block.isWaterloggeed:
    print("方块被水淹没")
```
</details>

#### permutation {#permutation}
***只读*** 描述方块的附加方块配置数据
<details>
#### 类型：
BlockPermutation

#### 示例：
```python
perm = block.permutation
```
</details>

#### x {#x}
***只读*** 方块的X坐标
<details>
#### 类型：
int

#### 示例：
```python
x_pos = block.x
```
</details>

#### y {#y}
***只读*** 方块的Y坐标
<details>
#### 类型：
int

#### 示例：
```python
y_pos = block.y
```
</details>

#### z {#z}
***只读*** 方块的Z坐标
<details>
#### 类型：
int

#### 示例：
```python
z_pos = block.z
```
</details>

### 方法 {#Block方法}

#### above {#above}

返回此方块上方的方块（Y轴正方向）

<details>
`above(steps=1)`

#### 参数：
- steps
    - 向上的步数
    - 类型：int

#### 返回值类型：
Block

#### 示例：
```python
# 获取上方1格的方块
block_above = block.above()

# 获取上方3格的方块
block_above_3 = block.above(3)
```
</details>

#### below {#below}

返回此方块下方的方块（Y轴负方向）

<details>
`below(steps=1)`

#### 参数：
- steps
    - 向下的步数
    - 类型：int

#### 返回值类型：
Block

#### 示例：
```python
# 获取下方1格的方块
block_below = block.below()

# 获取下方2格的方块
block_below_2 = block.below(2)
```
</details>

#### east {#east}

返回此方块东侧的方块（X轴正方向）

<details>
`east(steps=1)`

#### 参数：
- steps
    - 向东的步数
    - 类型：int

#### 返回值类型：
Block

#### 示例：
```python
# 获取东侧1格的方块
block_east = block.east()
```
</details>

#### west {#west}

返回此方块西侧的方块（X轴负方向）

<details>
`west(steps=1)`

#### 参数：
- steps
    - 向西的步数
    - 类型：int

#### 返回值类型：
Block

#### 示例：
```python
# 获取西侧1格的方块
block_west = block.west()
```
</details>

#### north {#north}

返回此方块北侧的方块（Z轴负方向）

<details>
`north(steps=1)`

#### 参数：
- steps
    - 向北的步数
    - 类型：int

#### 返回值类型：
Block

#### 示例：
```python
# 获取北侧1格的方块
block_north = block.north()
```
</details>

#### south {#south}

返回此方块南侧的方块（Z轴正方向）

<details>
`south(steps=1)`

#### 参数：
- steps
    - 向南的步数
    - 类型：int

#### 返回值类型：
Block

#### 示例：
```python
# 获取南侧1格的方块
block_south = block.south()
```
</details>

#### bottomCenter {#bottomCenter}

返回此方块在X和Z轴上中心点的Vector3

<details>
`bottomCenter()`

#### 返回值类型：
Vector3

#### 示例：
```python
center = block.bottomCenter()
print(f"方块底部中心: {center.x}, {center.y}, {center.z}")
```
</details>

#### setPermutation {#setPermutation}

将维度中的方块设置为指定排列的状态

<details>
`setPermutation(permutation)`

#### 参数：
- permutation
    - 方块排列
    - 类型：BlockPermutation

#### 无返回值

#### 示例：
```python
# 设置方块的排列状态
block.setPermutation(new_permutation)
```
</details>

#### getTags {#getTags}

返回方块的标签集合

<details>
`getTags()`

#### 返回值类型：
list[str]

#### 示例：
```python
tags = block.getTags()
for tag in tags:
    print(f"标签: {tag}")
```
</details>

#### hasTag {#hasTag}

检查此方块的排列是否具有特定标签

<details>
`hasTag(tag)`

#### 参数：
- tag
    - 要检查的标签
    - 类型：str

#### 返回值类型：
bool

#### 示例：
```python
if block.hasTag("minecraft:dirt"):
    print("这是泥土类方块")
```
</details>

#### hasComponent {#hasComponent}

如果指定组件存在于此方块上则返回true

<details>
`hasComponent(componentId)`

#### 参数：
- componentId
    - 组件ID
    - 类型：str

#### 返回值类型：
bool

#### 示例：
```python
if block.hasComponent("minecraft:inventory"):
    print("这个方块有物品栏组件")
```
</details>

#### getComponent {#getComponent}

获取实体的组件（表示额外能力）

<details>
`getComponent(componentId)`

#### 参数：
- componentId
    - 组件ID
    - 类型：str

#### 返回值类型：
BlockComponent

#### 示例：
```python
# 获取方块的物品栏组件
inventory_component = block.getComponent("minecraft:inventory")
```
</details>