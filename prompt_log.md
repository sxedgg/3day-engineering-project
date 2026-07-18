# AI辅助编程Prompt日志
记录规则：每条对话包含【使用场景、用户Prompt、AI完整输出、对应项目文件】
## 对话1：生成Flask后端分层任务管理系统
场景：搭建后端服务，实现用户、任务数据库模型与CRUD接口
User Prompt：
帮我写一套Flask任务管理后端，分层结构，包含用户注册登录JWT鉴权、任务增删改查，使用SQLAlchemy，跨域支持，拆分model、route、config，附带requirements依赖文件
AI输出：
[后端全套代码，见backend目录下所有py文件]
对应文件：backend/全部文件

## 对话2：生成Next.js前端页面，3个路由（登录、任务列表、个人中心）
场景：前端页面开发，对接后端API，使用TS+Tailwind
User Prompt：
基于Next.js App Router+TS+Tailwind写三个页面：登录页、任务列表页、个人中心页，使用fetch对接本地5000端口Flask接口
AI输出：
[前端页面代码 frontend/app/login /task /user]
对应文件：frontend/app/login/page.tsx、frontend/app/task/page.tsx、frontend/app/user/page.tsx

## 对话3：AI代码评审优化
场景：对前后端代码做Code Review，给出优化建议
User Prompt：
对下面Flask+Next.js代码做完整代码审查，指出漏洞、不规范写法、性能问题并给出修改方案
AI输出：
[优化建议存入screenshots/review.md]
对应文件：screenshots/review.md

## 对话4：生成项目README、接口文档、实训总结
场景：补全实训全套交付文档
User Prompt：
编写完整项目README，包含技术栈、目录结构、前后端本地启动教程；编写独立API接口文档；撰写500字以上实训个人总结报告
AI输出：
README.md、docs/api.md、summary.md
