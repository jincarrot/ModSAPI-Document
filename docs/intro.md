---
sidebar_position: 1
---

# 快速开始

通过以下步骤，让您快速使用ModSAPI开发模组。

:::note
本教程针对使用ModSAPI模板进行开发。
如果您想在已有项目中插入ModSAPI，只需要下载补全库并导入您需要的模块即可。
:::

## 准备

要开始使用ModSAPI，您需要：

- [ModSAPI模组模板](https://github.com/jincarrot/ModSAPI):
  - 您自己的模组，用于编写您的代码
- [ModSAPI-Core](https://github.com/jincarrot/ModSAPI):
  - ModSAPI核心包，存储所有ModSAPI的逻辑，用于搭配您的包体测试
- [网易开发者工作台（mc studio）](https://mc.163.com/dev/):
  - 用于测试，上传，发布您的包体

## 导入包体

### 导入ModSAPI-Core

下载测试包并导入开发者工作台，并命名为ModSAPI
![导入测试包](../static/img/import_test_pack.png)

### 导入模组模板

下载示例包并导入开发者工作台，并命名为您的模组名称
![导入示例包](../static/img/import_sample_pack.png)

## 配置

打开模板包文件目录，打开行为包（b）

![行为包文件目录](../static/img/behavior_files.png)

其中`Scripts_Sample`即为代码目录

您可以修改该文件夹名称

打开该文件夹，您可以找到文件`config.py`，打开此文件

```python
NAMESPACE = "MODEXAMPLE"
"""命名空间"""
SYSTEM_NAME_SERVER = "SAMPLESERVER"
"""服务端系统名"""
SYSTEM_NAME_CLIENT = "SAMPLECLIENT"
"""客户端系统名"""
ENTRY_PATH_SERVER = "example_use_file"
"""服务端入口文件"""
ENTRY_PATH_CLIENT = "example_client"
"""客户端入口文件"""
```

修改此处的信息。注意，所有的名称应该只使用英文！

## 编辑代码

模板包中提供了三个文件示例。
- example_use_file
  - ModSAPI推荐的使用方法，即与国际版相同的使用方法，无需注册系统。
  - 本文件为服务端。
- example_use_modules_server
  - 一个使用系统的示例，适合搭配网易原生写法或搭配别人的库使用。
- example_client
  - ModSAPI客户端的入口文件。

找到文件`example_use_file.py`，打开此文件，在此处编辑您的代码。

使用`from ModSAPI.server.beta import *`导入ModSAPI并开始使用。

:::info
您可以指定导入的ModSAPI版本，本教程编写时最新稳定版（0.0.3）尚未发布，因此教程导入beta版。

要导入指定版本，使用`from ModSAPI.server.版本号 import *`语句。
:::

## 运行测试

在编辑好代码后，进入开发者工作台，点击开发测试

在弹出的界面中同时选中ModSAPI

![测试代码](../static/img/test_your_code.png)

游戏开始运行后，若控制台输出`[Info][ModSAPI] Load entry file 'example_use_file' successfully.`，则说明代码正常加载！

## 发布

在MCS中点击您的包体，点击发布，会自动跳转到开发者官网。

填写好相关信息，提交审核即可。

在发布后，请要求玩家装载`【前置】ModSAPI`，否则模组将无法运行。

***严禁将ModSAPI-Core私自发布！***

:::info
当然，ModSAPI作为开源项目，您完全可以内置在您的模组内，但请确保：
- 禁止将ModSAPI单独作为模组发布在资源中心！
- 确保已经修改了ModSAPI的命名空间！
- 禁止售卖ModSAPI，无论您是否修改过代码内容！

若未遵守以上约定并因为您的行为影响了ModSAPI的正常运作，以至于影响到别的开发者，将会向您追究责任。

同时，若您选择将ModSAPI内置到项目中，则ModSAPI需要您手动更新。虽然不必要，但依旧希望您在您的模组中标注该模组使用ModSAPI。
:::

## 常见错误

若控制台输出：

- `[Error] Cannot get systems from ModSAPI! Make sure you have loaded the core pack.`
  - 此报错说明你没有正确装载ModSAPI-Core包体，请确保你已经导入并在启动测试时勾选了该包体。（见[运行测试](#运行测试)）
- `[Error][ModSAPI] Load scripts failed! Cannot find entry file 'xxx'.`
  - 此报错说明没有找到对应的入口文件或入口文件的内容编写有误，请确保您在config.py文件中已经正确定义了入口文件名，并确保文件存在且代码逻辑无误。

