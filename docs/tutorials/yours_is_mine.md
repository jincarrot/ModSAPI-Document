---
sidebar_position: 3
---

# 进阶：装备夺取

## 目标

~~兄弟兄弟你衣服借我穿穿~~

玩家在攻击实体时，有概率夺取对方的装备并穿戴在自己身上。

玩家受击时，也同样有概率被夺去装备。

:::info
您可以下载[`ModSAPI-tutorials`](https:/github.com/jincarrot/ModSAPI)包体，内部包含了该教程涉及的所有代码。

本教程的代码位于`scripts_tutorial/tutorials/yours_is_mine.py`中。
:::

## 相关接口
- 事件[`entityHurt`](../packs/server/events/afterEvents.md#entityhurt)
    - 参数详解：
        - damageSource
            - 攻击者信息
            - 类型：[EntityDamageSource](../packs/server/apis/entity.md)
        - hurtEntity
            - 受击者
            - 类型：[Entity](../packs/server/apis/entity.md)
- [EntityDamageSource](../packs/server/extra/info.md#EntityDamageSource)
    - damagingEntity
        - 攻击者（可能不存在）
        - 类型：[Entity](../packs/server/apis/entity.md)
- [Entity](../packs/server/apis/entity.md) 
    - kill()
        - 杀死生物
    - hasComponent(componentId)
        - 判断实体是否拥有目标组件
    - getComponent(componentId)
        - 获取实体组件

## 开始编写

```python title="scripts_tutorial/tutorials/yours_is_mine.py"
from ..ModSAPI.server.beta import * # 导入ModSAPI-server模块
import random

def onEntityHurt(arg):
    # type: (EntityHurtAfterEvent) -> None
    attacker = arg.damageSource.damagingEntity
    entity = arg.hurtEntity
    if attacker.hasComponent(EntityEquippableComponent.componentId):
        # 攻击者有装备组件
        if entity.hasComponent(EntityEquippableComponent.componentId):
            # 受击者也有装备组件
            attackerEquip = attacker.getComponent(EntityEquippableComponent.componentId)
            entityEquip = entity.getComponent(EntityEquippableComponent.componentId)
            slots = (EquipmentSlot.Head, EquipmentSlot.Chest, EquipmentSlot.Legs, EquipmentSlot.Feet)
            for slot in slots:
                if random.random() < 0.1:
                    # 10%概率交换装备
                    equipment = attackerEquip.getEquipment(slot)
                    if equipment:
                        # 攻击者有装备，无法替换
                        continue
                    equipment = entityEquip.getEquipment(slot)
                    if equipment:
                        # 受击者有装备，可以替换
                        attackerEquip.setEquipment(slot, equipment)
                        entityEquip.setEquipment(slot, None)

world.afterEvents.entityHurt.subscribe(onEntityHurt) # 监听实体受伤事件
```

