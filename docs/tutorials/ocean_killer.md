---
sidebar_position: 2
---

# 进阶：编写海洋杀手

## 目标

海洋杀手-玩家在水中击杀水中怪物时能够实现一击必杀的效果

:::info
您可以下载[`ModSAPI-tutorials`](https:/github.com/jincarrot/ModSAPI)包体，内部包含了该教程涉及的所有代码。

本教程的代码位于`scripts_tutorial/tutorials/ocean_killer.py`中。
:::

## 功能分析

要实现此功能，我们应当监听实体受伤事件，并做以下检测：
- 攻击者是否为玩家
- 受伤实体是否在水中
- 攻击者是否在水中

若满足条件，则将受伤实体直接击杀

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
    - 属性：
        - isInWater
            - 是否处于水中
            - 类型：bool
    - 方法：
        - kill()
            - 杀死生物

## 开始编写

```python title="scripts_tutorial/tutorials/ocean_killer.py"
from ..ModSAPI.server.beta import * # 导入ModSAPI-server模块

def onEntityHurt(arg):
    # type: (EntityHurtAfterEvent) -> None
    attacker = arg.damageSource.damagingEntity # 攻击者
    if attacker and attacker.typeId == 'minecraft:player':
        # 攻击者是玩家（攻击者可能不存在，所以要判断attacker是否为None）
        entity = arg.hurtEntity # 受伤的实体
        if attacker.isInWater and entity.isInWater:
            # 同时在水中
            entity.kill()
            # 杀死实体

world.afterEvents.entityHurt.subscribe(onEntityHurt)
# 监听实体受伤事件
```

ModSAPI(或SAPI)中，world对象存储了一系列属性，包括事件。

world.afterEvents则存储了一系列***后事件***，entityHurt就是一种后事件。

而`subscribe`方法则是注册监听。当玩家受伤时，系统会执行subscribe指定的函数，即（onEntityHurt）。

注意，`onEntityHurt`的函数名字是自己任意给的，也可以自己起名叫别的，只需要在subscribe中输入正确的函数名即可。
