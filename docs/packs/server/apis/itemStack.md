---
sidebar_position: 6
---

# 物品-ItemStack

包含了一系列关于物品的操作

参考链接：[**微软文档** ItemStack](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstack?view=minecraft-bedrock-experimental)

## 获取物品对象的方法

### 构建物品对象
<details>
通过类的实例化获取

*ItemStack(itemType, amount?)*
- itemType
    - 物品类型
    - 类型：str
- amount?
    - 数量，默认为1
    - 类型：int

```python
item = ItemStack("minecraft:dirt", 1)
```
</details>

### 从容器对象获取
<details>
通过容器相关接口获取

- container.getItem

```python
item = world.getAllPlayers()[0].container.getItem(0)
```
</details>

### 从事件获取
<details>

- itemUse
- itemUseOn
- ...

```python
def ItemUse(arg):
    item = arg.itemStack

world.afterEvents.itemUse.subscribe(ItemUse)
```
</details>


## 属性 {#属性}
### typeId {#typeId}
- ***只读*** 物品类型
- 类型：int

### isStackable {#isStackable}
- ***只读*** 能否堆叠
- 类型：bool

### type {#type}
- ***只读*** 物品类型（用typeId就行，这个没啥用）
- 类型：ItemType

### maxAmount {#maxAmount}
- ***只读*** 物品最大堆叠数
- 类型：int

### amount {#amount}
- 数量
- 类型：int（必须大于零）

### keepOnDeath? {#keepOnDeath}
- 死亡时是否保留，默认不保留
- 类型：bool

### lockMode? {#lockMode}
- 物品锁定模式，默认不锁定
- 类型：str

### nameTag? {#nameTag}
- 物品自定义名称，默认为空
- 类型：str

## 方法 {#方法}
### getLore {#getLore}

获取物品lore（lore即类似物品附魔信息文本）
<details>
`getLore()`

#### 返回值类型: 
List[str]

#### 示例：
```python
item = ItemStack("minecraft:dirt", 1)
item.getLore()
```
</details>

### setLore {#setLore}

设置物品lore
<details>
`setLore(loreList?)`

#### 参数:
- loreList?=*None*
    - 要设置的lore字符列表
    - 类型：List[str]

#### 返回值类型: 
None

#### 示例：
```python
item = ItemStack("minecraft:dirt", 1)
item.setLore(['test','qwq'])
```
</details>