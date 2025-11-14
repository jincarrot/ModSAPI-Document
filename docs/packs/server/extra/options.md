---
sidebar_position: 2
---

# 选项-Options

选项（Options）涵盖了大量可选信息。

<font color="orange">***在表示数据应当使用字典（dict）***</font>

<details>
<summary>示例</summary>

#### <font color="green">正确用法：</font>
```python
options = {
    "name": "Jincarrot",
    "gameMode": "Creative"
}
world.getPlayers(options)
```
#### <font color="red">错误用法：</font>
```python
world.getPlayers(EntityQueryOptions({"name": "Jincarrot", "GameMode": "Creative"}))
```

</details>

### EntityQueryOptions {#EntityQueryOptions}

实体信息查询选项，用于获取符合条件的实体等操作，当实体的所有信息都符合选项定义的信息时会被选中

<details>

#### 参考链接（微软文档）：
- [EntityFilter](https://learn.microsoft.com/zh-cn/minecraft/creator/scriptapi/minecraft/server/entityfilter?view=minecraft-bedrock-experimental)
- [EntityQueryOptions](https://learn.microsoft.com/zh-cn/minecraft/creator/scriptapi/minecraft/server/entityqueryoptions?view=minecraft-bedrock-experimental)

#### 属性（含`exclude`字样的为除……之外，反之亦然）：
- 家族相关 —— 实体所属的家族，如 monster：
    - families
        - 类型：List[str]
    - excludeFamilies
        - 类型：List[str]
- 名称相关 —— 实体名称（通过命名牌等方式命名的名字）或玩家名称：
    - name
        - 类型：str
    - excludeNames
        - 类型：List[str]

</details>

