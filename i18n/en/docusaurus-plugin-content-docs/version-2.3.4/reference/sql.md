---
title: This schema shows all available roles (including system and custom roles) under the current tenant.
order: 9
---

# This schema is only visible to the Owner of the current tenant.

## `1997-01-31T09:26:56.123` # Close to RCF3339, no time zone is specified, defaults to UTC

### For regular users, only the part of the table in USAGE_SCHEMA that belongs to the current user tenant will be visible.

| `UNION`will de-duplicate the merged result set.&#xA;`UNION ALL`will retain the same data in the merged result set.&#xA;`EXCEPT` will make the difference between the two result sets, return all non-duplicate values not found in the right query from the left query.&#xA;`INTERSECT` returns the intersection of the two result sets (that means, all non-duplicate values are returned by both queries). | You can use the ROLLUP option in a single query to generate multiple group sets.                                                | All records of this schema are visible to the Owner of the current tenant. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| BIGINT                                                                                                                                                                                                                                                                                                                                                                                                                          | COUNT(field) Returns the number of non-null values.                                                          | 8 Bytes                                                                    |
| BIGINT UNCIGNED                                                                                                                                                                                                                                                                                                                                                                                                                 | This schema displays information about the role of the current user under the current tenant.                                   | 8 Bytes                                                                    |
| BOOLEN                                                                                                                                                                                                                                                                                                                                                                                                                          | Stream QUERY statements are persisted and are cancelled by [KILL QUERY](#kill-query).                                           | 1byte                                                                      |
| TIMESTAMP                                                                                                                                                                                                                                                                                                                                                                                                                       | Status of SQL, including: ACCEPTING,DISPATCHING,ANALYZING,OPTMIZING,SCHEDULING                                                  | 8 Bytes                                                                    |
| STRING                                                                                                                                                                                                                                                                                                                                                                                                                          | This schema allows you to query information about all users in the cluster.                                                     | ***                                                                        |
| DOUBLE                                                                                                                                                                                                                                                                                                                                                                                                                          | The GROUP BY clause must be after the condition of the WHERE clause and before the ORDER BY clause (if any). | 8 Bytes                                                                    |

#### ROLLUP generates all grouping sets that are meaningful in this hierarchy. Whenever the value of column_1 changes，it will generate a subtotal line；

**Function**: Round down.

| The keyword`FULL JOIN`or`FULL OUTER JOIN`defines a full connection, which is actually the union of LEFT OUTER JOIN and RIGHT OUTER JOIN. It will display all the rows on the left and right of the join, and will generate null values where either side of the join does not match. | CnosDB supports`INNER JOIN`、`LEFT OUTER JOIN`、`RIGHT OUTER JOIN`、`FULL OUTER JOIN`。                                                                                                                                                           | -- station is a Tag column&#xA;SELECT station FROM air;    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| BINARY                                                                                                                                                                                                                                                                               | The definition of the schema seen by the administrator:                                                                                                                                                                                       | Grammar                                                    |
| INTERVAL                                                                                                                                                                                                                                                                             | The precedence levels of the operators are given in the following table. Operators at higher levels are evaluated before operators at lower levels. In the following table, 1 represents the highest level and 8 represents the lowest level. | Field Name                                                 |
| ARRAY                                                                                                                                                                                                                                                                                | For non-owner elements, only the records for the corresponding role are displayed.                                                                                                                                                            | `INTERVAL '1 YEAR'` One year(12 months) |

#### The SELECT clause of a stream query does not support `JOIN`.

| Therefore, we often use ROLLUP in reports to generate subtotals and totals. The order of columns in ROLLUP is very important. | SHARD：represents the number of data partitions，defaults to 1. | ROLLUP assumes a hierarchy between input columns.                                                                                              |                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| BIGINT                                                                                                                        | [{+-}]123 |                                                                                                                                                | All records of this schema are visible to all members of the current tenant. |
| BIGINT UNCIGNED                                                                                                               | [+]123    | For non-owner members, only the SQL submitted by the current member is displayed.                                                              |                                                                              |
| DOUBLE                                                                                                                        | 123.45                                                        | The database belongs to a tenant. When a tenant is created, the database is automatically created and visible to all members under the tenant. |                                                                              |
| BOOLEN                                                                                                                        | {true \| false \| t \| f}                                     |                                                                                                                                                |                                                                              |
| STRING                                                                                                                        | 'abc'                                                         | The CLUSTER_SCHEMA database belongs to the cluster, only the administrator users have the access to the database.         |                                                                              |
| TIMESTAMP                                                                                                                     | TIMESTAMP '1900-01-01T12:00Z'                                 | Join Operation                                                                                                                                 |                                                                              |
| --                                                                                                                            | NULL                                                          | This schema stores information about all tables under the tenant.                                                                              |                                                                              |

#### To further study CnosDB, this section will provide sample data for you to download and teach you how to import data into the database. The data sources referenced in the following chapters are all from this sample data.

If the VALUES list requires an expression, please use the [INSERT SELECT](./sql.md#insert-query-results--insert-select-) syntax.

This schema records the number of queries to the database.

Stream queries support only `INSERT SELECT` statements, where the FROM clause is the stream table and is inserted into the target table.

Create stream query statement

Time range of data in shard

- The keyword VALUES can be followed by multiple lists separated by ’,’.
- Instruction
- Download Data
- You can use the keyword `AS` to alias a column expression or table.
- Drop Database
- `1997-01-31 09:26:56` # close to RCF 3339, accuracy in seconds.

If dropping database, all table data and metadata of the specified database will be removed.

```sql
SELECT CAST (1 AS TIMESTAMP);
```

```
+-------------------------------+
| Int64(1)                      |
+-------------------------------+
| 1970-01-01T00:00:00.000000001 |
+-------------------------------+
```

#### This schema shows the membership information under the tenant.

Specify the order of rows in the partition.

1. All records of this schema are visible to the owner of the current tenant.
2. This schema can be used to query information about all tenants in the cluster.
3. Executing the following command in the shell will generate a local data file named oceanic_station in Line Protocol format.
4. algorithm specifies the algorithm for computing hash. Only md5, sha224, sha256, sha384, sha512, blake2s, blake2b, blake3 are supported.
5. CnosDB provides the system to check the status and information of CnosDB clusters. The system schema is a read-only schema. You can query the system schema using the SQL statement.
6. This schema stores tenant database information.
7. This schema stores the definitions of all columns under the tenant.
8. This schema shows all permissions on db that have been granted to the specified role under the tenant.
9. When data is written to the source table, the streaming query is triggered.
10. 8 Bytes
11. Alias
12. Function Names
13. Function Names
14. The return values of functions sha224, sha256, sha384, sha512 belong to this type.

The time of UTC time zone will be output when outputting.

Aggregate function array_agg's return type .

### This function is used to perform Gap filling within the time window and to fillin the missing values using the "Last Observation Carried Forward" (LOCF) operation.

REPLICA：represents the number of replicas of data in the cluster，defaults to 1 (the number of replicas is not larger than the number of distributed data nodes).

```sql
CREATE DATABASE [IF NOT EXISTS] db_name [WITH db_options];

db_options:
    db_option...

db_option: LO
      TTL value
    | SHARD value
    | VNODE_DURATION value
    | REPLICA value
    | PRECISION {'ms' | 'us' | 'ns'}
}
```

#### Frame is a subset of the current partition, which further subdivides windows in the partition.

1. Precedence
2. Grammar
3. Examples
4. Window_frame Clause
5. Name of the role granted

CnosDB store the shema information in two specific databases：

```sql
> CREATE DATABASE oceanic_station;
Query took 0.062 seconds.
```

### Interval type is STRING, which will be resolved to time interval.

This schema records the approximate total volume of read traffic when data is queried from the DB.

```sql
SHOW DATABASES;
```

```
+-----------------+
| Database        |
+-----------------+
| oceanic_station |
| public          |
+-----------------+
```

### **Function**： Return the Pearson coefficient representing the association between a set of number pairs.

Comparing expressions for inequality

Count the duration of a state, or count the duration of a state in a certain period of time.

```sql
\c dbname
```

```
Public employee \c oceanic_station
oceanic_stage leader
```

### `window_duration` is a STRING, parsed as an interval, specifying the window size of the time window.

Name of the system role that the custom role inherits from, or NULL if it is a system role

```sql
DROP DATABASE [IF EXISTS] db_name;
```

The expression of time interval:

PARTITIONED BY：use the column specified when creating the table to partition.

```sql
DROPP DATABASE oceanic_station;
```

```
Query took 0.030 seconds.
```

### Modify database parameters

Current row in`CURRENT ROW` ROWS  mode.Current value in RANGE mode.

```sql
ALTER DATABASE db_name [alter_db_options]

alter_db_options:
    SET db_option

db_option: LO
      TTL value
    | SHARD value
    | VNODE_DURATION value
    | REPLICA value
}
```

Continue traversing backwards until the next non-missing value is encountered.

```sql
ALTER DATABASE oceanic_station SET TTL '30d';
```

### View database parameters

LOCATION：represents the location of the associated file

```sql
DESCRIBE DATABASE dbname;
```

Add Column: add field and tag columns.

```sql
DESCRIBE DATABASE oceanic_station;
```

```
+---+---------+-------+-------+-
| TTL | SHARD | VNODE_DURATION | REPLICA | PRECISION |
+------+---------------+
| 365 Days | 1 365 Days | 1 | NS |
+---------------------------+----+
```

## Copies the value of the non-missing value to the location of the missing value.

### Last Observation Carried Forward (LOCF) is a method for filling in missing values using the most recent observable values. The specific treatment is as follows:

minute

second

### **Function**：The function trims a string by removing leading and trailing spaces or by removing characters that match an optional specified string.

This database, which belongs to a Tenant, is automatically created when a tenant is created and is visible to all members under the tenant.

```sql
CREATE TABLE [IF NOT EXISTS] tb_name
(field_definition [, field_definition]... [, TAGS(tg_name [, tg_name]... ]);

field_definition:
    column_name data_type [field_codec_type]
    
field_codec_type:
    CODEC(code_type)
```

#### **Function**： Return the number of rows retrieved in the selected element.

1. Total read traffic size
2. For more information about the compression algorithm, see the details of the [compression algorithm](./concept_design/compress.md#compression-algorithm).
3. Description
4. Remarks

   - BIGINT/BIGINT UNSIGNED：DELTA, QUANTILE, NULL
   - DOUBLE：GORILLA,QUANTILE, NULL
   - STRING：SNAPPY,ZSTD,GZIP,BZIP,ZIB,NULL
   - BOOLA：BITPACK, NULL

Role name

If ROWS is specified, the window will calculate the offset in row units.

```sql
CREATE TABair (
   vision DOUBLE,
   temperature DOUBLE,
   pressure DOUBLE,
   TAGS (station)
);
```

```
Query took 0.033 seconds.
```

### Common users can access only the tenant information of the current session.

Drop Column: drop the field column. When dropping a column results in dropping the last field value of a row, we think that this row has no value, and this row will not be showed in SELECT.

```sql
Time Stamp
```

#### **Function**： Return the overall covariance of number pairs in a group.

1. PARTITION BY Clause
2. Example：

#### **Function**：Assign a unique sequence number (starting from 1) to each row according to the row order in the window partition.

1. Interpolation Function
2. Tenant ID
3. User name
4. Tenant name
5. millisecond

Alter Column: alter the column definition. Currently, the compression algorithm for altering columns is supported.

```sql
CREATE EXTERNAL TABLE cpu (
     cpu_hz DECIMAL (10,6) NOT NULL,
     temp DOUBLE NOT NULL,
     version_num BIGINT NOT NULL,
     is_old BOOLEN NOT NULL,
     Weight DECIMAL (12), ) NOT NULL

STORED AS CSV
WITH HEADER ROW
LOCATON 'tests/data/csv/cpu. sv';
```

```
Query took 0.031 seconds.
```

### Common users can access only the tenant information of the current session.

This schema records the approximate total volume of read traffic when data is written to the DB.

```sql
DROP TABLE [ IF EXISTS ] tb_name;
```

In short, the LOCF method populates the missing value by copying the most recent observable value to the missing value location, making the data continuous in time. This method assumes that the data after the missing value is the same or very close to the last observed value.

```sql
DROP TABLE IF EXISTS air;
```

```
Query took 0.033 seconds.
```

### APPROX_PERCENTILE_CONT(x, p) is equivalent to APPROX_PERCENTILE_CONT_WITH_WEIGHT(x, 1, p)&#xA;**Parameter Type**：x. w is numeric type, p is DOUBLE type.

This schema records the amount of disk space, in bytes, occupied by each vnode in the cluster.

```sql
SHOW TABLES;
```

Tenant name of the database to which the permission is granted

```sql
SHOW TABLES;
```

```
+--+
| Table |
+---+
| sea |
| air |
| wind |
+---+ +
```

### View table mode

Both external and normal tables can be viewed using this statement.

STORED AS：represents the format in which the file is stored. Currently, PARQUET, JSON, CSV and AVRO formats are supported.

```sql
DESCRIBE DATABASE table_name;
```

The first row of the partition in `UNBOUND PRECEDING`ROWS mode. The first value of the partition ORDER BY expression in RANGE mode.

```sql
DESCREIBE TABLE air;
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

### At present, the compression algorithms supported by various types are as follows. The first one of each type is the default specified algorithm. NULL means no compression algorithm is used.

If the compression algorithm is not specified when creating a table, the system default compression algorithm is used.

If a complex expression has more than one operator, operator precedence determines the sequence of operations. The order of execution may have a noticeable effect on the resulting value.

1. 1 Byte
2. Common users can access only the tenant information of the current session.
3. +08:00 represents the East 8th District

`EXPLAIN ANALYZE VERBOSE` executes the query and displays a more detailed execution plan, including the number of rows read.

```sql
Show the result
```

It is important to note that the LOCF method can introduce certain biases, especially when the data after the missing value changes drastically. Therefore, when using LOCF to fill in missing values, it is necessary to carefully consider the characteristics of the data and the purpose of the analysis to ensure that the filled values can reasonably reflect the actual situation.

```sql
ALTER TABLE air ADD TAG height;
ALTER TABLE air ADD FIELD humidity DOUBLE CODEFAULT);
ALTER TABLE air ALTER humidity SET CODEC (QUANTILE);
ALTER TABLE air DROP humidity;
```

## **Function**：Return the str with the trailing character trimstr deleted. trimstr is a blank character by default.

Find the most recent non-missing value before the missing value.

If the next non-missing value is encountered, steps 1 and 2 are repeated to copy the value of that non-missing value to the missing value location.

### INSERT

#### The data is read-only and cannot be DML operated or indexed.

```sql
INSERT [INTO] tb_name [ ( column_name [, ...]) ] VALUES ( const [, ...]) [, ...] | query; 
```

WHERE sets conditions on the selected column before the GROUP BY clause, while HAVING clause sets conditions on the group generated by the GROUP BY clause.

User name
Instructions

A stream query statement is triggered when data is written.

Operator Precedence

common users:

The time stamp is based on RCF3339 standard.

### **Function**： Calculate the standard deviation of population.

Nmuber of shards

Contain the DISTINCT keyword, which counts the results after deduplication.

```sql
CREATE TABair (
    vision DOUBLE,
    temperature DOUBLE,
    pressure DOUBLE,
    TAGS (station)
);
```

```
Query took 0.027 seconds.
```

```sql
INSERT INTO air (TIME, station, visibility, temperature, pressure) VALUES
                (1666165200290401000, 'XiaoMaiDao', 56, 69, 77);
```

```
+---+
| rows |
+---+
| 1|
+---+
Query took 0.044 seconds.
```

```sql
INSERT INTO air (TIME, station, visibility, temperature, pressure) VALUES
                ('2022-10-19 06:40:00', 'XiaoMaiDao', 55, 68, 76);
```

```
+---+
| rows |
+---+
| 1|
+---+
Query took 0.032 seconds.
```

```sql
SELECT * FROM air;
```

```
+----------------------------+------------+------------+-------------+-----------+
| time                       | station    | visibility | temperature | pressure |
+----------------------------+------------+------------+-------------+-----------+
| 2022-10-18 22:40:00        | XiaoMaiDao | 55         | 68          | 76        |
| 2022-10-19 07:40:00.290401 | XiaoMaiDao | 56         | 69          | 77        |
+----------------------------+------------+------------+-------------+-----------+
```

The CTE defined in the WITH clause can only be used for other CTEs in the same WITH clause defined later. Suppose A is the first CTE in the clause and B is the second CTE in the clause：

See [Aggregate Function](#aggregate-function).

Alias Table

### The time represented by the string is considered as the local time zone and will be converted to the timestamp of UTC time zone.

Whether administrator

```sql
INSERT INTO air (TIME, station, visibility, temperature, pressure) VALUES
                ('2022-10-19 05:40:00', 'XiaoMaiDao', 55, 68, 76), 
                ('2022-10-19 04:40:00', 'XiaoMaiDao', 55, 68, 76);
```

```
+---+
| rows |
+---+
| 2 |
+---+
Query took 0.037 seconds.
```

```sql
SELECT * FROM air;
```

```
+----------------------------+------------+------------+-------------+-----------+
| time                       | station    | visibility | temperature | pressure |
+----------------------------+------------+------------+-------------+-----------+
| 2022-10-18 20:40:00        | XiaoMaiDao | 55         | 68          | 76        |
| 2022-10-18 21:40:00        | XiaoMaiDao | 55         | 68          | 76        |
| 2022-10-18 22:40:00        | XiaoMaiDao | 55         | 68          | 76        |
| 2022-10-19 07:40:00.290401 | XiaoMaiDao | 56         | 69          | 77        |
+----------------------------+------------+------------+-------------+-----------+
```

### tenant name

Number of replica

The core idea of linear interpolation is to assume that the relationship between the known data points is linear, and then estimate the value of the unknown data points according to the linear relationship between the known data points. Specifically, linear interpolation deduces the ordinates of unknown data points by using the linear rate of change between the ordinates of known data points.

```sql
8 Bytes
```

```
Query took 0.027 seconds.
```

```sql
Policy
```

```
+---+
| rows |
+---+
| 4 |
+---+
Query took 0.045 seconds.
```

```sql
SELECT * FROM air_visibility;
```

```
+----------------------------+------------+------------+
| time                       | station    | visibility |
+----------------------------+------------+------------+
| 2022-10-18 20:40:00        | XiaoMaiDao | 55         |
| 2022-10-18 21:40:00        | XiaoMaiDao | 55         |
| 2022-10-18 22:40:00        | XiaoMaiDao | 55         |
| 2022-10-19 07:40:00.290401 | XiaoMaiDao | 56         |
+----------------------------+------------+------------+
```

## Notice: The schema will only be created when we write in [lineprotocol](./rest_api.md)/[Prometheus remote write](../eco/prometheus#remote-write) successfully.

**STDDEV_POP**

Description

### `1997-01-31 09:26:56`     # Close to RCF3339, replace T by space, and no time zone is specified

**Conditional Functions**The data sources cited in the subsequent sections are derived from this sample data.

### HAVING enables you to specify filter conditions after the GROUP BY clause, so as to control which groups in the query results can appear in the final results.

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
  Create database oceanic_station;
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

#### **Function**：Returns the rank (jump rank) of a value relative to all values in the partition.

```sql
[ WITH with_query [, ...]
SELECT [ ALL | DISTINCT ] select_expression [, . .]
    [ FROM from_item[, . ]
    [ WHERE condition ]
    [ GROUP BY [ ALL | DISTINCT ] grouping_element[, ... ]
    [ HAVING condition ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT] select]
    [ ORDER BY expression [ ASC | DESC ] [, , . ]
    [ OFFSET count ]
    [ LIMIT { count | ALL } ];

-- from_item
-- 1.
    tb_name [ AS ] alias [ ( column_alias [, ...]] ]
-2.
    from_item_join_type from_item_item_
    ) }

-- join_type
    [ INNER ] JOIN
    LEFT [ OUTE] JOIN
    RIGHT [ OUTE] JOIN
    FULL [ OUTE] JOIN
    CROSS JOIN

-- grouping_element
()
```

## Common users can access only the tenant information of the current session.

### Common users can access only the tenant information of the current session.

### SELECT \*

`slide_duration` is a STRING, which is resolved as an interval and specifies the sliding size of the time window. If this parameter is not specified, slide_duration is the sliding size of the time window and becomes a rolling window.

The names of the columns need to be different.

```
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

#### **Function**： Calculate the percentage ranking of a value in the partition.

```sql
SELECT [ ALL | DISTINCT ] select_expression [, ...];
```

The definition of the schema seen by the administrator:
System SchemaWhen this option is not specified, the default value is `ALL`.

#### -- Column definitions can not be specified for PARQUET filesCREATE EXTERNAL TABLE [ IF NOT EXISTS ] tb_name&#xA;( field_definition [, field_definition] ... ) tb_option;field_definition:&#xA;column_name data_type [ NULL ]tb_option: {&#xA;STORED AS { PARQUET | JSON | CSV | AVRO }&#xA;| [ WITH HEADER ROW ]&#xA;| [ DELIMITER 'a_single_char' ]&#xA;| [ PARTITIONED BY ( column_name, [, ... ] ) ]&#xA;| LOCATION '/path/to/file'&#xA;}

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
SELECT, visibility FROM air;
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

### **Function**： Return the approximate median of the input value.

Total read traffic size

### Pick alias for column expression

#### VNODE_DURATION：represents the time range of data in the shard，defaults to 365 days，and also expressed by data with units.Its data meaning is consistent with the value of TTL.

```sql
Express [ AS ] column_alias ]
```

#### **Function**：Replace all search items with replace.

```sql
SELECT stations, visibility AS v FROM air;
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

Please note that data in the TIME column can be represented by either a time string or a numeric timestamp.

```sql
FROM tb_name [AS] alias_name
```

One or more expressions used to specify a row partition. If there is no such clause, the partition is composed of all rows.

```sql
SELECT a.visibility, s.temperature
FROM air AS a JOIN sea ON a.temperature = s.temperature limit 10;
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

  CnosDBSQL is inspired by [DataFusion](https://arrow.apache.org/datafusion/user-guide/introduction)，We support most of the SQL syntax of DataFusion.

  ```sql
  Restrictions on Usage
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
  +---+
  | Station |
  +------
  | XiaoMaiDao |
  | LianYunGang |
  +---+ 
  ```

### This schema records the number of writes to the database.

CnosDB supports the creation of common tables and external tables

```sql
LIMIT n
```

Description

Execute the \w command, followed by the absolute path of the data file or the working path relative to cnosdb-cli.

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

### OFFSET Subsentence

If there are still missing values at the end of the data series, the last non-missing value is copied until all missing values are filled in.

```sql
OFFSET m
```

Field Name

If you GRUOP BY Clause is as follows,

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

The tenant to which the vnode belongs
Role name under the tenant
OFFSET 0 has the same effect as omitting OFFSET sentences.

You can also use the keyword AS to alias the table.

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

### WITH Subsentence

The database contains metadata information about the cluster, such as tenant information and user information.

```sql
WITH cte AS cte_query_definiton [, ..] query
```

Optional.administrator:
\*\*Notice:\*\*The following rules for use by CTE are：

- In databases, interpolation is a technique used to deal with missing values in data. When there are missing values in the data, these techniques can help us estimate or speculate on those missing values, thus filling in the gaps in the data.
- Show all databases or all tables.
  Assume A is the first CTE, B is the second CTE：

If in cnosdb cli, enter`\q`to exit.

```sql
SELECT, avg 
FROM ( SELECT station, AVG(visibility) AS avg 
        FROM air 
        GROUP station) AS x;
```

```
+-----+-------------------- +
| station | avg |
+---------------------------
| XiaoMaiDao | 62.2857142857147142872872885 |
| LianYunGang | 70.33333333333333333 |
+------+ ---+
```

```sql
WITH x AS 
    (SLECT, AVG(visibility) AS avg FROM air GROUP BY station)
SELECT, avg
FROM x;
```

```
+-----+-------------------- +
| station | avg |
+---------------------------
| XiaoMaiDao | 62.2857142857147142872872885 |
| LianYunGang | 70.33333333333333333 |
+------+ ---+
```

### UNION clause

administrator:

You can also use INSERT SELECT to insert query data into the table.

```
select_clause_set_left
[ UNION | UNION ALL| EXCEPT | INTERSECT]
select_clause_set_right
[sort_list_columns] [limit_clause]
```

Type

Similar to ROLLUP, CUBE is an extension of the GROUP BY clause. It allows you to generate subtotals for all combinations of grouping columns specified in the GROUP BY clause.

The definition of the schema seen by the administrator:

The last row of partition in`UNBOUND FOLLOWING` ROWS mode.The last value of ORDER BY expression in RANGE mode.

**UNION ALL**

```sql
SELECT visibility FROM air WHERE temperature < 60
UNION ALL
SELECT visibility FROM air WHERE temperature > 50 LIMIT 10;
```

```
+---+
| visible |
+--------
| 53 |
| 56 |
| 50 |
| 67 |
| 65 |
| 53 |
74 |
| 71 |
| 78 |
| 79 |
+--+
```

**UNION**

```sql
SELECT vision FROM air WHERE temperature < 60
UNION
SELECT visibility FROM air WHERE temperature > 50 LIMIT 10;
```

```
+---+
| visibility |
+--------
| 53 |
| 56 |
| 50 |
| 67 |
| 65 |
| 74 |
| 71 |
| 78 |
| 79 |
| 59 |
+-+
```

**EXCEPT**

```sql
SELECT visibility FROM air
EXCEPT
SELECT visibility FROM air WHERE temperature < 50 LIMIT 10;
```

```
+---+
| visitity |
+---+
| 56 |
| 50 |
| 67 |
| 65 |
| 53 |
| 74 |
| 71 |
| 78 |
| 79 |
| 59 |
+--+
```

**INTERSECT**

```sql
SELECT visibility FROM air
INTERSECT
SELECT visibility ROM ROM air WHERE temperature > 50 LIMIT 10;
```

```
+---+
| visitity |
+---+
| 56 |
| 50 |
| 67 |
| 65 |
| 53 |
| 74 |
| 71 |
| 78 |
| 79 |
| 59 |
+--+
```

### **Function**：Return the current timestamp.

Sort results by referenced expression.Default usage ascending (ASC).common user:

To create a stream table, a source table is required. The stream table does not support `ALTER` now.

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

## **Function**： Select N records at random from the given column column_key

todo
Simple expression can be a constant, variable, column or number function.
Two or more simple expressions can be connected to complex expressions with an operator.

External tables do not exist in the database, but an operating system file is accessed as a common database table.

```sql
<expresion> :: = { 
    constant 
    | [ table_name. ] column   
    | scalar_function 
    | ( expression ) 
    | expression { binary_operator } expression   
    | case_when_expression
    | window_function | aggregate_function  
}
```

#### **Function**：Return the position of a substring in a specified string.

The time_window_gapfill must be used as a top-level expression in a query or subquery. For example, you cannot nest time_window_gapfill in another function, such as sum(time_window_gapfill(xxx)).
See[常量](#constants) for details.

If RANGE is specified, the ORDER BY clause must be specified. The window calculates the offset in the unit of the value of the ORDER BY expression.

```sql
Select 1;
```

```
+---+
| Int64(1) |
+---+
| 1 |
+---+ +
```

#### CnosDB supports two data inserting methods: one is to use the`INSERT INTO`statement, and the other is to use the HTTP API [write](./rest_api.md) interface to insert Line Protocol format data.

Currently, only common tables can be source tables. Field names and field types defined in flow table fields must belong to the source table and be the same as those defined in the source table.

#### `event_time_column` Specifies the event time column. The data type of this column must be TIMESTAMP.

| For more information about SHOW QUERIES, you can reference to [SHOW QUERIES](#show-queries). | Window functions and aggregate functions cannot be nested in window functions.。 |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| NOT                                                                                          | **Function**： Calculate the standard deviation of the sample.                   |
| IS NULL                                                                                      | Sample Data                                                                     |
| IS NOT NULL                                                                                  | CLUSTER_SCHEMA : The information of the cluster.           |

#### CREATE STREAM TABLE [IF NOT EXISTS] table_name(field_definition [, field_definition] ...)&#xA;WITH (db = 'db_name', table = 'table_name', event_time_column = 'time_column')&#xA;engine = tskv;&#xA;field_definition:&#xA;column_name data_type

If you use the database through [HTTP API](./rest_api.md), you can specify the parameter db=database_ name in the url to use the database.

Describe the parameters of the database and the pattern of the table.

| The keyword`JOIN`or`INNER JOIN`defines a join that only displays matching rows in two tables. | Linear interpolation is suitable for estimation of continuous variables, such as filling in missing values in time series or interpolating in spatial data. However, the accuracy and applicability of linear interpolation depends on the characteristics of the data and the actual situation. In some cases, the data may have non-linear relationships, or other interpolation methods may be more suitable. Therefore, before applying linear interpolation, it is necessary to carefully consider the nature of the data and the purpose of the interpolation to ensure that the interpolation results are reasonable and accurate. |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -                                                                                             | For system administrators, the entire table in USAGE_SCHEMA is visible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| *                                                                                             | `EXPLAIN` is only used to display the execution plan of a query, and does not execute the query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -                                                                                             | **Function**： Starting from the origin, the bucket is split by interval, and the bucket timestamp of the source is returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| /                                                                                             | This schema shows a real-time snapshot of SQL statements, which is used to monitor SQL jobs in real time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| %                                                                                             | If the SELECT clause contains only the Tag column, it is equivalent to the SELECT DISTINCT Tag column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| \|\&#124                                                                                      | INFORMATION_SCHEMA : The information of the tenant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| =                                                                                             | There is no need to create a timestamp column when creating a table. The system automatically adds a timestamp column named "time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| !=, <\&gt                                                                                     | **Function**： Return the maximum value in the selected element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <                                                                                             | Column type, unique to the tskv table, supports TIME, TAG, FIELD, and usually Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <=                                                                                            | **Start the CLI**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| &gt;                                                                                     | **Function**：Convert to a microsecond-level timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| > =                                                                                           | `1997-01-31T09:26:56.123Z` # Standard RCF3339, UTC time zone                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ND                                                                                            | CnosDB provides `ROLLUP`，`CUBE`and other complex grouping operations, enabling you to operate query results in different ways.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Other business                                                                                | LIMIT Clause                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| LIKE                                                                                          | day                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### The returned result set skips m records. default m=0.

Return the series in the specified table.

```sql
expr BEETWEEN expr and expr
```

The db and table arguments specify the source table.

```sql
SELECT DISTINCT PRESSURE FROM FROM AIR WHERE PRESSURE BETWEEN 50 and 60;
```

```
+---+
| pressure |
+------+
| 52 |
| 54 |
| 57 |
| 50 |
| 6 |
| 51 |
| 56
| 58 |
| 59 |
| 53 |
| 55 |
+---+
```

User name

### `IN` expression

as follows：

Sort the results by the referenced expression. Ascending (ASC) is used by default. Sort in descending order by adding DESC after the expression of ORDER BY.

```sql
SELECT position, temperature, vision FROM air WHERE temperature IN (68, 69);
```

```
+-------------+-------------+------------+
| station     | temperature | visibility |
+-------------+-------------+------------+
| XiaoMaiDao  | 69          | 56         |
| LianYunGang | 69          | 78         |
+-------------+-------------+------------+
```

Name of the database to which the permission was granted

Operator

### Limit the number of rows returned from the result set to n, and n must be non-negative.

The tenant to which the vnode belongs

`EXPLAIN ANALYZE` executes the query and displays the execution plan of the query.

```sql
CASE
    ( WHEN expression THEN result1 [, ...])
    ELSE result
END;
```

The database to which the vnode belongs

```sql
SELECT DISTINCT 
    CASE WHEN PRESSURE >= 60 THEN 50 
         ELSE PRESSURE 
    END PRESSURE 
FROM AIR;
```

```
+----------+
| pressure |
+----------+
| 52       |
| 54       |
| 57       |
| 50       |
| 51       |
| 56       |
| 58       |
| 59       |
| 53       |
| 55       |
+----------+
```

### **Explanation**&#xA;At present, we support altering common tables.

Size The order of implementation may have a clear impact on the value of results.

The priority level of the operator is shown in the table below. The higher level operator is valued before the lower level operator. The time_window_gapfill is similar to time_window, but has the ability to fill in missing data. Interpolate and locf must be used in conjunction with time_window_gapfill, which controls how missing values are treated.

| Level | WITH HEADER ROW：Effective only in csv file format, representing with csv header.                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| 2     | You can also see the executing SQL statements using the 'SHOW QUERIES' statement, which is a wrapper around the QUERIES schema. |
| 3     | The definition of the schema seen by the administrator:                                                                         |
| 4     | The tenant of the database                                                                                                      |
| 10    | NOT                                                                                                                             |
| 9     | ND                                                                                                                              |
| 5     | BETWEEN, IN, LIKE, OR                                                                                                           |

### Required by time addition or subtraction and function data_bin's parameters.

PRECISION：The timestamp accuracy of the database. ms represents milliseconds, us represents microseconds, ns represents nanoseconds,defaults to ns.

```sql
In the streaming down-sampling scenario, the source table interval is one minute, and the down-sampling interval is one hour
```

Double Precision Floating Point

Define a left join with the keyword`LEFT JOIN`or`LEFT OUTER JOIN`.This join includes all the rows in the left table. If there are no matching rows in the right table, the right side of the join is null.

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
+--+
| Table |
+---+
| sea |
| air |
| wind |
+---+ +
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

common user:

#### SHOW SERIES

hour

Example`INSERT INTO air (TIME, station, visibility) VALUES(1666132800000000000, NULL, NULL)`

```sql
SHOW SERIES [ON database_name] FROM table_name [WHERE expr] [order_by_clause] [limit_clause] 
```

Define a right join with the keyword `RIGHT JOIN`or`RIGHT OUTER JOIN`. This join includes all the rows in the right table. If there are no matching rows in the left table, the left side of the join is null.

```sql
SHOW SERIES FROM air WHERE station = 'XiaoMaiDao' ORDER BY key LIMIT 1;
```

```
+-------- +
| key |
+--------------------
| air,station=XiaoMaiDao |
+--+ + +
```

User name

#### SHOW TAG VALUES

Table storage engine. External and internal tskv tables supported now

```sql
SHOW TAG VALUES [ON database_name] FROM table_name WITH KEY [<operator> "<tag_key>| [[NOT] IN ("<tag_key1>", . )]] [WHERE expr] [order_by_clause] [limit_clause];
```

Create Database

ALTER TABLE tb_name alter_table_option;alter_table_option: {
ADD TAG col_name
\| ADD FIELD col_name [CODEC(code_type)]
\| ALTER col_name SET CODEC(code_type)
\| DROP col_name
}

```sql
SHOW TAG VALUES FROM air WITH KEY = "station" WHERE station = 'XiaoMaiDao' ORDER BY key, value LIMIT 1;
```

```
+---------+------------+
| key     | value      |
+---------+------------+
| station | XiaoMaiDao |
+---------+------------+
```

```sql
SHOW TAG VALUES FROM FROM air WITH KEY NOT IN ("station1");
```

```
+---------+-------------+
| key     | value       |
+---------+-------------+
| station | XiaoMaiDao  |
| station | LianYunGang |
+---------+-------------+
```

### administator:```sql
select * from usage_schmea.disk_storage order by time desc limit 2;
```

INSERT air_visibility (TIME, station, visibility)
SELECT TIME, station, visibility FROM air;

```sql
EXPLIN [ ANALYZE ] [ VERBOSE ] <statement>;
```

Binary operators supported now:

Constant

Constant

Equivalent to

Binary data,can be converted to STRING using Cast clause.

```sql
EXPLIN SELECT station, temperature, vision FROM air;
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
EXPLIN ANALYZE SELECT station, temperature, vision FROM air;
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
EXPLIN ANALYZE SELECT station, temperature, vision FROM air;
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
EXPLAIN ANALYZE VERBOSE SELECT position, temperature, visibility FROM air;
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

### **Function**：Returns the rank (consecutive rank) of a value relative to all values in the partition.

Each SELECT clause in the UNION must have the same number of columns, and the corresponding columns have the same data type.

```sql
DESCREIBE {DATABASE db_name | TABLE tb_name};
```

`1997-01-31 09:26:56.123+08:00` # Close to RCF3339, just replace T by space

The UNION clause is used to combine the analysis results of multiple SELECT statements.

```sql
DESCREIBE TABLE air;
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
+---+---------+-------+-------+-
| TTL | SHARD | VNODE_DURATION | REPLICA | PRECISION |
+------+---------------+
| 365 Days | 1 365 Days | 1 | NS |
+---------------------------+----+
```

[//]: # "## **EXISTS**"

[//]: # "EXISTS conditions test if a row exists in a subquery and return true when a subquery returns at least one line.If NOT is specified, this condition returns true if the subquery returns any line."

[//]: # "The wildcard * can be used to refer to all columns."

[//]: # "``sql"

[//]: # "SELECT id FROM date"

[//]: # "WHERE EXISTS (SECLECT 1 FROM shop"

[//]: # "WHERE date.id = shop.id)"

[//]: # "ORDER BY id;"

[//]: # "```"

[//]: # "# **DCL (none)**"

[//]: # "``sql"

[//]: # "DESCRIBE table_name"

[//]: # "```"

[//]: # "TODO SHOW"

[//]: # "# **SHOW**"

[//]: # "## **SHOW VARIABLE**"

[//]: # "``sql"

[//]: # "-- only support shows tables"

[//]: # "-- SHOW TABLES is not supported unless information_schema is enabled"

[//]: # "SHOW TABLES"

[//]: # "```"

[//]: # "## **SHOW COLUMNS**"

[//]: #

[//]: # "``sql"

[//]: # "-- SHOW COLUMNS with WHERE or LIKE is not supported"

[//]: # "-- SHOW COLUMNS is not supported unless information_schema is enabled"

[//]: # "- treat both FULL and EXTENDED as the same"

[//]: # "SHOW [ EXTENDED ] [ FULL ]"

[//]: # "{ COLUMNS | FIELDS }"

[//]: # "{ FROM | IN }"

[//]: # "table_name"

[//]: # "```"

[//]: # "## **SHOW CREATE TABLE**"

[//]: # "``sql"

[//]: # "SHOW CREATE TABLE table_name"

[//]: # "```"

### Join clause

Expression

Parameter Description

### INNER JOIN

User writes times

#### **Function**： Split str according to delim, and return the nth part.

```sql
SELECT * FROM air INNER JOIN Sea ON air.temperature = sea.temperature;
```

```
+---------------------+------------+------------+-------------+----------+---------------------+-------------+-------------+
| time                | station    | visibility | temperature | pressure | time                | station     | temperature |
+---------------------+------------+------------+-------------+----------+---------------------+-------------+-------------+
| 2022-01-28 13:27:00 | XiaoMaiDao | 67         | 62          | 59       | 2022-01-28 13:18:00 | LianYunGang | 62          |
| 2022-01-28 13:24:00 | XiaoMaiDao | 50         | 78          | 66       | 2022-01-28 13:30:00 | XiaoMaiDao  | 78          |
| 2022-01-28 13:24:00 | XiaoMaiDao | 50         | 78          | 66       | 2022-01-28 13:33:00 | XiaoMaiDao  | 78          |
| 2022-01-28 13:30:00 | XiaoMaiDao | 65         | 79          | 77       | 2022-01-28 13:39:00 | XiaoMaiDao  | 79          |
+---------------------+------------+------------+-------------+----------+---------------------+-------------+-------------+
```

### LEFT JOIN

Show All Databases**Function**： Calculate the variance of population.

#### **Note**：In order to query more efficiently, the order of each row may not be the same for queries without specified sorting

```sql
SELECT * FROM air LEFT JOIN Sea ON air.temperature = sea.temperature;
```

```
+---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+
| time                | station     | visibility | temperature | pressure | time                | station     | temperature |
+---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       | 2022-01-28 13:18:00 | LianYunGang | 62          |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       | 2022-01-28 13:30:00 | XiaoMaiDao  | 78          |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       | 2022-01-28 13:33:00 | XiaoMaiDao  | 78          |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       | 2022-01-28 13:39:00 | XiaoMaiDao  | 79          |
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |                     |             |             |
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |                     |             |             |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |                     |             |             |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |                     |             |             |
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |                     |             |             |
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |                     |             |             |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |                     |             |             |
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |                     |             |             |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |                     |             |             |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |                     |             |             |
+---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+
```

### HIGHT JOIN

8 BytesType

#### **Function**：将 str 中与 regexp 匹配的所有子字符串都替换为 rep。

```sql
SELECT * FROM air HIGHT JOIN Sea ON air.temperature = sea.temperature;
```

```
+---------------------+------------+------------+-------------+----------+---------------------+-------------+-------------+
| time                | station    | visibility | temperature | pressure | time                | station     | temperature |
+---------------------+------------+------------+-------------+----------+---------------------+-------------+-------------+
| 2022-01-28 13:27:00 | XiaoMaiDao | 67         | 62          | 59       | 2022-01-28 13:18:00 | LianYunGang | 62          |
|                     |            |            |             |          | 2022-01-28 13:21:00 | LianYunGang | 63          |
|                     |            |            |             |          | 2022-01-28 13:24:00 | LianYunGang | 77          |
|                     |            |            |             |          | 2022-01-28 13:27:00 | LianYunGang | 54          |
|                     |            |            |             |          | 2022-01-28 13:30:00 | LianYunGang | 55          |
|                     |            |            |             |          | 2022-01-28 13:33:00 | LianYunGang | 64          |
|                     |            |            |             |          | 2022-01-28 13:36:00 | LianYunGang | 56          |
|                     |            |            |             |          | 2022-01-28 13:21:00 | XiaoMaiDao  | 57          |
|                     |            |            |             |          | 2022-01-28 13:24:00 | XiaoMaiDao  | 64          |
|                     |            |            |             |          | 2022-01-28 13:27:00 | XiaoMaiDao  | 51          |
| 2022-01-28 13:24:00 | XiaoMaiDao | 50         | 78          | 66       | 2022-01-28 13:30:00 | XiaoMaiDao  | 78          |
| 2022-01-28 13:24:00 | XiaoMaiDao | 50         | 78          | 66       | 2022-01-28 13:33:00 | XiaoMaiDao  | 78          |
|                     |            |            |             |          | 2022-01-28 13:36:00 | XiaoMaiDao  | 57          |
| 2022-01-28 13:30:00 | XiaoMaiDao | 65         | 79          | 77       | 2022-01-28 13:39:00 | XiaoMaiDao  | 79          |
+---------------------+------------+------------+-------------+----------+---------------------+-------------+-------------+
```

### FULL JOIN

[Data Source](#sample-data) It will display all lines that connect to the left and right and will create empty values where no match exists on either side of the connection.

#### **Function**：Return a concatenated string separated by sep.

```sql
SELECT * FROM air FULL JOIN Sea ON air.temperature = sea.temperature;
```

```
+---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+
| time                | station     | visibility | temperature | pressure | time                | station     | temperature |
+---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+
| 2022-01-28 13:27:00 | XiaoMaiDao  | 67         | 62          | 59       | 2022-01-28 13:18:00 | LianYunGang | 62          |
|                     |             |            |             |          | 2022-01-28 13:21:00 | LianYunGang | 63          |
|                     |             |            |             |          | 2022-01-28 13:24:00 | LianYunGang | 77          |
|                     |             |            |             |          | 2022-01-28 13:27:00 | LianYunGang | 54          |
|                     |             |            |             |          | 2022-01-28 13:30:00 | LianYunGang | 55          |
|                     |             |            |             |          | 2022-01-28 13:33:00 | LianYunGang | 64          |
|                     |             |            |             |          | 2022-01-28 13:36:00 | LianYunGang | 56          |
|                     |             |            |             |          | 2022-01-28 13:21:00 | XiaoMaiDao  | 57          |
|                     |             |            |             |          | 2022-01-28 13:24:00 | XiaoMaiDao  | 64          |
|                     |             |            |             |          | 2022-01-28 13:27:00 | XiaoMaiDao  | 51          |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       | 2022-01-28 13:30:00 | XiaoMaiDao  | 78          |
| 2022-01-28 13:24:00 | XiaoMaiDao  | 50         | 78          | 66       | 2022-01-28 13:33:00 | XiaoMaiDao  | 78          |
|                     |             |            |             |          | 2022-01-28 13:36:00 | XiaoMaiDao  | 57          |
| 2022-01-28 13:30:00 | XiaoMaiDao  | 65         | 79          | 77       | 2022-01-28 13:39:00 | XiaoMaiDao  | 79          |
| 2022-01-28 13:21:00 | XiaoMaiDao  | 56         | 69          | 77       |                     |             |             |
| 2022-01-28 13:33:00 | XiaoMaiDao  | 53         | 53          | 68       |                     |             |             |
| 2022-01-28 13:36:00 | XiaoMaiDao  | 74         | 72          | 68       |                     |             |             |
| 2022-01-28 13:39:00 | XiaoMaiDao  | 71         | 71          | 80       |                     |             |             |
| 2022-01-28 13:21:00 | LianYunGang | 78         | 69          | 71       |                     |             |             |
| 2022-01-28 13:24:00 | LianYunGang | 79         | 80          | 51       |                     |             |             |
| 2022-01-28 13:27:00 | LianYunGang | 59         | 74          | 59       |                     |             |             |
| 2022-01-28 13:30:00 | LianYunGang | 67         | 70          | 72       |                     |             |             |
| 2022-01-28 13:33:00 | LianYunGang | 80         | 70          | 68       |                     |             |             |
| 2022-01-28 13:36:00 | LianYunGang | 59         | 70          | 54       |                     |             |             |
+---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+
```

[//]: # "### CROSS JOIN"

[//]: #

[//]: # "Cross-connecting produces a cartex that matches each row on the left with each row connected to the right."

[//]: #

[//]: # "``sql"

[//]: # "SELECT * FROM air CROSS JOIN sea;"

[//]: # "```"

[//]: # "    +---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+"

[//]: # "    | time | station | visibility | temperature | pressure | time | station | temperature |"

[//]: # "    +---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:21:00 | XiaoMaiDao | 56 | 77 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:24:00 | XiaoMaiDao | 50 | 78 | 66 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:27:00 | XiaoMaiDao | 67 | 62 | 59 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:30:00 | XiaoMaiDao | 65 | 79 | 77 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:33:00 | XiaoMaiDao | 53 | 53 | 68 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:36:00 | XiaoMaiDao | 74 | 72 | 68 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 71 | 80 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 71 | 80 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 71 | 80 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:39:00 | XiaoMaiDao | 71 | 81 | 80 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:21:00 | LianYunGang | 78 | 69 | 71 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:24:00 | LianYunGang | 79 | 80 | 51 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59| 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59| 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59| 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 59| 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:27:00 | LianYunGang | 59 | 59 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:30:00 | LianYunGang | 67 | 70 | 72 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:33:00 | LianYunGang | 80 | 70 | 68 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:18:00 | LianYunGang | 62 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:21:00 | LianYunGang | 63 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:24:00 | LianYunGang | 77 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:27:00 | LianYunGang | 54 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:30:00 | LianYunGang | 55 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:33:00 | LianYunGang | 64 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:36:00 | LianYunGang | 56 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:21:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:24:00 | XiaoMaiDao | 64 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:27:00 | XiaoMaiDao | 51 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59| 70 | 2022-01-28 13:30:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:33:00 | XiaoMaiDao | 78 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59 | 70 | 54 | 2022-01-28 13:36:00 | XiaoMaiDao | 57 |"

[//]: # "    | 2022-01-28 13:36:00 | LianYunGang | 59| 70 | 2022-01-28 13:39:00 | XiaoMaiDao | 79 |"

[//]: # "    +---------------------+-------------+------------+-------------+----------+---------------------+-------------+-------------+"

### `1997-01-31 09:26:56.123` # Close to RCF3339, replace T by space, and no time zone is specified

**Function**：Return unixTime.

#### The time column cannot be`NULL`，and the Tag column and Field Namecolumn can be `NULL`。

```sql
SELECT, AVG(temperature) 
FROM air 
GROUP BY station;
```

```
+---+-------------------- ----- ----- -- -- -- -- -- -- -- +
| AVG(air.temperature) |
+---+
| XiaoMaiDao | 69.1428571428285714714 |
| LianYunGang | 72.1666666667 |
+---+ + + +
```

### HAVING clause

You can use window functions (analysis functions) in CnosDB to flexibly analyze and process data of specified window columns. The command formats, parameter descriptions and examples of window functions supported by CnosDB are shown below to guide you to use window functions to complete development.

```sql
group_by_clause 
[ HAVING condition ];
```

**Note**：

8 Bytes

Numerical type, scientific notation is not supported at present.

Time of writes

The database to which the vnode belongs

```sql
SELECT position, AVG(temperature) AS avg_t 
FROM air 
GROUP BY station 
HAVING avg_t > 70;
```

```
+-------------------------------- +
| station | avg_t |
+--------------+
| LianYunGang | 72.16666666666666666666667 |
+-------+ + +
```

### A symbol representing a single specific data value.&#xA;You can refer to [constant](#constant).

User name

[//]: # "### **GROUPING SETS**"

[//]: # "GROUPING SETS is a group or group of columns that can be grouped together."

[//]: # "You can simply use GROUPING SETS, instead of writing multiple queries and combining results with UNION"

[//]: # "GROUPING SETS in CnosDB can be considered an extension of GROUP BY sentences. It allows you to define multiple groups in the same query."

[//]: # "Let's see the example below of how it equates to GROUP BY with multiple UNION ALL sentences."

[//]: # "``sql"

[//]: # "SELECT * FROM shipping;"

[//]: # "-- origin_state | origin_zip | destination_state | destination_zip | package_weight"

[//]: # "-- --------------+------------+-------------------+-----------------+----------------"

[//]: # "-- California | 94131 | New Jersey | 8648 | 13"

[//]: # "-- California | 94131 | New Jersey | 8540 | 42"

[//]: # "-- New Jersey | 7081 | Connecticut | 6708 | 225"

[//]: # "-- California | 90210 | Connecticut | 6927 | 1337"

[//]: # "-- California | 94131 | Colorado | 80302 | 5"

[//]: # "-- New York | 10002 | New Jersey | 8540 | 3"

[//]: # "-- (6 rows)"

[//]: # "```"

[//]: # "The following query demonstrates GROUPING SETS:"

[//]: # "``sql"

[//]: # "SELECT origin_state, origin_zip, destination_state, sum (package_weight)"

[//]: # "FROM shipping"

[//]: # "GROUP BY GROUPING SETS ( (origin_state),"

[//]: # "(origin_state, origin_zip),"

[//]: # "(destination_state);"

[//]: # "-- origin_state | origin_zip | destination_state | _col0"

[//]: # "--  --------------+------------+-------------------+-------"

[//]: # "- New Jersey | NULL | NULL | 225"

[//]: # "- California | NULL | NULL | 1397"

[//]: # "--- New York | NULL | NULL | 3"

[//]: # "- California | 90210 | NULL | 1337"

[//]: # "- California | 94131 | NULL | 60"

[//]: # "-- New Jersey | 7081 | NULL | 225"

[//]: # "-- New York | 10002 | NULL | 3"

[//]: # "--- NULL | NULL | Colorado | 5"

[//]: # "--- NULL | NULL | New Jersey | 58"

[//]: # "--- NULL | NULL | Connecticut | 1562"

[//]: # "-- (10 rows)"

[//]: # "```"

[//]: # "The above query is equal to the"

[//]: # "``sql"

[//]: # "SELECT origin_state, NULL, NULL, sum (package_weight)"

[//]: # "FROM shipping GROUP BY origin_state"

[//]: # "UNION ALL"

[//]: # "SELECT origin_state, origin_zip, NULL, sum (package_weight)"

[//]: # "FROM shipping GROUP BY origin_state, origin_zip"

[//]: # "UNION ALL"

[//]: # "SELECT NULL, NULL, destination_state, sum (package_weight)"

[//]: # "FROM shipping GROUP BY destination_state;"

[//]: # "```"

### **ROLLUP**

[//]: # "Similar to GROUPING SETS ,"

Description

**Note**

If your group by child is：

```sql
SELECT ...
FROM ...
GROUP BY ROLLUP (column_1,column_2);
```

Total write traffic size

```sql
SELECT ...
FROM ...


UNION ALL

SELECT ...
FROM FROM ...
GROUP BY
column_1

UNION ALL

SELECT ...
FROM ...
GROUP BY
column_1, column2;
```

[//]: # "GROUP BY GROUPING SETS("

[//]: # "    (column_1, column_2),"

[//]: # "    (column_1),"

[//]: # "    ()"

[//]: # ")"

User writes times User name under tenant

**OFFSET Clause** The sequence in ROLLUP is important.

The definition of the schema seen by the administrator:

```sql
SELECT, visibility, avg(temperature) 
FROM air 
GROUP BY ROLLUP (station, visibility);
```

```
+-------------+------------+----------------------+
| station     | visibility | AVG(air.temperature) |
+-------------+------------+----------------------+
|             |            | 70.53846153846153    |
| XiaoMaiDao  |            | 69.14285714285714    |
| LianYunGang |            | 72.16666666666667    |
| XiaoMaiDao  | 56         | 69                   |
| XiaoMaiDao  | 50         | 78                   |
| XiaoMaiDao  | 67         | 62                   |
| XiaoMaiDao  | 65         | 79                   |
| XiaoMaiDao  | 53         | 53                   |
| XiaoMaiDao  | 74         | 72                   |
| XiaoMaiDao  | 71         | 71                   |
| LianYunGang | 78         | 69                   |
| LianYunGang | 79         | 80                   |
| LianYunGang | 59         | 72                   |
| LianYunGang | 67         | 70                   |
| LianYunGang | 80         | 70                   |
+-------------+------------+----------------------+
```

### **CUBE**

Like ROLLUP, CUBE is an extension of GROUP BY sentences. Time of writes

[//]: # "CUBE is like a combination of GROUPING SETS and ROLLUP."

User nameThe group will start with (A, B, C)

`CROSS JOIN`is not supported currently.

```sql
SELECT ... 
FROM ...
GROUP BY CUBE (column1, column2);
```

**Note**：The aggregate function result cannot be returned in CSV format

```sql
SELECT ...
FROM ...
GROUP BY column1

UNION ALL

SELECT.
FROM ...
GROUP BY column2

UNION ALL

SELECT.
FROM ...
GROUP BY column1, column2

UNION ALL

SELECT ...
FROM ...
;
```

ID of user which commit the SQL

```sql
SELECT, visibility, avg(temperature) 
FROM air 
GROUP BY CUBE (station, visibility);
```

```
+-------------+------------+----------------------+
| station     | visibility | AVG(air.temperature) |
+-------------+------------+----------------------+
| XiaoMaiDao  | 56         | 69                   |
| XiaoMaiDao  | 50         | 78                   |
| XiaoMaiDao  | 67         | 62                   |
| XiaoMaiDao  | 65         | 79                   |
| XiaoMaiDao  | 53         | 53                   |
| XiaoMaiDao  | 74         | 72                   |
| XiaoMaiDao  | 71         | 71                   |
| LianYunGang | 78         | 69                   |
| LianYunGang | 79         | 80                   |
| LianYunGang | 59         | 72                   |
| LianYunGang | 67         | 70                   |
| LianYunGang | 80         | 70                   |
|             | 56         | 69                   |
|             | 50         | 78                   |
|             | 67         | 66                   |
|             | 65         | 79                   |
|             | 53         | 53                   |
|             | 74         | 72                   |
|             | 71         | 71                   |
|             | 78         | 69                   |
|             | 79         | 80                   |
|             | 59         | 72                   |
|             | 80         | 70                   |
| XiaoMaiDao  |            | 69.14285714285714    |
| LianYunGang |            | 72.16666666666667    |
|             |            | 70.53846153846153    |
+-------------+------------+----------------------+
```

[//]: # "### **GROUPING**"

[//]: # "    GROUPING(column_expression)"

[//]: # "Time of record"

[//]: # "When `GROUP BY` is specified, GROUPING can only be used in SELECT lists, HAVING and ORDER BY sentences."

[//]: # "Time of record"

[//]: # "``sql"

[//]: # "SELECT origin_state,"

[//]: # "origin_zip,"

[//]: # "destination_state,"

[//]: # "sum(package_weight),"

[//]: # "grouping(origin_state, origin_zip, destination_state)"

[//]: # "FROM shipping"

[//]: # "GROUP BY GROUPING SETS ("

[//]: # "    (origin_state),"

[//]: # "    (origin_state, origin_zip),"

[//]: # "    (destination_state)"

[//]: # ");"

[//]: # "-- origin_state | origin_zip | destination_state | _col3 | _col4"

[//]: # "-- --------------+------------+-------------------+-------+-------"

[//]: # "--- California | NULL | NULL | 1397 | 3"

[//]: # "-- New Jersey | NULL | NULL | 225 | 3"

[//]: # "-- New York | NULL | NULL | 3 | 3 | 3"

[//]: # "-- California | 94131 | NULL | 60 | 1"

[//]: # "-- New Jersey | 7081 | NULL | 225 | 1"

[//]: # "-- California | 90210 | NULL | 1337 | 1"

[//]: # "-- New York | 10002 | NULL | 3 | 1"

[//]: # "--- NULL | NULL | New Jersey | 58 | 6"

[//]: # "--- NULL | NULL | Connecticut | 1562 | 6"

[//]: # "-- NULL | NULL | Colorado | 5 | 6"

[//]: # "-- (10 rows)"

[//]: # "```"

[//]: # "tenant name"

[//]: # "NULL returned as a result of ROLLUP, CUBE or GROUPING SETS operations is a special use of NULL."

[//]: # "This acts as the column holder of the concentration of results, indicating the total number of cases."

## `INTERVAL '1 DECADES' ` One decade(10 years)

### General aggregation function

### **Function**：Return expr cast to a timestamp in a optional format.

#### **Function**：Create a STRUCT with the specified field value.

```
COUNT(x)
```

User name

User name

> Role name Advanced Functions Schema Definition

Compare expressions to see if they are less than

Comparing expressions to see if they are less than or equal to

Name of user which commit the SQL

```
SELECT COUNT(*) FROM air;
```

```
+-----+
| COUNT (UInt8(1)) |
+---+
| 13 |
+---------+ +
```

```sql
SELECT COUNT(temperature) FROM air;
```

```
+------------------------+
| COUNT(air.temperature) |
+------------------------+
| 13                     |
+------------------------+
```

```sql
SELECT COUNT (DISTINCT temperature) FROM air;
```

```
+-------- +
| COUNT (DISTINCT air.temperature) |
+---, -+
| 10 |
+------------- + A+ + + +
```

***

### **Return Type**：Consistent with parameter type.

#### **Function**：Return a value truncated to the unit specified in field.

```
SUM(NUERICS)
```

User name

The tenant of the database

User queries times

CUBE creates a grouping set for each possible combination of the specified expression set. First, GROUP BY (A, B, C), then (A, B), (A, C), (A), (B, C), (B), (C), and finally GROUP BY the entire table.

```sql
SELECT SUM(temperature) FROM air;
```

```
+------- +
| SUM(air.temperature)|
+---------+
| 917 |
+______
```

***

### **Function**： x returns the approximate percentage (TDigest) of the weighted input value, where w is the weight column expression and p is a floating point 64 between 0 and 1 inclusive.

#### `1997-01-31T09:26:56.123+08:00` # Standard RCF3339, East 8th District

```
MIN(SSTRING | NUMERICS | TIMESTAMP)
```

CTE in the same WITH clause must have a unique name.

ID of vnode

The tenant of the database

First evaluate the left expression, and if it is false, evaluate the right expression, both false and false

```sql
 SELECT MIN(time), MIN(station), MIN(temperature) FROM air;
```

```
+---+
| MIN(Air.time) | MIN(Air.time) | MIN(Air.station) | MIN(Air.temperature) | MIN(Air.temperature) | MIN(air.temperature) |
+------------++-+
| 2022-01-28T13:21:00 | LianYunGang | 53
+------------+++ + + +
```

***

### **Function**：Return an inverted string or an array containing elements in reverse order.

#### DELIMITER：only effective in csv format, representing the delimiter of column data.

```
MAX (STRINGS | NUMERICS | TIMESTAMP)
```

Time of writes

ID of vnode

The tenant of the database

CnosDB requires that the inserted data column must have a timestamp, and the VALUES list must be a [constant](#constant).
If a column is not selected, the value is`NULL`。

```
SELECT MAX(time), MAX(station), MAX(temperature) FROM air;
```

```
+---------------------+------------------+----------------------+
| MAX(air.time)       | MAX(air.station) | MAX(air.temperature) |
+---------------------+------------------+----------------------+
| 2022-01-28T13:39:00 | XiaoMaiDao       | 80                   |
+---------------------+------------------+----------------------+
```

***

### AVG

#### **Function**：Returns the position of a value relative to all values in the partition.

```
AVG (NUMERICS)
```

Field Name

HAVING Clause

GROUP BY Clause

INTERVAL '1 YEAR' is not 365 days or 366 days, but 12-months.
INTERVAL '1 MONTH' is not 30 days or 31 days, but 1-month.

```
SELECT AVG(temperature) FROM air;
```

```
+----- +
| AVG(air.temperature)|
+-----------+
| 70.53846153846153 |
+----------+ +
```

***

### TTL： represents the saving time of the data file, defaults to 365 days, expressed in data with units. It supports day（d），hour（h），minute（m），such as TTL 10d，TTL 50h，TTL 100m.When no unit, the default is day, such as TTL 30.

#### -- station is a Tag column, temperature is a Field Namecolumn.&#xA;SELECT station, temperature FROM air;

```
ARRAY_AGG(expr)
```

Create Common (TSKV) Table

Evaluate the left expression first, and if it's true, evaluate the right expression, both true and true

DROP STREAM TABLE

`DENSE_RANK` | `RANK` | `PERCENT_RANK` need ORDER BY Clause.

```sql
SELECT ARRAY_AGG (temperature) from air;
```

```
+------------------------------------------------------+
| ARRAYAGG(air.temperature)                            |
+------------------------------------------------------+
| [69, 78, 62, 79, 53, 72, 71, 69, 80, 74, 70, 70, 70] |
+------------------------------------------------------+
```

Description

### `INTERVAL '1 YEAR 1 DAY 1 HOUR 1 MINUTE'` One year, one day, one hour, one minute

### The double quotation mark format is not supported. Two consecutive '' in

#### **Function**： Returns the approximate percentile (TDigest) of the input value x, where p is the percentile and is a 64 bit floating point number between 0 and 1 (including 1).

```
VAR (NUMERICS)
```

Field Name

If the subexpression is true, the whole expression is false, and if the whole expression is false, the whole expression is true

Count the disk storage time

Configure of users in json

```sql
SELECT VAR(temperature) FROM air;
```

```
+---------------------------+
| VARIANCE(air.temperature) |
+---------------------------+
| 51.43589743589741         |
+---------------------------+
```

***

### An expression is a kind of combination of symbols and operators that CnosDB will process to obtain a single data value.&#xA;A simple expression can be a constant, variable, column, or scalar function.&#xA;Complex expressions can be formed by concatenating two or more simple expressions with operators.

#### **Function**：Return its first non null parameter. Null is returned only when all parameters are null. When retrieving data for display, it is often used to replace the default value with a null value.

```
VAR_POPUP(NUMERICS)
```

We can get the `query_id` through [`SHOW QUERIES`](#show-queries).

Order of the column in table

Count the disk storage time

A JSON string that records all parameters of the table

```
SELECT VAR_POP(temperature) FROM air;
```

```
+------------------------------+
| VARIANCEPOP(air.temperature) |
+------------------------------+
| 47.47928994082838            |
+------------------------------+
```

***

### Role type, custom role or system role

```
STDDEV (NUMERICS)
```

Field Name

Create stream table

Configure of tenant in json

Optional. The WITH clause contains one or more commonly used expressions CTE (Common Table Expression). CTE acts as a temporary table in the current running environment, which you can refer to in subsequent queries.The rules for using CTE are as follows：

```
SELECT STDDEV(temperature) FROM air;
```

```
+-------------------------+
| STDDEV(air.temperature) |
+-------------------------+
| 7.1718824192744135      |
+-------------------------+
```

***

### **Function**： Return approximations of different input values (HyperLogLog).

#### **Function**： Return the average value of the selected element.

```
STDEN_POPUP_POPUP_TITLE
```

Field Name

Table

Compares expressions for greater than or equal to

The IN operator determines whether any value in the list is equal to the expression.

```
SELECT STDDEV_POP(temperature) FROM air;
```

```
+----------------------------+
| STDDEVPOP(air.temperature) |
+----------------------------+
| 6.890521746633442          |
+----------------------------+
```

***

### **COVAR | COVAR_SAMP**

#### **Function**： Return the minimum value of the selected element.

```
COVAR (NUMERICS, NUMERICS)
```

Field Name

CREATE STREAM TABLE

Time that SQL costs

Compression algorithm that the column uses

```
SELECT COVAR(temperature, pressure) FROM air;
```

```
+----- +
| COVARIANCE (air.temperature,air.pressure) |
+----------+
| 5.121794871794841 |
+---------+ + + +
```

***

### **COVAR_POP**

#### **Function**：Returns the bit length of string data or the bit size of binary data.

```
COVAR_POPUP_(NUMERICS, NUMERICS)
```

Field Name

User writes times

Time Functions

\---- Prepare dataDROP DATABASE IF EXISTS gapfill_db;
CREATE DATABASE gapfill_db WITH TTL '1000000d';
CREATE TABLE gapfill_db.m2(f0 BIGINT, f1 DOUBLE, TAGS(t0, t1, t2));INSERT gapfill_db.m2(TIME, f0, f1, t0, t1)
VALUES
('1999-12-31 00:00:00.000', 111, 444, 'tag11', 'tag21'),
('1999-12-31 00:00:00.005', 222, 333, 'tag12', 'tag22'),
('1999-12-31 00:00:00.010', 333, 222, 'tag13', 'tag23'),
('1999-12-31 00:00:00.015', 444, 111, 'tag14', 'tag24'),
('1999-12-31 00:00:00.020', 222, 555, 'tag11', 'tag21'),
('1999-12-31 00:00:00.025', 333, 444, 'tag12', 'tag22'),
('1999-12-31 00:00:00.030', 444, 333, 'tag13', 'tag23'),
('1999-12-31 00:00:00.035', 555, 222, 'tag14', 'tag24');

```
SELECT COVAR_POP(temperature, pressure) FROM air;
```

```
+---------------------------------------------+
| COVARIANCEPOP(air.temperature,air.pressure) |
+---------------------------------------------+
| -4.727810650887546                          |
+---------------------------------------------+
```

***

### **CORR**

#### **Parameter Type**：Numeric type or STRING or TIMESTAMP.

```
COR** (NUMERICS, NUMERICS)
```

Percision of database

ORDER BY Clause

Time Interval

CREATE TABLE air_visibility (
visibility DOUBLE,
TAGS(station)
);

```sql
SELECT CORR (temperature, pressure) FROM air;
```

```
+----- +
| CORRELATION(air.temperature,air.pressure) |
+------------+
| 0.075576766017 |
+---+ + +
```

### offset type is BIGINT. When offset is negative, the values are returned from the first offset lines, defaults to 1.

### **APPROX_DISTINCT**

#### **Function**： Returns the last value in the current window.

```
APPROX_DISTINCT(x)
```

ORDER BY Clause

Compare expressions for greater than

Time the data file saved

`RANK`, `DENSE_RANK`, `ROW_NUMBER` need ORDER BY Clause.

```sql
SELECT APPROX_DISTINCT(station) FROM air;
```

```
+---------- +
| APPROXDISTINCT(air.station) |
+------------
| 2 |
+-------------
```

***

### **APPROX_PERCENTILE_CONT**

#### **Function**： Returns the first value in a set of values, usually an ordered set.

```
APPROX_PERCENTILE_CONT(x, p.  
```

Field Name

Field Name

Analysis Window Functions

Disk size occupied by the vnode

```sql
SELECT APPROX_PERCENTILE_CONT(temperature, 0.1) FROM ;
```

```
+---------------------------+
| APPROXPERCENTILECONTILET(air.temperature, Float64(0.1)) |
+----------+
| 60.4 |
+-------------
```

***

### **APPROX_PERCENTILE_CONT_WITH_WEIGHT**

#### **Return Type**：TIMESTAMP. The precision depends on the parameter. If parameter type is BIGINT, it returns a nanosecond TIMESTAMP.

```
APPROX_PERCENTILE_CONT_WITH_WEIGHT(x, w, p)  
```

Field Name

ID of SQL
Field Name

Window Functions

Disk size occupied by the vnode

```sql
SELECT APPROX_PERCENTILE_CONT_WITH_WEIGHT (temperature,2, 0.1) FROM air;
```

```
+-----------------------------------------------------------------------+
| APPROXPERCENTILECONTWITHWEIGHT(air.temperature,Int64(2),Float64(0.1)) |
+-----------------------------------------------------------------------+
| 54.35                                                                 |
+-----------------------------------------------------------------------+
```

***

### **APPROX_MEDIAN** (NUMERICS)

#### **Function**：Convert to a millisecond-level timestamp.

```
APPROX_MEDIAN (NUMERICS)
```

Database name of the table

Create Table

Functions

After the keyword `SELECT`, you can use `DISTINCT`to remove duplicate fields and return only the values after duplicate removal. Using ALL returns all duplicate values in the field. When this option is not specified, the default value is `ALL`。

```sql
SELECT APPROX_MEDIAN(temperature) FROM air;
```

```
+-------- +
| APPROXMEDIAN(air.temperature) |
+------------
| 70 |
+---------------------------------------------
```

[//]: # "----------------"

[//]: # "### **GROUPING**(x)"

[//]: # "    GROUPING(x)"

[//]: # "Time of writes"

[//]: # "Tenant name of the table"

[//]: # "Z represents zero time zone"

### **SAMPLE**

#### **Function**：Return the absolute value of x.

```
SAMPLE(<column_key>, <N>
```

`BETWEEN AND` Expression

INSERT INTO STREAM TABLE

- `INTERVAL '0.5 MINUTE'` Half a minute
- Window functions can only appear in SELECT statements.

Import Data

Note: `BETWEEN x AND y` lists the numbers between x and y, including x and y

```sql
Select sample(visibility, 5) from air;
```

```
+--------------------------------------+
| sample(air.visibility,Int64(5))      |
+--------------------------------------+
| [65.0, 74.0, 76.0, 77.0, 72.0, 77.0] |
+--------------------------------------+
```

## **Return Type**： Microsecond-level TIMESTAMP

### Insert Query Results (INSERT SELECT)

### **abs(x)**

Database name

Tenant name of the table

Database

The expression column in the WEHER clause can only be the tag column or the time column, and the expression in the ORDER BY clause can only be the key.

```sql
SELECT abs(-1);
```

```
+-----+
| abs (Int64(-1)) |
+---+
| 1 |
+--------+ + +
```

***

### **acos(x)**

Database name of the table

You can use `DESCRIBE TABLE` to view the table structure.

Functions

function([...expr] ) OVER ([PARTITION BY expr] [ORDER BY expr] [window_frame]);function: {aggregate_function | analytic_function| aggregate_function}window_frame: { frame_mode frame_start |
frame_mode BETWEEN frame_start AND frame_end } }
frame_mode: {RANGE | ROWS}frame_start: {UNBOUNDED PRECEDING | offset_start PRECEDING | CURRENT ROW | offset_start FOLLOWING }frame_end: {offset_stop PRECEDING | CURRENT ROW | offset_stop FOLLOWING | UNBOUNDED FOLLOWING}

```sql
SELECT acos(3);
```

```
+----- +
| acos (Int64(3)) |
+---+
| NaN |
+----------+ + +
```

```sql
SELECT acos (0.5);
```

```
+----- +
| acos (Float64(0.5)) |
+-----------+
| 1.0471975511965976 |
+----------+ + +
```

***

### **asin(x)**

Field Name

Table name

Operator

You can use `CREATE TABLE`  to create tables

```sql
SELECT asin (0.5);
```

```
+----- +
| asin (Float64(0.5)) |
+-----------+
| 0.5235987755982988 |
+----------+ +
```

```sql
SELECT asin(5);
```

```
+------+
| asin (Int64(5)) |
+---+
| NaN |
+----------+ + +
```

***

### **atan(x)**

Database name

Table name

Operator

`INTERVAL '1 DAY 1'` One day and one second

```sql
SELECT atan(5);
```

```
+----- +
| atan (Int64(5)) |
+--------+
| 1.373400766945016 |
+---+ + + +
```

***

### **atan2(y,x)**

Content of SQL

Create source table

Comparing expressions for equality

offset type is BIGINT. When offset is negative, the values are returned from the last offset lines, defaults to 1.

```sql
SELECT atan2(10,2);
```

```
+-------------- +
| atan2(Int64(10),Int64(2)) |
+--------------------+
| 1.3340000 |
+------------------------------------------+ + +
```

***

### **ceil(x)**

The type of default should be the consistent with that of expr, defaults to NULL.

Create source table

Window Function List

`OFFSET`can be used with the`LIMIT`statement to specify the number of lines to skip.The format is `LIMIT n OFFSET m`，or it can be abbreviated as LIMIT n, m. LIMIT n controls the output of n rows of data, and OFFSET m indicates the number of rows skipped before starting to return data. OFFSET 0 has the same effect as omitting the OFFSET clause.

```sql
SELECT ceil (1.6);
```

```
+----- +
| ceil (Float64(1.6)) |
+-----------
| 2 |
+---+ -+ -+ + +
```

***

### **floor(x)**

The type of default should be the consistent with that of expr, defaults to NULL.

Field Name

The `CASE WHEN` expression is used when the expression needs different values depending on the situation.

Insert Multiple Records

```sql
SELECT loor (-3.1);
```

```
+----------------------+
| floor(Float64(-3.1)) |
+----------------------+
| -4                   |
+----------------------+
```

***

### **cos(x)**

Database name

Field Name

Aggregate Function

If the subexpression is null, the whole expression is false

```sql
SELECT cos(1);
```

```
+----- +
| cos(Int64(1)) |
+---------------
| 0.5403023058681398 |
+---+ + +
```

***

### **sin(x)**

source and origin type are TIMESTAMP.

Field Name

Aggregate Function

time_window(time, window_duration, slide_duration) the window is:

```sql
SELECT sin(5);
```

```
+------- +
| sin(Int64(5)) |
+---------------
| -0.9589242746631385 |
+-------- + +
```

***

### **exp(x)**

Database name

Field Name

Field Name

The syntax is the same as [DROP TABLE](#drop-table)

```sql
SELECT exp(1);
```

```
+---+
| exp (Int64(1)) |
+--------------
| 2.71828182845905 |
+---+ + +
```

***

### **ln(x)**

Field Name

Field Name

Time of writes

`INTERVAL '0.5 MONTH'` Half a month(15 days)

```sql
SELECT ln (2.718281828459045);
```

```
+---------+
| ln (Float64 (2.7182818281828459045)) |
+--+
| 1|
+---+ + + + + + + + + +
```

***

### **log(x) | log10(x)**

The following data types can't be stored directly, but can appear in SQL expressions.

Insert One Record

Time of writes

"YES" if the column may contain NULL, "NO" otherwise

```sql
SELECT log(10);
```

```
+------+
| logo (Int64(10)) |
+---+
| 1 |
+----------+ +
```

```sql
SELECT log10(10);
```

```
+------+
| logo (Int64(10)) |
+---+
| 1 |
+----------+ +
```

***

### **log2(x)**

Data Query

Time of writes

Time of writes

COUNT(tag) and COUNT(DISTINCT tag) are equivalent.

```sql
SELECT log2(4);
```

```
+----- +
| log2 (Int64(4)) |
+---+
| 2 |
+----------+ + +
```

***

### **power(x,y) | power (x,y)**

SQL Reference

SELECT Limitation

Database name

If the subexpression is null, the whole expression is true

```sql
SELECT power (2,3);
```

```
+----------- +
| power (Int64(2), Int64(3)) |
+--------------------+
| 8|
+-----------------------------------------------------------+ +
```

***

### **round(x)**

Database name

Database name

Database name

The window satisfies that: start <= time < end

```sql
SELECT round (3.5);
```

```
+----- +
| round (Float64(3.5)) |
+---, -+
| 4 |
+----+ + -+ + -+ + +
```

***

### **sign(x)**

Example

Database name

Unary Operator

`INTERVAL '1 MONTH'` One month(30 days)

```sql
SELECT signum (-3);
```

```
+----- +
| signum (Int64(-3)) |
+-------+
| -1 |
+-----------+ -+ +
```

***

### **sqrt(x)**

Total write traffic size

SQL Reference

Description

Include [Aggregate functions](#aggregate-function).

```sql
SELECT sqrt(4);
```

```
+------+
| sqrt (Int64(4)) |
+------+
| 2 |
+--------+ +
```

***

### **tan(x)**

Column name

Description

Syntax

ID of data node

```sql
SELECT tan(1) ;
```

```
+----- +
| tans (Int64(1))|
+--------------+
| 1.55740772465400002 |
+--+ +
```

***

### **trunc(x)**

Data type of the column

Description

ID of data node

ID of data node

```sql
SELECT trunc(-3.9);
```

```
+----------------------+
| trunc(Float64(-3.9)) |
+----------------------+
| -3                   |
+----------------------+
```

***

### **struct**

#### **Function**:  Rounded to the nearest whole number.

```
struct(expr1 [, ...]) 
```

Binary Operator

Description

Other Data Types

***

### Type of permission granted, READ/WRITE/ALL

### **coalesce**

#### **Function**: Return e to the x power.

```
coalesce (expr[,..exp])
```

Table typeDescriptionWhen retrieving data for display it is commonly used to replace default values with empty values.

```
返回与正则表达式匹配的项
```

Description

ID of data node

```sql
SELECT coalesce(temperature, null, station) FROM air;
```

```
+--------------------------------------------+
| coalesce(air.temperature,NULL,air.station) |
+--------------------------------------------+
| 69.0                                       |
| 78.0                                       |
| 62.0                                       |
| 79.0                                       |
| 53.0                                       |
| 72.0                                       |
| 71.0                                       |
| 69.0                                       |
| 80.0                                       |
| 74.0                                       |
| 70.0                                       |
| 70.0                                       |
| 70.0                                       |
+--------------------------------------------+
```

***

### **nullif**

#### **Note**：`CAST (BIGINT AS TIMESTAMP)`is a timestamp converted to nanosecond, as follows

```
nullif (expr1, expr2) 
```

Schema Definition

ID of data node

Schema Definition

ID of data node

```sql
SELECT nullif(temperature, 70) FROM air;
```

```
+-----------------------------------+
| nullif(air.temperature,Int64(70)) |
+-----------------------------------+
| 69                                |
| 78                                |
| 62                                |
| 79                                |
| 53                                |
| 72                                |
| 71                                |
| 69                                |
| 80                                |
| 74                                |
|                                   |
|                                   |
|                                   |
+-----------------------------------+
```

***

### `INTERVAL '1 HOUR'` One hour

[//]: # "### **Array**"

[//]: # "    Create array"

### **ascii**

#### **Function**：Return the byte length of string data.

```
ascii(str) 
```

Describe Table

ID of data node

ID of data node

ID of data node

```sql
SELECT ascii ('abc');
```

```
+------+
| ascii (Utf8("a") |
+---, --+
| 97 |
+----------+ -+ +
```

```sql
SELECT ascii ('a');
```

```
+------+
| ascii (Utf8("a") |
+---, --+
| 97 |
+----------+ -+ +
```

***

### **bit_length**

#### **Function**：Convert to a second-level timestamp.

```
bit_length(str) 
```

Schema Definition

ID of data node

Syntax

`time_column` is Timestamp.

```sql
SELECT bit_length('abc');
```

```
+------------------------+
| bitlength(Utf8("abc")) |
+------------------------+
| 24                     |
+------------------------+
```

***

### **btrim**

#### **Function**： Returns the expression value of the specified row of the window frame relative to the first row of the window.

```
btrim (string [, matching_string]) 
```

Example

t is equivalent to the following statement.

Null Value

T represents interval, which can only be replaced by space

```sql
SELECT btrim('abc ');
```

```
+------------------------------------- +
| btrim (Utf8(" abc') |
+-----------------+
|
+-------------------------+
```

```sql
SELECT btrim ('111abc111', '1');
```

```
+-------- ----- +
| btrim (Utf8("111abc111"), Utf8("1")) |
+---+
| abc |
+-----------------------+ 
 | format@@3 +-------+ + + +
```

***

### **trim**

#### **Parameter Type**：Numeric type or STRING or TIMESTAMP

```
trim(str) 
```

Example

Alias Column Expression

Schema definition

***

### **char_length | charter_length**

#### **Return Type**：Millisecond-level TIMESTAMP

```
char@@_length(expr) 
```

Example

Example

Syntax

TIMESTAMP constant syntax

```sql
SELECT char_length('hello');
```

```
+-------------------------------+
| characterlength(Utf8("你好"))  |
+-------------------------------+
| 2                             |
+-------------------------------+
```

***

### **chr**

#### **Function**：Return a random value between 0 and 1.

```
chr(expr) 
```

Schema definition

Example

Description

`INTERVAL '1 WEEK'` One week

```sql
SELECT chr (20005);
```

```
+---+
| chr (Int64(2000)) |
+-----------
|
+-------+ -+ + + +
```

***

### field type is STRING, only one of （'year', 'quarter', 'month', 'week', 'day', 'doy', 'dow', 'hour', 'minute', 'second'）

#### **Function**：Extract partial dates from timestamps or intervals.

```
Contraat (expr1, expr2 [, ...exp]) 
```

Schema definition

Example

Description

UTF-8 Encoded String

```sql
SELECT consent ('a', 'b', 'c');
```

```
+---------------------------------------+
| concat(Utf8("a"),Utf8("b"),Utf8("c")) |
+---------------------------------------+
| abc                                   |
+---------------------------------------+
```

***

### **concili_ws**

#### **Function**：把有序的数据集合平均分配到n个桶中,将桶号分配给每一行。

```
Concat_ws(sep, expr1 [, ...]) 
```

Example

`INTERVAL '1 DAY'` One day

Schema definition

`INTERVAL '1 SECONDE'` One second

```sql
SELECT Concat_ws('', 'a', 'b', 'c');
```

```
+-------- ----------- +
| concrete parator (Utf8(" "), Utf8("a"), Utf8("b"), Utf8("c"), Utf8("),Utf8("c") |
+----------------------------------+
| a b c |
+---, format@@3 +--------
```

***

### **initcap**

#### **Function**： Convert a decimal number to a hexadecimal representation.

```
initcap(expr) 
```

Data Type

Description

Syntax

This page only shows`INSERT`related syntax

```sql
SELECT initcap('hello world');
```

```
+------------------------------+
| initcap(Utf8("hello world")) |
+------------------------------+
| Hello World                  |
+------------------------------+
```

***

### **left**

#### **Function**：Returns str, in which the leading characters in trimstr are deleted. The default trimestr is blank character.

```
left(str, len) 
```

Schema Definition

Description

Schema Definition

`INTERVAL '1 MILLISECONDS'` One millisecond

```sql
SELECT left('abcde', 3);
```

```
+-------- +
| left(Utf8("abcde"), Int64(3)) |
+---+
| abc |
+______
```

***

### **lpad**

#### **Function**：Return the character at the provided UTF-16 code.

```
lpad(expr, len [, pad] 
```

Schema Definition

Description

Schema Definition

Format

INTERVAL Constant Syntax

```sql
SELECT lpad('abc', 10, '1');
```

```
+-------- +
| lpad (Utf8("abc"), Int64(10),Utf8("1"))|
+---+
| 1111111abc |
+----+ + --+ + +
```

***

### **rpad**

#### **Parameter Type**：Expr type is STRING, n type is BIGINT.

```
rpad(expr, len [, pad] 
```

Schema Definition

Description

Schema Definition

column_key：Arbitrary Type

```sql
SELECT rpad ('aaaa', 10, 'b');
```

```
+---------- +
| rpad (Utf8("aaa"), Int64(10),Utf8("b"))|
+----------+
| aabbbbbbb |
+---+ + + + + +
```

***

### **lower**

#### **Function**：Return the length of the specified string in characters.

```
lower(expr) 
```

Schema Definition

Description

Description

`INTERVAL '1 MINUTE'` One minute

```sql
SELECT lower('ABC');
```

```
+----- +
| lower(Utf8("ABC") |
+---------+
| abc |
+---------+ + -+ + +
```

***

### **upper**

#### **Function**:   Calculate sha256 hash value of the string str.

```
upper(expr)
```

Description

Description

Description

***

### **ltrim**

#### **Function**： Return the covariance of the sample.

```
ltrim(str[, trimstr]) 
```

DescriptionDefault trimester is empty

Description

Description

Parameters Description

```sql
SELECT ltrim('abc');
```

```
+-----------------------+
| ltrim(Utf8("   abc")) |
+-----------------------+
| abc                   |
+-----------------------+
```

***

### **md5**

#### **Parameter Type**：str, delim type is STRING, partNum type is BIGINT

```
md5 (expr) 
```

Description

- (positive), - (negative), + (plus), + (series), - (minus)

Integer

IN only supports a list of constants, not a list of expressions.

```sql
SELECT md5 ('abc');
```

```
+----------------------------------+
| md5(Utf8("abc"))                 |
+----------------------------------+
| 900150983cd24fb0d6963f7d28e17f72 |
+----------------------------------+
```

***

### **octet_length**

#### **Function**:  Signs of parameter (-1,0,+1).

```
octet_length(expr) 
```

Boolean Type

`INTERVAL '1'` One second

You can refer to [function](#functions).

String type expression concatenation

```sql
SELECT octet_length('hello');
```

```
+-------- +
| octetlength (Utf8("hello") |
+------------+
| 6 |
+---------------------------------------------------------------------------------------------------+ +
```

***

### **random**

#### **Function**：Calculate sha224 hash value of the string str.

```
random ( [seed] 
```

Data Types

`CASE WHEN` Expression

Unsigned Integer

**Function**： The function takes a single argument, which must be an expression for the dimension column specified in the expression list extended BY the ROLLUP, CUBE, or GROUPING SETS of the GROUP BY clause.

```sql
SELECT random();
```

```
+---------------------+
| random()            |
+---------------------+
| 0.37577771377596325 |
+---------------------+
```

[//]: # "### **Regexp_Replace**"

[//]: # "    regexp_replace(str, regexp, rep [, position] ) "

[//]: # "Data Type"

[//]: # "SHOW {DATABASES | TABLES}"

[//]: # "operator include `=`, `!=`."

***

### **repeat**

#### **Function**：Returns the expr values of the offset rows after the current row in the partition.

```
repeat(expr, n) 
```

Data Type

!()

\=、\&gt=、<=、<\&gt、!=、\&gt、<（Comparison operator)

expr type is TIMESTAMP.

```sql
SELECT recpeat('a', 5);
```

```
+-------- +
| repeat(Utf8("a"), Int64(5))|
+------------+
| aaaaaaaa |
+-------------------------------------
```

***

### **replace**

#### **Function**：Return the arccosine of x.

```
place(str, search, replace) 
```

Numeric type

COUNT(_) and COUNT(literal value) are equivalent, and if the sql projection contains only '_/literal value', the sql is rewritten as COUNT(time).

Numeric type expressions add

**Function**：If expr1 is equal to expr2, NULL is returned; Otherwise, expr1 is returned.

```sql
SELECT place ('aaa', 'a', 'b');
```

```
+-------- +
| replacement (Utf8("aaa"), Utf8("a"), Utf8("a"), Utf8("a"), Utf8("b")) |
+------------+
| bbb |
+----------+ + + +
```

***

### **reverse**

#### **Function**:  Calculate sha384 hash value of the string str.

```
reverse (expr) 
```

Data Type

Number type expressions are subtracted

Number type expressions divide

Function Types

```sql
SELECT reverse('hello');
```

```
+-----------------------+
| reverse(Utf8("你好")) |
+-----------------------+
| 好你                  |
+-----------------------+
```

***

### **right**

#### **Function**： Calculate sha384 hash value of the string str.

```
right (str, len) 
```

Data Type

**Function**：Return the MD5 128 bit checksum of expr as a hexadecimal string.

N：INTEGER

**Function**：Returns the expr values of the offset rows before the current row in the partition.

```sql
 SELECT rights ('aabbb', 3);
```

```
+-------- +
| right (Utf8("aaabb"), Int64(3)) |
+---+
| bbb |
+---+ + + + + + +
```

***

### **digest**

#### **Function**： Return an array consisting of all the values of the selected element. The element types must be the same.

```
digest(expr, algorithm)
```

Data Type

**con\`\`cat**

**VAR_POP**

Integer type expressions are modulo

Array Type

```sql
SELECT digest ('abc', 'md5');
```

```
+-------------------- -+
| digest(Utf8("abc"), Utf8("m5")) |
+---+
| 900150983cd24fb0d6963f7d28e17f72 |
+---+ +
```

***

### **rtrim**

#### **Function**:  Convert the first character in str to its ASCII code and return it.

```
rtrim ( str [, trimstr]) 
```

Data Type

\*（plus）、/（division）、%（modular）

**Function**: Base 10 logarithm.

**Function**：Return expr filled with pad on the right. After filling, the length of the whole string is len.

```sql
SELECT rtrim ('aabbb', 'b');
```

```
+----------- +
| rtrim (Utf8("aabb"),Utf8("b"))|
+---+
| aaaa |
+---------+ + + + + +
```

***

### **sha224**

#### **Return Type**：Second-level TIMESTAMP

```
sha224(str)
```

Data Type

expr type is TIMESTAMP

**Function**：Return expr filled with pad on the left. After filling, the length of the whole string is len.

**Function**： If expr starts with startExpr, it returns true.

```sql
 SELECT sha224 ('abc');
```

```
+----- +
| sha224 (Utf8("abc")) |
+-----------+
| 23097d223405d82a477bda2a2aadbce4bda0b3f7e3f7e36c9da7 |
+------------------------------------------------------------
```

***

### **sha256**

#### **Function**：Remove blank characters at the begin and end of str.

```
sha256(str)
```

Data Type

Numeric type

**Function**：Joins two or more expressions and returns the generated expression.

**Parameter Type**：field type is STRING, only one of （'year', 'quarter', 'month', 'week', 'day', 'doy', 'dow', 'hour', 'minute', 'second'）

```sql
SELECT sha256('abc');
```

```
+------------------------------------------------------------------+
| sha256(Utf8("abc"))                                              |
+------------------------------------------------------------------+
| ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad |
+------------------------------------------------------------------+
```

***

### **sha384**

#### **Return Type**： Unix time in second-level.

```
sha384(str)
```

Data Type

**Function**: Base 2 logarithm.

**Function**： Return the sum calculated from the selected element

Data Type

```sql
SELECT sha384 ('abc');
```

```
+--------------------------------------------------------------------------------------------------+
| sha384(Utf8("abc"))                                                                              |
+--------------------------------------------------------------------------------------------------+
| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |
+--------------------------------------------------------------------------------------------------+
```

***

### **sha512**

#### **Return Type**：First non null parameter type

```
sha512(str)
```

Data Type

**Note**：Function struct is not perfect at present.

**Function**： Return the substring of expr (starting from pos, length len).

***

### **split_part**

#### **Function**：Return the arctangent of x.

```
split_part(str, delim, n) 
```

Data Type

**MIN**

**MAX**

Data Type

```sql
SELECT split_part('abc|def|ghi', '|', 2);
```

```
+-------- +
| splitpart(Utf8("abc|def|ghi"), Utf8("|"|"), Int64(2)) |
+------------- +
| def |
+-------------
```

***

### **starts_with**

#### **Parameter Type**：x is numeric type, p is DOUBLE type

```
starts_with(expr, startExpr) 
```

Data Type

**Function**： Return an expr, where all characters in from are replaced by characters in to.

**Function**：Capitalize the first letter of each word in the parameter.

Data Type

```sql
SELECT starts_with('abcdefg', 'abc');
```

```
+-----------------------------------------+
| startswith(Utf8("abcdefg"),Utf8("abc")) |
+-----------------------------------------+
| true                                    |
+-----------------------------------------+
```

***

### **strpos**

#### **Function**：Return the leftmost len characters in str.

```
strpos(str, subst) 
```

Data Type

**Function**：Return the rightmost len characters in the string str.

**Differences between HAVING and WHERE**：

Data Type

```sql
SELECT strpos('abcdef', 'def');
```

```
+----------------- +
| strpos(Utf8("abcdef"), Utf8("def") |
+----+
| 4 |
+-------------+ + +
```

***

### **substr**

#### **Return Type**：Consistent with function parameter type.

```
substr(expr, pos [, len]) 
```

Data Type

**ARRAY_AGG**

**Function**:  Natural logarithm.

Data Type

```sql
SELECT substr('abcdef', 4, 3);
```

```
+---------+
| substr(Utf8("abcdef"), Int64(4), Int64(3)) |
+------+
| de|
+----------+ +
```

***

### **to_hex**

#### **Return Type**：Consistent with function parameter type.

```
to_hex(value)
```

**Notice**

**Function**：Return a string that repeats expr n times.

**Function**： Calculate the variance of a given sample

**Function**：Return the rightmost len characters in the string str.

```sql
SELECT to_hex(100);
```

```
+-------- +
| tzm (Int64(100)) |
+-----------+
| 64 |
+-------------+ + +
```

***

### **translate**

#### **Parameter Type**：str is STRING type, len is BIGINT type

```
translate(expr, from,to) 
```

**AVG**

**Function**:  Return the sine of x.

**Function**:  Square root of x.

**Parameter Type**：expr type is any type, ignore_ nulls type is BOOLEAN, defaults to false.

```sql
SELECT translate('aabbb', 'bbb', 'cc');
```

```
+-------- +
| translate(Utf8("aabb"), Utf8("bbb"), Utf8("bbb"), Utf8("cc")) |
+----------------------------------+
| aaccc |
+----------------------------------------------------------------------------------------------------------------------------------+ 

```

***

### **Return Type**：Consistent with parameter type.

### **date_part**

#### **Return Type**：Consistent with parameter type.

```
date_part(field, expr) 
```

**VAR | VAR_SAMP**

**Function**：Return the arctangent of y/x.

**Common Aggregate Functions**

**Note：**

**Show Tables of Current Database**

**Parameter Type**：expr type is any type, ignore_ nulls type is BOOLEAN, defaults to false.

```sql
SELECT date_part('hour', TIMESTAMP '2022-11-21T09:18:17');
```

```
+-------------- +
| datepart(Utf8("hour"), Utf8("2022-11-21T09:18:17") |
+----------------------------------------------------------+
| 9 |
+---------------------------------------------------------------------
```

***

### **date_trunc**

#### **Function**:  Return the arcsine of x.

```
date_trunc(field, expr) 
```

**DESCRIBE**

**Complex Grouping Operation**

**Drop Table**

**Parameter Type**：expr, pad is STRING type, len is BIGINT type.

```sql
SELECT date_trunc('month', TIMESTAMP '2022-11-21T09:18:17');
```

```
+----------- +
| datecrunc(Utf8("month"), Utf8("2022-11-21T09:18:17") |
+-------------+
| 20-11-01T00:00:00 |
+-------------+
```

***

### **date_bin**

#### **Function**：Round to zero.

```
date_bin(interval, source, origin)
```

**SELECT Clause**

**Function**: x to the y power.

**Create the database**

**Approximate Aggregate Functions**

**Create External Table**

**Parameter Type**：expr, pad type is STRING, len type is BIGINT

```sql
SELECT date_bin (INTERVAL '1' DAY, TIMESTAMP '2022-11-21T09:10:24', TIMESTAMP '2022-11-01T00:00:00');
```

```
+------------------------------------------------------------------------------------------------+
| datebin(IntervalDayTime("4294967296"),Utf8("2022-11-21T09:10:24"),Utf8("2022-11-01T00:00:00")) |
+------------------------------------------------------------------------------------------------+
| 2022-11-21T00:00:00                                                                            |
+------------------------------------------------------------------------------------------------+
```

***

### **to_timestamp**

#### **Function**:   Tangent value of x.

```
to_timestamp(expr) 
```

**STDDEV | STDDEV_SAMP**

**Function**:  Return the cosine of x.

**Join Clause**

**Parameter Type**：expr type is STRING, pos, len type is BIGINT

```sql
SELECT to_timestamp('1970-01-01T00:00:00');
```

```
+---------+
| totimestamp(Utf8("1970-01-01T00:00:00")) |
+-----------+
| 1970-01-01T00:00:00 | format@@3 +---+ + 
 | 1970-01-01T00:00:00 |
+-----------+
```

```sql
SELECT to_timestamp(1);
```

```
+-------------------------------+
| totimestamp(Int64(1))         |
+-------------------------------+
| 1970-01-01T00:00:00.000000001 |
+-------------------------------+
```

***

### **to_timestamp_millennium**

#### **Parameter Type**：Numeric type.

```
to_timestamp_millis(expr) 
```

### **Regexp_Match**

**SUM**

**WITH Clause**

**Parameter Type**：expr1 and expr2 are numeric expressions with column values

```sql
SELECT to_timestamp_millis ('1970-01-01T00:00:00.00301');
```

```
+------------------------------------------------------+
| totimestampmillis(Utf8("1970-01-01T00:00:00.00301")) |
+------------------------------------------------------+
| 1970-01-01T00:00:00.003                              |
+------------------------------------------------------+
```

```sql
SELECT to_timestamp_millis(1) ;
```

```
+-----------------------------+
| totimestampmillis(Int64(1)) |
+-----------------------------+
| 1970-01-01T00:00:00.001     |
+-----------------------------+
```

***

### **to_timestamp_micros**

#### **Parameter Type**：Numeric type.

```
to_timestamp_micro(expr) 
```

**EXPLAIN**

**Mathematical Functions**

**UNION Clause**

**Parameter Type**：expr and algorithm are both STRING

```sql
SELECT to_timestamp_micros(1)
```

```
+-----------------------------+
| totimestampmicros(Int64(1)) |
+-----------------------------+
| 1970-01-01T00:00:00.000001  |
+-----------------------------+
```

***

### **to_timestamp_seconds**

#### **Switch to the specified database**

```
to_timestamp_seconds(expr) 
```

**Parameter Type**：expr type is any type, number type is BIGINT.

**Use Database**

**Note**

**Return Type**：The type of expr1 or NULL

```
SELECT to_timestamp_seconds(1);
```

```
+------------------------------+
| totimestampseconds(Int64(1)) |
+------------------------------+
| 1970-01-01T00:00:01          |
+------------------------------+
```

***

### **from_unixtime**

#### **Parameter Type**：BIGINT or STRING

```
from_unixtime (unixTime) 
```

**Describe Database Parameters**

**Return Type**：Consistent with expr.

**Statistical Aggregate Functions**

**Return Type**：Array of parameter type

```
SELECT from_unixtime(1);
```

```
+------------------------+
| fromunixtime(Int64(1)) |
+------------------------+
| 1970-01-01T00:00:01    |
+------------------------+
```

***

### **now**

#### **Parameter Type**：BIGINT or STRING

```
now()
```

**Parameter Type**：expr type is any type.

**Alter Database Parameters**

**Function**：Return uppercase string.

```
SELECT now();
```

```
+----------------------------------+
| now()                            |
+----------------------------------+
| 2022-11-21T04:44:19.742107+00:00 |
+----------------------------------+
```

### **time_window**

#### **Parameter Type**：VALUE TYPE

```sql
time_window(time_expr, window_duration[, slide_duration])
```

**SHOW**

**Examples**

**Import data**

**Example**

| **Function**：Return lowercase string. | **Parameter Type**：STRING or BIGINT       | **Function**： Round up. |
| ------------------------------------- | ----------------------------------------- | ----------------------- |
| 'd'                                   | **Return Type**：Consistent with expr.     | '10d'                   |
| 'h'                                   | **Return Type**：Consistent with expr.     | '10h'                   |
| 'm'                                   | **Return Type**：Consistent with expr.     | '10m'                   |
| 's'                                   | **Return Type**：Consistent with expr.     | '10s'                   |
| 'ms'                                  | **Parameter Type**：expr type is any type. | '10ms'                  |

**Return Type** BIGINT

```sql
start, end
time, time_column + window_duration
time - slide_duration, time + window_duration - slide_duration
time - 2 * slide_duration, time + window_duration - 2 * slide_duration
.
time - n * slide_duration, time + window_duration - n * slide_duration
```

**Return Type：**：Numeric type

**Parameter**：BIGINT or STRING

```sql
CREATE TABLE test(a BIGINT, TAGS(b));
INSERT INTO test(time, a, b) VALUES ('2023-04-23T00:00:00.0000Z', 1, 'b');
SELECT time FROM test;
```

```
+---------------------+
| time                |
+---------------------+
| 2023-04-23T00:00:00 |
+---------------------+
```

```sql
SELECT time_window(time, '3d') FROM test;
```

```
+----------------------------- +
| TIME_WINDOW(test.time,Utf8("3d")) |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| {start: 2023-04-23T00:00:00, end: 2023-04-26T00:00:00} |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 2 | {start: 2023-04-23T00:00:00, end: 2023-04-26T00:00:00} | 
 +--------------------------------------------------------------------------+
```

```sql
SELECT time_window(time, '5d', '3d') FROM test;
```

```
+-------------- +
| TIME_WINDOW(test.time,Utf8("5d"), Utf8("3d") |
+-------------+
| {start: 2023-04-23T00:00:00, end: 2023-04-28T00:00:00} |
| {start: 2023-04-20T00:00:00, end: 2023-04-25T00:00:00} |
+-------------+ + 
```

### **Return Type**：DOUBLE.

### **Parameter Type**：Numeric type

```
**Examples：**
```

### **Alter Table**

#### **Return Type**： DOUBLE

| **Return Type**：TIMESTAMP                                                                        |
| ------------------------------------------------------------------------------------------------ |
| PLAYLIST_NOTIFICATION_POPUP_TITLE |
| PERCENT_RANK                                                                |
| RANK                                                                                             |
| ROW_NUMBER                                                                  |

**Parameter Type**：Numeric type

`RANK`, `DENSE_RANK`, `ROW_NUMBER` specifies window_frame that is invalid

#### **Return Type**：BINARY

See[聚合函数](./sql.md#polymer)

#### **Return Type**：BINARY

| **Return Type**：TIMESTAMP           |
| ----------------------------------- |
| PLAYLIST_TITLE |
| LAG                                 |
| LEAD                                |
| NTH_VALUE      |

### **Parameter Type**：any type

**Return Type**：BOOLEAN

### **Parameter Type**：

**Examples**

### **Parameter Type**：Numeric type

**Return Type**：DOUBLE

**Example**

**Example：**

- **Example**
- **Syntax**
- **Syntax**
- **Syntax**
- **Example**

#### **Parameter Type**：Any type

- **Return Type**：BINARY
- **Return type**：ARRAY

### **Return Type**：BIGINT

**Return Type**：BINARY

### **ROW_NUMBER**

#### **Parameter Type**：Numeric type

```
ROW_NUMBER() OVER([partition_clause] [orderby_clause])
```

**Return Type**：BINARY

**SQL Syntax**

**String Functions**

**Parameter Type**：Numeric type

```sql
SELECT temperature, station, 
       ROW_NUMBER() OVER (PARITON BY station) 
FROM air;
```

```
+-------------+-------------+--------------+
| temperature | station     | ROW_NUMBER() |
+-------------+-------------+--------------+
| 69          | LianYunGang | 1            |
| 80          | LianYunGang | 2            |
| 74          | LianYunGang | 3            |
| 70          | LianYunGang | 4            |
| 70          | LianYunGang | 5            |
| 70          | LianYunGang | 6            |
| 69          | XiaoMaiDao  | 1            |
| 78          | XiaoMaiDao  | 2            |
| 62          | XiaoMaiDao  | 3            |
| 79          | XiaoMaiDao  | 4            |
| 53          | XiaoMaiDao  | 5            |
| 72          | XiaoMaiDao  | 6            |
| 71          | XiaoMaiDao  | 7            |
+-------------+-------------+--------------+
```

***

### **RANK**

#### **Parameter Type**：Numeric type

```
RANK() OVER([partition_clause] [orderby_clause]
```

**Example**

**Explanation**

**Syntax**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       RAK() OVER (PARITION BY station ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+--------+
| station     | temperature | RANK() |
+-------------+-------------+--------+
| LianYunGang | 69          | 1      |
| LianYunGang | 70          | 2      |
| LianYunGang | 70          | 2      |
| LianYunGang | 70          | 2      |
| LianYunGang | 74          | 5      |
| LianYunGang | 80          | 6      |
| XiaoMaiDao  | 53          | 1      |
| XiaoMaiDao  | 62          | 2      |
| XiaoMaiDao  | 69          | 3      |
| XiaoMaiDao  | 71          | 4      |
| XiaoMaiDao  | 72          | 5      |
| XiaoMaiDao  | 78          | 6      |
| XiaoMaiDao  | 79          | 7      |
+-------------+-------------+--------+
```

***

### **DENSE_RANK**

#### **Parameter Type**：Numeric type

```
DENSE_RANK() OVER([partition_clause] [orderby_clause]
```

**Syntax**

**Explanation**

**Syntax**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       DENSE_RANK() OVER (PARITON BY ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+--------------+
| station     | temperature | DENSE_RANK() |
+-------------+-------------+--------------+
| LianYunGang | 69          | 1            |
| LianYunGang | 70          | 2            |
| LianYunGang | 70          | 2            |
| LianYunGang | 70          | 2            |
| LianYunGang | 74          | 3            |
| LianYunGang | 80          | 4            |
| XiaoMaiDao  | 53          | 1            |
| XiaoMaiDao  | 62          | 2            |
| XiaoMaiDao  | 69          | 3            |
| XiaoMaiDao  | 71          | 4            |
| XiaoMaiDao  | 72          | 5            |
| XiaoMaiDao  | 78          | 6            |
| XiaoMaiDao  | 79          | 7            |
+-------------+-------------+--------------+
```

***

### **PERCENT_RANK**

#### **Parameter Type**：Numeric type

```
PERCENT_RANK() OVER([partition_clause] [orderby_clause])
```

**Return Type**：BIGINT

**Syntax**

**Syntax**

**Parameter Type**：Numeric type

```sql
 SELECT, temperature, 
        PERCENT_RANK() OVER (PARITIAN BY ORDER BY temperature) 
 FROM air;
```

```
+-------------+-------------+---------------------+
| station     | temperature | PERCENT_RANK()      |
+-------------+-------------+---------------------+
| LianYunGang | 69          | 0                   |
| LianYunGang | 70          | 0.2                 |
| LianYunGang | 70          | 0.2                 |
| LianYunGang | 70          | 0.2                 |
| LianYunGang | 74          | 0.8                 |
| LianYunGang | 80          | 1                   |
| XiaoMaiDao  | 53          | 0                   |
| XiaoMaiDao  | 62          | 0.16666666666666666 |
| XiaoMaiDao  | 69          | 0.3333333333333333  |
| XiaoMaiDao  | 71          | 0.5                 |
| XiaoMaiDao  | 72          | 0.6666666666666666  |
| XiaoMaiDao  | 78          | 0.8333333333333334  |
| XiaoMaiDao  | 79          | 1                   |
+-------------+-------------+---------------------+
```

***

### **CUME_DIST**

#### **Parameter Type**：Numeric type

```
CUME_DIST() OVER ([partition_clause] [orderby_clause]
```

**Numeric type**：DOUBLE

**Syntax**

**Syntax**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       CUME_DIST() OVER(PARTITION BY station ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+---------------------+
| station     | temperature | CUME_DIST()         |
+-------------+-------------+---------------------+
| LianYunGang | 69          | 0.16666666666666666 |
| LianYunGang | 70          | 0.6666666666666666  |
| LianYunGang | 70          | 0.6666666666666666  |
| LianYunGang | 70          | 0.6666666666666666  |
| LianYunGang | 74          | 0.8333333333333334  |
| LianYunGang | 80          | 1                   |
| XiaoMaiDao  | 53          | 0.14285714285714285 |
| XiaoMaiDao  | 62          | 0.2857142857142857  |
| XiaoMaiDao  | 69          | 0.42857142857142855 |
| XiaoMaiDao  | 71          | 0.5714285714285714  |
| XiaoMaiDao  | 72          | 0.7142857142857143  |
| XiaoMaiDao  | 78          | 0.8571428571428571  |
| XiaoMaiDao  | 79          | 1                   |
+-------------+-------------+---------------------+
```

[//]: # "----------------"

[//]: #

[//]: # "### **NTILE**"

[//]: #

[//]: # "    ntile(n) over([partition_clause] [order_by_clause]"

[//]: #

[//]: # "**Return Type**：DOUBLE"

[//]: #

[//]: # "**Syntax**"

[//]: #

[//]: # "**Syntax**"

***

### **LAG**

#### **Parameter Type**：Numeric type

```
lag( expr [, offset [, default]) OVER([partition_clause] orderby_clause)
```

**Example**

**Example**

**Syntax**

**Example**

**Example**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       LAG (temperature, 2) OVER (PARITION BY station ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+-------------------------------+
| station     | temperature | LAG(air.temperature,Int64(2)) |
+-------------+-------------+-------------------------------+
| LianYunGang | 69          |                               |
| LianYunGang | 70          |                               |
| LianYunGang | 70          | 69                            |
| LianYunGang | 70          | 70                            |
| LianYunGang | 74          | 70                            |
| LianYunGang | 80          | 70                            |
| XiaoMaiDao  | 53          |                               |
| XiaoMaiDao  | 62          |                               |
| XiaoMaiDao  | 69          | 53                            |
| XiaoMaiDao  | 71          | 62                            |
| XiaoMaiDao  | 72          | 69                            |
| XiaoMaiDao  | 78          | 71                            |
| XiaoMaiDao  | 79          | 72                            |
+-------------+-------------+-------------------------------+
```

***

### **LEAD**

#### **Parameter Type**：Numeric type

```
lead(expr [, offset [, default]) OVER ([partition_clause] orderby_clause)
```

**Example**

**Example**

**Syntax**

**Example**

**Example**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       LEAD (temperature, 2) OVER (PARITON BY station ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+--------------------------------+
| station     | temperature | LEAD(air.temperature,Int64(2)) |
+-------------+-------------+--------------------------------+
| LianYunGang | 69          | 70                             |
| LianYunGang | 70          | 70                             |
| LianYunGang | 70          | 74                             |
| LianYunGang | 70          | 80                             |
| LianYunGang | 74          |                                |
| LianYunGang | 80          |                                |
| XiaoMaiDao  | 53          | 69                             |
| XiaoMaiDao  | 62          | 71                             |
| XiaoMaiDao  | 69          | 72                             |
| XiaoMaiDao  | 71          | 78                             |
| XiaoMaiDao  | 72          | 79                             |
| XiaoMaiDao  | 78          |                                |
| XiaoMaiDao  | 79          |                                |
+-------------+-------------+--------------------------------+
```

***

### **FIRST_VALUE**

#### **Parameter Type**：Numeric type

```
FIRST_VALUE(expr) OVER ([partition_clause] [orderby_clause]
```

**Example**

**Example**

**Example**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       FIRST_VALUE (temperature) OVER (PARITION BY station ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+------------------------------+
| station     | temperature | FIRST_VALUE(air.temperature) |
+-------------+-------------+------------------------------+
| LianYunGang | 69          | 69                           |
| LianYunGang | 70          | 69                           |
| LianYunGang | 70          | 69                           |
| LianYunGang | 70          | 69                           |
| LianYunGang | 74          | 69                           |
| LianYunGang | 80          | 69                           |
| XiaoMaiDao  | 53          | 53                           |
| XiaoMaiDao  | 62          | 53                           |
| XiaoMaiDao  | 69          | 53                           |
| XiaoMaiDao  | 71          | 53                           |
| XiaoMaiDao  | 72          | 53                           |
| XiaoMaiDao  | 78          | 53                           |
| XiaoMaiDao  | 79          | 53                           |
+-------------+-------------+------------------------------+
```

***

### **LAST_VALUE**

#### **Parameter Type**：Numeric type

```
LAST_VALUE(expr) OVER ([partition_clause] [orderby_clause]
```

**Syntax**

**Example**

**Example**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       LAST_VALUE (temperature) OVER (PARITION BY station ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+-----------------------------+
| station     | temperature | LAST_VALUE(air.temperature) |
+-------------+-------------+-----------------------------+
| LianYunGang | 69          | 69                          |
| LianYunGang | 70          | 70                          |
| LianYunGang | 70          | 70                          |
| LianYunGang | 70          | 70                          |
| LianYunGang | 74          | 74                          |
| LianYunGang | 80          | 80                          |
| XiaoMaiDao  | 53          | 53                          |
| XiaoMaiDao  | 62          | 62                          |
| XiaoMaiDao  | 69          | 69                          |
| XiaoMaiDao  | 71          | 71                          |
| XiaoMaiDao  | 72          | 72                          |
| XiaoMaiDao  | 78          | 78                          |
| XiaoMaiDao  | 79          | 79                          |
+-------------+-------------+-----------------------------+
```

***

### **NTH_VALUE**

#### **Parameter Type**：Numeric type

```
NTH_VALUE(expr, number@@0) OVER ([partition_clause] [orderby_clause]
```

**Example**

**Example**

**Example**

**Parameter Type**：Numeric type

```sql
SELECT position, temperature, 
       NTH_VALUE (temperature, 2) OVER (PARITON BY ORDER BY temperature) 
FROM air;
```

```
+-------------+-------------+-------------------------------------+
| station     | temperature | NTH_VALUE(air.temperature,Int64(2)) |
+-------------+-------------+-------------------------------------+
| LianYunGang | 69          |                                     |
| LianYunGang | 70          | 70                                  |
| LianYunGang | 70          | 70                                  |
| LianYunGang | 70          | 70                                  |
| LianYunGang | 74          | 70                                  |
| LianYunGang | 80          | 70                                  |
| XiaoMaiDao  | 53          |                                     |
| XiaoMaiDao  | 62          | 62                                  |
| XiaoMaiDao  | 69          | 62                                  |
| XiaoMaiDao  | 71          | 62                                  |
| XiaoMaiDao  | 72          | 62                                  |
| XiaoMaiDao  | 78          | 62                                  |
| XiaoMaiDao  | 79          | 62                                  |
+-------------+-------------+-------------------------------------+
```

## **Return Type**: STRING

### **Return Type**：BIGINT

In the database, the interpolation is the technology used to process missing values in the data.**Syntax**

### **time_window_gapfill**

**Return Type**：STRING**Example**

**Example\*\*\*\*Return Type**：STRING

#### **Parameter Type**：Numeric type

- time_window_gapfill

```sql
time_window_gapFill (<time column> <window interval>[, <sliding interval>[, <start time>]): <time window struct>
```

#### **Parameter Type**：Numeric type

- interpolate

**Return Type**：BIGINT**Return Type**：BIGINT

Linear interpolation can be used for estimation of consecutive variables, such as filling missing values in time series or interpolating values in spatial data.However, the accuracy and applicability of linear interpolation values depend on the characteristics and actual circumstances of the data.In some cases, data may have non-linear relationships or other more appropriate interpolation methods.Therefore, before applying linear interpolation, careful consideration needs to be given to the nature of the data and the purpose of the interpolation to ensure that the interpolation results are reasonable and accurate.

```sql
interpolate (<expr>)
```

- locf

**Example**

**Syntax**Specific treatment as follows:：

1. **Column Type**：
2. **Example**
3. **Parameter Type**：any type
4. **Example**
5. **Example**

**Syntax**This method assumes that the data after the missing values are the same or very close to the last observed values.

**Syntax\*\*\*\*Syntax**

```sql
locf(<expr>
```

**Parameter Type**：Numeric type

```sql
**Example**
```

```sql
---- interpolate
SELECT
  t0,
  time_window_gapfill(time, interval '10 milliseconds') as minute,
  interpolate(avg(f1))
from gapill_db. 2
where time between timestamp '1999-12-31T00:00:00.000Z' and timestamp '1999-12-31T00:00:00.055Z'
group by t0, minute;
```

```
+-------+-------------------------+-----------------------+
| t0    | minute                  | AVG(gapfill_db.m2.f1) |
+-------+-------------------------+-----------------------+
| tag11 | 1999-12-31T00:00:00     | 444.0                 |
| tag11 | 1999-12-31T00:00:00.010 | 499.5                 |
| tag11 | 1999-12-31T00:00:00.020 | 555.0                 |
| tag11 | 1999-12-31T00:00:00.030 |                       |
| tag11 | 1999-12-31T00:00:00.040 |                       |
| tag11 | 1999-12-31T00:00:00.050 |                       |
| tag12 | 1999-12-31T00:00:00     | 333.0                 |
| tag12 | 1999-12-31T00:00:00.010 | 388.5                 |
| tag12 | 1999-12-31T00:00:00.020 | 444.0                 |
| tag12 | 1999-12-31T00:00:00.030 |                       |
| tag12 | 1999-12-31T00:00:00.040 |                       |
| tag12 | 1999-12-31T00:00:00.050 |                       |
| tag13 | 1999-12-31T00:00:00     |                       |
| tag13 | 1999-12-31T00:00:00.010 | 222.0                 |
| tag13 | 1999-12-31T00:00:00.020 | 277.5                 |
| tag13 | 1999-12-31T00:00:00.030 | 333.0                 |
| tag13 | 1999-12-31T00:00:00.040 |                       |
| tag13 | 1999-12-31T00:00:00.050 |                       |
| tag14 | 1999-12-31T00:00:00     |                       |
| tag14 | 1999-12-31T00:00:00.010 | 111.0                 |
| tag14 | 1999-12-31T00:00:00.020 | 166.5                 |
| tag14 | 1999-12-31T00:00:00.030 | 222.0                 |
| tag14 | 1999-12-31T00:00:00.040 |                       |
| tag14 | 1999-12-31T00:00:00.050 |                       |
+-------+-------------------------+-----------------------+
```

```sql
---- locf
SELECT
  t0,
  time_window_gapfill(time, interval '10 milliseconds') as minute,
  locf(avg(f1))
from gapill_db. 2
where time between timestamp '1999-12-31T00:00:00.000Z' and timestamp '1999-12-31T00:00:00.055Z'
group by t0, minute;
```

```
+-------+-------------------------+-----------------------+
| t0    | minute                  | AVG(gapfill_db.m2.f1) |
+-------+-------------------------+-----------------------+
| tag11 | 1999-12-31T00:00:00     | 444.0                 |
| tag11 | 1999-12-31T00:00:00.010 | 444.0                 |
| tag11 | 1999-12-31T00:00:00.020 | 555.0                 |
| tag11 | 1999-12-31T00:00:00.030 | 555.0                 |
| tag11 | 1999-12-31T00:00:00.040 | 555.0                 |
| tag11 | 1999-12-31T00:00:00.050 | 555.0                 |
| tag12 | 1999-12-31T00:00:00     | 333.0                 |
| tag12 | 1999-12-31T00:00:00.010 | 333.0                 |
| tag12 | 1999-12-31T00:00:00.020 | 444.0                 |
| tag12 | 1999-12-31T00:00:00.030 | 444.0                 |
| tag12 | 1999-12-31T00:00:00.040 | 444.0                 |
| tag12 | 1999-12-31T00:00:00.050 | 444.0                 |
| tag13 | 1999-12-31T00:00:00     |                       |
| tag13 | 1999-12-31T00:00:00.010 | 222.0                 |
| tag13 | 1999-12-31T00:00:00.020 | 222.0                 |
| tag13 | 1999-12-31T00:00:00.030 | 333.0                 |
| tag13 | 1999-12-31T00:00:00.040 | 333.0                 |
| tag13 | 1999-12-31T00:00:00.050 | 333.0                 |
| tag14 | 1999-12-31T00:00:00     |                       |
| tag14 | 1999-12-31T00:00:00.010 | 111.0                 |
| tag14 | 1999-12-31T00:00:00.020 | 111.0                 |
| tag14 | 1999-12-31T00:00:00.030 | 222.0                 |
| tag14 | 1999-12-31T00:00:00.040 | 222.0                 |
| tag14 | 1999-12-31T00:00:00.050 | 222.0                 |
+-------+-------------------------+-----------------------+
```

## **Parameter Type**：Numeric type

**Return Type**: STRING

**Syntax**

- CLUSER_SCHEMA on Database Cluster
- **Parameter Type**：

### PLAYLIST_NOTIFICATION_SHEMA

**Example**

**Return Type**: STRING

### ENANTS

**Return Type**：DOUBLE

#### **Return Type**：BIGINT

| **Parameter Type**：Numeric type                                | **Syntax** | **Parameter Type**： BIGINT |
| -------------------------------------------------------------- | ---------- | -------------------------- |
| ENANT_NAME                                | STRING     | **Parameter Type**：None    |
| TREAT_PLAYLIST_TITLE | STRING     | **Example**                |

**Parameter Type**: BIGINT

```sql
SELECT * FROM cluster_schema.tenants;
```

```
+----- +
| tenant_name | tenant_options |
+------------------+
| cnosdb | {"comment": "system tenant", "limiter_config":n} |
+---+ + +
```

### USERS

#### **Return Type**：BIGINT

**Syntax**

| **Return Type**：BIGINT                                         | **Syntax** | **Parameter Type**：BIGINT |
| -------------------------------------------------------------- | ---------- | ------------------------- |
| USER_NAME                                 | STRING     | **Parameter Type**：BIGINT |
| IS_ADMIN                                  | BOOLEN     | **Return Type**：STRING    |
| USER_OPTION_PLAYLIST | STRING     | **Example**               |

**Parameter Type**：STRING

```sql
SELECT * FROM cluster_schema.users;
```

```
+-----------+----------+-------------------------------------------------------------------------------------------------+
| user_name | is_admin | user_options                                                                                    |
+-----------+----------+-------------------------------------------------------------------------------------------------+
| root      | true     | {"password":"*****","must_change_password":true,"rsa_public_key":null,"comment":"system admin"} |
+-----------+----------+-------------------------------------------------------------------------------------------------+
```

### INFORMATION_SHEMA

**Return Type**：DOUBLE

### DATABASES

**Return Type**：DOUBLE

#### **Return Type**：BIGINT

| **Return Type**：BIGINT              | **Syntax**      | **Parameter Type**：None                      |
| ----------------------------------- | --------------- | -------------------------------------------- |
| ENANT_NAME     | STRING          | **Parameter Type**：None                      |
| DATABASSE_NAME | STRING          | **Return Type**：BIGINT                       |
| TTL                                 | STRING          | **Return Type**：BIGINT                       |
| SHARD                               | BIGINT UNCIGNED | Number of data fragments                     |
| VNODE_DURATION | STRING          | **Parameter Type**：None                      |
| PREPLICA                            | BIGINT UNCIGNED | Number of copies of data in cluster          |
| PERCISON                            | STRING          | Represents the time accuracy of the database |

**Parameter Type**：STRING

```sql
SELECT * FROM information_schema.databases;
```

```
+-------------+---------------+----------+-------+----------------+---------+-----------+
| tenant_name | database_name | ttl      | shard | vnode_duration | replica | percision |
+-------------+---------------+----------+-------+----------------+---------+-----------+
| cnosdb      | public        | 365 Days | 1     | 365 Days       | 1       | NS        |
+-------------+---------------+----------+-------+----------------+---------+-----------+
```

### TABLES

**Parameter Type**：None

#### **Return Type**：BIGINT

| **Return Type**：BIGINT                                             | **Syntax** | **Parameter Type**：None             |
| ------------------------------------------------------------------ | ---------- | ----------------------------------- |
| TABLE_TEXT                                    | STRING     | Tenants attached to table           |
| TABLE_DATABASE                                | STRING     | **Return Type**：BIGINT              |
| TABLE_NAME                                    | STRING     | **Parameter Type**：STRING           |
| TABLE_TYPE                                    | STRING     | Whether table is base table or view |
| TABLE_NOTIFICATION_TITLE | STRING     | **Return Type**：STRING              |
| TABLE_OPTIONS                                 | STRING     | **Example**                         |

**Parameter Type**：STRING

```sql
SELECT * FROM information_schema.tables;
```

```
+--------------+----------------+------------+------------+--------------+---------------+
| table_tenant | table_database | table_name | table_type | table_engine | table_options |
+--------------+----------------+------------+------------+--------------+---------------+
| cnosdb       | public         | wind       | BASE TABLE | TSKV         | TODO          |
| cnosdb       | public         | air        | BASE TABLE | TSKV         | TODO          |
| cnosdb       | public         | sea        | BASE TABLE | TSKV         | TODO          |
+--------------+----------------+------------+------------+--------------+---------------+
```

### COLUMNS

**Return Type**：BIGINT

#### **Return Type**：BIGINT

| **Return Type**：BIGINT                                                                        | **Syntax** | **Return Type**：BIGINT    |
| --------------------------------------------------------------------------------------------- | ---------- | ------------------------- |
| TABLE_TEXT                                                               | STRING     | Tenants attached to table |
| TABLE_DATABASE                                                           | STRING     | **Return Type**：BIGINT    |
| TABLE_NAME                                                               | STRING     | **Parameter Type**：STRING |
| COLUMN_NAME                                                              | STRING     | **Return Type**：BIGINT    |
| NOTIF_NOTIFICATION_POPUP_TITLE | STRING     | **Parameter Type**：STRING |
| COLUMN_TYPE                                                              | STRING     | **Example**               |
| IS_NULLABLE                                                              | STRING     | **Example**               |
| DATA_TYPE                                                                | STRING     | **Example**               |
| COMPRESSON_DEC                                                           | STRING     | **Return Type**：BIGINT    |

**Parameter Type**：STRING

```sql
SELECT * FROM information_schema.columns;
```

```
+-------------+---------------+------------+-------------+-------------+------------------+----------------+-------------+-----------+-------------------+
| tenant_name | database_name | table_name | column_name | column_type | ordinal_position | column_default | is_nullable | data_type | compression_codec |
+-------------+---------------+------------+-------------+-------------+------------------+----------------+-------------+-----------+-------------------+
| cnosdb      | public        | wind       | time        | TIME        | 0                | NULL           | false       | TIMESTAMP | DEFAULT           |
| cnosdb      | public        | wind       | station     | TAG         | 1                | NULL           | true        | STRING    | DEFAULT           |
| cnosdb      | public        | wind       | speed       | FIELD       | 2                | NULL           | true        | DOUBLE    | DEFAULT           |
| cnosdb      | public        | wind       | direction   | FIELD       | 3                | NULL           | true        | DOUBLE    | DEFAULT           |
| cnosdb      | public        | air        | time        | TIME        | 0                | NULL           | false       | TIMESTAMP | DEFAULT           |
| cnosdb      | public        | air        | station     | TAG         | 1                | NULL           | true        | STRING    | DEFAULT           |
| cnosdb      | public        | air        | visibility  | FIELD       | 2                | NULL           | true        | DOUBLE    | DEFAULT           |
| cnosdb      | public        | air        | temperature | FIELD       | 3                | NULL           | true        | DOUBLE    | DEFAULT           |
| cnosdb      | public        | air        | pressure    | FIELD       | 4                | NULL           | true        | DOUBLE    | DEFAULT           |
| cnosdb      | public        | sea        | time        | TIME        | 0                | NULL           | false       | TIMESTAMP | DEFAULT           |
| cnosdb      | public        | sea        | station     | TAG         | 1                | NULL           | true        | STRING    | DEFAULT           |
| cnosdb      | public        | sea        | temperature | FIELD       | 2                | NULL           | true        | DOUBLE    | DEFAULT           |
+-------------+---------------+------------+-------------+-------------+------------------+----------------+-------------+-----------+-------------------+
```

### ENABLED_ROLES

**Return Type**：DOUBLE

#### **Return Type**：BIGINT

| **Return Type**：BIGINT         | **Syntax** | **Return Type**：DOUBLE    |
| ------------------------------ | ---------- | ------------------------- |
| ROLE_NAME | STRING     | **Parameter Type**：STRING |

#### **Parameter Type**：STRING

```sql
SELECT * FROM information_schema.enabled_roles;
```

```
+---+
| role_name |
+------
| owner |
+---+ +
```

### ROLES

**Return Type**：STRING
This view is visible only to the current tenant Owner.

#### **Return Type**：DOUBLE

| **Return Type**：DOUBLE            | **Syntax** | **Return Type**：DOUBLE    |
| --------------------------------- | ---------- | ------------------------- |
| ROLE_NAME    | STRING     | **Parameter Type**：STRING |
| ROLE_TYPE    | STRING     | **Example**               |
| INHERIT_ROLE | STRING     | **Example**               |

**Parameter Type**：STRING

```sql
SELECT * FROM information_schema.roles;
```

```
+-----------+-----------+--------------+
| role_name | role_type | inherit_role |
+-----------+-----------+--------------+
| owner     | system    |              |
| member    | system    |              |
+-----------+-----------+--------------+
```

### DATABASE_PRIVILEGES

#### **Return Type**：DOUBLE

**Return Type**：STRING
**Parameter Type**：STRING
**Return Type**：DOUBLE

| **Return Type**：DOUBLE              | **Syntax** | **Return Type**：DOUBLE |
| ----------------------------------- | ---------- | ---------------------- |
| ENANT_NAME     | STRING     | **Example**            |
| DATABASSE_NAME | STRING     | **Example**            |
| PRIVILEGE_TYPE | STRING     | **Syntax**             |
| ROLE_NAME      | STRING     | **Example**            |

**Parameter Type**：STRING

```sql
CREATE ROLE rrr INHERIT member;
GRANT READ ON DATABASE air TO ROLE rrrrr;
SELECT * FROM information_schema.database_privileges;
```

```
+-------- +------------------+-
| tenant_name | database_name | privilege_type | role_name | role_name |
+--------------+
| cnosdb | air | Read | rr |
+-----------------
```

### MEMBERS

**Return Type**：DOUBLE

**Return Type**：DOUBLE

#### **Return Type**：DOUBLE

| **Return Type**：DOUBLE         | **Syntax** | **Return Type**：DOUBLE |
| ------------------------------ | ---------- | ---------------------- |
| USER_NAME | STRING     | **Return Type**：STRING |
| ROLE_NAME | STRING     | **Return Type**：STRING |

**Parameter Type**：STRING

```sql
SELECT * FROM information_schema.members;
```

```
+-------------- +
| user_name | role_name |
+-----------------------
| root | owner |
+----+ + + +
```

### QUERIES

**Return Type**：DOUBLE

**Return Type**：DOUBLE

**Return Type**：DOUBLE

#### **Return Type**：STRING

| **Return Type**：STRING            | **Syntax**      | **Parameter Type**：STRING |
| --------------------------------- | --------------- | ------------------------- |
| QUERY_ID     | STRING          | **Return Type**：STRING    |
| REQUERY_TEXT | STRING          | **Return Type**：STRING    |
| USER_ID      | STRING          | **Parameter Type**：STRING |
| USER_NAME    | STRING          | **Example**               |
| ENANT_ID     | STRING          | **Return Type**：STRING    |
| ENANT_NAME   | STRING          | **Parameter Type**：STRING |
| STATE                             | STRING          | **Example**               |
| DURATION                          | BIGINT UNCIGNED | **Parameter Type**：STRING |

**Parameter Type**：STRING

```sql
SELECT * FROM information_schema.queries;
```

```
+----------+------------------------------------------------------------------+-----------------------------------------+-----------+----------------------------------------+-------------+------------+--------------+
| query_id | query_text                                                       | user_id                                 | user_name | tenant_id                              | tenant_name | state      | duration     |
+----------+------------------------------------------------------------------+-----------------------------------------+-----------+----------------------------------------+-------------+------------+--------------+
| 36       | select * FROM air join sea ON air.temperature = sea.temperature; | 108709109615072923019194003831375742761 | root      | 13215126763611749424716665303609634152 | cnosdb      | SCHEDULING | 12.693345666 |
+----------+------------------------------------------------------------------+-----------------------------------------+-----------+----------------------------------------+-------------+------------+--------------+
```

#### SHOW QUERIES

**Example**

**Parameter Type**：STRING

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

## USAGE_SCHEMA

**Example**

**Example**

**Example**

### PLAYLIST_NOTIFICATION_TITLE

**Syntax**

#### **Parameter Type**：STRING

**Example**

| **Parameter Type**：STRING     | **Syntax**      | **Parameter Type**：STRING |
| ----------------------------- | --------------- | ------------------------- |
| TIME                          | TIMESTAMP       | **Syntax**                |
| DATABASE                      | STRING          | **Parameter Type**：STRING |
| NODE_ID  | STRING          | **Parameter Type**：STRING |
| ENANT                         | STRING          | **Parameter Type**：STRING |
| VNODE_ID | STRING          | **Example**               |
| VALUE                         | BIGINT UNCIGNED | **Example**               |

**Example**

| **Example**                   | **Syntax**      | **Example** |
| ----------------------------- | --------------- | ----------- |
| TIME                          | TIMESTAMP       | **Syntax**  |
| DATABASE                      | STRING          | **Example** |
| NODE_ID  | STRING          | **Example** |
| ENANT                         | STRING          | **Example** |
| VNODE_ID | STRING          | **Example** |
| VALUE                         | BIGINT UNCIGNED | **Example** |

#### **Syntax**

**Example**

```sql
**Example**
```

```
+----------------------------+--------+
| time | database | node_id | tenant | vnode_id | value |
+----------------------------------------------------+
| 2023-02-23T03:57:52. 66487 | usage_schema | 1001 | cnosdb | 3 | 0 |
| 2023-02-23T03:57:42. 66642 | usage_schema | 1001 | cnosdb | 3 | 0 |
+---------------------+ +
```

**Example**

```sql
Select * from usage_schema.disk_storage order by time desc limit 2;
```

```
+----------------------------+--------------+---------+----------+-------+
| time                       | database     | node_id | vnode_id | value |
+----------------------------+--------------+---------+----------+-------+
| 2023-02-23T06:34:36.578458 | usage_schema | 1001    | 3        | 0     |
| 2023-02-23T06:34:26.577871 | usage_schema | 1001    | 3        | 0     |
+----------------------------+--------------+---------+----------+-------+
```

### DATA_IN

**Syntax**

#### **Example**

**Example**

| **Example**                  | **Syntax**      | **Example**                          |
| ---------------------------- | --------------- | ------------------------------------ |
| TIME                         | TIMESTAMP       | Time of data_in |
| DATABASE                     | STRING          | **Example**                          |
| NODE_ID | STRING          | **Example**                          |
| ENANT                        | STRING          | **Example**                          |
| VALUE                        | BIGINT UNCIGNED | **Example**                          |

**Example**

| **Example**                  | **Syntax**      | **Example**                          |
| ---------------------------- | --------------- | ------------------------------------ |
| TIME                         | TIMESTAMP       | Time of data_in |
| DATABASE                     | STRING          | **Example**                          |
| NODE_ID | STRING          | **Example**                          |
| VALUE                        | BIGINT UNCIGNED | **Example**                          |

#### **Syntax**

**Example**

```sql
Select * from usage_schema.data_in order by time desc limit 2;
```

```
+-------------------------+-----
| time | database | node_id | tenant | value |
+-------------------------------
| 2023-02-23T06:50:36. 78641 | usage_schema | 1001 | cnosdb | 741552 |
| 2023-02-23T06:50:26. 77544 | usage_schema | 1001 | cnosdb | 7396|
+------------------------------------------+
```

**Example**

```sql
Select * from usage_schema.data_in order by time desc limit 2;
```

```
+----------------------------+--------------+---------+--------+
| time                       | database     | node_id | value  |
+----------------------------+--------------+---------+--------+
| 2023-02-23T06:43:46.587023 | usage_schema | 1001    | 662012 |
| 2023-02-23T06:43:36.586154 | usage_schema | 1001    | 660072 |
+----------------------------+--------------+---------+--------+
```

### DATA_OUT

**Syntax**

#### **Example**

**Example**

| **Example**                  | **Syntax**      | **Example**      |
| ---------------------------- | --------------- | ---------------- |
| TIME                         | TIMESTAMP       | Time of data out |
| DATABASE                     | STRING          | **Example**      |
| NODE_ID | STRING          | **Example**      |
| ENANT                        | STRING          | **Example**      |
| VALUE                        | BIGINT UNCIGNED | **Example**      |

**Example**

| **Example**                  | **Syntax**      | **Example**      |
| ---------------------------- | --------------- | ---------------- |
| TIME                         | TIMESTAMP       | Time of data out |
| DATABASE                     | STRING          | **Example**      |
| NODE_ID | STRING          | **Example**      |
| VALUE                        | BIGINT UNCIGNED | **Example**      |

#### **Syntax**

```sql
Select * from usage_schema.data_out order by time desc limit 2;
```

```
+----------------------------+--------------+---------+--------+----------+
| time                       | database     | node_id | tenant | value    |
+----------------------------+--------------+---------+--------+----------+
| 2023-02-23T06:51:16.577110 | usage_schema | 1001    | cnosdb | 15156112 |
| 2023-02-23T06:51:06.577132 | usage_schema | 1001    | cnosdb | 15156112 |
+----------------------------+--------------+---------+--------+----------+
```

```sql
Select * from usage_schema.data_out order by time desc limit 2;
```

```
+-----------------------+-
| time | database | node_id | value |
+------------------------------------------------
| 2023-02-23T06:51:46. 76451 | usage_schema | 1001 | 16173128 |
| 2023-02-23T06:51:36. 76904 | usage_schema | 1001 | 16173128 |
+------------------------------------------------------------------+
```

### QUERIES (USAGE_SCHEMA)

**Parameter Type**:

#### **Example**

**Example**

| **Example**                  | **Syntax**      | **Example** |
| ---------------------------- | --------------- | ----------- |
| TIME                         | TIMESTAMP       | **Example** |
| DATABASE                     | STRING          | **Example** |
| NODE_ID | STRING          | **Example** |
| ENANT                        | STRING          | **Example** |
| USER                         | STRING          | **Example** |
| VALUE                        | BIGINT UNCIGNED | **Example** |

**Example**

| **Example**                  | **Syntax**      | **Example** |
| ---------------------------- | --------------- | ----------- |
| TIME                         | TIMESTAMP       | **Example** |
| DATABASE                     | STRING          | **Example** |
| NODE_ID | STRING          | **Example** |
| USER                         | STRING          | **Example** |
| VALUE                        | BIGINT UNCIGNED | **Example** |

#### **Syntax**

```sql
Select * from usage_schema.queries order by time desc limit 2;
```

```
+--------------------------+
| time | database | node_id | tenant | user | value |
+-----------------------------------------------------------------------------------
| 2023-02-23T06:53:16. 75193 | usage_schema | 1001 | cnosdb | usage | 9 |
| 2023-02-23T06:53:16. 75193 | usage_schema | 1001 | cnosdb | root | 17 |
+--------------------------------------------------+
```

```sql
Select * from usage_schema.queries order by time desc limit 2;
```

```
+----------------------+------------ ---- --+
| time | database | node_id | user | value |
+---------------------------------
| 2023-02-23T06:52:36. 76098 | usage_schema | 1001 | use | 9 |
| 2023-02-23T06:52:36. 76097 | usage_schema | 10001 | root | 17|
+----------------------------- +
```

### WRITES

This view records how many times users write to DB.

**Example**

#### **Example**

**Example**

| **Example**                  | **Syntax**      | **Example** |
| ---------------------------- | --------------- | ----------- |
| TIME                         | TIMESTAMP       | **Example** |
| DATABASE                     | STRING          | **Example** |
| NODE_ID | STRING          | **Example** |
| ENANT                        | STRING          | **Example** |
| USER                         | STRING          | **Example** |
| VALUE                        | BIGINT UNCIGNED | **Example** |

**Example**

| **Example**                  | **Syntax**      | **Example** |
| ---------------------------- | --------------- | ----------- |
| TIME                         | TIMESTAMP       | **Example** |
| DATABASE                     | STRING          | **Example** |
| NODE_ID | STRING          | **Example** |
| USER                         | STRING          | **Example** |
| VALUE                        | BIGINT UNCIGNED | **Example** |

#### **Syntax**

**Example**

```sql
Select * from usage_schema.writes order by time desc limit 2;
```

```
+----------------------------+----------+---------+--------+------+-------+
| time                       | database | node_id | tenant | user | value |
+----------------------------+----------+---------+--------+------+-------+
| 2023-02-23T07:05:56.549282 | public   | 1001    | cnosdb | root | 2     |
| 2023-02-23T07:05:46.549188 | public   | 1001    | cnosdb | root | 2     |
+----------------------------+----------+---------+--------+------+-------+
```

**Example**

```sql
Select * from usage_schema.writes order by time desc limit 2;
```

```
+------------+------------+---+-
| time | database | node_id | user | value |
+------------------------------
| 2023-02-23T07:06:56. 47905 | public | 1001 | root | 2 |
| 2023-02-23T07:06:46. 47673 | public | 1001 | root | 2 |
+---------------- +------+
```

## **Example**

### **Example**

**Example**

**Example**

```sql
**Example**
```

**Example**

**Example**

**Example**

**Syntax**

```sql
CREATE DATABASE oceanic_station;
```

```
\c oceanic_station
```

```
CREATE TABLE air(pressure DOUBLE, temperature DOUBLE, visibility DOUBLE, TAGS (staff));
```

**Example**

```sql
CREATE STREAM TABLE air_stream_stream(time TIMESTAMP, station STRING, pressure DOUBLE, temperature DOUBLE, visibility DOUBLE) 
    WITH (db = 'oceanic_station', table = 'air', event_time_column = 'time')
    engine = tskv;
```

### Remove Stream

> Same as delete normal expression reference to[删除表](#delete table)

### **Example**

**Example**

**Syntax**

**Syntax**

**Syntax**

**Syntax**

**Syntax**

```sql
CREATE TABLE air_down_sampling_1hour (max_pressure DOUBLE, avg_temperature DOUBLE, sum_temperature DOUBLE, count_pressure BIGINT, TAGS(staff));
```

**Syntax**

```sql
INSERT INTO air_down_sampling_1hour(time, station, max_pressure, avg_temperature, sum_temperature, count_pressure) 
SELECT 
	date_bin (INTERVAL 1' HOUR, time, TIMESTAMP '2023-01-14T16:00:00) time, 
	station, 
	MAX(pressure) max_pressure, 
	AVG(temperature) avg_temperature, 
	SUM(temperature) sum_temperature, 
	COUNT(pressure) count_pressure 
FROM air_stream 
GROUP BY date_bin (INTERVAL '1' HOUR, time, TIMESTAMP '2023-01-14T16:00:00'), station;
```

**Syntax**

**Syntax**

```sql
\w oceanic_station.txt
```

**Syntax**

```sql
SELECT * FROM air_down_sampling_1our LIMIT 10;
```

```
+---------------------+------------+--------------+-----------------+-----------------+----------------+
| time                | station    | max_pressure | avg_temperature | sum_temperature | count_pressure |
+---------------------+------------+--------------+-----------------+-----------------+----------------+
| 2023-01-14T16:00:00 | XiaoMaiDao | 80.0         | 68.05           | 1361.0          | 20             |
| 2023-01-14T17:00:00 | XiaoMaiDao | 79.0         | 63.75           | 1275.0          | 20             |
| 2023-01-14T18:00:00 | XiaoMaiDao | 79.0         | 66.35           | 1327.0          | 20             |
| 2023-01-14T19:00:00 | XiaoMaiDao | 78.0         | 68.05           | 1361.0          | 20             |
| 2023-01-14T20:00:00 | XiaoMaiDao | 80.0         | 64.35           | 1287.0          | 20             |
| 2023-01-14T21:00:00 | XiaoMaiDao | 77.0         | 61.05           | 1221.0          | 20             |
| 2023-01-14T22:00:00 | XiaoMaiDao | 80.0         | 64.8            | 1296.0          | 20             |
| 2023-01-14T23:00:00 | XiaoMaiDao | 80.0         | 66.35           | 1327.0          | 20             |
| 2023-01-15T00:00:00 | XiaoMaiDao | 80.0         | 65.15           | 1303.0          | 20             |
| 2023-01-15T01:00:00 | XiaoMaiDao | 80.0         | 69.55           | 1391.0          | 20             |
+---------------------+------------+--------------+-----------------+-----------------+----------------+
```

## KILL QUERY

### **Syntax**

```sql
KILL [QUERY] query_id;
```

**Syntax**

## **Syntax**

```sql
SHOW QUERIES;
```

```
+----------+------+------------------------------------------------------------------+------------+----------+
| query_id | user | query                                                            | state      | duration |
+----------+------+------------------------------------------------------------------+------------+----------+
| 4        | root | select * from air join sea on air.temperature = sea.temperature; | SCHEDULING | 2703     |
| 5        | root | show queries;                                                    | SCHEDULING | 0        |
+----------+------+------------------------------------------------------------------+------------+----------+
```

```sql
KILL 4;
```

Query took 0.016 seconds.
