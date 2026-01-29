# Vercel 部署指南

## ✅ 已完成的配置

1. ✅ 已配置 `vercelPostgresAdapter`
2. ✅ `next.config.js` 已配置 Vercel 环境变量支持
3. ✅ 已设置 `push: false` 防止自动 schema 同步问题

## 📋 部署前检查清单

### 1. 环境变量配置

在 Vercel 项目设置中配置以下环境变量：

**必需的环境变量：**
- `POSTGRES_URL` - Vercel Postgres 数据库连接字符串（Vercel 会自动提供）
- `PAYLOAD_SECRET` - 用于加密 JWT token（生成一个随机字符串）
- `NEXT_PUBLIC_SERVER_URL` - 你的网站 URL（Vercel 会自动设置，但可以手动覆盖）

**可选的环境变量：**
- `CRON_SECRET` - 用于验证 cron jobs（如果使用定时任务）
- `PREVIEW_SECRET` - 用于验证预览请求（如果使用预览功能）

### 2. 数据库迁移

由于设置了 `push: false`，你需要：

**选项 A：首次部署（全新数据库）**
- 临时将 `push: false` 改为 `push: true` 让 Payload 自动创建 schema
- 部署后，再改回 `push: false` 并使用迁移管理后续变更

**选项 B：使用迁移（推荐生产环境）**
```bash
# 1. 创建迁移文件
pnpm payload migrate:create

# 2. 提交迁移文件到 Git

# 3. 在 Vercel 构建命令中添加迁移步骤（见下方）
```

### 3. Vercel 项目设置

#### 构建命令
```bash
pnpm build
```

#### 安装命令
```bash
pnpm install
```

#### 输出目录
```
.next
```

#### Node.js 版本
确保使用 Node.js 18.20.2+ 或 20.9.0+（根据 package.json 的 engines 配置）

### 4. 首次部署后的步骤

1. **访问 Admin Panel**
   - 访问 `https://your-domain.com/admin`
   - 创建第一个管理员用户

2. **运行迁移（如果使用迁移）**
   - 如果使用迁移，需要在构建后运行：
   ```bash
   pnpm payload migrate
   ```
   - 可以在 Vercel 的构建命令中添加：`pnpm build && pnpm payload migrate`

3. **验证部署**
   - 检查前端页面是否正常加载
   - 检查 Admin Panel 是否可以登录
   - 检查数据库连接是否正常

## 🚀 快速部署步骤

1. **准备环境变量**
   ```bash
   # 生成 PAYLOAD_SECRET（32 字符随机字符串）
   openssl rand -hex 16
   ```

2. **在 Vercel 中创建项目**
   - 连接你的 Git 仓库
   - Vercel 会自动检测 Next.js 项目

3. **配置环境变量**
   - 在 Vercel 项目设置 → Environment Variables 中添加所有必需变量
   - `POSTGRES_URL` 会在创建 Vercel Postgres 数据库时自动添加

4. **首次部署配置（如果数据库是全新的）**
   - 临时修改 `payload.config.ts` 中的 `push: false` 为 `push: true`
   - 部署后，改回 `push: false`

5. **部署**
   - 推送代码到 Git
   - Vercel 会自动构建和部署

## ⚠️ 注意事项

1. **数据库连接**
   - 确保 Vercel Postgres 数据库已创建
   - `POSTGRES_URL` 会自动从 Vercel Postgres 集成中获取

2. **文件存储**
   - 默认使用本地文件系统（不适合 Vercel Serverless）
   - 建议使用 Vercel Blob Storage（见下方）

3. **Sharp 依赖**
   - 已配置，无需额外操作

## 📦 可选：配置 Vercel Blob Storage

如果需要在 Vercel 上存储媒体文件：

1. **安装依赖**
   ```bash
   pnpm add @payloadcms/storage-vercel-blob
   ```

2. **配置插件**
   在 `src/payload.config.ts` 中添加：
   ```typescript
   import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

   export default buildConfig({
     // ...
     plugins: [
       ...plugins,
       vercelBlobStorage({
         collections: {
           media: true,
         },
         token: process.env.BLOB_READ_WRITE_TOKEN || '',
       }),
     ],
   })
   ```

3. **添加环境变量**
   - `BLOB_READ_WRITE_TOKEN` - 从 Vercel Blob Storage 获取

## 🔍 故障排查

### 问题：部署后显示 "Pulling schema from database"
- 检查 `push: false` 是否已设置
- 检查数据库连接是否正常
- 检查环境变量是否正确配置

### 问题：数据库连接失败
- 检查 `POSTGRES_URL` 是否正确
- 检查 Vercel Postgres 数据库是否已创建
- 检查网络连接

### 问题：构建失败
- 检查 Node.js 版本是否符合要求
- 检查所有依赖是否已安装
- 查看 Vercel 构建日志
