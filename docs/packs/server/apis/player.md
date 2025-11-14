---
sidebar_position: 4
---

# 玩家-Player

表示世界中的玩家，继承自Entity类

## 属性 {#Player属性}

### name {#name}
***只读*** 玩家的名称
<details>
#### 类型：
str

#### 示例：
```python
player_name = player.name
```
</details>

### isFlying {#isFlying}
***只读*** 玩家是否在飞行（例如在创造或旁观模式中）
<details>
#### 类型：
bool

#### 示例：
```python
if player.isFlying:
    print("玩家在飞行")
```
</details>

### level {#level}
***只读*** 玩家基于经验的当前总等级
<details>
#### 类型：
int

#### 示例：
```python
player_level = player.level
```
</details>

### selectedSlotIndex {#selectedSlotIndex}
玩家选中的物品栏槽位索引
<details>
#### 类型：
int

#### 示例：
```python
 获取选中的槽位
slot = player.selectedSlotIndex

 设置选中的槽位
player.selectedSlotIndex = 2
```
</details>

### container {#container}
***只读*** 玩家物品栏的容器
<details>
#### 类型：
Container

#### 示例：
```python
inventory = player.container
```
</details>

### mainHand {#mainHand}
玩家主手中的物品
<details>
#### 类型：
ItemStack

#### 示例：
```python
 获取主手物品
item = player.mainHand

 设置主手物品
player.mainHand = new_item
```
</details>

## 方法 {#Player方法}

### playSound {#playSound}

向玩家播放声音

<details>
`playSound(soundID, soundOptions=PlayerSoundOptions)`

#### 参数：
- soundID
    - 声音ID
    - 类型：str
- soundOptions
    - 声音选项
    - 类型：dict

#### 无返回值

#### 示例：
```python
player.playSound("entity.experience_orb.pickup")
```
</details>

### sendMessage {#sendMessage}

向玩家发送消息

<details>
`sendMessage(message)`

#### 参数：
- message
    - 要发送的消息
    - 类型：str

#### 无返回值

#### 示例：
```python
player.sendMessage("欢迎来到服务器！")
```
</details>

### sendToast {#sendToast}

向玩家发送Toast通知

<details>
`sendToast(message, title="")`

#### 参数：
- message
    - 消息内容
    - 类型：str
- title
    - 标题
    - 类型：str

#### 无返回值

#### 示例：
```python
player.sendToast("任务完成！", "成就")
```
</details>

### showUI {#showUI}

向玩家显示自定义UI

<details>
`showUI(customUI)`

#### 参数：
- customUI
    - 自定义UI对象
    - 类型：UI

#### 无返回值

#### 示例：
```python
player.showUI(my_custom_ui)
```
</details>
