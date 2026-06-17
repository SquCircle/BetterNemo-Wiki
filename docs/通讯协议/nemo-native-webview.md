# [Nemo] Native ↔ Webview
![image]([Nemo] Native ↔ Webview/WMV4b8s45oMy2IxN1QZcgEyfnhe.png)

> 💡 
> 上面那图存在错误，随便看看行了，我懒得重新画

#   【Native -> Web】

## **_dsf.postMessage**

### 调用方法

**_dsf.postMessage(类型, ?数据, ?回调)**

### INIT_WEBVIEW_DATA 初始化Webview数据

```javascript
{
    "avatar_url": "【用户头像URL】",
    "bcm_version": "0.16.2",
    "context_menu_with_set_block_visibility": true,
    "enable_hide": false,
    "is_login": true,
    "is_pad": false,
    "nickname": "【用户昵称】",
    "sidebar_width": 64,
    "stage_position": {
        "portrait": {
            "fullscreen": {
                "bottom": 0,
                "height": 591,
                "left": 0,
                "ratio": 0,
                "right": 0,
                "top": 0,
                "width": 369
            },
            "normal": {
                "bottom": 0,
                "height": 369,
                "left": 0,
                "ratio": 0,
                "right": 0,
                "top": 0,
                "width": 231
            }
        }
    },
    "toolbox_mode": "normal",
    "translucent_block_visible": "translucent",
    "user_id": "【用户ID】",
    "user_level": 1, // 用户等级
    "user_token": "【用户TOKEN】",
    "webview_height": 0,
    "work_id": "【作品ID】"
}
```

### SELECT_SCENE 选择屏幕

样例数据：{"scene_id": "700824a5-44a8-4d03-a7e8-aa95d87e9b2a"}

### HIDE_ERROR_TOAST 隐藏错误弹窗

### SET_THEATRE_VISIBLE 设置舞台可见性

false/true

### SET_RUN_STATE 设置运行状态

false/true

### SCENE_SET_PROPERTY 设置屏幕属性

样例数据：{"property_name":"current_style_id","scene_id":"700824a5-44a8-4d03-a7e8-aa95d87e9b2a","value":"623b814d-52e2-4971-8dca-7586d2a385c2"}\

### ADD_SOUNDS

样例数据：{"sounds":[{"ext":"aac","id":"5abc4620-2578-41f1-94b9-852fb8f2633e","name":"乡村","url":"res/raw/s_101.mp3"}]}

### SET_ASK_POSITION

### RESET_ASK_POSITION

### SELECT_ACTOR 选择角色

样例数据：{"actor_id": "619fd636-5c60-4be7-82ed-95c180d34585"}

### BLOCK_UNDO 撤回

### BLOCK_REDO 重做

### FINISH_EDITING_PROCEDURE 完成编辑函数

#### 参数

样例：true

### ACTOR_SET_PROPERTY 设置角色属性

#### 参数

样例：{"actor_id":"619fd636-5c60-4be7-82ed-95c180d34585","property_name":"scale","value":{"scale":153.005066732123,"styles_center_point":{"4b1459ee-0d00-4055-b6dc-673dd01cd26a":{"x":0.0,"y":0.0},"edd7984c-7a4e-47d7-a88d-7dca54079dd3":{"x":0.0,"y":0.0},"7eb43fb3-f1a0-4fcc-b4eb-417266896b28":{"x":0.0,"y":0.0},"b964efd2-7835-4000-a3b0-15f4ca776732":{"x":0.0,"y":0.0},"02bd7cb1-eb43-4b27-a14e-753b2e74de84":{"x":0.0,"y":0.0}}}}

### THEATRE_FULL_SCREEN 设置舞台全屏

#### 参数

样例：{"visible":true}

### SET_DEBUG_STATE 设置调试状态

#### 参数

样例：false

### TOGGLE_EDITOR 切换辅助线可见性

#### 参数

样例：true

### ACTOR_PIVOT_EDIT 切换角色中心点编辑状态

#### 参数

样例：true

### SET_STYLES_CENTER_POINT 设置造型中心点

#### 参数

样例：{"actor_id":"619fd636-5c60-4be7-82ed-95c180d34585","position":{"x":-90.0,"y":87.0},"styles_center_point":{"7eb43fb3-f1a0-4fcc-b4eb-417266896b28":{"x":0.0,"y":0.0},"02bd7cb1-eb43-4b27-a14e-753b2e74de84":{"x":0.0,"y":0.0},"b964efd2-7835-4000-a3b0-15f4ca776732":{"x":0.0,"y":0.0},"edd7984c-7a4e-47d7-a88d-7dca54079dd3":{"x":0.0,"y":0.0},"4b1459ee-0d00-4055-b6dc-673dd01cd26a":{"x":0.0,"y":0.0}}}

### ADD_ACTORS 添加角色

#### 参数

{"actors":[{"blocksXML":"","current_style_id":"9e4423cd-7593-4014-a7e4-1b807583846c","hidden_in_edit":false,"id":"03426ec6-a399-4b87-b248-10166bf49fe6","locked":false,"name":"星能猫跳跳","rotation":0.0,"scale":100.0,"scene_id":"700824a5-44a8-4d03-a7e8-aa95d87e9b2a","styles":["9e4423cd-7593-4014-a7e4-1b807583846c","861b9469-76b4-4f0d-a5fd-b09e31ea408b","6edd9151-a392-4d6b-a4ff-be56e60ada0d","f04409b6-6e05-4ad1-afec-1bca5d806f42","f5f35b90-5287-43e5-8950-0eda514229c0"],"visible":true,"x":0.0,"y":0.0}],"indexes":[2],"styles":[{"center_point":{"x":0.0,"y":0.0},"id":"9e4423cd-7593-4014-a7e4-1b807583846c","name":"星能猫跳跳","path":"file:///android_asset/webview/res/drawable/a_7107_1.png","texture":"res/drawable/a_7107_1.png"},{"center_point":{"x":0.0,"y":0.0},"id":"861b9469-76b4-4f0d-a5fd-b09e31ea408b","name":"星能猫跳跳","path":"file:///android_asset/webview/res/drawable/a_7107_2.png","texture":"res/drawable/a_7107_2.png"},{"center_point":{"x":0.0,"y":0.0},"id":"6edd9151-a392-4d6b-a4ff-be56e60ada0d","name":"星能猫跳跳","path":"file:///android_asset/webview/res/drawable/a_7107_3.png","texture":"res/drawable/a_7107_3.png"},{"center_point":{"x":0.0,"y":0.0},"id":"f04409b6-6e05-4ad1-afec-1bca5d806f42","name":"星能猫跳跳","path":"file:///android_asset/webview/res/drawable/a_7107_4.png","texture":"res/drawable/a_7107_4.png"},{"center_point":{"x":0.0,"y":0.0},"id":"f5f35b90-5287-43e5-8950-0eda514229c0","name":"星能猫跳跳","path":"file:///android_asset/webview/res/drawable/a_7107_5.png","texture":"res/drawable/a_7107_5.png"}]}

### GET_ENTITY_BLOCK_COUNT 获取实体积木计数

#### 参数

{"entity_id": "700824a5-44a8-4d03-a7e8-aa95d87e9b2a"}

### REMOVE_ACTOR_STYLES 删除角色造型

#### 参数

{"actor_id":"e56e8890-da8e-481f-b4e1-e4844ea204bd","style_ids":["287b0a39-b2c4-4ff2-a2d7-740e2fae8c77"]}

### SET_ENTITY_STYLES 设置实体造型

#### 参数

{"current_style_id":"0fe454ea-165d-406e-9e64-d021872e3063","entity_id":"700824a5-44a8-4d03-a7e8-aa95d87e9b2a","styles":[{"center_point":{"x":0.0,"y":0.0},"id":"623b814d-52e2-4971-8dca-7586d2a385c2","name":"背景","path":"file:///android_asset/webview/res/drawable/default_empty_background.png","texture":"res/drawable/default_empty_background.png"},{"id":"0fe454ea-165d-406e-9e64-d021872e3063","name":"草原","path":"/data/user/0/com.better.nemo.dev/files/nemo_users_db/res/drawable/b_301.png","texture":"res/drawable/b_301.png"}]}

### CLOSE_BLUETOOTH_CONNECTION_PAGE 关闭蓝牙连接页

## _dsaf.postMessageAsyn

### 调用方法

**_dsaf.postMessageAsyn(类型, ?数据, ?回调)**

### LOAD_BCM 加载作品数据

#### 参数

```json
{
    "actors": {
        "actors_dict": {
            "619fd636-5c60-4be7-82ed-95c180d34585": {
                "blocksXML": "",
                "current_style_id": "4b1459ee-0d00-4055-b6dc-673dd01cd26a",
                "hidden_in_edit": false,
                "id": "619fd636-5c60-4be7-82ed-95c180d34585",
                "locked": false,
                "name": "编程猫跳跳",
                "rotation": 0.0,
                "scale": 100.0,
                "scene_id": "700824a5-44a8-4d03-a7e8-aa95d87e9b2a",
                "styles": [
                    "4b1459ee-0d00-4055-b6dc-673dd01cd26a",
                    "edd7984c-7a4e-47d7-a88d-7dca54079dd3",
                    "7eb43fb3-f1a0-4fcc-b4eb-417266896b28",
                    "b964efd2-7835-4000-a3b0-15f4ca776732",
                    "02bd7cb1-eb43-4b27-a14e-753b2e74de84"
                ],
                "visible": true,
                "x": -46.0,
                "y": 66.0
            },
            "62ec85d1-6e32-4bb4-bafe-4edbe940a312": {
                "blocksXML": "\u003cblock type\u003d\"start_on_click\" id\u003d\"GGMGdukqj2byZ4XbfVVb\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"107\" y\u003d\"89\"\u003e\u003cnext\u003e\u003cblock type\u003d\"variables_set\" id\u003d\"DP1S0qoOnx7aqfwlrwNv\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"VAR\"\u003e01c9635d-7867-44c8-b8fd-36ee6766f9c8\u003c/field\u003e\u003cvalue name\u003d\"VALUE\"\u003e\u003cshadow xmlns\u003d\"\" type\u003d\"math_number\" id\u003d\"cyuXn9kw3sDUD678II3W\" visible\u003d\"visible\"\u003e\u003cfield constraints\u003d\"-Infinity,Infinity,0,\" allow_text\u003d\"true\" name\u003d\"NUM\"\u003e0\u003c/field\u003e\u003c/shadow\u003e\u003cblock type\u003d\"get_stage_imageData\" id\u003d\"eJyy0Gaq19pH1mOYhuYa\" visible\u003d\"visible\"\u003e\u003cvalue name\u003d\"range\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"L287nidvppXq1qhmKpay\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003e[0,0,100,100]\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e",
                "current_style_id": "81b2eaeb-af4c-422b-861b-613fba8881dc",
                "hidden_in_edit": false,
                "id": "62ec85d1-6e32-4bb4-bafe-4edbe940a312",
                "locked": false,
                "name": "编程猫跳跳1",
                "rotation": 0.0,
                "scale": 100.0,
                "scene_id": "700824a5-44a8-4d03-a7e8-aa95d87e9b2a",
                "styles": [
                    "81b2eaeb-af4c-422b-861b-613fba8881dc",
                    "67e6a6b8-65ec-4fe6-9379-ceeecd00a587",
                    "da594577-5566-4614-bbae-b5485cc18150",
                    "243071b0-2493-4dcf-a860-ccf22b4c29f4",
                    "bbc8e3a9-abb0-4ef8-8a3b-69f44b67b888"
                ],
                "visible": true,
                "x": 90.0,
                "y": -195.0
            }
        },
        "current_actor": "62ec85d1-6e32-4bb4-bafe-4edbe940a312"
    },
    "app_version": "2.3.0",
    "audios": {
        "sounds": {}
    },
    "block_count": {
        "all_block_count": 24,
        "visible_block_count": 24
    },
    "broadcast": {
        "broadcast_dict": {}
    },
    "procedures": {
        "procedure_dict": {}
    },
    "project_name": "新的作品",
    "scenes": {
        "current_scene": "700824a5-44a8-4d03-a7e8-aa95d87e9b2a",
        "scenes_dict": {
            "700824a5-44a8-4d03-a7e8-aa95d87e9b2a": {
                "actors": [
                    "619fd636-5c60-4be7-82ed-95c180d34585",
                    "62ec85d1-6e32-4bb4-bafe-4edbe940a312"
                ],
                "blocksXML": "\u003cblock type\u003d\"start_on_click\" id\u003d\"hyuMAR5J3tKMqoJ6krLV\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"119\" y\u003d\"-1\"\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_connect\" id\u003d\"x9bCMD5bAiu3e1H8N7xu\" visible\u003d\"visible\" inline\u003d\"false\" x\u003d\"213\" y\u003d\"103\"\u003e\u003cvalue name\u003d\"address\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"q9XXUIo1HLzQkAG7DXra\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003ewss://bemfa.com:9504/wss\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cvalue name\u003d\"clientID\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"6364luNG1u2lfzLqKRtK\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003e38c3a1b0634b4ad5ba39330d82ef002b\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cvalue name\u003d\"user\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"qL2MIiMjEk6RfHJ2dRaT\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003e\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cvalue name\u003d\"password\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"SJEWjFhYg8I1KdXR1byv\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003e\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cvalue name\u003d\"reconnectPeriod\"\u003e\u003cshadow type\u003d\"math_number\" id\u003d\"1Y49zvqgfIFJXiun4hV7\" visible\u003d\"visible\"\u003e\u003cfield constraints\u003d\"-Infinity,Infinity,0,\" name\u003d\"NUM\"\u003e2000\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cvalue name\u003d\"connectTimeout\"\u003e\u003cshadow type\u003d\"math_number\" id\u003d\"65LmrNqQeU9fyJpfEqbs\" visible\u003d\"visible\"\u003e\u003cfield constraints\u003d\"-Infinity,Infinity,0,\" name\u003d\"NUM\"\u003e10000\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_on_disconnect\" id\u003d\"56LeDLbwyHVq9chBm23n\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"114\" y\u003d\"363\"\u003e\u003cnext\u003e\u003cblock type\u003d\"show_stage_dialog\" id\u003d\"MbMgrPfKkcZFRvqJXzNo\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"sprite\"\u003e__self\u003c/field\u003e\u003cvalue name\u003d\"text\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"S92WPj6EWkdVM3qZxdx7\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003edis\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_on_error\" id\u003d\"G33h3LTmJ2rXb2xz75zF\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"162\" y\u003d\"447\"\u003e\u003cvalue name\u003d\"param\"\u003e\u003cblock type\u003d\"__bn_mqtt_on_error_message\" id\u003d\"7pS0458Wes8VsTkv7139\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"TEXT\"\u003e错误信息\u003c/field\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext\u003e\u003cblock type\u003d\"show_stage_dialog\" id\u003d\"D8GOFSKoOuECADfkyWrh\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"sprite\"\u003e__self\u003c/field\u003e\u003cvalue name\u003d\"text\"\u003e\u003cshadow xmlns\u003d\"\" type\u003d\"text\" id\u003d\"jMG2Vp1WcNkTpbNx4VdP\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003eHi\u003c/field\u003e\u003c/shadow\u003e\u003cblock type\u003d\"bn_mqtt_on_error_message\" id\u003d\"uzGWxs2tHmNItppojrAK\" visible\u003d\"visible\"\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_on_reconnect\" id\u003d\"cQZ55pCzJBJMs7VA4lzZ\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"133\" y\u003d\"556\"\u003e\u003cnext\u003e\u003cblock type\u003d\"show_stage_dialog\" id\u003d\"0eJpYQmTlYQrPLo7m3R9\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"sprite\"\u003e__self\u003c/field\u003e\u003cvalue name\u003d\"text\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"1sF87LUJtZOHVsKU5DoJ\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003ere\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_on_message\" id\u003d\"LXVhTK3nAoVXsJ37xMgy\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"410\" y\u003d\"622\"\u003e\u003cvalue name\u003d\"param\"\u003e\u003cblock type\u003d\"__bn_mqtt_on_message_message\" id\u003d\"APjWQ9WOhT3cqykfCX5u\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"TEXT\"\u003e消息\u003c/field\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext\u003e\u003cblock type\u003d\"show_stage_dialog\" id\u003d\"r01XJeJ8DjPP9ddEu9TH\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"sprite\"\u003e__self\u003c/field\u003e\u003cvalue name\u003d\"text\"\u003e\u003cshadow xmlns\u003d\"\" type\u003d\"text\" id\u003d\"tysbK6LibeSRh0Hk6PTA\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003ere\u003c/field\u003e\u003c/shadow\u003e\u003cblock type\u003d\"bn_mqtt_on_message_message\" id\u003d\"clJJHSLQtPllpgzj5gy9\" visible\u003d\"visible\"\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_on_connect\" id\u003d\"2Zb1L5Lqt72VvXwDtwnp\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"113\" y\u003d\"670\"\u003e\u003cnext\u003e\u003cblock type\u003d\"bn_mqtt_subscribe\" id\u003d\"yY5ErC2B4LTuCUpud1ZB\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cvalue name\u003d\"topic\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"Ofm1wYAmk8lzU1e2tIbK\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003enemo002\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cnext\u003e\u003cblock type\u003d\"show_stage_dialog\" id\u003d\"P53bwJbEYWkSrAXQJRkP\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"sprite\"\u003e__self\u003c/field\u003e\u003cvalue name\u003d\"text\"\u003e\u003cshadow type\u003d\"text\" id\u003d\"mBi2sKVuaJa6clA48m4m\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003eok\u003c/field\u003e\u003c/shadow\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e\u003cblock type\u003d\"bn_mqtt_on_publish_error\" id\u003d\"diTKgSIgmYj9mc3jzjTZ\" visible\u003d\"visible\" inline\u003d\"true\" x\u003d\"141\" y\u003d\"824\"\u003e\u003cvalue name\u003d\"param\"\u003e\u003cblock type\u003d\"__bn_mqtt_on_publish_error_message\" id\u003d\"ST2B5n3R5c8rrXbOxAv1\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"TEXT\"\u003e错误信息\u003c/field\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext\u003e\u003cblock type\u003d\"show_stage_dialog\" id\u003d\"z5CRX1NgxN5LwlEOnhDX\" visible\u003d\"visible\" inline\u003d\"true\"\u003e\u003cfield name\u003d\"sprite\"\u003e__self\u003c/field\u003e\u003cvalue name\u003d\"text\"\u003e\u003cshadow xmlns\u003d\"\" type\u003d\"text\" id\u003d\"xAJPhxqUwPVQJljZymDs\" visible\u003d\"visible\"\u003e\u003cfield name\u003d\"TEXT\"\u003eok\u003c/field\u003e\u003c/shadow\u003e\u003cblock type\u003d\"bn_mqtt_on_publish_error_message\" id\u003d\"Rot9Pnu08Vts7JUhEFUV\" visible\u003d\"visible\"\u003e\u003c/block\u003e\u003c/value\u003e\u003cnext last_next_in_stack\u003d\"true\"\u003e\u003c/next\u003e\u003c/block\u003e\u003c/next\u003e\u003c/block\u003e",
                "current_style_id": "623b814d-52e2-4971-8dca-7586d2a385c2",
                "id": "700824a5-44a8-4d03-a7e8-aa95d87e9b2a",
                "name": "背景",
                "styles": [
                    "623b814d-52e2-4971-8dca-7586d2a385c2"
                ],
                "visible": true
            }
        },
        "scenes_order": [
            "700824a5-44a8-4d03-a7e8-aa95d87e9b2a"
        ]
    },
    "split_options": {
        "options_dict": {
            "_split_comma": {
                "id": "_split_comma",
                "name": ","
            },
            "_split_space": {
                "id": "_split_space",
                "name": "空格"
            },
            "_split_minus": {
                "id": "_split_minus",
                "name": "-"
            }
        }
    },
    "stage_size": {
        "height": 900.0,
        "width": 562.0
    },
    "styles": {
        "styles_dict": {
            "623b814d-52e2-4971-8dca-7586d2a385c2": {
                "id": "623b814d-52e2-4971-8dca-7586d2a385c2",
                "name": "背景",
                "path": "file:///android_asset/webview/res/drawable/default_empty_background.png",
                "texture": "res/drawable/default_empty_background.png"
            },
            "4b1459ee-0d00-4055-b6dc-673dd01cd26a": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "4b1459ee-0d00-4055-b6dc-673dd01cd26a",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_1.png",
                "texture": "res/drawable/a_7101_1.png"
            },
            "edd7984c-7a4e-47d7-a88d-7dca54079dd3": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "edd7984c-7a4e-47d7-a88d-7dca54079dd3",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_2.png",
                "texture": "res/drawable/a_7101_2.png"
            },
            "7eb43fb3-f1a0-4fcc-b4eb-417266896b28": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "7eb43fb3-f1a0-4fcc-b4eb-417266896b28",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_3.png",
                "texture": "res/drawable/a_7101_3.png"
            },
            "b964efd2-7835-4000-a3b0-15f4ca776732": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "b964efd2-7835-4000-a3b0-15f4ca776732",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_4.png",
                "texture": "res/drawable/a_7101_4.png"
            },
            "02bd7cb1-eb43-4b27-a14e-753b2e74de84": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "02bd7cb1-eb43-4b27-a14e-753b2e74de84",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_5.png",
                "texture": "res/drawable/a_7101_5.png"
            },
            "81b2eaeb-af4c-422b-861b-613fba8881dc": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "81b2eaeb-af4c-422b-861b-613fba8881dc",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_1.png",
                "texture": "res/drawable/a_7101_1.png"
            },
            "67e6a6b8-65ec-4fe6-9379-ceeecd00a587": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "67e6a6b8-65ec-4fe6-9379-ceeecd00a587",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_2.png",
                "texture": "res/drawable/a_7101_2.png"
            },
            "da594577-5566-4614-bbae-b5485cc18150": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "da594577-5566-4614-bbae-b5485cc18150",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_3.png",
                "texture": "res/drawable/a_7101_3.png"
            },
            "243071b0-2493-4dcf-a860-ccf22b4c29f4": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "243071b0-2493-4dcf-a860-ccf22b4c29f4",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_4.png",
                "texture": "res/drawable/a_7101_4.png"
            },
            "bbc8e3a9-abb0-4ef8-8a3b-69f44b67b888": {
                "center_point": {
                    "x": 0.0,
                    "y": 0.0
                },
                "id": "bbc8e3a9-abb0-4ef8-8a3b-69f44b67b888",
                "name": "编程猫跳跳",
                "path": "file:///android_asset/webview/res/drawable/a_7101_5.png",
                "texture": "res/drawable/a_7101_5.png"
            }
        }
    },
    "toolbox": {
        "devices": [
            "microbit"
        ]
    },
    "variable": {
        "variable_dict": {
            "01c9635d-7867-44c8-b8fd-36ee6766f9c8": {
                "create_time": 1770906184,
                "id": "01c9635d-7867-44c8-b8fd-36ee6766f9c8",
                "is_global": true,
                "name": "wow",
                "offset": {
                    "x": 0.0,
                    "y": 0.0
                },
                "position": {
                    "x": -271.0,
                    "y": 442.0
                },
                "scale": 1.0,
                "theme": "common",
                "type": "any",
                "value": 0.0,
                "valueForDebug": [
                    "0"
                ],
                "visible": true
            }
        }
    }
}
```

#### 返回

样例：true

### HAS_EVENT_BLOCKS 是否含有指定的事件积木

> /src/webview/bridge/messages.ts:346
> 
> 业务场景: 探月端如果学生的作品中不含有指定的事件积木则不让提交

样例返回：true

### REQUEST_ALL_SAVE_DATA 请求所有保存数据

#### 样例返回

```json
{
    "xml": {
        "619fd636-5c60-4be7-82ed-95c180d34585": "",
        "62ec85d1-6e32-4bb4-bafe-4edbe940a312": "<block type=\"stamp\" id=\"mtRuGqSQV2x0TNxoOG2m\" visible=\"visible\" inline=\"true\" x=\"138\" y=\"20\"><mutation items=\"1\"></mutation><field name=\"ALIGN\">CENTER</field><value name=\"TEXT\"><shadow type=\"text\" id=\"FEoRx1NTualPesyeIHRn\" visible=\"visible\"><field name=\"TEXT\">Hello</field></shadow></value><value name=\"SIZE\"><shadow type=\"math_number\" id=\"EEvhMgmLJUzAV9myo1LM\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">24</field></shadow></value><next last_next_in_stack=\"true\"></next></block><block type=\"start_on_click\" id=\"GGMGdukqj2byZ4XbfVVb\" visible=\"visible\" inline=\"true\" x=\"107\" y=\"89\"><next><block type=\"audio__play_audio\" id=\"BGtq30NBTEcYmjgFRj57\" visible=\"visible\" inline=\"true\"><value name=\"audio\"><shadow type=\"sound_get\" id=\"NcLPzFbk9HpDwYnDtfn8\" visible=\"visible\" inline=\"true\"><field name=\"audio\">nothing</field></shadow></value><next><block type=\"variables_set\" id=\"DP1S0qoOnx7aqfwlrwNv\" visible=\"visible\" inline=\"true\"><field name=\"VAR\">?</field><value name=\"VALUE\"><shadow xmlns=\"\" type=\"math_number\" id=\"cyuXn9kw3sDUD678II3W\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow><block type=\"get_stage_imageData\" id=\"eJyy0Gaq19pH1mOYhuYa\" visible=\"visible\"><value name=\"range\"><shadow type=\"text\" id=\"L287nidvppXq1qhmKpay\" visible=\"visible\"><field name=\"TEXT\">[0,0,100,100]</field></shadow></value></block></value><next last_next_in_stack=\"true\"></next></block></next></block></next></block><block type=\"lists_is_exist\" id=\"PUFyPnCBnrHe1IvLSEPo\" visible=\"visible\" inline=\"true\" x=\"300\" y=\"127\"><value name=\"VAR\"><shadow type=\"lists_get\" id=\"FLEGTh4TQMfzrFMWzA3c\" visible=\"visible\" inline=\"true\"><field name=\"VAR\">47e95fbd-9554-4edf-82cb-b790735381d2</field></shadow></value><value name=\"VALUE\"><shadow type=\"math_number\" id=\"nuuLNbszpvd4QnFCVe4U\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow></value></block><block type=\"text_split\" id=\"K34xQs1CyCMgkvJiuxij\" visible=\"visible\" inline=\"true\" x=\"317\" y=\"243\"><value name=\"TEXT_TO_SPLIT\"><shadow type=\"text\" id=\"cz8NPs7PxmwtaX10Mxdt\" visible=\"visible\"><field name=\"TEXT\">1,2,3,4</field></shadow></value><value name=\"SPLIT_TEXT\"><shadow type=\"get_split_options\" id=\"bB4s7JjxYed6d0Tq2uSH\" visible=\"visible\" inline=\"true\"><field name=\"option\">_split_space</field></shadow></value></block><block type=\"set_costume_by_index\" id=\"csbDkFXxVFDC5u7K6gZ5\" visible=\"visible\" inline=\"true\" x=\"134\" y=\"264\"><value name=\"index\"><shadow type=\"styles_index_get\" id=\"J3MrzRINaWx4Tb32Xxue\" visible=\"visible\" inline=\"true\"><field name=\"index\">1</field></shadow></value><next last_next_in_stack=\"true\"></next></block>",
        "03426ec6-a399-4b87-b248-10166bf49fe6": "<block type=\"audio__play_audio_and_wait\" id=\"XC8t72HpeEQmIaJE9EXo\" visible=\"visible\" inline=\"true\" x=\"98\" y=\"84\"><value name=\"audio\"><shadow type=\"sound_get\" id=\"4EUCCoWGCWEDqJXzDeLP\" visible=\"visible\" inline=\"true\"><field name=\"audio\">b145e036-e912-4b54-b0ee-4ff5228530b2</field></shadow></value><next last_next_in_stack=\"true\"></next></block><block type=\"midi__on_play_section\" id=\"Q0lBHi5EfFzbTCGTTLlX\" visible=\"visible\" inline=\"true\" x=\"142\" y=\"185\"><value name=\"audio\"><shadow type=\"midi_get\" id=\"MYFpHxyW2rG6OYwosB2O\" visible=\"visible\" inline=\"true\"><field name=\"audio\">b145e036-e912-4b54-b0ee-4ff5228530b2</field></shadow></value><value name=\"column\"><shadow type=\"math_number\" id=\"UsGqg1wXxn0LK9Eize2V\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">1</field></shadow></value></block><block type=\"on_phone_shake\" id=\"h1LqZ5aFIZ7o4P1fRILx\" visible=\"visible\" inline=\"true\" x=\"151\" y=\"235\"><next><block type=\"self_go_forward\" id=\"ry0PY3nxFDp0tJbhsBiC\" visible=\"visible\" inline=\"true\"><value name=\"steps\"><shadow type=\"math_number\" id=\"BvsoFQGB9nZ1GdhBKzv6\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">10</field></shadow></value><next last_next_in_stack=\"true\"></next></block></next></block>",
        "700824a5-44a8-4d03-a7e8-aa95d87e9b2a": "<block type=\"start_on_click\" id=\"hyuMAR5J3tKMqoJ6krLV\" visible=\"visible\" inline=\"true\" x=\"119\" y=\"-1\"><next><block type=\"self_move_specify\" id=\"QKxnMSJsbNXZWnhZkzIT\" visible=\"visible\" inline=\"true\"><field name=\"target\">619fd636-5c60-4be7-82ed-95c180d34585</field><next last_next_in_stack=\"true\"></next></block></next></block><block type=\"bump_into_color\" id=\"zrXqgF0oYii6wArj1ZIv\" visible=\"visible\" inline=\"true\" x=\"208\" y=\"87\"><field name=\"sprite\">619fd636-5c60-4be7-82ed-95c180d34585</field><field name=\"color\">#cc66cc</field></block><block type=\"bn_mqtt_connect\" id=\"x9bCMD5bAiu3e1H8N7xu\" visible=\"visible\" inline=\"false\" x=\"190\" y=\"115\"><value name=\"address\"><shadow type=\"text\" id=\"q9XXUIo1HLzQkAG7DXra\" visible=\"visible\"><field name=\"TEXT\">wss://bemfa.com:9504/wss</field></shadow></value><value name=\"clientID\"><shadow type=\"text\" id=\"6364luNG1u2lfzLqKRtK\" visible=\"visible\"><field name=\"TEXT\">38c3a1b0634b4ad5ba39330d82ef002b</field></shadow></value><value name=\"user\"><shadow type=\"text\" id=\"qL2MIiMjEk6RfHJ2dRaT\" visible=\"visible\"><field name=\"TEXT\"></field></shadow></value><value name=\"password\"><shadow type=\"text\" id=\"SJEWjFhYg8I1KdXR1byv\" visible=\"visible\"><field name=\"TEXT\"></field></shadow></value><value name=\"reconnectPeriod\"><shadow type=\"math_number\" id=\"1Y49zvqgfIFJXiun4hV7\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">2000</field></shadow></value><value name=\"connectTimeout\"><shadow type=\"math_number\" id=\"65LmrNqQeU9fyJpfEqbs\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">10000</field></shadow></value><next last_next_in_stack=\"true\"></next></block><block type=\"check_sence\" id=\"ZneMQSl615o7yWdCIC71\" visible=\"visible\" inline=\"true\" x=\"294\" y=\"208\"><field name=\"options\">false</field><value name=\"index\"><shadow type=\"scenes_index_get\" id=\"TLbldHviABDzzGhvKHMk\" visible=\"visible\" inline=\"true\"><field name=\"index\">1</field></shadow></value></block><block type=\"bn_mqtt_on_disconnect\" id=\"56LeDLbwyHVq9chBm23n\" visible=\"visible\" inline=\"true\" x=\"114\" y=\"363\"><next><block type=\"show_stage_dialog\" id=\"MbMgrPfKkcZFRvqJXzNo\" visible=\"visible\" inline=\"true\"><field name=\"sprite\">__self</field><value name=\"text\"><shadow type=\"text\" id=\"S92WPj6EWkdVM3qZxdx7\" visible=\"visible\"><field name=\"TEXT\">dis</field></shadow></value><next last_next_in_stack=\"true\"></next></block></next></block><block type=\"bn_mqtt_on_error\" id=\"G33h3LTmJ2rXb2xz75zF\" visible=\"visible\" inline=\"true\" x=\"162\" y=\"447\"><value name=\"param\"><block type=\"__bn_mqtt_on_error_message\" id=\"7pS0458Wes8VsTkv7139\" visible=\"visible\" inline=\"true\"><field name=\"TEXT\">错误信息</field></block></value><next><block type=\"show_stage_dialog\" id=\"D8GOFSKoOuECADfkyWrh\" visible=\"visible\" inline=\"true\"><field name=\"sprite\">__self</field><value name=\"text\"><shadow xmlns=\"\" type=\"text\" id=\"jMG2Vp1WcNkTpbNx4VdP\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow><block type=\"bn_mqtt_on_error_message\" id=\"uzGWxs2tHmNItppojrAK\" visible=\"visible\"></block></value><next last_next_in_stack=\"true\"></next></block></next></block><block type=\"bn_mqtt_on_reconnect\" id=\"cQZ55pCzJBJMs7VA4lzZ\" visible=\"visible\" inline=\"true\" x=\"133\" y=\"556\"><next><block type=\"show_stage_dialog\" id=\"0eJpYQmTlYQrPLo7m3R9\" visible=\"visible\" inline=\"true\"><field name=\"sprite\">__self</field><value name=\"text\"><shadow type=\"text\" id=\"1sF87LUJtZOHVsKU5DoJ\" visible=\"visible\"><field name=\"TEXT\">re</field></shadow></value><next last_next_in_stack=\"true\"></next></block></next></block><block type=\"bn_mqtt_on_message\" id=\"LXVhTK3nAoVXsJ37xMgy\" visible=\"visible\" inline=\"true\" x=\"410\" y=\"622\"><value name=\"param\"><block type=\"__bn_mqtt_on_message_message\" id=\"APjWQ9WOhT3cqykfCX5u\" visible=\"visible\" inline=\"true\"><field name=\"TEXT\">消息</field></block></value><next><block type=\"show_stage_dialog\" id=\"r01XJeJ8DjPP9ddEu9TH\" visible=\"visible\" inline=\"true\"><field name=\"sprite\">__self</field><value name=\"text\"><shadow xmlns=\"\" type=\"text\" id=\"tysbK6LibeSRh0Hk6PTA\" visible=\"visible\"><field name=\"TEXT\">re</field></shadow><block type=\"bn_mqtt_on_message_message\" id=\"clJJHSLQtPllpgzj5gy9\" visible=\"visible\"></block></value><next last_next_in_stack=\"true\"></next></block></next></block><block type=\"bn_mqtt_on_connect\" id=\"2Zb1L5Lqt72VvXwDtwnp\" visible=\"visible\" inline=\"true\" x=\"113\" y=\"670\"><next><block type=\"bn_mqtt_subscribe\" id=\"yY5ErC2B4LTuCUpud1ZB\" visible=\"visible\" inline=\"true\"><value name=\"topic\"><shadow type=\"text\" id=\"Ofm1wYAmk8lzU1e2tIbK\" visible=\"visible\"><field name=\"TEXT\">nemo002</field></shadow></value><next><block type=\"show_stage_dialog\" id=\"P53bwJbEYWkSrAXQJRkP\" visible=\"visible\" inline=\"true\"><field name=\"sprite\">__self</field><value name=\"text\"><shadow type=\"text\" id=\"mBi2sKVuaJa6clA48m4m\" visible=\"visible\"><field name=\"TEXT\">ok</field></shadow></value><next last_next_in_stack=\"true\"></next></block></next></block></next></block><block type=\"bn_mqtt_on_publish_error\" id=\"diTKgSIgmYj9mc3jzjTZ\" visible=\"visible\" inline=\"true\" x=\"141\" y=\"824\"><value name=\"param\"><block type=\"__bn_mqtt_on_publish_error_message\" id=\"ST2B5n3R5c8rrXbOxAv1\" visible=\"visible\" inline=\"true\"><field name=\"TEXT\">错误信息</field></block></value><next><block type=\"show_stage_dialog\" id=\"z5CRX1NgxN5LwlEOnhDX\" visible=\"visible\" inline=\"true\"><field name=\"sprite\">__self</field><value name=\"text\"><shadow xmlns=\"\" type=\"text\" id=\"xAJPhxqUwPVQJljZymDs\" visible=\"visible\"><field name=\"TEXT\">ok</field></shadow><block type=\"bn_mqtt_on_publish_error_message\" id=\"Rot9Pnu08Vts7JUhEFUV\" visible=\"visible\"></block></value><next last_next_in_stack=\"true\"></next></block></next></block>"
    },
    "block_count": 36,
    "block_count_visible_only": 36,
    "variable_dict": {
        "f5a569f1-fa05-4787-87fa-8957d0076aa1": {
            "create_time": 1771263341,
            "id": "f5a569f1-fa05-4787-87fa-8957d0076aa1",
            "is_global": true,
            "name": "www",
            "offset": {
                "x": 0,
                "y": 0
            },
            "position": {
                "x": -121.563805,
                "y": 348.28516
            },
            "scale": 1,
            "theme": "common",
            "type": "any",
            "value": 0,
            "valueForDebug": [
                "0"
            ],
            "visible": true
        },
        "47e95fbd-9554-4edf-82cb-b790735381d2": {
            "create_time": 1771263375,
            "id": "47e95fbd-9554-4edf-82cb-b790735381d2",
            "is_global": true,
            "name": "aaa",
            "offset": {
                "x": 0,
                "y": 0
            },
            "position": {
                "x": -271,
                "y": 376
            },
            "scale": 1,
            "theme": "common",
            "type": "list",
            "value": [],
            "valueForDebug": [],
            "visible": true
        },
        "AQB0DZvm": {
            "create_time": 1771263424,
            "id": "AQB0DZvm",
            "is_global": true,
            "name": "test",
            "offset": {
                "x": 0,
                "y": 0
            },
            "position": {
                "x": -117.17608,
                "y": 230.53531
            },
            "scale": 1,
            "theme": "common",
            "type": "public",
            "value": 0,
            "valueForDebug": [
                "0"
            ],
            "visible": true
        }
    },
    "broadcast_dict": {},
    "split_options": {
        "_split_comma": {
            "id": "_split_comma",
            "name": ","
        },
        "_split_space": {
            "id": "_split_space",
            "name": "空格"
        },
        "_split_minus": {
            "id": "_split_minus",
            "name": "-"
        }
    },
    "procedure_dict": {
        "db2b29f7-6f01-4780-96de-3067843e5bbe": {
            "blocksXML": "<block type=\"procedures_2_defnoreturn\" id=\"VIRXZ1i85uy80RAlrDBU\" visible=\"visible\" inline=\"true\" deletable=\"false\" x=\"0\" y=\"0\"><field name=\"NAME\">函数1</field></block>",
            "id": "db2b29f7-6f01-4780-96de-3067843e5bbe",
            "name": "函数1",
            "params": []
        }
    },
    "toolbox": {
        "devices": [
            "microbit"
        ]
    }
}
```

### SCREEN_SHOT_THEATRE 舞台截图

### CHANGE_RUNTIME_VARIABLES 改变运行时变量

#### 样例返回

{"variable_dict": [{"create_time": 1771263341, "id": "f5a569f1-fa05-4787-87fa-8957d0076aa1", "is_global": true, "name": "www", "offset": {"x": 0, "y": 0}, "position": {"x": -121.563805, "y": 348.28516}, "scale": 1, "theme": "common", "type": "any", "value": 0, "valueForDebug": ["0"], "visible": true}, {"create_time": 1771263375, "id": "47e95fbd-9554-4edf-82cb-b790735381d2", "is_global": true, "name": "aaa", "offset": {"x": 0, "y": 0}, "position": {"x": -271, "y": 376}, "scale": 1, "theme": "common", "type": "list", "value": [], "valueForDebug": [], "visible": true}, {"create_time": 1771263424, "id": "AQB0DZvm", "is_global": true, "name": "test", "offset": {"x": 0, "y": 0}, "position": {"x": -117.17608, "y": 230.53531}, "scale": 1, "theme": "common", "type": "public", "value": 0, "valueForDebug": ["0"], "visible": true}]}

### CLOSE_BLUETOOTH_CONNECTION_PAGE 关闭蓝牙连接页

#### 已知触发：点击侧边栏的关闭按钮

#   【Web -> Native】dsbridge.call

## 调用方法

**dsbridge.call(类型, ?数据, ?回调)**

## _dsb.dsinit 初始化声明

无参数

## _dsb.returnValue 返回值

{"id": **唯一序号，从1递增1** , "complete": true, "data": **数据** }

## bluetooth.getPermissionState 获取授权状态

## bluetooth.stopDiscover 停止查找

## bluetooth.discover 查找设备

{"localNames": ["BBC micro:bit"]}

## postMessageSyn

### 调用方法

**dsbridge.call('postMessageSyn', {"type":** **类型** **,"payload":** **数据** **}, ?回调)**

按类型分类：

### TOGGLE_BLUETOOTH_CONNECTION_PAGE 切换侧边栏可见性（用于蓝牙连接页面）

**数据：** {"visible":**可见性(true/false)** }

### CREATION_TRACKER 创作跟踪

**数据格式：** {"name":**类型** ,"action":**子类型** ,"params":**参数** }

#### 积木编辑  点击积木盒子

**数据：** {"name":"积木编辑","action":"点击积木盒子","params":{"toolbox_category":"actions"}}

#### 积木编辑  拖动积木

**数据：** {"name":"积木编辑","action":"拖动积木","params":{"type":"set_costume_by_index"}}

#### 积木编辑  积木盒子新增积木

**数据：** {"name":"积木编辑","action":"积木盒子新增积木","params":{"type":"set_costume_by_index"}}

#### 积木编辑  右上角删除

**数据：** {"name":"积木编辑","action":"右上角删除","params":{"types":["self_on_tap"]}}

#### 积木编辑  积木-撤销

**数据：** {"name":"积木编辑","action":"积木-撤销","params":{}}

#### 积木编辑  积木-重做

**数据：** {"name":"积木编辑","action":"积木-重做","params":{}}

#### 函数编辑  函数-新增参数

**数据：** {"name":"函数编辑","action":"函数-新增参数","params":{}}

### SELECT_EXTENSIONS_CATEGORIES 选择扩展

{"selected_categories":["microbit"],"locked_categories":[]}

### UPDATE_UNDO_STACK 更新撤回栈

{"can_undo":true,"can_redo":false}

### EDIT_PROCEDURE 编辑函数

""

### SELECT_ACTOR 选择角色

{"actor_id":"619fd636-5c60-4be7-82ed-95c180d34585"}

### ACTOR_SET_PROPERTY 设置角色属性

{"actor_id":"619fd636-5c60-4be7-82ed-95c180d34585","property_name":"scale","value":{"scale":106.38082570626106,"styles_center_point":{"4b1459ee-0d00-4055-b6dc-673dd01cd26a":{"x":0,"y":0},"edd7984c-7a4e-47d7-a88d-7dca54079dd3":{"x":0,"y":0},"7eb43fb3-f1a0-4fcc-b4eb-417266896b28":{"x":0,"y":0},"b964efd2-7835-4000-a3b0-15f4ca776732":{"x":0,"y":0},"02bd7cb1-eb43-4b27-a14e-753b2e74de84":{"x":0,"y":0}}}}

### THEATRE_FULL_SCREEN 设置舞台全屏

True

### SET_STYLES_CENTER_POINT 设置造型中心点

{"actor_id":"619fd636-5c60-4be7-82ed-95c180d34585","styles_center_point":{"4b1459ee-0d00-4055-b6dc-673dd01cd26a":{"x":0,"y":0},"edd7984c-7a4e-47d7-a88d-7dca54079dd3":{"x":0,"y":0},"7eb43fb3-f1a0-4fcc-b4eb-417266896b28":{"x":0,"y":0},"b964efd2-7835-4000-a3b0-15f4ca776732":{"x":0,"y":0},"02bd7cb1-eb43-4b27-a14e-753b2e74de84":{"x":0,"y":0}},"position":{"x":-90,"y":87}}

### SHOW_HELP_PAGE 显示帮助页面

{"type":"microbit"}

---

## postMessageAsyn

### 调用方法

**dsbridge.call('postMessageAsyn', ?数据, ?回调)**

{"type":**类型** ,"payload":**数据** }

按类型分类：

### EDIT_TEXT 编辑文本

{"text":"[0,0,100,100]","type":"long"}

### OPEN_STYLE_PANEL 打开造型面板

{"id":"nothing"}

### ADD_BROADCAST 添加广播

{"names":["Hi"]}

- names：已有广播列表

### ADD_MIDI 创建MIDI

""

### ADD_VARIABLE 添加云变量/变量/列表

{"type":"cloud","global":["www","aaa"],"entity":[],"cloud_info":{"public_cv":0,"public_cv_total":10,"private_cv":0,"private_cv_total":4}}

{"type":"any","global":[],"entity":[],"cloud_info":{}}}

{"type":"list","global":["www"],"entity":[],"cloud_info":{}}}

### RENAME_VARIABLE 重命名云变量/变量/列表

{"type":"cloud","name":"test","pool":["www","aaa","test"]}

{"type":"any","name":"wow","pool":["wow"]}

{"type":"list","name":"k","pool":["www","k"]}

### EDIT_PROCEDURE_NAME 编辑函数名称

{"name":"函数1","pool":[]}

### ADD_PROCEDURE_PARAM 添加函数参数

{"pool":[]}

### REMOVE_PROCEDURE_PARAM 删除函数参数

{}

### GOTO_SYSTEM_SETTINGS 跳转系统设置

{"path":"bluetooth"}

### GOTO_APP_SETTINGS 跳转应用设置

{}

### ON_BLOCK_ERROR 积木出错

{"error_entity":"700824a5-44a8-4d03-a7e8-aa95d87e9b2a","scene_id":"700824a5-44a8-4d03-a7e8-aa95d87e9b2a"}
