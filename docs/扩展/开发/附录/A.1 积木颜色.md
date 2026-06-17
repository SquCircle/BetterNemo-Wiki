# A.1 积木颜色
编程猫的积木颜色五花八门，涵盖可见光七大波段。其**自研** 的Blink中内置定义了丰富的颜色集供大家使用。

下表是从Blink中逆向出的颜色和其对应的积木盒：

| 编程猫颜色常量色卡 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| 分类 |  | 颜色HEX |  |  | 常量名 | 名称/对应积木盒**②** |
|  |  | fill 填充 | border 边框 | layer 参数框 |  |  |
| 积<br>木<br>盒<br>颜<br>色<br>常<br>量<br>**①** |  | #C7C7C7 | #C7C7C7 | - | INCOMPATIBLE_HUE | 不兼容/无效积木 |
|  |  | #608FEE | #496EB8 | - | EVENTS_HUE | 事件 |
|  |  | #68CDFF | #53A2C9 | - | CONTROL_HUE | 控制 |
|  |  | #F46767 | #BF5050 | - | ACTIONS_HUE | 动作 |
|  |  | #E76CEA | #B353B5 | - | APPEARANCE_HUE | 外观 |
|  |  | #A073FF | #7E5BC9 | - | SOUND_HUE | 声音 |
|  |  |  |  |  | VIDEO_HUE | 视频 |
|  |  | #2BC9A7 | #1F947B | - | PEN_HUE | 画笔 |
|  |  | #77D657 | #5AA142 | #61BA41 | SENSING_HUE | 侦测 |
|  |  | #FEAE8A | #C98A6D | #EDA380 | LOGIC_HUE | 运算 - 逻辑 |
|  |  |  |  | - | MATH_HUE | 运算 - 数学 |
|  |  |  |  |  | TEXTS_HUE | 运算 - 文本 |
|  |  | #FFBB55 | #C99342 | - | VARIABLES_HUE | 变量 |
|  |  |  |  |  | CLOUD_HUE | 云变量 |
|  |  | #F9CC37 | #C4A12B | #DEB738 | LISTS_HUE | 列表 |
|  |  |  |  | - | CLOUD_LIST_HUE | 云列表 |
|  |  | #F88767 | #C26A51 | - | PROCEDURES_HUE | 函数 |
|  |  | #FF7E2E | #C26A51 | - | PROCEDURES_PARAM_HUE | 函数参数 |
|  |  | #E04852 | #AB373E | - | PHYSICS_HUE | 物理 |
|  |  | #C769FF | #9E53C9 | - | CAMERA_HUE | 相机 |
|  |  |  |  |  | CAMERA_QRCODE_HUE | 相机 - 二维码 |
|  |  |  |  |  | AI_COGNITIVE_HUE | 认知AI |
|  |  | #5574F8 | #4259C2 | - | AI_HUE | 分类AI |
|  |  | #8647F3 | #6837BD | - | AI_GAME_HUE | 游戏AI |
|  |  | #14B390 | #0E7D65 | - | ADVANCED_HUE | 高级 |
|  |  | #007E8C | #007E8C | - | HARDWARE_HUE | 硬件 |
| **主题颜色常量说明<br>**以下颜色常量的对应颜色会根据编辑器的主题变化<br>截止本文最后更新时间，除了海龟2的黑夜模式使用暗色主题，其它编辑器均使用亮色主题 |  |  |  |  |  |  |
| 亮色主题颜色常量 | 蓝 | #68CDFF | #53A2C9 | #60BEED | BLUE_1 | 控制 |
|  |  | #64B5F6 | #4E8CBF | - | BLUE_2 | AI对话（KN）<br>教学（Maker）<br>事件参数积木（KN） |
|  |  | #608FEE | #496EB8 | - | BLUE_3 | 事件 |
|  |  | #5574F8 | #4259C2 | - | BLUE_4 | 分类AI积木（K3 K4） |
|  |  |  |  |  |  | Microbit V2（海龟2白天）<br>Weeemake（海龟2白天） |
|  |  |  |  |  |  | 数据通信、联网（Maker） |
|  |  | #3FA1EF | #307CBA | - | BLUE_5 | Web服务（Maker） |
|  |  | #00AFC3 | #007E8C | - | BLUE_6 | 硬件 |
|  |  |  |  |  |  | 行星（海龟2白天） |
|  |  |  |  |  |  | Microbit V2 - 引脚（KN） |
|  |  |  |  |  |  | 功能（CoCo） |
|  | 紫 | #E76CEA | #B353B5 | #D858D8 | PURPLE_1 | 外观 |
|  |  |  |  |  |  | Microbit V2 - LED（KN） |
|  |  |  |  |  |  | 点点猫 - LED（KN） |
|  |  |  |  |  |  | TUDAO Master - 灯光（KN） |
|  |  |  |  |  |  | 属性（CoCo） |
|  |  | #C769FF | #9E53C9 | - | PURPLE_2 | 相机/认知AI（K3 K4） |
|  |  |  |  |  |  | AI摄像头（海龟2白天） |
|  |  |  |  |  |  | 文本识别（KN） |
|  |  |  |  |  |  | 界面积木（KN） |
|  |  | #A073FF | #7E5BC9 | - | PURPLE_3 | 声音/视频（K3 K4） |
|  |  |  |  |  |  | Microbit V2 - 蜂鸣器（KN） |
|  |  |  |  |  |  | 点点猫 - 扬声器（KN） |
|  |  |  |  |  |  | 字典、声音（海龟2白天）<br>字典（CoCo） |
|  |  | #7D68F1 | #6151BD | - | PURPLE_4 | 分类AI（KN）<br>字典（海龟1） |
|  |  | #8647F3 | #6837BD | - | PURPLE_5 | 游戏AI积木（K3 K4） |
|  |  |  |  |  |  | 魔法棒（KN） |
|  |  | #9D47E0 | #7937AB | - | PURPLE_6 | - |
|  | 红 | #FF895F | #C96C4B | - | RED_1 | 特效积木（KN） |
|  |  | #F46767 | #BF5050 | - | RED_2 | 动作 |
|  |  |  |  |  |  | 小猫板（KN） |
|  |  |  |  |  |  | Microbit V2 - 舵机（KN） |
|  |  |  |  |  |  | 点点猫 - 震动（KN） |
|  |  |  |  |  |  | TUDAO Master - 动力（KN） |
|  |  |  |  |  |  | TUDAO Lite（KN） |
|  |  |  |  |  |  | 哪吒（海龟2白天） |
|  |  | #E65D2D | #B04923 | - | RED_3 | - |
|  |  | #E04852 | #AB373E | - | RED_4 | 物理 |
|  |  | #E94585 | #B33665 | - | RED_5 | - |
|  |  | #FF6795 | #C95175 | - | RED_6 | - |
|  | 橙 | #F9CC37 | #E2B51F | #EDBE24 | ORANGE_1 | 列表 |
|  |  | #FFBB55 | #C99342 | - | ORANGE_2 | 变量 |
|  |  | #FEAE8A | #E58B63 | #EC9972 | ORANGE_3 | 运算 |
|  |  | #F88767 | #C26A51 | #FF7E2E | ORANGE_4 | 函数 |
|  |  | #FC942C | #C77422 | - | ORANGE_5 | 串口（Maker） |
|  |  | #EE8F13 | #B86E0F | - | ORANGE_6 | - |
|  |  | #FF7E2E | #C26A51 | - | ORANGE_7 | - |
|  | 绿 | #C9D926 | #98A31D | - | GREEN_1 | - |
|  |  | #A3DE2B | #7BA820 | - | GREEN_2 | 联机（KN） |
|  |  | #77D657 | #51AD2F | #54BE2F | GREEN_3 | 侦测 |
|  |  |  |  |  |  | Microbit V2 - 输入（KN） |
|  |  |  |  |  |  | 点点猫 - 输入（KN） |
|  |  |  |  |  |  | TUDAO Master - 感知（KN） |
|  |  |  |  |  |  | 字符串（海龟2白天） |
|  |  | #57B937 | #3F8528 | - | GREEN_4 | 摄像（KN） |
|  |  |  |  |  |  | 语音识别（海龟2白天） |
|  |  | #14B390 | #0E7D65 | - | GREEN_5 | 高级 |
|  |  | #2BC9A7 | #1F947B | - | GREEN_6 | 画笔 |
|  | 黑 | #999999 | #636363 | - | BLACK_1 | 注释（海龟2） |
|  |  | #4A4A4A | #141414 | - | BLACK_2 | - |
| 暗色主题颜色常量 | 蓝 | #2DB3E3 | #348DAD | #29A6D4 | BLUE_1 | 控制（海龟2黑夜） |
|  |  | #3290E6 | #3876B0 | - | BLUE_2 | - |
|  |  | #3567E6 | #284FB0 | - | BLUE_3 | 事件（海龟2黑夜） |
|  |  | #384CE8 | #2B3BB3 | - | BLUE_4 | Microbit V2（海龟2黑夜）<br>Weeemake（海龟2黑夜） |
|  |  | #1E97D1 | #16719C | - | BLUE_5 | - |
|  |  | #00A9BD | #007A87 | - | BLUE_6 | 行星（海龟2黑夜） |
|  | 紫 | #D158D0 | #9C419C | #BD43BC | PURPLE_1 | - |
|  |  | #BB62F0 | #924CBA | - | PURPLE_2 | AI摄像头（海龟2黑夜） |
|  |  | #893BE3 | #692DAD | - | PURPLE_3 | 字典、声音（海龟2黑夜） |
|  |  | #624AE8 | #4B39B3 | - | PURPLE_4 | - |
|  |  | #6924E3 | #511CAD | - | PURPLE_5 | - |
|  |  | #872AD1 | #661F9C | - | PURPLE_6 | - |
|  | 红 | #FA865D | #C46A49 | - | RED_1 | - |
|  |  | #E64545 | #B04646 | - | RED_2 | 哪吒（海龟2黑夜） |
|  |  | #E6521E | #B04017 | - | RED_3 | - |
|  |  | #C23D3A | #8C2C2A | - | RED_4 | - |
|  |  | #E34382 | #AD3463 | - | RED_5 | - |
|  |  | #FA6592 | #C44F72 | - | RED_6 | - |
|  | 橙 | #E8C552 | #B3973E | #D9B337 | ORANGE_1 | 列表（海龟2黑夜） |
|  |  | #EDB157 | #B88944 | - | ORANGE_2 | 变量（海龟2黑夜） |
|  |  | #F09972 | #BA7859 | #E6875D | ORANGE_3 | 运算（海龟2黑夜） |
|  |  | #F28465 | #BD674F | #FF7824 | ORANGE_4 | - |
|  |  | #F7912B | #C27121 | - | ORANGE_5 | - |
|  |  | #E08103 | #AB6202 | - | ORANGE_6 | - |
|  |  | #FF7824 | #BD674F | - | ORANGE_7 | - |
|  | 绿 | #B0C200 | #8D990C | - | GREEN_1 | - |
|  |  | #8CC714 | #739E1E | - | GREEN_2 | - |
|  |  | #63C243 | #488C31 | - | GREEN_3 | 字符串（海龟2黑夜） |
|  |  | #53B034 | #3A7A25 | - | GREEN_4 | 语音识别（海龟2黑夜） |
|  |  | #13AD8B | #0C6E59 | - | GREEN_5 | - |
|  |  | #28BA9B | #1C856E | - | GREEN_6 | 海龟库（海龟2黑夜） |
|  | 黑 | #999999 | #636363 | - | BLACK_1 | 注释（海龟2） |
|  |  | #4A4A4A | #141414 | - | BLACK_2 | - |
| 自定义颜色说明<br>由于部分积木使用自定义颜色，未在常量中定义，故以下颜色均为截图取色获取 |  |  |  |  |  |  |
| KN | - | #723FFE | #5223D5 | #643BD9 | - | 函数（KN） |
|  |  | #8257FF | #643BD9 | - | - | 函数参数（KN） |

# 注释

① 编辑器并非完全使用**积木盒颜色** **常量** ，而是**主题颜色常量** /**积木盒颜色** **常量** 混用。

② 标黄的`对应积木/积木盒`表示**不在积木盒颜色定义** 中

# 使用方法

> 如需在 JSON 中使用本地化令牌，请将要本地化的字符串替换为**令牌引用** 。令牌引用的格式为 `%{BKY_``**TOKEN** ``}`。
> 
> —— Blockly指南 - 本地化 - 在 JSON 中使用本地化令牌

[👉 Blockly指南 - 本地化 - 在 JSON 中使用本地化令牌](https://developers.google.cn/blockly/guides/configure/web/translations?hl=zh-cn#use_localization_tokens_in_json)

`%{BKY_``**常量名** ``}`

*(测试证明*`*%{COLOR_KEY}*`*也是可以的...所以为什么要这样)*