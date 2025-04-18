# 首页组件设计文档

本目录包含Game Radar游戏网站首页的所有相关组件和设计文档。

## 设计目标

首页是用户进入网站的第一个页面，主要目标是：
- 展示精选游戏，吸引用户点击和体验
- 提供简洁的分类导航，帮助用户快速找到感兴趣的游戏
- 确保页面加载速度快，视觉效果吸引人
- 适配不同设备尺寸（响应式设计）

## 组件结构

根据MVP规划，首页包含以下主要组件：

1. **顶部导航栏** - `Navbar.tsx`
   - 网站Logo
   - 2-3个主要游戏分类链接
   - (可选)简单搜索框

2. **游戏展示网格** - `GameGrid.tsx`
   - 游戏卡片组件 - `GameCard.tsx`
   - 简单分页或"加载更多"按钮

3. **页脚** - `Footer.tsx`
   - 简单的关于我们/联系方式链接

## 初始数据结构

首页将使用JSON数据源来展示游戏，基本结构如下：

```json
{
  "featuredGames": [
    {
      "id": "game1",
      "title": "游戏名称",
      "description": "简短描述",
      "thumbnail": "/images/thumbnails/game1.jpg",
      "url": "/games/game1",
      "category": "动作"
    }
    // 更多游戏...
  ],
  "categories": [
    {
      "id": "action",
      "name": "动作游戏",
      "count": 10
    },
    {
      "id": "puzzle",
      "name": "解谜游戏",
      "count": 8
    },
    {
      "id": "casual",
      "name": "休闲游戏",
      "count": 12
    }
  ]
}
```

## 设计方案

根据讨论，我们确定了以下设计方案：

### 视觉设计

#### 主题风格：太空科技感
参考CrazyGames的整体布局，但融入太空科技感元素，打造酷炫现代的游戏平台体验。

#### 配色方案
- **主色调**：深空蓝 (#0B1433)
- **强调色**：霓虹蓝 (#00C2FF)、霓虹紫 (#7B42F6)
- **辅助色**：太空黑 (#050914)、星际灰 (#2D3748)
- **文本色**：银河白 (#E2E8F0)、星尘灰 (#A0AEC0)
- **成功/错误色**：绿色 (#48BB78)、红色 (#F56565)

#### 字体选择
- **标题字体**：使用几何无衬线字体，如Geist Sans或Roboto，展现科技感
- **正文字体**：使用清晰易读的无衬线字体
- **强调文本**：可使用等宽字体（如Geist Mono）增强科技感

#### 视觉元素
- 添加微妙的太空粒子背景动效
- 使用渐变色彩，从深空蓝过渡到霓虹蓝/紫
- 适当使用发光效果增强科技感
- 简洁的线条和几何形状作为装饰元素

### 组件设计

#### 导航栏设计
- **位置**：固定在页面顶部
- **背景**：半透明深色背景，带有轻微模糊效果
- **布局**：
  - 左侧：网站Logo（太空/游戏主题相结合的设计）
  - 中部：主要游戏分类（动作、解谜、休闲等）
  - 右侧：搜索栏（带有发光边框效果）
- **交互**：分类菜单在悬停时显示子分类，带有平滑动画过渡

#### 游戏卡片设计（参考CrazyGames）
- **尺寸**：统一的宽高比例（如16:9）
- **样式**：
  - 圆角矩形（8px圆角）
  - 微妙的阴影效果
  - 主体为游戏缩略图
  - 底部叠加半透明渐变条，显示游戏标题
  - 右上角小标签显示游戏类别
- **悬停效果**：
  - 轻微放大（scale: 1.05）
  - 霓虹色边框发光效果
  - 显示简短游戏描述和"立即游玩"按钮
  - 背景轻微上移动画

#### "加载更多"按钮
- 半透明背景的圆形或胶囊形按钮
- 霓虹色边框和文字
- 点击时带有波纹动画效果

#### 页脚设计
- 简约深色背景设计
- 提供基本的网站信息和链接
- 添加社交媒体图标（带有发光效果）

### 页面布局

#### 桌面布局
- **顶部**：固定导航栏
- **主体内容**：
  - 顶部展示大型特色游戏横幅（可选）
  - 下方为游戏网格，每行4-5个游戏卡片
  - 分类标题使用科技感设计，带有简单的装饰线条
  - 分类之间使用足够的空白区分
- **底部**：简约页脚

#### 平板布局
- 导航栏压缩，可能折叠部分类别为下拉菜单
- 游戏网格每行显示2-3个游戏卡片
- 保持整体视觉效果和间距比例

#### 移动布局
- 导航栏简化为汉堡菜单
- 游戏网格每行1-2个游戏卡片
- 搜索框可折叠到导航菜单中

### 交互设计

#### 游戏卡片交互
- 卡片悬停时展现微动画和发光效果
- 点击卡片进入游戏详情页
- 长按（移动端）可显示额外游戏信息

#### 类别切换
- 平滑滚动到相应类别区域
- 类别标签在活跃状态下有发光边框效果

#### 搜索交互
- 实时搜索建议
- 搜索时带有科技感动画（如打字机效果或脉冲扫描线）

## 技术实现考虑

### 组件划分
- 组件的粒度和复用性
- 状态管理方式
- 数据获取和缓存策略

### 性能优化
- 图片优化（懒加载、压缩等）
- 代码分割
- 首屏加载优化

---

*注：本文档会随着我们的讨论不断更新，以记录关于首页设计的最新决策和细节。* 