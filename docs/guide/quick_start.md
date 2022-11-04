---
title: 快速开始
icon: launch
order: 3
---

## Docker
1. 安装最新版 [Docker](https://www.docker.com/products/docker-desktop/)

2. 使用 Docker 启动容器
   ```shell
   docker run -itd  --env cpu=2 --env memory=4 -p 31007:31007 cnosdb/cnosdb:v2.0.0
   ```

3. 进入容器运行`cnosdb-cli`
   ```shell
   docker exec -it <container_id> sh
   ```
   ```shell
   $ cnosdb-cli
   CnosDB CLI v2.0.0
   Input arguments: Args { host: "0.0.0.0", port: 31007, user: "cnosdb", password: None, database: "public", target_partitions: Some(1), data_path: None, file: [], rc: None, format: Table, quiet: false }
   public ❯
   ```
::: tip
查看帮助请执行`\?`
:::
更多内容请查看[基本操作](#基本操作)

## **从源码安装**

### **支持平台**

我们支持以下平台，如果发现可以在列表以外的平台上运行，
请[报告](https://github.com/cnosdb/cnosdb/issues)给我们。

- Linux x86(`x86_64-unknown-linux-gnu`)
- Darwin arm(`aarch64-apple-darwin`)

### **前置条件**

1. 安装`Rust`，可前往[官网](https://www.rust-lang.org/learn/get-started)下载安装
2. Cmake
   ```shell
   # Debian or Ubuntu
   apt-get install cmake
   # Arch Linux
   pacman -S cmake
   # CentOS
   yum install cmake
   # Fedora
   dnf install cmake
   # macOS
   brew install cmake
   ```
   对于 Windows，你也可以在[Cmake官网](https://cmake.org/download/)下载和安装 Cmake
3. FlatBuffers

   ```shell
   # Arch Linux
   pacman -S flatbuffers
   # Fedora
   dnf install flatbuffers
   # Ubuntu
   snap install flatbuffers
   # macOS
   brew install flatbuffers
   ```

   如果您的系统不在此列，需要自行编译

   ```shell
   $ git clone -b v2.0.6 --depth 1 https://github.com/google/flatbuffers.git && cd flatbuffers

   # 根据操作系统选择以下命令之一
   $ cmake -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release
   $ cmake -G "Visual Studio 10" -DCMAKE_BUILD_TYPE=Release
   $ cmake -G "Xcode" -DCMAKE_BUILD_TYPE=Release

   $ sudo make install
   ```

### **编译**

```shell
$ git clone https://github.com/cnosdb/cnosdb.git && cd cnosdb
$ cargo build
```

### **运行**

#### **运行数据库服务**

```shell
cargo run -- run --cpu 4 --memory 64
```
#### **运行CLI**
在另一个终端，相同目录下运行如下命令
```shell
cargo run --package client --bin client
```

## 基本操作

### 创建数据库

```sql
CREATE DATABASE oceanic_station;
```

正确执行，会返回类似如下内容：

```
Query took 0.080 seconds.
```

CLI中输入如下命令，切换连接的数据库

```sql
\c oceanic_station
```

### 创建表
```sql
CREATE TABLE air (
    visibility DOUBLE,
    temperature DOUBLE,
    presssure DOUBLE,
    TAGS(station)
);
```

正确执行，会返回类似如下内容：

```
Query took 0.032 seconds.
```

### 写入您的第一条数据
```sql
INSERT INTO air (TIME, station, visibility, temperature, presssure) VALUES 
                (1666165200290401000, 'XiaoMaiDao', 56, 69, 77);
```

正确执行，会返回以下内容：
```
+------+
| rows |
+------+
| 1    |
+------+
```

### 使用 SQL 查询数据

```
SELECT * FROM air;
```

正确执行，会返回以下内容：

```
+-----------+------------+-------------+----------------------------+------------+
| presssure | station    | temperature | time                       | visibility |
+-----------+------------+-------------+----------------------------+------------+
| 77        | XiaoMaiDao | 69          | 2022-10-19 07:40:00.290401 | 56         |
+-----------+------------+-------------+----------------------------+------------+
```

   > 有关更多关于数据库的操作请参考：
   >
   > [SQL](query/sql.md)
   >
   > [编程接口](application/api.md)


