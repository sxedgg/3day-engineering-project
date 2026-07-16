# 后端API接口文档
## 1. 用户模块
POST /api/auth/register
- 参数：username, password
- 功能：用户注册

POST /api/auth/login
- 参数：username, password
- 功能：登录，返回token

## 2. 任务模块
GET /api/task/list/{uid}
- 功能：查询指定用户全部任务

POST /api/task/add
- 参数：title, content, uid
- 功能：新增任务

PUT /api/task/update/{tid}
- 参数：title/content/status
- 功能：修改任务

DELETE /api/task/del/{tid}
- 功能：删除任务
