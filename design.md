# Game Radar 项目设计文档

## 项目概述

Game Radar 是一个基于 Next.js 构建的现代 Web 应用模板项目。该项目使用了 React 19、TypeScript 和 TailwindCSS 等最新技术栈。

## 目录结构

```
game-radar/
├── .git/                  # Git 版本控制目录
├── .gitignore             # Git 忽略文件配置
├── eslint.config.mjs      # ESLint 配置文件
├── next-env.d.ts          # Next.js TypeScript 声明文件
├── next.config.ts         # Next.js 配置文件
├── node_modules/          # Node.js 依赖包目录
├── package-lock.json      # npm 包版本锁定文件
├── package.json           # 项目依赖和脚本配置
├── postcss.config.mjs     # PostCSS 配置文件
├── public/                # 静态资源目录
├── src/                   # 源代码目录
│   └── app/               # Next.js App Router 应用目录
│       ├── favicon.ico    # 网站图标
│       ├── globals.css    # 全局样式文件
│       ├── layout.tsx     # 根布局组件
│       └── page.tsx       # 首页组件
└── tsconfig.json          # TypeScript 配置文件
```

## 技术栈

### 核心框架与库
- **Next.js (15.2.4)**: React 应用框架，提供服务器端渲染、路由等功能
- **React (19.0.0)**: 用户界面库
- **TypeScript**: JavaScript 的类型化超集，提供更强的类型检查和开发体验

### 样式与UI
- **TailwindCSS (4)**: 实用优先的 CSS 框架
- **Geist 字体**: 通过 Next.js 字体系统引入的现代字体
  - Geist Sans: 无衬线字体
  - Geist Mono: 等宽字体

### 开发工具
- **ESLint (9)**: JavaScript/TypeScript 代码检查工具
- **Turbopack**: 用于开发环境的快速打包器（通过 `next dev --turbopack`）

### 项目配置
- **TypeScript 配置**:
  - 目标: ES2017
  - 启用严格模式
  - 路径别名: `@/*` 指向 `./src/*`
- **Next.js App Router**:
  - 使用最新的 App Router 架构而非传统的 Pages Router
  - 基于文件系统的路由
- **PostCSS 配置**:
  - 与 TailwindCSS 集成

### 主题与响应式设计
- 支持深色/浅色模式（通过 CSS 变量和 `prefers-color-scheme` 媒体查询）
- 响应式设计（通过 TailwindCSS 的响应式类）

## 开发命令
- `npm run dev`: 启动开发服务器（使用 Turbopack）
- `npm run build`: 构建生产版本
- `npm run start`: 启动生产服务器
- `npm run lint`: 运行 ESLint 进行代码检查

## 注意事项与最佳实践
- 项目使用了 Next.js 的 App Router 架构，遵循其文件约定进行路由管理
- 使用 TypeScript 进行类型安全的开发
- 样式通过 TailwindCSS 的类名直接在组件中应用
- 图片优化通过 Next.js 的 Image 组件实现 