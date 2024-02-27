# 发行说明

## v2.3.4.4

Release date：Sep 28,2023

### 功能优化

- 为 `FileCursor` 添加内存缓冲区。[#1927](https://github.com/cnosdb/cnosdb/pull/1927)
- 添加配置文件项目 `file_buffer_size`。[#1960](https://github.com/cnosdb/cnosdb/pull/1960)
- 添加配置文件项目 `copyinto_trigger_flush_size`。[#1944](https://github.com/cnosdb/cnosdb/pull/1944)

### Bug Fixes:

- 修复宽表导致的 `COPY INTO` 错误。[#1924](https://github.com/cnosdb/cnosdb/pull/1924)
- 在刷新前更新 `version_set` 版本。[#1926](https://github.com/cnosdb/cnosdb/pull/1926)
- 修复删除 `ScalarValueForkDF`。[#1938](https://github.com/cnosdb/cnosdb/pull/1938)
- 当表没有数据时，不执行底层的删除列数据操作。[#1950](https://github.com/cnosdb/cnosdb/pull/1950)
- 修复重新启动时，反序列化流语句失败的问题。[#1953](https://github.com/cnosdb/cnosdb/pull/1953)
- 不允许更改 root 用户的`grant_admin` 参数。[#1954](https://github.com/cnosdb/cnosdb/pull/1954)

## v2.3.4.3

发布日期：2024年01月09日

### Bug Fixes:

- 修复 tskv 迭代器有时会反回比预期更多的数据。[#1895](https://github.com/cnosdb/cnosdb/pull/1895)

## v2.3.4.2

发布日期：2024年01月03日

### 功能优化

- 重构 e2e_test 中的实用程序和不相关内容。[#1882](https://github.com/cnosdb/cnosdb/pull/1882)

### Bug Fixes:

- 修复有关合并的错误。[#1889](https://github.com/cnosdb/cnosdb/pull/1889)

## v2.3.4.1

发布日期：2024年12月29日

### 功能优化

- 删除 `cold_data_server` 和 `NodeAttribute` 模块。[#1859](https://github.com/cnosdb/cnosdb/pull/1859)
- 在 `meta` 服务中添加 `setkv` 和 `delete` 的 http 接口。[#1835](https://github.com/cnosdb/cnosdb/pull/1835)
- 客户端启动时隐藏密码。[#1881](https://github.com/cnosdb/cnosdb/pull/1881)

### Bug Fixes:

- 修复`dedup_by_front` 删除了错误元素的错误。 [#1815](https://github.com/cnosdb/cnosdb/pull/1815)
- 修复异步 LruCache 导致的错误。 [#1820](https://github.com/cnosdb/cnosdb/pull/1820)
- 修复 `meta` 服务创建的快照为空的问题。 [#1835](https://github.com/cnosdb/cnosdb/pull/1835)

## v2.3.4 Apus

发布日期：2023年11月24日

### New features:

- adapt vector [#1628](https://github.com/cnosdb/cnosdb/pull/1628)
- add `increase` function, `http_limiter` and `metrics` [#1629](https://github.com/cnosdb/cnosdb/pull/1629)
- 将写请求和SQL请求都路由到查询服务器 [#1760](https://github.com/cnosdb/cnosdb/pull/1760)
- 支持HTTP压缩 [#1762](https://github.com/cnosdb/cnosdb/pull/1762)
- support dump ddl [#1782](https://github.com/cnosdb/cnosdb/pull/1782)
- start the service through configuration [#1789](https://github.com/cnosdb/cnosdb/pull/1789)

### 功能优化

- Fix restart get actual database schema. [#1636](https://github.com/cnosdb/cnosdb/pull/1636)
- remove debug log [#1793](https://github.com/cnosdb/cnosdb/pull/1793)

### Bug Fixes:

- drop tenant not drop members bug [#1632](https://github.com/cnosdb/cnosdb/pull/1632)
- failed to generate a plan for interpolation functions with an alias [#1777](https://github.com/cnosdb/cnosdb/pull/1777)
- add check of parameter event_time_column of stream table [#1744](https://github.com/cnosdb/cnosdb/pull/1744)
- stream job lost database info when restart [#1734](https://github.com/cnosdb/cnosdb/pull/1734)
- disable creation of stream table with columns with the same name [#1733](https://github.com/cnosdb/cnosdb/pull/1733)
- 优化直接选择流表的错误消息 [#1732](https://github.com/cnosdb/cnosdb/pull/1732)
- 获取系统内存单位错误 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- Fix line protocol parser '\n' error. [#1426](https://github.com/cnosdb/cnosdb/pull/1426)
- 删除用户时不删除租户成员的问题 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- fix Tenant not found return http status code 500 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- 修复 gRPC 大小限制 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- Fix errors in execution of DELETE FROM TABLE. [#1643](https://github.com/cnosdb/cnosdb/pull/1643)

## v2.3.4 Apus

发布日期：2023年11月24日

### New features:

- adapt vector [#1628](https://github.com/cnosdb/cnosdb/pull/1628)
- add `increase` function, `http_limiter` and `metrics` [#1629](https://github.com/cnosdb/cnosdb/pull/1629)
- 将写请求和SQL请求都路由到查询服务器 [#1760](https://github.com/cnosdb/cnosdb/pull/1760)
- 支持HTTP压缩 [#1762](https://github.com/cnosdb/cnosdb/pull/1762)
- support dump ddl [#1782](https://github.com/cnosdb/cnosdb/pull/1782)
- start the service through configuration [#1789](https://github.com/cnosdb/cnosdb/pull/1789)

### 功能优化

- Fix restart get actual database schema. [#1636](https://github.com/cnosdb/cnosdb/pull/1636)
- remove debug log [#1793](https://github.com/cnosdb/cnosdb/pull/1793)

### Bug Fixes:

- drop tenant not drop members bug [#1632](https://github.com/cnosdb/cnosdb/pull/1632)
- failed to generate a plan for interpolation functions with an alias [#1777](https://github.com/cnosdb/cnosdb/pull/1777)
- add check of parameter event_time_column of stream table [#1744](https://github.com/cnosdb/cnosdb/pull/1744)
- stream job lost database info when restart [#1734](https://github.com/cnosdb/cnosdb/pull/1734)
- disable creation of stream table with columns with the same name [#1733](https://github.com/cnosdb/cnosdb/pull/1733)
- 优化直接选择流表的错误消息 [#1732](https://github.com/cnosdb/cnosdb/pull/1732)
- 获取系统内存单位错误 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- Fix line protocol parser '\n' error. [#1426](https://github.com/cnosdb/cnosdb/pull/1426)
- 删除用户时不删除租户成员的问题 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- fix Tenant not found return http status code 500 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- 修复 gRPC 大小限制 [#1739](https://github.com/cnosdb/cnosdb/pull/1739)
- Fix errors in execution of DELETE FROM TABLE. [#1643](https://github.com/cnosdb/cnosdb/pull/1643)

## v2.4.0 Milky Way

Release date: Oct 24, 2023

### New features:

📈 No more monotone data summarization, new aggregation functions!

- compact_state_agg [#1359](https://github.com/cnosdb/cnosdb/pull/1359)
- gauge_agg [#1370](https://github.com/cnosdb/cnosdb/pull/1370)
- first [#1395](https://github.com/cnosdb/cnosdb/pull/1395)
- last [#1413](https://github.com/cnosdb/cnosdb/pull/1413)
- mode [#1440](https://github.com/cnosdb/cnosdb/pull/1440)
- increase [#1476](https://github.com/cnosdb/cnosdb/pull/1476)
- delta [#1395](https://github.com/cnosdb/cnosdb/pull/1395)
- time_delta [#1405](https://github.com/cnosdb/cnosdb/pull/1405)
- rate [#1405](https://github.com/cnosdb/cnosdb/pull/1405)

🌐 GIS Functions: [#1465](https://github.com/cnosdb/cnosdb/pull/1465)

- ST_AsBinary
- ST_GeomFromWKB
- ST_Distanc
- ST_Area

💼 Change on system schema [#1461](https://github.com/cnosdb/cnosdb/pull/1461)

- All lowercase, system field names are normalized.

🔄 修改数据炸裂更新，修改数据变得so easy，你想改就改！🔄 Make it easier to modify data! [#1484](https://github.com/cnosdb/cnosdb/pull/1484) [#1517](https://github.com/cnosdb/cnosdb/pull/1517) [#1623](https://github.com/cnosdb/cnosdb/pull/1623) [#1590](https://github.com/cnosdb/cnosdb/pull/1590)

```sql
UPDATE table_name SET ( assignment_clause [, ...] ) where_clause
assignment clause :
    tag_name = value_expression
```

```sql
UPDATE table_name SET ( assignment_clause [, ...] ) where_clause
assignment clause :
    field_name = value_expression
ALTER TABLE tb_name alter_table_option;
```

```sql
alter_table_option: {
      ADD TAG col_name
    | ADD FIELD col_name [CODEC(code_type)]
    | ALTER col_name SET CODEC(code_type)
    | DROP col_name
    | RENAME COLUMN col_name TO new_col_name
}
```

```sql
DELETE FROM table_name where_clause
```

Other new features are as follows:

- 适配 Vector。[#1380](https://github.com/cnosdb/cnosdb/pull/1380)
- 新增 Geometry 类型。Refactor iterator and optimize performance. [#1467](https://github.com/cnosdb/cnosdb/pull/1467)
- 添加直方图导出。[#1472](https://github.com/cnosdb/cnosdb/pull/1472)
- Support duration_in function. [#1423](https://github.com/cnosdb/cnosdb/pull/1423) [#1408](https://github.com/cnosdb/cnosdb/pull/1408)
- Support grpc compression. [#1631](https://github.com/cnosdb/cnosdb/pull/1631)
- Add cluster data export/import/migrate tool. [#1635](https://github.com/cnosdb/cnosdb/pull/1635)
- 新增数据库延迟删除。[#1510](https://github.com/cnosdb/cnosdb/pull/1510)

```sql
DROP DATABASE [IF EXISTS] <db_name> [AFTER <time_interval>]
```

### 功能优化

The memory usage is effectively reduced, TSKV is optimized to be more efficient, and Flatbuffers, index building and other aspects are also significantly improved. In addition, careful optimizations such as cache refactoring and fewer clones have led to even better overall performance.除此之外，缓存重构和减少克隆操作等细致优化，让整体性能更上一层楼。

- Support \<!=>  compare operators to data sources. [#1469](https://github.com/cnosdb/cnosdb/pull/1469)Add limiter manager. [#1494](https://github.com/cnosdb/cnosdb/pull/1494)
- 按 vnode 拆分 WAL。[#1454](https://github.com/cnosdb/cnosdb/pull/1454)
- TSKV Optimizations to reduce the memory usage. [#1199](https://github.com/cnosdb/cnosdb/pull/1199) [#1199](https://github.com/cnosdb/cnosdb/pull/1199)
- Refactor DESC TABLES / DESC DATABASES。[#1397](https://github.com/cnosdb/cnosdb/pull/1397)
- New resource management function, data delete action monitoring and failure retry. [#1616](https://github.com/cnosdb/cnosdb/pull/1616)[#1616](https://github.com/cnosdb/cnosdb/pull/1616)
- Enhance Meta Watch model. [#1586](https://github.com/cnosdb/cnosdb/pull/1586)Optimize build index. [#1468](https://github.com/cnosdb/cnosdb/pull/1468)
- 重构迭代器并优化性能。Fix tsm damaged, but query not try read. [#1453](https://github.com/cnosdb/cnosdb/pull/1453)
- Change big dependency 'models' to small dependency 'error_code'[#1470](https://github.com/cnosdb/cnosdb/pull/1470)[#1470](https://github.com/cnosdb/cnosdb/pull/1470)
- Refactored the inverted index to solve the problem of index amplification.[#1468](https://github.com/cnosdb/cnosdb/pull/1468)
- 优化 Flatbuffers。Optomize Flatbuffers. [#1435](https://github.com/cnosdb/cnosdb/pull/1435)
- Refactor record_file and codec in TSKV. [#1439](https://github.com/cnosdb/cnosdb/pull/1439)[#1439](https://github.com/cnosdb/cnosdb/pull/1439)
- Map vector array to string. [#1450](https://github.com/cnosdb/cnosdb/pull/1450)[#1450](https://github.com/cnosdb/cnosdb/pull/1450)
- Refactor usage_schema. [#1479](https://github.com/cnosdb/cnosdb/pull/1479)[#1479](https://github.com/cnosdb/cnosdb/pull/1479)
- Rename coordinator limiter. [#1482](https://github.com/cnosdb/cnosdb/pull/1482)[#1482](https://github.com/cnosdb/cnosdb/pull/1482)
- Added quota support for multi-tenant scenarios.[#1494](https://github.com/cnosdb/cnosdb/pull/1494)
- Clean no-use VnodeStatusListener。[#1487](https://github.com/cnosdb/cnosdb/pull/1487)
- 减少克隆操作。[#1582](https://github.com/cnosdb/cnosdb/pull/1582)
- 修复标量函数参数数量未见检查的BUG。leader replication, multi raft replication group. [#1534](https://github.com/cnosdb/cnosdb/pull/1534)
- Seek position before index read. [#1618](https://github.com/cnosdb/cnosdb/pull/1618)[#1618](https://github.com/cnosdb/cnosdb/pull/1618)
- 扩展 Raft 写接口。Extend raft write interface. [#1620](https://github.com/cnosdb/cnosdb/pull/1620)
- 重构缓存。Fix restart recover invalid data. [#1570](https://github.com/cnosdb/cnosdb/pull/1570)
- When drop table, the will deleted. [#1553](https://github.com/cnosdb/cnosdb/pull/1553)[#1553](https://github.com/cnosdb/cnosdb/pull/1553)
- 禁用对 tenant cnosdb 的限制。Refactor cache. [#1560](https://github.com/cnosdb/cnosdb/pull/1560)
- Leader 复制，多 Raft 复制组。Split wal by vnode. [#1454](https://github.com/cnosdb/cnosdb/pull/1454)
- Add testcases about function, DDL, DML. [#1588](https://github.com/cnosdb/cnosdb/pull/1588)Add scalar args check. [#1615](https://github.com/cnosdb/cnosdb/pull/1615)
- Refactor the way to scan data in the update tag plan. [#1634](https://github.com/cnosdb/cnosdb/pull/1634)

### Bug Fixes:

- 修复 check_writes 错误。 The password is encrypted and stored to enhance security. [#1419](https://github.com/cnosdb/cnosdb/pull/1419)
- 修复行协议解析器 '\n' 错误。[#1426](https://github.com/cnosdb/cnosdb/pull/1426)
- Fix modify the cases to be repeatable. [#1451](https://github.com/cnosdb/cnosdb/pull/1451)[#1451](https://github.com/cnosdb/cnosdb/pull/1451)
- 修复 HTTP 指标字段顺序错误。[#1506](https://github.com/cnosdb/cnosdb/pull/1506)
- 修复 TSM 损坏，但查询不尝试读取的问题。[#1453](https://github.com/cnosdb/cnosdb/pull/1453)
- Fix stream plan not perform filter pushdown. [#1515](https://github.com/cnosdb/cnosdb/pull/1515)[#1515](https://github.com/cnosdb/cnosdb/pull/1515)
- 修复 CLI 数组越界访问。Fix cli array out-of-bounds access. [#1531](https://github.com/cnosdb/cnosdb/pull/1531)
- 修复重新启动时数据丢失的问题。Fix restart lose data. [#1471](https://github.com/cnosdb/cnosdb/pull/1471)
- Drop database in raft replication mode. [#1556](https://github.com/cnosdb/cnosdb/pull/1556)[#1556](https://github.com/cnosdb/cnosdb/pull/1556)
- 修复意外删除了 WAL 测试目录的问题。Fix unexpectedly deleted the wal test directory. [#1558](https://github.com/cnosdb/cnosdb/pull/1558)
- 修复密码验证失败问题。Fix password verify failed. [#1583](https://github.com/cnosdb/cnosdb/pull/1583)
- Fix time_window function cannot handle constant cast expression. [#1578](https://github.com/cnosdb/cnosdb/pull/1578)Fix Confusing error message. [#1595](https://github.com/cnosdb/cnosdb/pull/1595)
- 修复桶的填充率。Decrease clone. [#1582](https://github.com/cnosdb/cnosdb/pull/1582)
- 修复混淆的错误消息。[#1595](https://github.com/cnosdb/cnosdb/pull/1595)
- 修复重新启动时恢复无效数据的问题。[#1570](https://github.com/cnosdb/cnosdb/pull/1570)
- 禁止删除 root 用户。[#1598](https://github.com/cnosdb/cnosdb/pull/1598)
- 修复在 TSKV 中删除列导致获取空数据库的问题。Fix check_writes error. [#1383](https://github.com/cnosdb/cnosdb/pull/1383)
- Fix /cluster/users/user change not notify to serve. [#1599](https://github.com/cnosdb/cnosdb/pull/1599)[#1599](https://github.com/cnosdb/cnosdb/pull/1599)
- Fix meta create duplicate data version. [#1605](https://github.com/cnosdb/cnosdb/pull/1605)[#1605](https://github.com/cnosdb/cnosdb/pull/1605)
- 增加标量函数参数检查。[#1615](https://github.com/cnosdb/cnosdb/pull/1615)
- Fix create system database usage_schema. [#1606](https://github.com/cnosdb/cnosdb/pull/1606)[#1606](https://github.com/cnosdb/cnosdb/pull/1606)
- 修复删除租户时不删除成员的错误。Disable restrictions on Tenant cnosdb. [#1617](https://github.com/cnosdb/cnosdb/pull/1617)
- Fix tskv iterator sometimes returns more data than expected. [#1638](https://github.com/cnosdb/cnosdb/pull/1638) Fix rate bucket refill. [#1563](https://github.com/cnosdb/cnosdb/pull/1563)
- 使 tskv 节点重启不受资源隐藏影响。 Forbidden drop root user. [#1598](https://github.com/cnosdb/cnosdb/pull/1598)
- 执行删除时停止后台的数据文件 compaction 任务。 support Geometry data type. [#1463](https://github.com/cnosdb/cnosdb/pull/1463)

## v2.3.3 Antlia

发布日期：2023年9月28日

### 功能优化

- Optimized read performance [#1467](https://github.com/cnosdb/cnosdb/pull/1467)
- Improved the Ord implementation of DataType  [#1467](https://github.com/cnosdb/cnosdb/pull/1467)
- Added data block reader  [#1467](https://github.com/cnosdb/cnosdb/pull/1467)
- Removed field scan timer  [#1467](https://github.com/cnosdb/cnosdb/pull/1467)

### Bug Fixes:

- Fixed the issue allowing modification of the usage_schema database [#1421](https://github.com/cnosdb/cnosdb/pull/1421)
- Resolved inconsistency issues with users and tenants on multiple metadata nodes [#1417](https://github.com/cnosdb/cnosdb/pull/1417)
- Fixed the problem of not deleting data when deleting a tenant [#1418](https://github.com/cnosdb/cnosdb/pull/1418)
- Resolved the issue of generating TLS lv-2 certificates without options [#1441](https://github.com/cnosdb/cnosdb/pull/1441)
- Fixed the data loss issue when creating TSF [#1478](https://github.com/cnosdb/cnosdb/pull/1478)
- Resolved the cancellation of queries on Tskv [#1488](https://github.com/cnosdb/cnosdb/pull/1488)
- Fixed retry after table update conflict [#1503](https://github.com/cnosdb/cnosdb/pull/1503)
- Fixed database modification issue [#1504](https://github.com/cnosdb/cnosdb/pull/1504)
- Fixed issues with Arrow Flight SQL JDBC API's getCatalogs, getSchemas, and getTables [#1520](https://github.com/cnosdb/cnosdb/pull/1520)
- Fixed the getTables API of Arrow Flight SQL [#1528](https://github.com/cnosdb/cnosdb/pull/1528)
- Resolved the delayed reporting of NodeMetrics [#1541](https://github.com/cnosdb/cnosdb/pull/1541)
- Fixed data loss issue due to table updates [#1542](https://github.com/cnosdb/cnosdb/pull/1542)
- Fixed errors in parsing Line Protocol [#1539](https://github.com/cnosdb/cnosdb/pull/1539)

## v2.3.2 Andromeda

Release date: Aug 02,2023

### New features:

- Add monitoring metric 'http_data_out' [#1304](https://github.com/cnosdb/cnosdb/issues/1304)
- Added chunked mode in the client [#1357](https://github.com/cnosdb/cnosdb/issues/1357)
- Added new log types to the WAL: DROP VNODE and DROP TABLE [#1340](https://github.com/cnosdb/cnosdb/issues/1340)

### 功能优化

- Improved flight-sql implementation, added implementation for the do_put_prepared_statement_update interface [#1329](https://github.com/cnosdb/cnosdb/issues/1329)
- Enhanced meta watch and optimized interaction between queries [#1314](https://github.com/cnosdb/cnosdb/issues/1314)
- Upgraded datafusion version to 27.0.0 [#1323](https://github.com/cnosdb/cnosdb/issues/1323)
- Added additional methods to the flatbuffers model [#1361](https://github.com/cnosdb/cnosdb/issues/1361)

### Bug Fixes:

- Fixed the issue of generating duplicate series IDs [#1301](https://github.com/cnosdb/cnosdb/issues/1301)
- Fixed the problem with the sample function returning errors [#1296](https://github.com/cnosdb/cnosdb/issues/1296)
- Fixed panic when writing to binlog [#1309](https://github.com/cnosdb/cnosdb/issues/1309)
- Fixed schema error in logical plan [#1332](https://github.com/cnosdb/cnosdb/issues/1332)
- Fixed parsing error in CREATE TABLE [#1318](https://github.com/cnosdb/cnosdb/issues/1318)
- Fixed json deserialization issue in raft_bucket [#1347](https://github.com/cnosdb/cnosdb/issues/1347)
- Fixed handshake failure for arrow-flight-sql odbc [#1336](https://github.com/cnosdb/cnosdb/issues/1336)
- Fixed out-of-memory issue when importing Line Protocol data [#1319](https://github.com/cnosdb/cnosdb/issues/1319)
- Fixed errors in data node health check [#1352](https://github.com/cnosdb/cnosdb/issues/1352)
- Fixed unintended deletion of irrelevant columns when deleting a table [#1363](https://github.com/cnosdb/cnosdb/issues/1363)
- Fixed client connection issue using ca.crt [#1369](https://github.com/cnosdb/cnosdb/issues/1369)
- Fixed tokio trace filtering [#1372](https://github.com/cnosdb/cnosdb/issues/1372)
- Fixed errors in inserting line protocol data [#1366](https://github.com/cnosdb/cnosdb/issues/1366)

### Behavior Change

- Configuration changes [#1372](https://github.com/cnosdb/cnosdb/issues/1372)
- Default TTL set to infinite when creating a database [#1354](https://github.com/cnosdb/cnosdb/issues/1354)

## v2.3.1

Release date: June 21,2023

### New features:

- Added trace [#1272](https://github.com/cnosdb/cnosdb/issues/1272)
- Support sliding window gap fill [#1171](https://github.com/cnosdb/cnosdb/pull/1171)
- Support metadata API for Flight SQL [#1173](https://github.com/cnosdb/cnosdb/pull/1173)
- Support granting admin privileges [#1929](https://github.com/cnosdb/cnosdb/pull/1219)
- Implemented sample function [#1228](https://github.com/cnosdb/cnosdb/pull/1228)
- Client-side supports HTTPS connection [#1225](https://github.com/cnosdb/cnosdb/pull/1225)

### 功能优化

- Early release of rwlock for cached partitions [#1181](https://github.com/cnosdb/cnosdb/pull/1181)
- Implementation of viewing database and table functionality for system tables [#1212](https://github.com/cnosdb/cnosdb/pull/1212)
- Remove support for TLS protocol connection on grpc server side [#1216](https://github.com/cnosdb/cnosdb/pull/1216)
- Modify the starting time precision of buckets to ms [#1215](https://github.com/cnosdb/cnosdb/pull/1215)
- Support multi-threaded write hinted handoff [#1230](https://github.com/cnosdb/cnosdb/pull/1230)
- TskvExec partition read strategy [#1200](https://github.com/cnosdb/cnosdb/pull/1200)
- Added a tool to repair corrupted index files [#1238](https://github.com/cnosdb/cnosdb/pull/1238)
- Compaction consumes too much memory [#1237](https://github.com/cnosdb/cnosdb/pull/1237)
- Add host information when querying metrics [#1202](https://github.com/cnosdb/cnosdb/pull/1202)
- Added metrics information for write_data_in and sql_data_in [#1241](https://github.com/cnosdb/cnosdb/pull/1241)
- Expired WAL files are not always automatically deleted [#1175](https://github.com/cnosdb/cnosdb/pull/1175)
- Expired WAL files are not automatically deleted when some Vnodes are "cold" (rarely written to) [#1175](https://github.com/cnosdb/cnosdb/pull/1175)
- Check for expired WALs and delete them when the cache is flushed to disk [#1175](https://github.com/cnosdb/cnosdb/pull/1175)
- Optimization of some methods in FileManager [#1268](https://github.com/cnosdb/cnosdb/pull/1268)

### Bug Fixes:

- Data loss caused by copying the target Vnode during Vnode migration [#1151](https://github.com/cnosdb/cnosdb/issues/1151)
- Failed to write data due to metadata verification failure [#1184](https://github.com/cnosdb/cnosdb/issues/1184)
- Deleting a nonexistent table returns an unexpected status [#1218](https://github.com/cnosdb/cnosdb/issues/1218)
- Inaccurate monitoring indicators for VNODE_DISK_STORAGE and VNODE_CACHE_SIZE [#1197](https://github.com/cnosdb/cnosdb/issues/1197)
- System tables cannot query currently executing SQL statements [#1188](https://github.com/cnosdb/cnosdb/issues/1188)
- Exporting data generates many empty files with only column name information [#1211](https://github.com/cnosdb/cnosdb/issues/1211)
- Column encoding is not checked when updating tables [#1148](https://github.com/cnosdb/cnosdb/issues/1148)
- Inconsistent data query results caused by damaged Vnodes [#1192](https://github.com/cnosdb/cnosdb/issues/1192)
- Writing data fails but still returns success result [#1084](https://github.com/cnosdb/cnosdb/issues/1084)
- When writing data, a large number of file handles marked as deleted cause continuous disk space growth [#1242](https://github.com/cnosdb/cnosdb/issues/1242)
- Multiple connections are established when writing data [#1251](https://github.com/cnosdb/cnosdb/issues/1251)
- Compilation error in CnosDB tuple component in Docker environment [#1266](https://github.com/cnosdb/cnosdb/issues/1266)
- Fix issue where prom remote_read doesn't return data [#1273](https://github.com/cnosdb/cnosdb/issues/1273)
- Memory exhaustion when exporting data [#955](https://github.com/cnosdb/cnosdb/issues/955)
- Inconsistent or inaccurate query results [#1283](https://github.com/cnosdb/cnosdb/pull/1283)
- Slow DB recovery after version upgrade [#1180](https://github.com/cnosdb/cnosdb/issues/1180)
- Syntax parsing error for describe tables and describe databases command [#1160](https://github.com/cnosdb/cnosdb/issues/1160)
- High memory consumption during data import resulting in OOM and failed data writes [#1141](https://github.com/cnosdb/cnosdb/issues/1141)
- Incorrect seq_no parameter set during Vnode movement [#1175](https://github.com/cnosdb/cnosdb/pull/1175)
- SQL execution error "Not a field name"  [#1033](https://github.com/cnosdb/cnosdb/issues/1033)
- External table data import overrides original table data [#1131](https://github.com/cnosdb/cnosdb/issues/1131)

### Behavior Change

- Change the "Table" displayed in the result of show tables to "table_name" [#1212](https://github.com/cnosdb/cnosdb/pull/1212)

## V2.3.0

On May 09, 2023, CnosDB released version 2.3.0. This version mainly adds stream computing capabilities and some enterprise features. The main modifications of this version include:该版本主要增加了流计算能力以及一些企业版功能。这个版本的主要修改还包括：

- Enhanced query functionality now supports scrolling windows, sliding windows, and streaming calculations.
- Parallel processing has been applied to query iterators, greatly improving query performance.
- Added some tools for problem localization, including the use of CPU/Memory pprof and asynchronous call stack printing.
- Further improved the test case system, including improving access control test cases and adding support for SQLLogicTest.
- Added support for the OpenTSDB write protocol.
- HTTP requests now support streaming processing, effectively reducing database memory usage.
- In the enterprise version, support for subscription and tiered storage has been added. Please contact us for more information.欢迎与我们联系。

Addition, there are a series of bug fixes.

## V2.2.0

2023年03月01日，CnosDB 发布 V2.2.0 版。On March 01, 2023, CnosDB released version V2.2.0. This version mainly adds the storage and computation separation mode and further enhances the performance and stability of distributed, and continues to be open source. The major changes in this release also include:这个版本的主要修改还包括：

- Support for the Prometheus Remote Read/Write API.
- Improved performance: added caching for index and file index.
- Refactor the code of Coodinator and Watch to improve performance and enhance stability.
- Support multiple startup modes: storage and computing integration, separation and stand-alone mode start.
- Improved monitoring metrics and added memory limits to prevent OOM.
- Improved the O\&M functions, adding copy/move/drop vnode capabilities.
- Added count pushdown, optimized count(\*) and significantly improving count performance.
- Add multi-threaded flush, reduce memory copy during writes, optimize the use of some locks and improve write performance.

Addition, there are a series of bug fixes.

## V2.1.0

2023年01月10日，CnosDB 发布 V2.1.0 版。On January 10, 2023, CnosDB released version V2.1.0. This version releases the CnosDB 2.0 distributed cluster version and continues to be open source. The major changes in this release also include.这个版本的主要修改还包括：

- Added metadata service and coordinator service to support distributed clusters.
- Introduced RBAC permission system to support user management, role management and permission management via SQL.
- 重构了倒排索引，解决了索引放大的问题。
- Added the function of showing the executing query and stopping the executing query on query.
- Unified the return of error codes to users to make it clearer and more concise.
- 新增了针对多租户场景下的quota支持。

In addition, a series of metric and performance optimizations, as well as bug fixes, are included.

## V2.0.1

2022年11月08日，CnosDB 发布 V2.0.1 版。On November 8th, 2022, CnosDB released version V2.0.1. This version fixes some of the key bugs in CnosDB and updates some essential new features, the details of the update are as follows:

**Bug修复：**

- Fix the wrong names of table and database object.
- Fix the bug of file corruption when WAL is interrupted.
- Fix the problem that TableWriteExec can only write to one partition.
- Fix Schema use error when refreshing data to disk causes query confusion.
- Add TskvScan's projection validity check and optimize column pruning.
- Fix the problem that field can be empty in the written row protocol.
- Fix the failure of parsing request strings containing comma or equal sign.
- Add field and tag exception checking for write points.
- 修复compaction时导致的写入挂起的问题。
- Fix the bug that no data is returned when only tag column is included in SELECT statement.
- Add tsfid to the global context.
- Disable cross join.

Others:

- Limit the number of query joins and the size of query contents.

**其他：**

- Clearer Key using HashMap.
- Upgrade DataFusion version to 13.0.0.
- Solve the dependency conflict problem.
- Add log_err macro.
- Check input point format.
- Performance optimization.
- Add collection information.
- Structure naming change, change Point::table to tab, change Points::database to db.

## V2.0.0

2022年10月24日，CnosDB 发布 V2.0.0 版本。
On October 24th, 2022, CnosDB released version V2.0.0. This release is a new beginning where we have rebuilt CnosDB time series database based on Rust, improved the performance of CnosDB, enhanced the ease of use of CnosDB, and made CnosDB more adaptable to the requirements of cloud ecology.

**特色功能：**

- Storage engine specially designed for time series data, write operation optimization, and delete and update operation supporting;
- Compression algorithm flexibly specified by users, with adjustable compression ratio;
- Query engine implemented based on Apache Arrow and Datafusion;
- Support for standard SQL and Schemaless writes;
- Multiple indexes to optimize query efficiency;
- Eco-friendly, support for RESTful interface, Telegraf, Grafana and other common third-party ecological components.
