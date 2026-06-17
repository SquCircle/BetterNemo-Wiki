# BetterNemo Online

BetterNemo 的 Web 版本，无需安装即可在浏览器中编辑和运行 BN 作品。

## 访问

在线地址：**[https://hhcl233.github.io/betternemo-online/](https://hhcl233.github.io/betternemo-online/)**

## 功能特性

### 文件操作
- **新建作品** — 创建一个默认示例作品（"摇一摇大黄鸡"）
- **打开 .json 作品** — 加载本地 JSON 格式的 BCM 作品文件
- **打开 .bcmbn 作品** — 加载本地 BCMBN 压缩包格式作品（包含素材资源和扩展）
- **下载 .json / .bcmbn** — 保存当前作品到本地
- ⚠️ **打开作品**（无后缀）菜单项为占位符，暂无功能

### 编辑器功能
- **积木编辑** — 通过 iframe 嵌入 BN 原生 workspace（`public/bn/`），支持完整的积木编程体验
- **角色查看** — 切换视图可查看作品角色列表（舞台/角色切换）
- **JSON 编辑器** — 内置 Monaco Editor，可直接编辑作品的原始 JSON 数据（.bcmbn 作品不可用）
- **运行/暂停** — 一键切换作品运行状态
- **编辑器 UI 类型** — 支持在 Pad/手机模式间切换
- ⚠️ **云功能（角色管理、作品分享、保存到服务器）** 尚未实现

### 账号系统
- **编程猫账号登录** — 通过 Cloudflare Worker 代理调用编程猫 API 登录
- **离线模式** — 无需登录即可使用基础功能
- **用户信息查看** — 登录后可查看昵称、性别、UID

### 扩展管理
- 打开 `.bcmbn` 作品时自动解析扩展依赖
- 支持从远程 URL 加载扩展
- 预设加载 [FastSet] 扩展（1.2.0）
- ⚠️ 扩展本地存在性检测未实现（版本始终显示为 null）

### 其他功能
- **作品重命名** — 单击标题即可修改作品名称
- **修改作品 ID** — 设置作品 ID（需与云端匹配）
- **主题色自定义** — 基于 MDUI 的实时颜色选择器，同步应用到编辑器和 iframe
- **Q&A 帮助** — 内置常见问题解答（含已知限制说明）

## 使用说明

### 新建作品
点击菜单 `文件 → 新建作品`，会加载一个默认的"摇一摇大黄鸡"示例作品。

### 打开作品
- **JSON 格式**：点击 `文件 → 打开作品 → 打开 .json 作品`，选择本地的 `.json` 文件
- **BCMBN 格式**：点击 `文件 → 打开作品 → 打开 .bcmbn 作品`，选择本地的 `.bcmbn` 压缩包

### 保存作品
- `.json` 格式：点击 `文件 → 下载 .json 作品`
- `.bcmbn` 格式（含素材）：编辑含有素材的作品后，点击 `文件 → 下载 .bcmbn 作品`

### 登录账号
1. 点击 `账号 → 登录`
2. 输入编程猫账号和密码
3. 登录后可访问云端作品和社区功能

### 离线模式
启用离线模式可跳过登录，使用本地功能。
点击 `账号 → 启用离线模式` 即可。

## 本地部署

```bash
git clone https://github.com/BetterNemo-Team/betternemo-online.git
cd betternemo-online
npm install
npm run dev
```

## 技术栈

- **前端框架**：Vue 3 + TypeScript 6
- **构建工具**：Vite 8
- **UI 组件库**：mdui 2
- **代码编辑器**：Monaco Editor 0.55
- **路由**：Vue Router 5 (Hash History)
- **状态管理**：Pinia 3
- **压缩工具**：JSZip 3.10（.bcmbn 格式支持）

## 项目结构

```
betternemo-online/
├── public/bn/              # 内嵌的 BN 工作区完整构建（非 npm 依赖，作为静态资源提交到 git）
│   ├── workspace.html      # iframe 加载的入口
│   ├── bs.js               # BN 核心
│   ├── plugin.js           # 插件系统
│   ├── extension-loader.js # 扩展加载器
│   ├── extensions/         # 内置扩展
│   ├── theme/              # 主题（classic, vanilla, angle, AFS 等）
│   └── res/                # 图片、音效、模板作品
├── src/
│   ├── pages/EditorPage.vue         # 主编辑器（iframe + Monaco 布局）
│   ├── components/BN.vue            # BN iframe 包装器
│   ├── components/AppBarMenu.vue    # 顶部菜单栏（文件/项目/账户/编辑器/帮助）
│   ├── components/MonacoEditor.vue  # JSON 编辑器
│   ├── stores/bnState.ts            # 核心状态（加载、保存、同步）
│   ├── stores/auth.ts               # 编程猫登录认证
│   ├── utils/bnWorkspaceBridge.ts   # postMessage 桥接通信
│   └── utils/blobTools.ts           # 文件下载工具
└── .github/workflows/main.yml       # GitHub Pages 自动部署
```

## Bridge 通信协议

BN Online 通过 `window.postMessage` 与 iframe 内的 BN 工作区通信，支持两种消息格式：

- **原生消息**：`{ type, payload }`，用于初始化、舞台切换、运行状态等
- **桥接消息**：`{ __bn_bridge__: true, direction, api, args }`，用于调用 BN 内部 API（如 `LOAD_BCM`、`REQUEST_ALL_SAVE_DATA`）

详见 [通讯协议 → Native ↔ Webview](/通讯协议/nemo-native-webview)

## 已知限制

- **"打开作品" 菜单项** 无功能（占位符）
- **云功能**（角色管理、保存到服务器、作品分享）未实现
- **`.bcmbn` 扩展筛选** 未实现：导入时版本和本地存在性始终显示为未知
- **音频素材导出** 在 `.bcmbn` 中未完整处理
- **modifyNemoCSS.ts** 已定义但未使用
- 类型安全较弱（大量使用 `any`，ESLint 关闭了 `no-explicit-any`）

## 注意事项

- BN Online 使用的 BetterNemo（`public/bn/`）经过修改，**不建议手动更新版本**
- 如遇 Bug，请直接在 betternemo-online 项目提交 Issue
- 若 Bug 在原版 BetterNemo 中也存在，开发者会引导前往原仓库提交
