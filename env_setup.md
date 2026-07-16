# 实训环境配置记录
1. Git版本：2.55.0.windows.3
2. Git安装路径：D:\Software\Git
3. 本地项目仓库路径：D:\Work\3day-engineering-project
4. Git全局用户名：SXEDGG
5. Git全局邮箱：1934866005@qq.com

## SSH适配说明
本机Windows用户名含中文「黄文跃」，C盘用户目录存在编码兼容问题，SSH默认目录无法读写；
完整执行实训全部SSH流程：生成ed25519密钥、公钥绑定GitHub、SSH连通校验、SSH推送代码，未省略任何规定操作；
私钥路径：D:\ssh\id_ed25519
主机缓存路径：D:\ssh\known_hosts
Git已全局配置core.sshCommand定向读取D盘密钥，全程使用SSH方式推送代码。
