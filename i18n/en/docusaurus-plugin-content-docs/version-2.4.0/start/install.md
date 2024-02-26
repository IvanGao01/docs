---
title: Install
order: 3
---

# Install

## Deploy

For other installation methods, please see [Installing CnosDB](https://www.docker.com/products/docker-desktop/)

## Docker install

1. Installing a [Docker](https://www.docker.com/products/docker-desktop/) environment

2. Start the container with Docker

```shell
docker run --name cnosdb -d cnosdb/cnosdb:community-latest cnosdb run -M singleton
```

3. Enter the container

```shell
docker exec -it cnosdb sh
```

4. Run `cnosdb-cli`

```shell
cnosdb-cli --port 8902
```

It will display the following:

```
CnosDB CLI v2.3.0
Input arguments: Args { host: "localhost", port: 8902, user: "cnosdb", password: None, database: "public", target_partitions: Some(1), data_path: None, file: [], rc: None, format: Table, quiet: false }
public ❯
```

## Download Sample Data

Rank Functions

Executing the following command in the shell will generate a data file locally in Line Protocol format with the name oceanic_station

```shell
curl -o oceanic_station.txt https://dl.cnosdb.com/sample/oceanic_station.txt
```

## In the SELECT query, the HAVING clause must follow the GROUP BY clause and appear before the ORDER BY clause (if any).

- Determines whether the left expression matches the pattern of the right expression
  ```shell
      cnosdb-cli
  ```
- The next offset line of the current line in the`offset FOLLOWING` ROWS mode. The next offset value of the current value in the RANGE mode.
  ```shell
  create database oceanic_station with ttl '10000d';
  ```
- When len is a negative number, len represents 0. When len is too large, function execution fails.
  ```shell
  \c oceanic_station
  ```
- Timestamp, the keyword TIMESTAMP indicates that the following string constant need to be interpreted as TIMESTAMP type.

  Number type expressions multiply

  ```shell
  \w oceanic_station.txt
  ```

## Data Query

- **View all tables**

  ```shell
  SHOW TABLES;
  ```

  Successful execution returns the following results:

  ```
    +-------+
    | Table |
    +-------+
    | sea   |
    | wind  |
    | air   |
    +-------+
    Query took 0.002 seconds.
  ```
- **Query data**

  ```shell
  SELECT * FROM air limit 10;
  ```

  Successful execution returns the following results:

  ```sql
  +---------------------+------------+------------+-------------+----------+
  | time                | station    | visibility | temperature | pressure |

  +---------------------+------------+------------+-------------+----------+
  | 2022-01-14 16:00:00 | XiaoMaiDao | 50         | 63          | 52       |
  | 2022-01-14 16:03:00 | XiaoMaiDao | 56         | 62          | 54       |
  | 2022-01-14 16:06:00 | XiaoMaiDao | 58         | 75          | 57       |
  | 2022-01-14 16:09:00 | XiaoMaiDao | 65         | 76          | 50       |
  | 2022-01-14 16:12:00 | XiaoMaiDao | 79         | 57          | 60       |
  | 2022-01-14 16:15:00 | XiaoMaiDao | 71         | 68          | 51       |
  | 2022-01-14 16:18:00 | XiaoMaiDao | 66         | 55          | 50       |
  | 2022-01-14 16:21:00 | XiaoMaiDao | 64         | 78          | 77       |
  | 2022-01-14 16:24:00 | XiaoMaiDao | 63         | 50          | 52       |
  | 2022-01-14 16:27:00 | XiaoMaiDao | 72         | 69          | 56       |
  +---------------------+------------+------------+-------------+----------+
  Query took 0.635 seconds.
  ```

> For more information about database operations, please refer to：
>
> [SQL](../reference/sql.md)
>
> [Programming Interface](../develop/api.md)
