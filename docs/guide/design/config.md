---
title: 配置
order: 2
---

配置采用TOML语法

- query 查询接口配置
- storage 存储配置
- wal 写前日志配置
- cache 缓存配置
- log 运行日志配置
- security 安全配置

## [query]

| 参数                     | 说明                           |
|------------------------|------------------------------|
| max_server_connections | 最大并发连接请求数                    |
| query_sql_limit        | 查询请求时的最大SQL所占字节              |
| write_sql_limit        | line_protocol 写入请求时，请求体最大字节数 |

## [storage]

| 参数                 | 说明                                     |
| -------------------- |----------------------------------------|
| path                 | 数据存储位置                                 |
| max_summary_size     | 最大Summary日志大小，用于恢复数据库中的数据，默认：134217728 |
| max_level            | LSM的最大层数，取值范围0-4，默认：4                  |
| base_file_size       | 单个文件数据大小，默认：16777216                   |
| compact_trigger      | 触发compation的文件数量, 默认：4                 |
| max_compact_size     | 最大压缩大小，默认：2147483648                   |
| dio_max_resident     | 文件io最大驻留page数量，默认：1024                 |
| dio_max_non_resident     | 文件io最大非驻留page数量，默认：1024                |
| dio_page_len_scale     | 文件io page缩放比，默认为：1                     |
| strict_write     | 是否严格写入，默认为false                        |

## [wal]

| 参数    | 说明 |
| ------- | ---- |
| enabled | 是否启用WAL，默认：false     |
| path    | 预写日志路径     |
| sync    | 同步写入WAL预写日志，默认false     |

## [cache]

| 参数                 | 说明 |
| -------------------- | ---- |
| max_buffer_size      |  最大缓存大小，默认：134217728    |
| max_immutable_number |  immemtable的最大值, 默认：4    |

## [log]

| 参数  | 说明 |
| ----- | ---- |
| level |  日志等级（debug、info、error、warn），默认：info   |
| path  |  日志存放位置    |

## [security]
| 参数 | 说明       |
| ---  |----------|
| tls_config | 可选，TLS配置 |

### [security.tls_config]
|参数 | 说明       |
|---|----------|
|certificate| TLS服务的证书 |
|private_key| TLS服务的私钥 |

## reporting_disabled

**说明**：是否关闭信息收集

CnosDB会收集一些信息，使社区更好地改进产品

我们不会收集用户的数据，只会收集

- 数据库实例运行时间
- 数据库实例运行的操作系统类型和架构
- 数据库版本
- 数据库实例运行的区域，只到省级，州级

你可以在配置文件顶部设置此项为true关闭信息收集
```
reporting_disabled = true
```
