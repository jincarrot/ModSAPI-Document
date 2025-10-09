---
sidebar_position: 3
---

# 实体-Entity

表示世界中一个实体的状态（可以是生物、玩家或其他移动物体如矿车）

参考链接：[**微软文档** Entity](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entity?view=minecraft-bedrock-experimental)

## 属性 {#属性}

### id {#id}
***只读*** 实体的唯一标识符。此标识符在世界实例的多次加载中保持一致。不应从该唯一标识符的值和结构中推断任何含义 - 不要解析或解释它。即使 Entity.isValid 为 false，此属性也可访问。
<details>
#### 类型：
str

#### 示例：
```python
entity_id = entity.id
```
</details>

### isValid {#isValid}
***只读*** 实体是否有效（存活）
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isValid:
    print("实体存活")
```
</details>

### dimension {#dimension}
***只读*** 实体当前所在的维度
<details>
#### 类型：
Dimension

#### 示例：
```python
dim = entity.dimension
```
</details>

### isClimbing {#isClimbing}
***只读*** 实体是否正在攀爬（例如玩家在梯子旁或蜘蛛在石墙旁）
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isClimbing:
    print("实体正在攀爬")
```
</details>

### isFalling {#isFalling}
***只读*** 实体是否正在下落（下落距离大于0，或滑翔时大于1）
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isFalling:
    print("实体正在下落")
```
</details>

### isInWater {#isInWater}
***只读*** 实体任何部分是否在水块中
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isInWater:
    print("实体在水中")
```
</details>

### isOnGround {#isOnGround}
***只读*** 实体是否在固体方块上。此属性可能以意外的方式表现。当实体首次生成时，此属性将始终为 true，如果实体没有重力，此属性可能不正确。
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isOnGround:
    print("实体在地面上")
```
</details>

### isSleeping {#isSleeping}
***只读*** 实体是否正在睡觉
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isSleeping:
    print("实体在睡觉")
```
</details>

### isSitting {#isSitting}
***只读*** 实体是否正在坐下
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isSitting:
    print("实体在坐下")
```
</details>

### isSneaking {#isSneaking}
***只读*** 实体是否正在潜行（移动更慢更安静）
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isSneaking:
    print("实体在潜行")
```
</details>

### isSprinting {#isSprinting}
***只读*** 实体是否正在冲刺（例如玩家使用冲刺动作，豹猫逃跑或猪使用胡萝卜钓竿加速）
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isSprinting:
    print("实体在冲刺")
```
</details>

### isSwimming {#isSwimming}
***只读*** 实体是否处于游泳状态（例如玩家使用游泳动作或水中的鱼）
<details>
#### 类型：
bool

#### 示例：
```python
if entity.isSwimming:
    print("实体在游泳")
```
</details>

### location {#location}
***只读*** 实体的当前位置
<details>
#### 类型：
Vector3

#### 示例：
```python
pos = entity.location
print(f"实体位置: {pos.x}, {pos.y}, {pos.z}")
```
</details>

### nameTag {#nameTag}
实体的名称标签
<details>
#### 类型：
str

#### 示例：
```python
# 获取名称
name = entity.nameTag

# 设置名称
entity.nameTag = "新名称"
```
</details>

### health {#health}
实体的生命值
<details>
#### 类型：
float

#### 示例：
```python
# 获取生命值
hp = entity.health

# 设置生命值
entity.health = 20.0
```
</details>

### typeId {#typeId}
***只读*** 实体类型的标识符 - 例如 'minecraft:skeleton'。即使 Entity.isValid 为 false，此属性也可访问。
<details>
#### 类型：
str

#### 示例：
```python
entity_type = entity.typeId
```
</details>

## 方法 {#方法}

### addEffect {#addEffect}

添加或更新实体上的效果（如中毒）

<details>
`addEffect(effectType, duration, options=EntityEffectOptions)`

#### 参数：
- effectType
    - 效果类型
    - 类型：str | EffectType
- duration
    - 持续时间（刻）
    - 类型：int
- options
    - 效果选项
    - 类型：EntityEffectOptions | dict

#### 返回值类型：
Effect

#### 示例：
```python
entity.addEffect("poison", 100, {"amplifier": 1})
```
</details>

### addTag {#addTag}

向实体添加指定标签

<details>
`addTag(tag)`

#### 参数：
- tag
    - 要添加的标签
    - 类型：str

#### 返回值类型：
bool

#### 示例：
```python
success = entity.addTag("my_tag")
```
</details>

### applyDamage {#applyDamage}

对实体造成伤害

<details>
`applyDamage(amount, options=None)`

#### 参数：
- amount
    - 伤害量
    - 类型：int
- options
    - 伤害选项
    - 类型：dict | EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions

#### 返回值类型：
bool

#### 示例：
```python
entity.applyDamage(10, {"cause": "entity_attack"})
```
</details>

### applyImpulse {#applyImpulse}

向实体的当前速度施加冲量向量

<details>
`applyImpulse(vector)`

#### 参数：
- vector
    - 冲量向量
    - 类型：Vector3 | dict

#### 无返回值

#### 示例：
```python
entity.applyImpulse({"x": 0, "y": 1, "z": 0})
```
</details>

### applyKnockback {#applyKnockback}

向实体施加击退效果

<details>
`applyKnockback(horizontalForce, verticalStrength)`

#### 参数：
- horizontalForce
    - 水平击退力
    - 类型：dict | VectorXZ
- verticalStrength
    - 垂直击退强度
    - 类型：float

#### 无返回值

#### 示例：
```python
entity.applyKnockback({"x": 1, "z": 0}, 0.5)
```
</details>

### clearDynamicProperties {#clearDynamicProperties}

清除此实体上设置的所有动态属性

<details>
`clearDynamicProperties()`

#### 无返回值

#### 示例：
```python
entity.clearDynamicProperties()
```
</details>

### clearVelocity {#clearVelocity}

将实体的当前速度设置为零。注意此方法可能对玩家没有影响。

<details>
`clearVelocity()`

#### 无返回值

#### 示例：
```python
entity.clearVelocity()
```
</details>

### extinguishFire {#extinguishFire}

如果实体着火，则熄灭火焰

<details>
`extinguishFire(useEffects=True)`

#### 参数：
- useEffects
    - 是否显示与熄灭相关的视觉效果
    - 类型：bool

#### 返回值类型：
bool

#### 示例：
```python
success = entity.extinguishFire()
```
</details>

### getBlockFromViewDirection {#getBlockFromViewDirection}

从此实体视线方向返回第一个相交的方块

<details>
`getBlockFromViewDirection(options=BlockRaycastOptions)`

#### 参数：
- options
    - 射线投射选项
    - 类型：dict | BlockRaycastOptions

#### 返回值类型：
BlockRaycastHit

#### 示例：
```python
hit = entity.getBlockFromViewDirection()
if hit:
    print(f"看向的方块: {hit.block}")
```
</details>

### getComponent {#getComponent}

获取实体的组件（表示额外能力）

<details>
`getComponent(componentId)`

#### 参数：
- componentId
    - 组件ID
    - 类型：str

#### 返回值类型：
EntityComponent | None

#### 示例：
```python
component = entity.getComponent("minecraft:health")
```
</details>

### getComponents {#getComponents}

返回此实体上存在且受API支持的所有组件

<details>
`getComponents()`

#### 返回值类型：
list[EntityComponent]

#### 示例：
```python
components = entity.getComponents()
```
</details>

### getDynamicProperty {#getDynamicProperty}

返回属性值

<details>
`getDynamicProperty(identifier)`

#### 参数：
- identifier
    - 属性标识符
    - 类型：str

#### 返回值类型：
Any | None

#### 示例：
```python
value = entity.getDynamicProperty("custom_data")
```
</details>

### getDynamicPropertyIds {#getDynamicPropertyIds}

返回此实体上已使用的动态属性标识符的可用集合

<details>
`getDynamicPropertyIds()`

#### 返回值类型：
list[str]

#### 示例：
```python
property_ids = entity.getDynamicPropertyIds()
```
</details>

### getEffect {#getEffect}

返回实体上指定效果类型的效果，如果效果不存在则返回 undefined，如果效果不存在则抛出错误

<details>
`getEffect(effectType)`

#### 参数：
- effectType
    - 效果类型
    - 类型：str | EffectType

#### 返回值类型：
Effect

#### 示例：
```python
effect = entity.getEffect("poison")
```
</details>

### getEffects {#getEffects}

返回应用于此实体的一组效果

<details>
`getEffects()`

#### 返回值类型：
list[Effect]

#### 示例：
```python
effects = entity.getEffects()
```
</details>

### getEntitiesFromViewDirection {#getEntitiesFromViewDirection}

通过从此实体的视角执行射线投射，获取此实体正在查看的实体

<details>
`getEntitiesFromViewDirection(options=EntityRaycastOptions)`

#### 参数：
- options
    - 实体射线投射选项
    - 类型：dict

#### 返回值类型：
list[EntityRaycastHit]

#### 示例：
```python
hits = entity.getEntitiesFromViewDirection()
for hit in hits:
    print(f"看到的实体: {hit.entity}")
```
</details>

### getHeadLocation {#getHeadLocation}

返回此实体头部组件的当前位置

<details>
`getHeadLocation()`

#### 返回值类型：
Vector3

#### 示例：
```python
head_pos = entity.getHeadLocation()
```
</details>

### getRotation {#getRotation}

返回此实体的当前旋转组件

<details>
`getRotation()`

#### 返回值类型：
Vector2

#### 示例：
```python
rotation = entity.getRotation()
```
</details>

### getTags {#getTags}

返回与实体关联的所有标签

<details>
`getTags()`

#### 返回值类型：
list[str]

#### 示例：
```python
tags = entity.getTags()
```
</details>

### getVelocity {#getVelocity}

返回实体的当前速度向量

<details>
`getVelocity()`

#### 返回值类型：
Vector3

#### 示例：
```python
velocity = entity.getVelocity()
```
</details>

### getViewDirection {#getViewDirection}

返回实体的当前视线方向

<details>
`getViewDirection()`

#### 返回值类型：
Vector3

#### 示例：
```python
direction = entity.getViewDirection()
```
</details>

### hasComponent {#hasComponent}

返回指定组件是否存在于此实体上

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
has_health = entity.hasComponent("minecraft:health")
```
</details>

### hasTag {#hasTag}

返回实体是否具有特定标签

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
has_tag = entity.hasTag("my_tag")
```
</details>

### kill {#kill}

杀死此实体。实体将正常掉落战利品。

<details>
`kill()`

#### 返回值类型：
bool

#### 示例：
```python
success = entity.kill()
```
</details>

### removeEffect {#removeEffect}

移除实体上指定的效果类型，如果效果不存在则返回 false

<details>
`removeEffect(effectType)`

#### 参数：
- effectType
    - 效果类型
    - 类型：str | EffectType

#### 返回值类型：
bool

#### 示例：
```python
success = entity.removeEffect("poison")
```
</details>

### removeTag {#removeTag}

从实体移除指定标签

<details>
`removeTag(tag)`

#### 参数：
- tag
    - 要移除的标签
    - 类型：str

#### 返回值类型：
bool

#### 示例：
```python
success = entity.removeTag("my_tag")
```
</details>

### runCommand {#runCommand}

在实体上运行同步命令

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
result = entity.runCommand("say hello")
```
</details>

### setDynamicProperty {#setDynamicProperty}

将指定属性设置为值

<details>
`setDynamicProperty(identifier, value)`

#### 参数：
- identifier
    - 属性标识符
    - 类型：str
- value
    - 要设置的值
    - 类型：Any

#### 无返回值

#### 示例：
```python
entity.setDynamicProperty("custom_data", 123)
```
</details>

### teleport {#teleport}

将选定的实体传送到新位置

<details>
`teleport(location, teleportOptions=None)`

#### 参数：
- location
    - 目标位置
    - 类型：Vector3 | dict
- teleportOptions
    - 传送选项
    - 类型：dict | TeleportOptions

#### 无返回值

#### 示例：
```python
entity.teleport({"x": 100, "y": 64, "z": 200})
```
</details>
