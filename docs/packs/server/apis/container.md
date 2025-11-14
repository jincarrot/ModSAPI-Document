---
sidebar_position: 5
---

# 容器-Container

包含了一系列关于容器（生物背包，玩家背包，方块容器（包含自定义方块和原版方块））的操作

参考链接：[**微软文档** Container](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/container?view=minecraft-bedrock-experimental)

## 属性 {#属性}
### emptySlotsCount {#emptySlotsCount}
- ***只读*** 空槽位数量
-  类型：int

### size {#size}
- ***只读*** 容器大小（背包格子数量）
- 类型：int

### isValid {#isValid}
- ***只读*** 容器是否存在
- 类型：bool

## 方法 {#方法}
### addItem {#addItem}

添加物品到容器
<details>
`addItem(itemStack)`

#### 参数:
- itemStack
    - 要添加的物品
    - 类型：[*ItemStack*](itemStack.md)

#### 返回值类型: 
[*ItemStack*](itemStack.md) | None

#### 示例：
```python
item = ItemStack("minecraft:dirt", 1)
world.getAllPlayers()[0].container.addItem(item)
```
</details>

### clearAll {#clearAll}

清空容器
<details>
`clearAll()`

#### 返回值类型: 
None

#### 示例：
```python
world.getAllPlayers()[0].container.clearAll()
```
</details>

### getItem {#getItem}

获取指定槽位的物品
<details>
`getItem(slot)`

#### 参数:
- slot
    - 槽位
    - 类型：int

#### 返回值类型: 
[*ItemStack*](itemStack.md) | None

#### 示例：
```python
world.getAllPlayers()[0].container.getItem(0)
```
</details>

### moveItem {#moveItem}

将指定槽位的物品转移到另一个槽位，支持跨容器转移
<details>
`moveItem(fromSlot, toSlot, toContainer?)`

#### 参数:
- fromSlot
    - 要转移的物品所在槽位
    - 类型：int
- toSlot
    - 目标槽位
    - 类型：int
- toContainer?=*None*
    - 目标容器
    - 类型：[*Container*](container.md)

#### 返回值类型: 
None

#### 示例：
```python
container = world.getAllPlayers()[0].container
container.moveItem(0, 1)
```
</details>

### setItem {#setItem}

设置指定槽位的物品
<details>
`setItem(slot, itemStack)`

#### 参数:
- slot
    - 目标槽位
    - 类型： int
- itemStack
    - 要设置的物品
    - 类型：[*ItemStack*](itemStack.md)

#### 返回值类型: 
None

#### 示例：
```python
item = ItemStack("minecraft:dirt", 1)
world.getAllPlayers()[0].container.setItem(1, item)
```
</details>

### swapItems {#swapItems}

交换两个槽位的物品，支持跨容器
<details>
`swapItems(slot, otherSlot, otherContainer?)`

#### 参数:
- slot
    - 要交换的物品所在槽位
    - 类型：int
- otherSlot
    - 要交换的另一个物品所在槽位
    - 类型：int
- toContainer?=*None*
    - 要交换的另一个物品所在容器
    - 类型：[*Container*](container.md)

#### 返回值类型: 
None

#### 示例：
```python
world.getAllPlayers()[0].container.swapItems(0, 1)
```
</details>

### transferItem {#clearAll}

转移物品到另一个容器
<details>
`transferItem(fromSlot, toContainer)`

#### 参数:
- fromSlot
    - 要转移的物品所在槽位
    - 类型：int
- toContainer
    - 目标容器
    - 类型：[*Container*](container.md)

#### 返回值类型: 
None

#### 示例：
```python
entity_inv = world.getEntity(entityId).getComponent("minecraft:inventory")
world.getAllPlayers()[0].container.transferItem(0, entity_inv.container)
```
</details>
