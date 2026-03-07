---
sidebar_position: 2
---

# MoreUI文档

:::note
本文章为MoreUI独立版本的文档，如果您想要在ModSAPI中使用MoreUI，文档可能有所不同。
:::

## 概述

MoreUI 是基于可观察数据（Observable）的动态UI框架。您可以通过创建 `CustomForm` 或 `MoreUI` 对象来构建复杂的界面，所有控件的状态都可以与 `Observable` 绑定，实现数据的自动同步与界面刷新。

---

## Observable

`Observable<T>` 是一个泛型类，代表可以被观察的数据。当数据变化时，所有订阅了该数据的UI控件会自动更新。

### 创建 Observable

使用静态方法 `Observable.create` 创建一个 Observable 实例。

<details>
`Observable.create(data, options?)`

**参数**
- `data`: `bool | int | float | str`  
  初始数据。
- `options?`: `ObservableOptions`  
  可选项，目前包含 `clientWritable` 字段，类型为 `bool | Observable[bool]`。如果设为 `true`，则客户端可以直接修改该数据（例如通过输入框、开关等控件），修改结果会同步到服务端。

**返回值**  
返回对应类型的 `Observable` 对象。

**示例**
```python
from moreui import Observable

# 创建一个可观察的字符串，并允许客户端修改
text = Observable.create("默认文本", { "clientWritable": True })
```
</details>

### 属性

<details>
**typeId**: `T`  
返回 Observable 持有的数据类型（只读，实际类型由泛型决定）。
</details>

### 方法

<details>
**getData() -> T**  
获取当前数据。

**setData(data: T) -> None**  
设置新数据。如果数据发生变化，所有订阅者将被通知。

**subscribe(callback: Callable[[T], None])**  
订阅数据变化。当数据改变时，传入的 `callback` 会被调用，并接收新数据作为参数。

**unsubscribe(callback: Callable[[T], None])**  
取消订阅。
</details>

---


## CustomForm

CustomForm 是一个可以添加多种控件的动态表单。所有支持动态数据的控件都可以与 `Observable` 绑定，实现实时更新。

### 属性

<details>
**formId**: `int`  
表单的内部分配 ID，只读。
</details>

### 方法

#### create

<details>
`CustomForm.create(player, title, options?)`

**参数**
- `player`: `Player`  
  目标玩家对象。
- `title`: `str | Observable[str]`  
  表单标题，可以是普通字符串或可观察字符串。
- `options?`: `CustomOptions`  
  表单选项，参考 [CustomOptions](#customoptions)。

**返回值**  
返回 `CustomForm` 实例。

**示例**
```python
from moreui import CustomForm

form = CustomForm.create(player, "我的表单", { "movable": True })
```
</details>

#### button

<details>
`button(label, onClick, options?) -> CustomForm`

添加一个按钮。

**参数**
- `label`: `str | Observable[str]`  
  按钮文本。
- `onClick`: `Callable[[], None]`  
  按钮点击时的回调函数。
- `options?`: `ButtonOptions`  
  按钮选项，参考 [ButtonOptions](#buttonoptions)。

**返回值**  
返回自身，支持链式调用。
</details>

#### close

<details>
`close() -> CustomForm`

关闭此表单。

**返回值**  
返回自身。
</details>

#### divider

<details>
`divider(options?) -> CustomForm`

添加一条分割线。

**参数**
- `options?`: `DividerOptions`  
  分割线选项，参考 [DividerOptions](#divideroptions)。

**返回值**  
返回自身。
</details>

#### dropdown

<details>
`dropdown(label, value, items, options?) -> CustomForm`

添加一个下拉框。

**参数**
- `label`: `str | Observable[str]`  
  下拉框标签。
- `value`: `Observable[int]`  
  当前选中项的索引。必须是一个可观察整数，且通常需要设置 `clientWritable=True` 以允许客户端修改。
- `items`: `list[DropdownItem]`  
  下拉框的选项列表，每个选项包含 `label`（显示文本）和 `value`（选项值，通常为索引对应的值）。
- `options?`: `DropdownOptions`  
  下拉框选项，参考 [DropdownOptions](#dropdownoptions)。

**返回值**  
返回自身。
</details>

#### label

<details>
`label(text, options?) -> CustomForm`

添加一段静态文本。

**参数**
- `text`: `str | Observable[str]`  
  文本内容。
- `options?`: `LabelOptions`  
  文本选项，参考 [LabelOptions](#labeloptions)。

**返回值**  
返回自身。
</details>

#### show

<details>
`show() -> CustomForm`

向玩家展示此表单。如果表单已显示，调用此方法会刷新表单。

**返回值**  
返回自身。
</details>

#### slider

<details>
`slider(label, value, minValue, maxValue, options?) -> CustomForm`

添加一个滑动条。

**参数**
- `label`: `str | Observable[str]`  
  滑动条标签。
- `value`: `Observable[int]`  
  当前值，必须为可观察整数，且通常需要设置 `clientWritable=True`。
- `minValue`: `int | Observable[int]`  
  最小值。
- `maxValue`: `int | Observable[int]`  
  最大值。
- `options?`: `SliderOptions`  
  滑动条选项，参考 [SliderOptions](#slideroptions)。

**返回值**  
返回自身。
</details>

#### spacer

<details>
`spacer(options?) -> CustomForm`

添加一段空白区域（效果等同于添加空白文本）。

**参数**
- `options?`: `Options`  
  空白选项，参考 [Options](#options)。

**返回值**  
返回自身。
</details>

#### textField

<details>
`textField(label, text, options?) -> CustomForm`

添加一个文本输入框。

**参数**
- `label`: `str | Observable[str]`  
  输入框标签。
- `text`: `Observable[str]`  
  输入的文本内容。必须为可观察字符串，且通常需要设置 `clientWritable=True`。
- `options?`: `TextFieldOptions`  
  文本输入框选项，参考 [TextFieldOptions](#textfieldoptions)。

**返回值**  
返回自身。
</details>

#### toggle

<details>
`toggle(label, toggled, options?) -> CustomForm`

添加一个开关。

**参数**
- `label`: `str | Observable[str]`  
  开关标签。
- `toggled`: `Observable[bool]`  
  开关状态。必须为可观察布尔值，且通常需要设置 `clientWritable=True`。
- `options?`: `ToggleOptions`  
  开关选项，参考 [ToggleOptions](#toggleoptions)。

**返回值**  
返回自身。
</details>

---


## MoreUI

`MoreUI` 是一个可以同时管理多个表单的容器，内置 oreUI 风格。您可以通过网格布局自由放置多个表单。

### 静态方法

#### create

<details>
`MoreUI.create(player, layout?)`

**参数**
- `player`: `Player`  
  目标玩家对象。
- `layout?`: `MoreUILayoutDict`  
  网格布局，参考 [MoreUILayoutDict](#moreuilayoutdict)。

**返回值**  
返回 `MoreUI` 实例。

**示例**
```python
from moreui import MoreUI

ui = MoreUI.create(player, { "row": [1, 2], "column": [1, 1] })
```
</details>

### 属性

<details>
**layout**: `MoreUILayout`  
获取或设置网格布局。设置时可传入 `MoreUILayoutDict` 字典。

**示例**
```python
# 获取布局
current_layout = ui.layout

# 设置布局
ui.layout = { "row": [1, 1], "column": [2, 1] }
```
</details>

### 方法

#### addCustomForm

<details>
`addCustomForm(title, options?, layout?) -> MoreUICustomData`

向 UI 中添加一个新的自定义表单。

**参数**
- `title`: `str | Observable[str]`  
  表单标题。
- `options?`: `CustomOptions`  
  表单创建选项，参考 [CustomOptions](#customoptions)。
- `layout?`: `FormLayoutDict`  
  表单布局，参考 [FormLayoutDict](#formlayoutdict)。

**返回值**  
返回 `MoreUICustomData` 对象，包含 `form`（创建的 CustomForm 实例）和 `layout`（对应的 FormLayout 对象）。
</details>

#### addForm

<details>
`addForm(form, layout?) -> MoreUICustomData`

向 UI 中添加一个已经创建好的 CustomForm。

**参数**
- `form`: `CustomForm`  
  已有的 CustomForm 对象。
- `layout?`: `FormLayoutDict`  
  表单布局，参考 [FormLayoutDict](#formlayoutdict)。

**返回值**  
返回 `MoreUICustomData` 对象，包含 `form` 和 `layout`。
</details>

#### show

<details>
`show()`

向玩家发送整个 UI（包含所有已添加的表单）。
</details>

---


## 使用示例

以下是一个简单的 MoreUI 创建流程，包含一个文本输入框和一个开关，数据与 Observable 绑定。

```python
from moreui import MoreUI, Observable, CustomForm

# 创建 Observable 数据
input_text = Observable.create("默认文本", { "clientWritable": True })
toggle_state = Observable.create(False, { "clientWritable": True })

# 创建 MoreUI 容器
ui = MoreUI.create(player, { "row": [1], "column": [1] })

# 添加自定义表单
data = ui.addCustomForm(
    "示例表单",
    { "movable": True, "closable": True },
    { "position": [0, 0], "size": [1, 1] }
)

# 向表单添加控件
data.form \
    .textField("输入框:", input_text) \
    .toggle("开关:", toggle_state) \
    .button("提交", lambda: print(f"输入: {input_text.getData()}, 开关: {toggle_state.getData()}"))

# 显示 UI
ui.show()
```