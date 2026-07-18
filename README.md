# 三日工程实训-任务管理全栈系统
## 技术栈
后端：Python Flask + SQLAlchemy + JWT + SQLite
前端：Next.js 14 + TypeScript + TailwindCSS
内网穿透：ngrok（提供公网访问URL）

## 目录结构
- backend/ 后端服务代码
- frontend/ 前端页面代码（3个路由页面）
- docs/ API接口文档
- screenshots/ 截图、AI代码评审报告
- prompt_log.md AI提示词完整日志
- summary.md 个人实训总结报告
- env_setup.md Git与SSH环境配置记录

## 本地启动步骤
### 后端启动
cd backend
pip install -r requirements.txt
python app.py
本地地址：http://127.0.0.1:5000

### 前端启动
cd frontend
npm install
npm run dev
本地地址：http://localhost:3000

## 功能清单
后端3套独立API：用户注册登录、任务CRUD、用户信息统计
前端3个独立路由：登录页、任务列表页、个人中心页
支持异常参数校验、前端本地存储用户uid
