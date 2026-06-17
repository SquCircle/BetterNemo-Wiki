# .bcmbn 作品规范
> 💡 
> 本文档提及的相关条目与内容目前仅在 **BetterNemo Online**  试验性实装，非最终确定版，最终标准以实际为准。

# 纲领

本文档，我们将会对目前仅在 **BetterNemo Online**  （下文都称**BNOL** ） 实装的 .bcmbn 作品文件进行详细解读，该标准的诞生是为了弥补Nemo原生作品格式的不合理之处，以便用户制作分享作品，目前介绍的标准版本仍在讨论范畴内，可以在评论区给出您的宝贵意见。

# 作品结构对比

## Nemo原生作品结构

## .bcmbn 作品结构

# 详解

.bcmbn 基于 .zip 格式，对Nemo原生作品格式做出适配性修改与功能增设，使其能像 .sb3 文件那样作为通用作品格式。

大部分内容是直接继承自原生的作品格式，多数修改是对资源索引的路径进行了修改，由应用内绝对目录改成了文件内相对目录

如 原生示例

```plaintext
file:///data/user/0/com.codemao.nemo/files/nemo_users_db/5454805/user_material/15a1cee7-1f00-410a-ab51-9f8da20b782e.webp
```

```plaintext
5454805/user_material/f75c6ca1-d508-4860-b74b-d7a7bb652c52.webp
```

.bcmbn 作品示例

```plaintext
material/f75c6ca1-d508-4860-b74b-d7a7bb652c52.webp
```

---

关于 extensions.json

那个更简单，就是一个记录扩展的元文件

```json
{
    "extensions": [
        [
            "name": "[快速配置]FastSet",
            "version": "1.2.0",
            "url": "https://raw.giteeusercontent.com/SandMo/BetterNemo-Extensions/raw/master/Extensions/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E7%B1%BB/%5B%E5%BF%AB%E9%80%9F%E9%85%8D%E7%BD%AE%5DFastSet/1.2.0/"
        ]
    ]
}
```