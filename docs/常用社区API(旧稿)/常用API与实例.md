# 常用API与实例
编程猫 Nemo 客户端 API 文档

本文档基于 HAR 文件实际捕获的网络请求整理，涵盖用户信息、作品统计、隐私协议、行为上报等核心接口。~~所有~~接口均需携带有效的 Bearer Token 认证。

---

# API基础信息

· 基础域名：api.codemao.cn

· 上报域名：collection.codemao.cn

· 错误上报域名：errlog.umeng.com

· 认证方式：Authorization: Bearer <JWT_TOKEN>

· 设备信息头：X-CodeMao-Mobile-Requested（JSON 字符串）

---

# API详细列表

1. 获取用户账户信息

· URL：https://api.codemao.cn/tiger/v3/app/accounts/profile

· Method：GET

· 请求头：

· X-CodeMao-Mobile-Requested：设备信息 JSON

· Device-Data：Base64 编码的设备数据

· PID：T5qx9_w0

· Api-Version：3.1.0

· Cookie：包含 aliyungf_tc, acw_tc, authorization

· Query 参数：无

· 响应示例：

```json
{
  "id": 6902335,
  "nickname": "砂墨",
  "avatar_url": "https://static-platform.codemao.cn/avatar/festival/springfest01.png",
  "fullname": "×××",
  "sex": 1,
  "birthday": 1279694964,
  "qq": "147******",
  "description": "（砂墨）初三了！哔哩哔哩：砂墨；wechat：qzm4228；Q：14706659802",
  "grade": 9,
  "programmingBasics": 0,
  "robotBasics": 0,
  "operatingSystem": [],
  "parentalExpectation": [],
  "parentalExpectationInput": "",
  "grade_desc": "六年级"
}
```

---

2. 获取用户作品总数及统计

· URL：https://api.codemao.cn/nemo/v2/works/business/total

· Method：GET

· 请求头：同 1，需携带 Authorization

· Query 参数：user_id=6902335

· 响应示例：

```json
{
  "user_id": 6902335,
  "nickname": "砂墨",
  "avatar_url": "https://static.codemao.cn/986/nemo/306aec58-bf7b-48fa-87ad-6879c17ac727.jpeg",
  "n_views": 56675,
  "n_likes": 4078,
  "n_re_create": 1388,
  "author_level": 4,
  "consume_level": 4,
  "is_official_certification": 0
}
```

---

3. 获取用户隐私协议状态

· URL：https://api.codemao.cn/nemo/v2/user/privacy/policy

· Method：GET

· Query 参数：app_origin=nemo

· 响应示例：

```json
{
  "user_id": 6902335,
  "agreed_enable": true,
  "app_origin": "nemo"
}
```

---

4. 获取弹窗配置

· URL：https://api.codemao.cn/nemo/v3/dialog/get

· Method：GET

· 响应：空（Content-Length: 0），表示暂无弹窗配置。

---

5. 获取用户中心荣誉信息

· URL：https://api.codemao.cn/creation-tools/v1/user/center/honor

· Method：GET

· Query 参数：user_id=6902335

· 响应示例：

```json
{
  "user_id": 6902335,
  "nickname": "砂墨",
  "avatar_url": "https://static.codemao.cn/986/nemo/306aec58-bf7b-48fa-87ad-6879c17ac727.jpeg",
  "user_cover": "https://creation.bcmcdn.com//490/YW5kXzEwMDJfNjkwMjMzNV8wXzE3MzcwMjc2MzI0ODNfZzJtTFVuR0I=.jpg",
  "user_description": "（砂墨）初三了！哔哩哔哩：砂墨；wechat：qzm4228；Q：14706659802",
  "doing": "闲着没事儿干，就来编程猫社区制作作品。",
  "attention_status": true,
  "block_total": 592450,
  "re_created_total": 1390,
  "attention_total": 169,
  "fans_total": 681,
  "collected_total": 2204,
  "collect_times": 431,
  "liked_total": 4416,
  "view_times": 60063,
  "author_level": 4,
  "consume_level": 4,
  "is_official_certification": 0,
  "subject_id": 24285,
  "work_shop_name": "缔梦者＃Dreammaker",
  "work_shop_level": 0,
  "like_score": 600,
  "collect_score": 1000,
  "fork_score": 1000
}
```

---

6. 获取用户发布的作品列表

· URL：https://api.codemao.cn/creation-tools/v1/user/center/work-list

· Method：GET

· Query 参数：

· user_id=6902335

· type=newest（排序方式）

· offset=0（分页偏移）

· limit=15（每页数量）

· 响应示例：

```json
{
  "items": [
    {
      "id": 310217382,
      "type": 8,
      "work_name": "抓云测试",
      "preview": "https://creation.bcmcdn.com/490/YW5kXzIwMDFfNjkwMjMzNV8zMTAyMTczODJfMTc3NTI5OTcxMDQ4NF9FZmplanU3Ng==.cover",
      "view_times": 4,
      "collect_times": 0,
      "liked_times": 1,
      "parent_id": 0,
      "fork_enable": false,
      "fork_times": 0,
      "publish_time": 1775299715,
      "description": "test",
      "role": "AUTHOR",
      "is_coll_work": false
    }
  ],
  "offset": 0,
  "limit": 15,
  "total": 173,
  "counted": true
}
```

---

7. 系统信息/行为日志上报

· URL：https://collection.codemao.cn/report/sysinfo

· Method：POST

· 请求头：

· Content-Type: application/json

· X-CodeMao-Mobile-Requested：设备信息 JSON

· Authorization: Bearer Token

· 请求体（以页面访问事件为例）：

```json
{
  "data": {
    "b": [
      {
        "d": {
          "page_from": "-",
          "user_id": "6902335",
          "channel": "codemao_hi",
          "page": "推荐页"
        },
        "e": "page_visit",
        "i": "1775314243599",
        "t": 1775314243,
        "x": {}
      }
    ],
    "e": {
      "devid": "",
      "density": "440",
      "swvc": "190",
      "channel": "codemao_hi",
      "swvn": "5.2.0",
      "pid": "sysinfo",
      "resolution": "1080x2040",
      "pkg": "com.codemao.nemo",
      "platform": "android",
      "uid": "ea7551c278d53a53",
      "sdkvn": "0.1.3",
      "la": "CN-zh",
      "model": "Xiaomi MIX",
      "net": "wifi",
      "sysv": "8.0.0"
    },
    "m": {
      "a": {},
      "d": 2,
      "p": "sysinfo"
    }
  },
  "type": "0"
}
```

· 响应：204 No Content

事件类型说明：

· page_visit：页面访问

· all_click：点击事件

· page_quit：离开页面

· work_exposure：作品曝光

· nemo_error：错误日志

---

8. 友盟错误日志上报

· URL：https://errlog.umeng.com/api/crashsdk/logcollect

· Method：POST

· Query 参数：chk, vno, uuid, app, enc 或 zip

· Body：二进制加密数据（gzip 或 AES）

· 响应：200 OK，内容为 "暂不支持该服务"（测试环境）

该接口通常由友盟 SDK 自动调用，不建议手动实现。

---

# JavaScript 调用示例

以下示例使用原生 fetch，适用于 Node.js 18+ 或现代浏览器。

示例 1：获取用户账户信息

```javascript
const url = 'https://api.codemao.cn/tiger/v3/app/accounts/profile';

const headers = {
  'X-CodeMao-Mobile-Requested': JSON.stringify({
    platform: 'android',
    uid: '6902335',
    swvc: 190,
    swvn: '5.2.0',
    model: 'Xiaomi MIX',
    resolution: '1080x2040',
    la: 'CN_zh',
    sysv: '8.0.0',
    pid: 'T5qx9_w0',
    pkg: 'com.codemao.nemo',
    policy: true,
    channel: 'codemao_hi'
  }),
  'Device-Data': btoa(JSON.stringify({
    deviceName: 'Xiaomi',
    deviceModel: 'MIX',
    deviceType: 0,
    deviceId: '',
    umengId: '',
    deviceSn: '00000000-3e7c-b1ee-0000-0000092e0de3'
  })),
  'PID': 'T5qx9_w0',
  'Api-Version': '3.1.0',
  'Authorization': 'Bearer YOUR_JWT_TOKEN',
  'Cookie': 'aliyungf_tc=xxx; acw_tc=xxx; authorization=xxx'
};

fetch(url, { method: 'GET', headers })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

示例 2：上报用户行为（页面访问）

```javascript
const reportUrl = 'https://collection.codemao.cn/report/sysinfo';

const eventData = {
  data: {
    b: [
      {
        d: {
          page_from: '-',
          user_id: '6902335',
          channel: 'codemao_hi',
          page: '推荐页'
        },
        e: 'page_visit',
        i: crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random(),
        t: Math.floor(Date.now() / 1000),
        x: {}
      }
    ],
    e: {
      devid: '',
      density: '440',
      swvc: '190',
      channel: 'codemao_hi',
      swvn: '5.2.0',
      pid: 'sysinfo',
      resolution: '1080x2040',
      pkg: 'com.codemao.nemo',
      platform: 'android',
      uid: 'ea7551c278d53a53',
      sdkvn: '0.1.3',
      la: 'CN-zh',
      model: 'Xiaomi MIX',
      net: 'wifi',
      sysv: '8.0.0'
    },
    m: {
      a: {},
      d: 2,
      p: 'sysinfo'
    }
  },
  type: '0'
};

const reportHeaders = {
  'Content-Type': 'application/json',
  'X-CodeMao-Mobile-Requested': JSON.stringify({
    platform: 'android',
    uid: '6902335',
    swvc: 190,
    swvn: '5.2.0',
    model: 'Xiaomi MIX',
    resolution: '1080x2040',
    la: 'CN_zh',
    sysv: '8.0.0',
    pid: 'T5qx9_w0',
    pkg: 'com.codemao.nemo',
    policy: true,
    channel: 'codemao_hi',
    net: 'wifi',
    devid: 'un_permission',
    group_id: 'ea7551c278d53a53',
    appvn: '5.2.0',
    density: 440,
    build: 190,
    origin: 'nemo'
  }),
  'Authorization': 'Bearer YOUR_JWT_TOKEN'
};

fetch(reportUrl, {
  method: 'POST',
  headers: reportHeaders,
  body: JSON.stringify(eventData)
})
  .then(res => {
    if (res.status === 204) {
      console.log('上报成功');
    } else {
      console.log('上报失败', res.status);
    }
  })
  .catch(err => console.error(err));
```

示例 3：使用 axios（更简洁）

```javascript
const axios = require('axios');

axios.get('https://api.codemao.cn/tiger/v3/app/accounts/profile', {
  headers: {
    'X-CodeMao-Mobile-Requested': JSON.stringify({ /* 设备信息 */ }),
    'Authorization': 'Bearer YOUR_JWT_TOKEN'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

---

# 注意事项

1. 认证 Token：所有接口都需要有效的 Bearer Token，该 Token 由登录接口返回，请妥善保管并定时刷新。

2. 设备信息：X-CodeMao-Mobile-Requested 头中的设备参数应与实际运行环境一致，否则可能导致请求被拒绝。

3. 事件上报：

· i 字段建议使用 UUID 保证唯一性。

· t 字段为 Unix 时间戳（秒）。

· 支持的事件类型包括：page_visit、all_click、page_quit、work_exposure、nemo_error。

4. CORS 问题：若在浏览器中直接调用，可能遇到跨域限制，建议通过后端代理转发请求。

5. 错误上报：友盟接口由 SDK 自动处理，无需手动调用。

---

# 文档更新记录

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| 1.0 | 2026-04-04 | 初始版本，基于 HAR 文件提取 |