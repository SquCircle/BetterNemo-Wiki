# A.4 积木盒

工具箱（Toolbox）中可配置以下元素：

## 积木 block
定义单个积木，通过 `type` 指定积木类型，`gap` 指定下方间距。

```json
{ "type": "example_block", "gap": "8" }
```

## 间隔 sep
在积木之间插入分隔线。

```json
{ "sep": "8" }
```

## 标签 label
显示文本标签，可包含标题、行、结束线。

### 标题
### 行
### 结束线

## 按钮 button
### 自定义按钮
通过 `callbackKey` 绑定按钮点击回调。