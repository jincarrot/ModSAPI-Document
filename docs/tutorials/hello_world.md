---
sidebar_position: 1
---

# 编写 Hello World!

## 准备工作

跟随[***快速开始***](../intro.md)完成ModSAPI模组的导入、配置工作

:::info
您可以下载[`ModSAPI-tutorials`](https:/github.com/jincarrot/ModSAPI)包体，内部包含了该教程涉及的所有代码。

本教程的代码位于`scripts_tutorial/tutorials/hello_world.py`中。
:::

## 开始编写

打开示例包中的文件 `index.py`

编写如下代码
```python title="b/scripts_tutorial/tutorials/hello_world.py"
print("Hello World!")
```

现在进入游戏（记得同时装载测试包），后台将会显示`Hello World!`

## 原理

您可以发现，在文件夹`scripts_tutorial`中有一个config.py文件，内部定义了`ENTRY_PATH_SERVER = "index"`。
这就说明代码将会从`index.py`文件开始运行。

您可以打开文件`index.py`，会发现文件导入了tutorials文件夹的全部文件。

因此tutorials文件夹内的代码将会被全部加载，包括该教程的`hello_world.py`。

## 进阶

本教程代码位于`scripts_tutorial/tutorials/hello_world_upgrade.py`中。

#### 目标：
编写一段代码，当玩家发送`Hello`时，向玩家发送`World`

#### 代码：
```python title="b/Scripts_Sample/index.py"
def onChatSend(arg):
    if arg.message == 'Hello':
        # 如果发送的消息是"Hello"
        arg.sender.sendMessage("World")
        # 发送"World"

world.afterEvents.chatSend.subscribe(onChatSend)
# 注册监听事件-玩家发送消息事件
```

现在进入游戏，发送`Hello`，聊天框中将同时出现`World`!
