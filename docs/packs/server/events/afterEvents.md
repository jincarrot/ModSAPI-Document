---
sidebar_position: 2
---

# 后事件-AfterEvents

可监听已发生的事件列表

### entityDie {#entityDie}

实体死亡事件

<details>

#### 参数:
- damageSource
    - 如果指定，提供导致此实体死亡的伤害来源的更多信息
    - 类型：[EntityDamageSource](../extra/info.md#EntityDamageSource)
- deadEntity
    - 已死亡的实体对象
    - 类型：[Entity](../apis/entity.md)
    
</details>

### entityHurt {#entityHurt}

实体受伤事件

<details>

#### 参数:
- damage
    - 受到的伤害值
    - 类型：float
- damageSource
    - 伤害来源，包含攻击者/投掷物，伤害原因（类型）
    - 类型：[EntityDamageSource](../extra/info.md#EntityDamageSource)
- hurtEntity
    - 受伤实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### entityHitEntity {#entityHitEntity}

实体攻击实体事件

<details>

#### 参数:
- damagingEntity
    - 攻击者
    - 类型：[Entity](../apis/entity.md)
- hitEntity
    - 受伤实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### entitySpawn {#entitySpawn}

实体生成事件

<details>

#### 参数:
- cause
    - 生成原因
    - 类型：str
- entity
    - 生成的实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### entityLoad {#entityLoad}

实体加载事件

<details>

#### 参数:
- entity
    - 加载的实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### effectAdd {#effectAdd}

效果添加事件

<details>

#### 参数:
- effect
    - 效果的附加属性和详细信息
    - 类型：[Effect](../extra/info.md#Effect)
- entity
    - 被添加效果的实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### entityHealthChanged {#entityHealthChanged}

实体生命值变化事件

<details>

#### 参数:
- entity
    - 生命值发生变化的实体
    - 类型：[Entity](../apis/entity.md)
- oldValue
    - 实体的旧生命值
    - 类型：int
- newValue
    - 实体的新生命值
    - 类型：int
    
</details>

### entityRemove {#entityRemove}

实体移除事件

<details>

#### 参数:
- removedEntity
    - 被移除的实体引用
    - 类型：[Entity](../apis/entity.md)
    
</details>

### blockExplode {#blockExplode}

方块爆炸事件

<details>

#### 参数:
- source
    - 爆炸的可选来源
    - 类型：[Entity](../apis/entity.md)
- explodedBlockPermutation
    - 已爆炸方块的描述
    - 类型：[BlockPermutation](../extra/info.md#BlockPermutation)
- block
    - 此事件位置处世界中的当前方块
    - 类型：[Block](../apis/block.md)
- dimension
    - 包含此事件主题方块的维度
    - 类型：[Dimension](../apis/dimension.md)
    
</details>

### playerBreakBlock {#playerBreakBlock}

玩家破坏方块事件

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
    
</details>

### playerPlaceBlock {#playerPlaceBlock}

玩家放置方块事件

<details>

#### 参数:
- player
    - 放置方块的玩家
    - 类型：[Player](../apis/player.md)
- block
    - 此事件位置处世界中的当前方块
    - 类型：[Block](../apis/block.md)
- dimension
    - 包含此事件主题方块的维度
    - 类型：[Dimension](../apis/dimension.md)
    
</details>


### chatSend {#chatSend}

聊天消息发送事件

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
    
</details>

### itemUse {#itemUse}

物品使用事件

<details>

#### 参数:
- itemStack
    - 正在使用的受影响的物品堆栈
    - 类型：[ItemStack](../apis/itemStack.md)
- source
    - 触发此物品事件的源实体
    - 类型：[Player](../apis/player.md)
    
</details>

### itemStartUseOn {#itemStartUseOn}

物品开始使用事件

<details>

#### 参数:
- itemStack
    - 正在使用的受影响的物品堆栈
    - 类型：[ItemStack](../apis/itemStack.md)
- source
    - 触发此物品事件的源实体
    - 类型：[Player](../apis/player.md)
    
</details>

### itemCompleteUse {#itemCompleteUse}

物品完成使用事件

<details>

#### 参数:
- itemStack
    - 已完成充电的物品堆栈
    - 类型：[ItemStack](../apis/itemStack.md)
- source
    - 触发此物品事件的源实体
    - 类型：[Player](../apis/player.md)
- useDuration
    - 剩余持续时间，以刻为单位，在充电完成其周期之前
    - 类型：float
    
</details>

### playerDimensionChange {#playerDimensionChange}

玩家维度改变事件

<details>

#### 参数:
- fromDimension
    - 玩家正在改变的维度
    - 类型：[Dimension](../apis/dimension.md)
- toDimension
    - 玩家正在改变到的维度
    - 类型：[Dimension](../apis/dimension.md)
- fromLocation
    - 玩家在改变维度之前的位置
    - 类型：[Vector3](../extra/info.md#Vector3)
- toLocation
    - 玩家在改变维度后将生成到的位置
    - 类型：[Vector3](../extra/info.md#Vector3)
- player
    - 正在改变维度的玩家的句柄
    - 类型：[Player](../apis/player.md)
    
</details>

### playerInteractWithEntity {#playerInteractWithEntity}

玩家与实体交互事件

<details>

#### 参数:
- beforeItemStack
    - 交互成功前的物品堆栈，如果手为空则为undefined
    - 类型：[ItemStack](../apis/itemStack.md)
- itemStack
    - 交互成功后的物品堆栈，如果手为空则为undefined
    - 类型：[ItemStack](../apis/itemStack.md)
- player
    - 此事件的源玩家
    - 类型：[Player](../apis/player.md)
- target
    - 将被交互的实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### playerInventoryItemChange {#playerInventoryItemChange}

玩家库存物品变化事件

<details>

#### 参数:
- player
    - 此事件的源玩家
    - 类型：[Player](../apis/player.md)
- itemStack
    - 新的物品堆栈
    - 类型：[ItemStack](../apis/itemStack.md)
- beforeItemStack
    - 之前的物品堆栈
    - 类型：[ItemStack](../apis/itemStack.md)
- slot
    - 发生变化的槽位索引
    - 类型：int
- inventoryType
    - 库存类型
    - 类型：str
    
</details>

### playerSpawn {#playerSpawn}

玩家生成事件

<details>

#### 参数:
- player
    - 代表加入游戏的玩家的对象
    - 类型：[Player](../apis/player.md)
- initialSpawn
    - 如果为true，这是玩家加入游戏后的初始生成
    - 类型：bool
    
</details>

### playerJoin {#playerJoin}

玩家加入事件

<details>

#### 参数:
- playerId
    - 加入游戏玩家的不透明字符串标识符
    - 类型：str
- playerName
    - 已加入玩家的名称
    - 类型：str
    
</details>

### playerLeave {#playerLeave}

玩家离开事件

<details>

#### 参数:
- playerId
    - 离开游戏玩家的不透明字符串标识符
    - 类型：str
- playerName
    - 已离开玩家的名称
    - 类型：str
    
</details>

### projectileHitBlock {#projectileHitBlock}

投掷物击中方块事件

<details>

#### 参数:
- dimension
    - 此投掷物击中发生的维度
    - 类型：[Dimension](../apis/dimension.md)
- hitVector
    - 投掷物击中方块时的方向向量
    - 类型：[Vector3](../extra/info.md#Vector3)
- location
    - 投掷物击中发生的位置
    - 类型：[Vector3](../extra/info.md#Vector3)
- projectile
    - 击中方块的投掷物实体
    - 类型：[Entity](../apis/entity.md)
- source
    - 发射投掷物的可选源实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### projectileHitEntity {#projectileHitEntity}

投掷物击中实体事件

<details>

#### 参数:
- dimension
    - 此投掷物击中发生的维度
    - 类型：[Dimension](../apis/dimension.md)
- hitVector
    - 投掷物击中实体时的方向向量
    - 类型：[Vector3](../extra/info.md#Vector3)
- location
    - 投掷物击中发生的位置
    - 类型：[Vector3](../extra/info.md#Vector3)
- projectile
    - 击中实体的投掷物实体
    - 类型：[Entity](../apis/entity.md)
- source
    - 发射投掷物的可选源实体
    - 类型：[Entity](../apis/entity.md)
    
</details>

### explosion {#explosion}

爆炸事件

<details>

#### 参数:
- source
    - 爆炸的可选来源
    - 类型：[Entity](../apis/entity.md)
- dimension
    - 发生爆炸的维度
    - 类型：[Dimension](../apis/dimension.md)
    
</details>

