---
sidebar_position: 3
---

# 尝试创建自定义UI

## 目标

使用ModSAPI的客户端UI模块，创建一个涵盖标题与背景的UI

## 解释

在模组开发过程中，为了满足各种需求，经常需要向玩家弹出一个自定义界面（UI）。
然而，创建UI的步骤往往很复杂，难以满足部分开发者的需要。

ModSAPI简化了创建UI的过程，能够快速且动态的创建简单的UI，以满足模组开发中的需求。

:::info
原版创建UI需要编写JsonUI，注册并绑定功能，感兴趣的可以查看 [**网易教程**](https://mc.163.com/dev/mcmanual/mc-dev/mcguide/18-%E7%95%8C%E9%9D%A2%E4%B8%8E%E4%BA%A4%E4%BA%92/2-%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E5%88%9B%E5%BB%BAUI.html?catalog=1)
:::

## 相关概念

### 控件

    UI里面包含的东西，比如一段文字，一个图片，一个按钮，都属于控件。

## 开始编写

UI功能存放在ModSAPI的client模块中，要使用自定义UI，需要先导入client。

要创建一个UI，我们需要先实例化CustomUI类，获取自定义ui对象。

```python
from minecraft.client import * # 导入client模块，以使用ui相关功能

ui = CustomUI() # ui即为我们的自定义UI对象
```

此时我们已经获取到了一个空的UI对象，不包含任何控件。接下来，我们需要向其添加控件。

首先，添加一个标题（我们的目标是创建一个含有标题和背景的界面）。标题是一段文字，因此我们需要添加一个文本控件。

```python
from minecraft.client import *

ui = CustomUI()
title = ui.addLabel() # 添加一个文本控件，并将其存储在变量title中
```

我们现在得到了一个名为title的文本控件。接下来，我们要设置标题的信息（标题内容，位置等）

```python
from minecraft.client import *

ui = CustomUI()
title = ui.addLabel()
title.text = "ModSAPI 教程示例" # 设置文本内容
title.offset = [0, 0] # 设置文本的位置（由于UI库暂未完成，文本的位移会上移一段距离）
```

我们已经创建好了一个标题。接下来，让我们设置背景。

```python
from minecraft.client import *

ui = CustomUI()
title = ui.addLabel()
title.text = "ModSAPI 教程示例"
title.offset = [0, 0]

ui.background.color = "black" # 将背景颜色设置为黑色
ui.background.alpha = 1.0 # 将背景透明度设置为1，即不透明
```

接下来，让我们将UI显示出来。

```python
from minecraft.client import *

ui = CustomUI()
title = ui.addLabel()
title.text = "ModSAPI 教程示例"
title.offset = [0, 0]

ui.background.color = "black"
ui.background.alpha = 1.0

ui.show() # 弹出界面
```

完成！现在我们需要将这个功能添加到游戏中，比如，当玩家发送消息时，弹出这个界面。

在服务端代码中编写以下内容：

```python
from minecraft.server import * # 导入服务端模块

def onChat(arg):
    world.NotifyToClient(arg.sender.id, "showUI", {}) # 由于双端通信尚未完成，暂时使用ModSDK完成该操作

world.afterEvents.chatSend.subscribe(onChat) # 注册事件，当玩家发送消息时执行onChat函数的内容
```

在客户端代码中编写：

```python
from minecraft.client import *

def onChat(data):
    ui = CustomUI()
    title = ui.addLabel()
    title.text = "ModSAPI 教程示例"
    title.offset = [0, 0]

    ui.background.color = "black"
    ui.background.alpha = 1.0

    ui.show()

manager.ListenForEvent("ModSAPI", "world", "showUI", None, onChat)
```

接下来，在游戏中发送文字，就可以看见刚刚的UI了！

:::tip
由于ModSAPI功能尚未完善，暂时借助服务端事件和部分ModSDK接口完成该操作
:::

## 进阶：使用表达式

:::warning
请确保你有一定的数学基础来阅读以下内容，至少要有高中水平（如果你处在初中，且数学分数可以达到102以上应该也可以）
:::

表达式（Expression）是ModSAPI特地为UI模块新增的功能。~~（其实可以像隔壁molang一样直接用字符型表达式来着）~~

表达式的作用是，将一段公式（比如，ui.age * 2 / 3）以表达式的形式存储到变量中，而不是以值的形式。

这有什么用呢？举个例子，我定义一个控件的X坐标为ui.age（ui从弹出开始，到现在经历的时间，单位tick，每秒有30tick），
那么，这个控件的位置将会随着时间的增长，逐渐移动。

表达式可以用于设置位移，尺寸等，从而实现动画或其他很惊艳的效果。

接下来，让我们使用表达式，创建一个美丽的图形吧。

### 目标

在游戏中画出以下图形：

<img src="/img/butterfly_line.png" width="25%" />


数学表达式：

$x=cos(t) + 1.2cos(\dfrac{5t}{3})$

$y=sin(t) - 1.2sin(\dfrac{5t}{3})$

### 开始编写

我们可以使用ui.age(UI从创建开始，到现在为止所经历的时间，单位tick，每秒30tick)来代表t，通过设置控件的位移，来画出此图形，即：

```python
from minecraft.client import *
import math # 记得导入math模块

def onChat(data):
    ui = CustomUI()

    title = ui.addLabel()
    title.text = "ModSAPI 教程示例"
    title.offset = [0, 0]

    ui.background.color = "black"
    ui.background.alpha = 1.0

    drawer = ui.addImage() # 任何控件都可以，此处使用图片控件演示
    drawer.alpha = 0 # 隐藏控件
    drawer.offset = [
        math.cos(ui.age) + 1.2 * math.cos(5 * ui.age / 3), 
        math.sin(ui.age) - 1.2 * math.sin(5 * ui.age / 3)
    ] # 设置控件的位移，第一个元素为x坐标，第二个为y坐标

    ui.show()

manager.ListenForEvent("ModSAPI", "world", "showUI", None, onChat)
```

接下来，我们可以使用ModSAPI的内置接口`trace()`方法，记录轨迹

```python
from minecraft.client import *
import math

def onChat(data):
    ui = CustomUI()

    title = ui.addLabel()
    title.text = "ModSAPI 教程示例"
    title.offset = [0, 0]

    ui.background.color = "black"
    ui.background.alpha = 1.0

    drawer = ui.addImage()
    drawer.alpha = 0
    drawer.offset = [
        math.cos(ui.age) + 1.2 * math.cos(5 * ui.age / 3), 
        math.sin(ui.age) - 1.2 * math.sin(5 * ui.age / 3)
    ]
    drawer.trace() # 记录轨迹

    ui.show()

manager.ListenForEvent("ModSAPI", "world", "showUI", None, onChat)
```

现在弹出ui，即可看到该图形！