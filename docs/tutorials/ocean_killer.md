---
sidebar_position: 2
---

# 进阶：编写海洋杀手

## 目标

海洋杀手-玩家在水中击杀水中怪物时能够实现一击必杀的效果

## 功能分析

要实现此功能，我们应当监听实体受伤事件，并做以下检测：
- 攻击者是否为玩家
- 受伤实体是否在水中
- 攻击者是否在水中

若满足条件，则将受伤实体直接击杀

## 相关接口
<details>

- [事件`entityHurt`](../packs/server/events/afterEvents.md#entityhurt)
    - 参数详解：
        - damageSource
            - 攻击者信息
            - 类型：[EntityDamageSource](../packs/server/apis/entity.md)
        - hurtEntity
            - 受击者
            - 类型：[Entity](../packs/server/apis/entity.md)
        - damage(本例无需使用)
            - 伤害
            - 类型：int
- [EntityDamageSource](../packs/server/extra/info.md#EntityDamageSource)
    - damagingEntity
        - 攻击者（可能不存在）
        - 类型：[Entity](../packs/server/apis/entity.md)
- [Entity](../packs/server/apis/entity.md) 
    - 属性：
        - isInWater
            - 是否处于水中
            - 类型：bool
    - 方法：
        - kill()
            - 杀死生物

</details>

## 开始编写

```python title="b/Scripts_Sample/index.py"
def onEntityHurt(arg):
    if arg.damageSource.damagingEntity:
        if arg.damageSource.damagingEntity.typeId == 'minecraft:player':
            # 攻击者是玩家
            entity = arg.hurtEntity
            player = arg.damageSource.damagingEntity
            if player.isInWater and entity.isInWater:
                # 同时在水中
                entity.kill()
                # 杀死实体

world.afterEvents.entityHurt.subscribe(onEntityHurt)
# 监听实体受伤事件
```