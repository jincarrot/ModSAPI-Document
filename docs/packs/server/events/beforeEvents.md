---
sidebar_position: 3
---

# 前事件-BeforeEvents

可监听即将发生的事件列表，允许取消或修改事件

### chatSend {#chatSend}

聊天消息发送前事件

<details>

#### 参数:
- message
    - 正在广播的消息
    - 类型：str
- sender
    - 发送聊天消息的玩家
    - 类型：[Player](../apis/player.md)
- targets
    - 将接收此消息的可选玩家列表。如果定义，此消息直接针对一个或多个玩家（即不广播）
    - 类型：[Player](../apis/player.md)列表
- cancel
    - 如果设置为true，此消息将不会被广播出去
    - 类型：bool
    
</details>

### entityHurt {#entityHurt}

实体受伤前事件

<details>

#### 参数:
- damage
    - 受到的伤害值
    - 类型：int
- damageSource
    - 伤害来源，包含攻击者/投掷物，伤害原因（类型）
    - 类型：[EntityDamageSource](../extra/info.md#EntityDamageSource)
- hurtEntity
    - 受伤实体
    - 类型：[Entity](../apis/entity.md)
- cancel
    - 是否取消此事件
    - 类型：bool
- cancelKnock
    - 取消此次伤害的击退效果
    - 类型：bool
    
</details>

### explosion {#explosion}

爆炸前事件

<details>

#### 参数:
- 待补充
    
</details>

### playerInteractWithEntity {#playerInteractWithEntity}

玩家与实体交互前事件

<details>

#### 参数:
- itemStack
    - 交互前的物品堆栈，如果手为空则为undefined
    - 类型：[ItemStack](../apis/itemStack.md)
- player
    - 此事件的源玩家
    - 类型：[Player](../apis/player.md)
- target
    - 将被交互的实体
    - 类型：[Entity](../apis/entity.md)
- cancel
    - 取消此事件
    - 类型：bool
    
</details>

### playerBreakBlock {#playerBreakBlock}

玩家破坏方块前事件

<details>

#### 参数:
- player
    - 破坏方块的玩家
    - 类型：[Player](../apis/player.md)
- block
    - 此事件位置处世界中的当前方块
    - 类型：[Block](../apis/block.md)
- dimension
    - 包含此事件主题方块的维度
    - 类型：[Dimension](../apis/dimension.md)
- brokenBlockPermutation
    - 方块被破坏前的置换信息
    - 类型：[BlockPermutation](../extra/info.md#BlockPermutation)
- itemStackBeforeBreak
    - 方块被破坏前用于破坏方块的物品堆栈，如果为空手则为undefined
    - 类型：[ItemStack](../apis/itemStack.md)
- cancel
    - 取消此事件
    - 类型：bool
    
</details>