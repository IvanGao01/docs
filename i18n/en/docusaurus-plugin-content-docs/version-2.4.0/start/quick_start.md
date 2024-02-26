---
title: Quick Start
order: 4
---

# Quick Start

CnosDBSQL is inspired by [DataFusion](https://arrow.apache.org/datafusion/user-guide/introduction)，We support most of the SQL syntax of DataFusion.

**Note**：In order to query more efficiently, the order of each row may not be the same for queries without specified sorting

## `1997-01-31 09:26:56`     # Close to RCF3339, replace T by space, and no time zone is specified

**Conditional Functions**后面章节中引用的数据源都来自此示例数据。

### Download Data

Rank Functions

**COUNT**

```shell
curl -o oceanic_station.txt https://dl.cnosdb.com/sample/oceanic_station.txt
```

### In the SELECT query, the HAVING clause must follow the GROUP BY clause and appear before the ORDER BY clause (if any).

- Determines whether the left expression matches the pattern of the right expression
  ```shell
      cnosdb-cli
  ```
- The next offset line of the current line in the`offset FOLLOWING` ROWS mode. The next offset value of the current value in the RANGE mode.
  ```shell
  create database oceanic_station;
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

## You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
[ WITH with_query [, ...] ]
SELECT [ ALL | DISTINCT ] select_expression [, ...]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY [ ALL | DISTINCT ] grouping_element [, ...] ]
    [ HAVING condition ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY expression [ ASC | DESC ] [, ...] ]
    [ OFFSET count ]
    [ LIMIT { count | ALL } ];

-- from_item
-- 1.
    tb_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
-- 2.
    from_item join_type from_item
    { ON join_condition | USING ( join_column [, ...] ) }

-- join_type
    [ INNER ] JOIN
    LEFT [ OUTER ] JOIN
    RIGHT [ OUTER ] JOIN
    FULL [ OUTER ] JOIN
    CROSS JOIN

-- grouping_element
    ()
```

## **SELECT Clause**

### SELECT \*

`slide_duration` is a STRING, which is resolved as an interval and specifies the sliding size of the time window. If this parameter is not specified, slide_duration is the sliding size of the time window and becomes a rolling window.

\*_Example_

```sql
SELECT * FROM air;
```

```
+---------------------+-------------+------------+-------------+----------+
| time                | station     | visibility | temperature | pressure |
+---------------------+-------------+------------+-------------+----------+
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       |
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       |
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |
+---------------------+-------------+------------+-------------+----------+
```

### Return the series in the specified table.

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
SELECT [ ALL | DISTINCT ] select_expression [, ...];
```

After the keyword `SELECT`, you can use `DISTINCT`to remove duplicate fields and return only the values after duplicate removal. Using ALL returns all duplicate values in the field. When this option is not specified, the default value is `ALL`。
System Schema不指定此选项时，默认值为`ALL`。

\*_Example_

```sql
SELECT DISTINCT station, visibility FROM air;
```

```
+-------------+------------+
| station     | visibility |
+-------------+------------+
| XiaoMaiDao  | 56         |
| XiaoMaiDao  | 50         |
| XiaoMaiDao  | 67         |
| XiaoMaiDao  | 65         |
| XiaoMaiDao  | 53         |
| XiaoMaiDao  | 74         |
| XiaoMaiDao  | 71         |
| LianYunGang | 78         |
| LianYunGang | 79         |
| LianYunGang | 59         |
| LianYunGang | 67         |
| LianYunGang | 80         |
+-------------+------------+
```

```sql
SELECT station, visibility FROM air;
```

```
+-------------+------------+
| station     | visibility |
+-------------+------------+
| XiaoMaiDao  | 56         |
| XiaoMaiDao  | 50         |
| XiaoMaiDao  | 67         |
| XiaoMaiDao  | 65         |
| XiaoMaiDao  | 53         |
| XiaoMaiDao  | 74         |
| XiaoMaiDao  | 71         |
| LianYunGang | 78         |
| LianYunGang | 79         |
| LianYunGang | 59         |
| LianYunGang | 67         |
| LianYunGang | 80         |
| LianYunGang | 59         |
+-------------+------------+
```

## **Function**： Return the approximate median of the input value.

You can use the keyword`AS`to alias a column expression or table.

### 为列表达式取别名

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
expression [ [ AS ] column_alias ]
```

\*_Example_

```sql
SELECT station s, visibility AS v FROM air;
```

```
+-------------+----+
| s           | v  |
+-------------+----+
| XiaoMaiDao  | 56 |
| XiaoMaiDao  | 50 |
| XiaoMaiDao  | 67 |
| XiaoMaiDao  | 65 |
| XiaoMaiDao  | 53 |
| XiaoMaiDao  | 74 |
| XiaoMaiDao  | 71 |
| LianYunGang | 78 |
| LianYunGang | 79 |
| LianYunGang | 59 |
| LianYunGang | 67 |
| LianYunGang | 80 |
| LianYunGang | 59 |
+-------------+----+
```

### The first offset line of the current line in the offset`offset PRECEDING` ROWS mode. The first offset value of the current value in the RANGE mode.

Stream

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
FROM tb_name [AS] alias_name
```

\*_Example_

```sql
SELECT a.visibility, s.temperature
FROM air AS a JOIN sea s ON a.temperature = s.temperature limit 10;
```

```
+------------+-------------+
| visibility | temperature |
+------------+-------------+
| 67         | 62          |
| 50         | 78          |
| 50         | 78          |
| 65         | 79          |
+------------+-------------+
```

### Binary operators and two expressions are combined to form a new expression.

- Type

  \*_Example_

  ```sql
  -- station is a Tag column，temperature is a Field column.
  SELECT station, temperature FROM air;
  ```

  ```
  +-------------+-------------+
  | station     | temperature |
  +-------------+-------------+
  | XiaoMaiDao  | 69          |
  | XiaoMaiDao  | 78          |
  | XiaoMaiDao  | 62          |
  | XiaoMaiDao  | 79          |
  | XiaoMaiDao  | 53          |
  | XiaoMaiDao  | 72          |
  | XiaoMaiDao  | 71          |
  | LianYunGang | 69          |
  | LianYunGang | 80          |
  | LianYunGang | 74          |
  | LianYunGang | 70          |
  | LianYunGang | 70          |
  | LianYunGang | 70          |
  +-------------+-------------+
  ```

  ```sql
  Tenant name
  ```

  ```
  +-------------+
  | station     |
  +-------------+
  | XiaoMaiDao  |
  | LianYunGang |
  +-------------+ 
  ```

## This schema records the number of writes to the database.

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
LIMIT n
```

Limit the number of rows returned from the result set to n, and n must be non-negative.

\*_Example_

```sql
SELECT *
FROM air LIMIT 10;
```

```
+---------------------+-------------+------------+-------------+----------+
| time                | station     | visibility | temperature | pressure |
+---------------------+-------------+------------+-------------+----------+
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       |
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       |
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |
+---------------------+-------------+------------+-------------+----------+
```

## **OFFSET Clause**

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
OFFSET m
```

The returned result set skips m records. default m=0.
**Example**
\*_Example_

```sql
SELECT *
FROM air OFFSET 10;
```

```
+---------------------+-------------+------------+-------------+----------+
| time                | station     | visibility | temperature | pressure |
+---------------------+-------------+------------+-------------+----------+
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |
+---------------------+-------------+------------+-------------+----------+
```

`OFFSET`can be used with the`LIMIT`statement to specify the number of lines to skip.The format is `LIMIT n OFFSET m`，or it can be abbreviated as LIMIT n, m. LIMIT n controls the output of n rows of data, and OFFSET m indicates the number of rows skipped before starting to return data. OFFSET 0 has the same effect as omitting the OFFSET clause.
Role name under the tenant
OFFSET 0与省略OFFSET子句效果相同。

\*_Example_

```sql
SELECT *
FROM air LIMIT 3 OFFSET 3;
```

```
+---------------------+------------+------------+-------------+----------+
| time                | station    | visibility | temperature | pressure |
+---------------------+------------+------------+-------------+----------+
| 2022-01-28 13:30:00 | XiaoMaiDao | 65         | 79          | 77       |
| 2022-01-28 13:33:00 | XiaoMaiDao | 53         | 53          | 68       |
| 2022-01-28 13:36:00 | XiaoMaiDao | 74         | 72          | 68       |
+---------------------+------------+------------+-------------+----------+
```

## Alias

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
WITH cte AS cte_query_definiton [, ...] query
```

可选。Optional. The WITH clause contains one or more commonly used expressions CTE (Common Table Expression). CTE acts as a temporary table in the current running environment, which you can refer to in subsequent queries.The rules for using CTE are as follows：
\*\*Notice:\*\*CTE使用规则如下：

- In databases, interpolation is a technique used to deal with missing values in data. When there are missing values in the data, these techniques can help us estimate or speculate on those missing values, thus filling in the gaps in the data.
- The CTE defined in the WITH clause can only be used for other CTEs in the same WITH clause defined later. Suppose A is the first CTE in the clause and B is the second CTE in the clause：
  假设A是子句中的第一个CTE，B是子句中的第二个CTE：

\*_Example_

```sql
SELECT station, avg 
FROM (  SELECT station, AVG(visibility) AS avg 
        FROM air 
        GROUP BY station) AS x;
```

```
+-------------+--------------------+
| station     | avg                |
+-------------+--------------------+
| XiaoMaiDao  | 62.285714285714285 |
| LianYunGang | 70.33333333333333  |
+-------------+--------------------+
```

```sql
WITH x AS 
    (SELECT station, AVG(visibility) AS avg FROM air GROUP BY station)
SELECT station, avg
FROM x;
```

```
+-------------+--------------------+
| station     | avg                |
+-------------+--------------------+
| XiaoMaiDao  | 62.285714285714285 |
| LianYunGang | 70.33333333333333  |
+-------------+--------------------+
```

## **UNION Clause**

administrator:

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```
select_clause_set_left
[ UNION | UNION ALL| EXCEPT | INTERSECT]
select_clause_set_right
[sort_list_columns] [limit_clause]
```

`UNION`will de-duplicate the merged result set.
`UNION ALL`will retain the same data in the merged result set.
`EXCEPT` will make the difference between the two result sets, return all non-duplicate values not found in the right query from the left query.
`INTERSECT` returns the intersection of the two result sets (that means, all non-duplicate values are returned by both queries).

The CTE defined in the WITH clause can only be used for other CTEs in the same WITH clause defined later. Suppose A is the first CTE in the clause and B is the second CTE in the clause：

The definition of the schema seen by the administrator:

\*_Example_

- **UNION ALL**
  ```sql
  SELECT visibility FROM air WHERE temperature < 60
  UNION ALL
  SELECT visibility FROM air WHERE temperature > 50 LIMIT 10;
  ```
  ```
  +------------+
  | visibility |
  +------------+
  | 53         |
  | 56         |
  | 50         |
  | 67         |
  | 65         |
  | 53         |
  | 74         |
  | 71         |
  | 78         |
  | 79         |
  +------------+
  ```

- **UNION**
  ```sql
  SELECT visibility FROM air WHERE temperature < 60
  UNION
  SELECT visibility FROM air WHERE temperature > 50 LIMIT 10;
  ```
  ```
  +------------+
  | visibility |
  +------------+
  | 53         |
  | 56         |
  | 50         |
  | 67         |
  | 65         |
  | 74         |
  | 71         |
  | 78         |
  | 79         |
  | 59         |
  +------------+
  ```

- **EXCEPT**

  ```sql
  SELECT visibility FROM air
  EXCEPT
  SELECT visibility FROM air WHERE temperature < 50 LIMIT 10;
  ```

  ```
  +------------+
  | visibility |
  +------------+
  | 56         |
  | 50         |
  | 67         |
  | 65         |
  | 53         |
  | 74         |
  | 71         |
  | 78         |
  | 79         |
  | 59         |
  +------------+
  ```

- **INTERSECT**
  ```sql
  SELECT visibility FROM air
  INTERSECT
  SELECT visibility FROM air WHERE temperature > 50 LIMIT 10;
  ```
  ```
  +------------+
  | visibility |
  +------------+
  | 56         |
  | 50         |
  | 67         |
  | 65         |
  | 53         |
  | 74         |
  | 71         |
  | 78         |
  | 79         |
  | 59         |
  +------------+
  ```

## **Parameter Type**：

按引用的表达式对结果进行排序。默认情况使用升序 (ASC)。common user:

\*_Example_

```sql
SELECT * FROM air ORDER BY temperature;
```

```
+---------------------+-------------+------------+-------------+----------+
| time                | station     | visibility | temperature | pressure |
+---------------------+-------------+------------+-------------+----------+
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       |
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       |
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |
+---------------------+-------------+------------+-------------+----------+
```

```sql
SELECT * FROM air ORDER BY temperature DESC;
```

```
+---------------------+-------------+------------+-------------+----------+
| time                | station     | visibility | temperature | pressure |
+---------------------+-------------+------------+-------------+----------+
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       |
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |
+---------------------+-------------+------------+-------------+----------+
```

```sql
SELECT * FROM air ORDER BY station, temperature;
```

```
+---------------------+-------------+------------+-------------+----------+
| time                | station     | visibility | temperature | pressure |
+---------------------+-------------+------------+-------------+----------+
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       |
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       |
+---------------------+-------------+------------+-------------+----------+
```

## **IN**

The IN operator allows you to specify multiple values in the WHERE clause.

\*_Example_

```sql
SELECT station, temperature, visibility FROM air WHERE temperature  IN (68, 69);
```

```
+-------------+-------------+------------+
| station     | temperature | visibility |
+-------------+-------------+------------+
| XiaoMaiDao  | 69          | 56         |
| LianYunGang | 69          | 78         |
+-------------+-------------+------------+
```

The CTE defined in the WITH clause can only be used for other CTEs in the same WITH clause defined later. Suppose A is the first CTE in the clause and B is the second CTE in the clause：

The IN list does not support expressions currently, but only constants.

## **SHOW**

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
In the streaming down-sampling scenario, the source table interval is one minute, and the down-sampling interval is one hour
```

Show all databases or all tables.

\*_Example_

```sql
SHOW DATABASES;
```

```
+----------+
| Database |
+----------+
| public   |
+----------+
```

```sql
SHOW TABLES;
```

```
+-------+
| Table |
+-------+
| sea   |
| air   |
| wind  |
+-------+
```

```sql
SHOW QUERIES;
```

```
+----------+------------------------------------------------------------------+-----------------------------------------+-----------+----------------------------------------+-------------+------------+--------------+
| query_id | query_text                                                       | user_id                                 | user_name | tenant_id                              | tenant_name | state      | duration     |
+----------+------------------------------------------------------------------+-----------------------------------------+-----------+----------------------------------------+-------------+------------+--------------+
| 36       | select * FROM air join sea ON air.temperature = sea.temperature; | 108709109615072923019194003831375742761 | root      | 13215126763611749424716665303609634152 | cnosdb      | SCHEDULING | 12.693345666 |
+----------+------------------------------------------------------------------+-----------------------------------------+-----------+----------------------------------------+-------------+------------+--------------+
```

关于 SHOW QUERIES 语句的详细信息，可以在[系统表 QUERIES](../reference/sql#queries-information-schema) 查看

## **EXPLAIN**

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
EXPLAIN [ ANALYZE ] [ VERBOSE ] <statement>;
```

WHERE sets conditions on the selected column before the GROUP BY clause, while HAVING clause sets conditions on the group generated by the GROUP BY clause.

Constant

Constant

Equivalent to

\*_Example_

```sql
EXPLAIN SELECT station, temperature, visibility FROM air;
```

```
+---------------+-----------------------------------------------------------------------------------------------------------------------------+
| plan_type     | plan                                                                                                                        |
+---------------+-----------------------------------------------------------------------------------------------------------------------------+
| logical_plan  | Projection: #air.station, #air.temperature, #air.visibility                                                                 |
|               |   TableScan: air projection=[station, visibility, temperature]                                                              |
| physical_plan | ProjectionExec: expr=[station@0 as station, temperature@2 as temperature, visibility@1 as visibility]                       |
|               |   TskvExec: limit=None, predicate=ColumnDomains { column_to_domain: Some({}) }, projection=[station,visibility,temperature] |
|               |                                                                                                                             |
+---------------+-----------------------------------------------------------------------------------------------------------------------------+
```

```sql
EXPLAIN ANALYZE SELECT station, temperature, visibility FROM air;
```

```
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| plan_type         | plan                                                                                                                                                                                                                                                                                                                                    |
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Plan with Metrics | ProjectionExec: expr=[station@0 as station, temperature@2 as temperature, visibility@1 as visibility], metrics=[output_rows=13, elapsed_compute=20.375µs, spill_count=0, spilled_bytes=0, mem_used=0]                                                                                                                                   |
|                   |   TskvExec: limit=None, predicate=ColumnDomains { column_to_domain: Some({}) }, projection=[station,visibility,temperature], metrics=[output_rows=13, elapsed_compute=15.929624ms, spill_count=0, spilled_bytes=0, mem_used=0, elapsed_series_scan=1.698791ms, elapsed_point_to_record_batch=4.572954ms, elapsed_field_scan=5.119076ms] |
|                   |                                                                                                                                                                                                                                                                                                                                         |
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

```sql
EXPLAIN ANALYZE SELECT station, temperature, visibility FROM air;
```

```
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| plan_type         | plan                                                                                                                                                                                                                                                                                                                                    |
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Plan with Metrics | ProjectionExec: expr=[station@0 as station, temperature@2 as temperature, visibility@1 as visibility], metrics=[output_rows=13, elapsed_compute=20.375µs, spill_count=0, spilled_bytes=0, mem_used=0]                                                                                                                                   |
|                   |   TskvExec: limit=None, predicate=ColumnDomains { column_to_domain: Some({}) }, projection=[station,visibility,temperature], metrics=[output_rows=13, elapsed_compute=15.929624ms, spill_count=0, spilled_bytes=0, mem_used=0, elapsed_series_scan=1.698791ms, elapsed_point_to_record_batch=4.572954ms, elapsed_field_scan=5.119076ms] |
|                   |                                                                                                                                                                                                                                                                                                                                         |
+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

```sql
EXPLAIN ANALYZE VERBOSE SELECT station, temperature, visibility FROM air;
```

```
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| plan_type              | plan                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Plan with Metrics      | ProjectionExec: expr=[station@0 as station, temperature@2 as temperature, visibility@1 as visibility], metrics=[output_rows=13, elapsed_compute=26.75µs, spill_count=0, spilled_bytes=0, mem_used=0]                                                                                                                                                                                                                                                                                                                                                                    |
|                        |   TskvExec: limit=None, predicate=ColumnDomains { column_to_domain: Some({}) }, projection=[station,visibility,temperature], metrics=[output_rows=13, elapsed_compute=13.225875ms, spill_count=0, spilled_bytes=0, mem_used=0, elapsed_point_to_record_batch=3.918163ms, elapsed_field_scan=3.992161ms, elapsed_series_scan=1.657416ms]                                                                                                                                                                                                                                 |
|                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Plan with Full Metrics | ProjectionExec: expr=[station@0 as station, temperature@2 as temperature, visibility@1 as visibility], metrics=[start_timestamp{partition=0}=2022-10-25 03:00:14.865034 UTC, end_timestamp{partition=0}=2022-10-25 03:00:14.879596 UTC, elapsed_compute{partition=0}=26.75µs, spill_count{partition=0}=0, spilled_bytes{partition=0}=0, mem_used{partition=0}=0, output_rows{partition=0}=13]                                                                                                                                                                           |
|                        |   TskvExec: limit=None, predicate=ColumnDomains { column_to_domain: Some({}) }, projection=[station,visibility,temperature], metrics=[start_timestamp{partition=0}=2022-10-25 03:00:14.864225 UTC, end_timestamp{partition=0}=2022-10-25 03:00:14.879596 UTC, elapsed_compute{partition=0}=13.225875ms, spill_count{partition=0}=0, spilled_bytes{partition=0}=0, mem_used{partition=0}=0, output_rows{partition=0}=13, elapsed_point_to_record_batch{partition=0}=3.918163ms, elapsed_field_scan{partition=0}=3.992161ms, elapsed_series_scan{partition=0}=1.657416ms] |
|                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Output Rows            | 13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Duration               | 13.307708ms                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
+------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

## **DESCRIBE**

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
DESCRIBE {DATABASE db_name | TABLE tb_name};
```

Describe the parameters of the database and the pattern of the table.

\*_Example_

```sql
DESCRIBE TABLE air;
```

```
+-------------+-----------+-------+-------------+
| FIELDNAME   | TYPE      | ISTAG | COMPRESSION |
+-------------+-----------+-------+-------------+
| time        | TIMESTAMP | false | Default     |
| station     | STRING    | true  | Default     |
| visibility  | DOUBLE    | false | Default     |
| temperature | DOUBLE    | false | Default     |
| pressure    | DOUBLE    | false | Default     |
+-------------+-----------+-------+-------------+
```

```sql
DESCRIBE DATABASE public;
```

```
+----------+-------+----------------+---------+-----------+
| TTL      | SHARD | VNODE_DURATION | REPLICA | PRECISION |
+----------+-------+----------------+---------+-----------+
| 365 Days | 1     | 365 Days       | 1       | NS        |
+----------+-------+----------------+---------+-----------+
```

[//]: # "## **EXISTS**"

[//]: # "EXISTS 条件测试子查询中是否存在行，并在子查询返回至少一个行时返回 true。如果指定 NOT，此条件将在子查询未返回任何行时返回 true。"

[//]: # "The wildcard * can be used to refer to all columns."

[//]: # "```sql"

[//]: # "SELECT id  FROM date"

[//]: # "WHERE EXISTS (SELECT 1 FROM shop"

[//]: # "WHERE date.id = shop.id)"

[//]: # "ORDER BY id;"

[//]: # "```"

[//]: # "# **DCL (无)**"

[//]: # "```sql"

[//]: # "DESCRIBE table_name"

[//]: # "```"

[//]: # "TODO SHOW"

[//]: # "# **SHOW**"

[//]: # "## **SHOW VARIABLE**"

[//]: # "```sql"

[//]: # "-- only support show tables"

[//]: # "-- SHOW TABLES is not supported unless information_schema is enabled"

[//]: # "SHOW TABLES"

[//]: # "```"

[//]: # "## **SHOW COLUMNS**"

[//]: #

[//]: # "```sql"

[//]: # "-- SHOW COLUMNS with WHERE or LIKE is not supported"

[//]: # "-- SHOW COLUMNS is not supported unless information_schema is enabled"

[//]: # "-- treat both FULL and EXTENDED as the same"

[//]: # "SHOW [ EXTENDED ] [ FULL ]"

[//]: # "{ COLUMNS | FIELDS }"

[//]: # "{ FROM | IN }"

[//]: # "table_name"

[//]: # "```"

[//]: # "## **SHOW CREATE TABLE**"

[//]: # "```sql"

[//]: # "SHOW CREATE TABLE table_name"

[//]: # "```"
