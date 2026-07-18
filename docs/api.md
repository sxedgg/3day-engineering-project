# 后端完整API接口文档
## 一、用户认证模块 /api/auth
1. POST /api/auth/register
请求参数：username, password
功能：用户注册
返回：code 200成功 / 400参数错误

2. POST /api/auth/login
请求参数：username, password
功能：登录获取token与用户uid
返回：token、uid、msg

## 二、任务管理模块 /api/task
1. GET /api/task/list/{uid}
功能：查询指定用户全部任务
2. POST /api/task/add
参数：title、content、uid
功能：新增任务
3. PUT /api/task/update/{tid}
参数：title/content/status
功能：修改任务信息
4. DELETE /api/task/del/{tid}
功能：删除指定任务

## 三、用户信息模块 /api/user
1. GET /api/user/info/{uid}
功能：获取用户注册时间、总任务数量统计
