---
title: Group Operations
order: 7
---

## GROUP BY Clause
The GROUP BY clause must be after the condition of the WHERE clause and before the ORDER BY clause (if any).

Example：

```sql
SELECT station, AVG(temperature) 
FROM air 
GROUP BY station;
```
    +-------------+----------------------+
    | station     | AVG(air.temperature) |
    +-------------+----------------------+
    | XiaoMaiDao  | 69.14285714285714    |
    | LianYunGang | 72.16666666666667    |
    +-------------+----------------------+

##  HAVING Clause

**Syntax**：
```sql
group_by_clause 
[ HAVING condition ];
```
In the SELECT query, the HAVING clause must follow the GROUP BY clause and appear before the ORDER BY clause (if any).

**Differences between HAVING and WHERE**：

HAVING enables you to specify filter conditions after the GROUP BY clause, so as to control which groups in the query results can appear in the final results.

WHERE sets conditions on the selected column before the GROUP BY clause, while HAVING clause sets conditions on the group generated by the GROUP BY clause.

**Example**：
```sql
SELECT station, AVG(temperature)  AS avg_t 
FROM air 
GROUP BY station 
HAVING avg_t > 70;
```
    +-------------+-------------------+
    | station     | avg_t             |
    +-------------+-------------------+
    | LianYunGang | 72.16666666666667 |
    +-------------+-------------------+

## **Complex Grouping Operation**

CnosDB provides `ROLLUP`，`CUBE`and other complex grouping operations, enabling you to operate query results in different ways. 

[//]: # (### **GROUPING SETS**)
[//]: # (GROUPING SETS 是可以将行分组在一起的一组或一组列。)
[//]: # (您可以简单地使用 GROUPING SETS，而不是编写多个查询并将结果与 UNION 组合。)
[//]: # (CnosDB 中的 GROUPING SETS 可以被认为是 GROUP BY 子句的扩展。 它允许您在同一查询中定义多个分组集。)
[//]: # (让我们看看如下用例，看它如何等同于具有多个 UNION ALL 子句的 GROUP BY。)
[//]: # (```sql)
[//]: # (SELECT * FROM shipping;)
[//]: # (--  origin_state | origin_zip | destination_state | destination_zip | package_weight)
[//]: # (-- --------------+------------+-------------------+-----------------+----------------)
[//]: # (--  California   |      94131 | New Jersey        |            8648 |             13)
[//]: # (--  California   |      94131 | New Jersey        |            8540 |             42)
[//]: # (--  New Jersey   |       7081 | Connecticut       |            6708 |            225)
[//]: # (--  California   |      90210 | Connecticut       |            6927 |           1337)
[//]: # (--  California   |      94131 | Colorado          |           80302 |              5)
[//]: # (--  New York     |      10002 | New Jersey        |            8540 |              3)
[//]: # (-- &#40;6 rows&#41;)
[//]: # (```)
[//]: # (如下查询演示了GROUPING SETS的语义)
[//]: # (```sql)
[//]: # (SELECT origin_state, origin_zip, destination_state, sum&#40;package_weight&#41;)
[//]: # (FROM shipping)
[//]: # (GROUP BY GROUPING SETS &#40; &#40;origin_state&#41;,)
[//]: # (&#40;origin_state, origin_zip&#41;,)
[//]: # (&#40;destination_state&#41;&#41;;)
[//]: # (--  origin_state | origin_zip | destination_state | _col0)
[//]: # (--  --------------+------------+-------------------+-------)
[//]: # (--   New Jersey   | NULL       | NULL              |   225)
[//]: # (--   California   | NULL       | NULL              |  1397)
[//]: # (--   New York     | NULL       | NULL              |     3)
[//]: # (--   California   |      90210 | NULL              |  1337)
[//]: # (--   California   |      94131 | NULL              |    60)
[//]: # (--   New Jersey   |       7081 | NULL              |   225)
[//]: # (--   New York     |      10002 | NULL              |     3)
[//]: # (--   NULL         | NULL       | Colorado          |     5)
[//]: # (--   NULL         | NULL       | New Jersey        |    58)
[//]: # (--   NULL         | NULL       | Connecticut       |  1562)
[//]: # (--  &#40;10 rows&#41;)
[//]: # (```)
[//]: # (上述查询等价于)
[//]: # (```sql)
[//]: # (SELECT origin_state, NULL, NULL, sum&#40;package_weight&#41;)
[//]: # (FROM shipping GROUP BY origin_state)
[//]: # (UNION ALL)
[//]: # (SELECT origin_state, origin_zip, NULL, sum&#40;package_weight&#41;)
[//]: # (FROM shipping GROUP BY origin_state, origin_zip)
[//]: # (UNION ALL)
[//]: # (SELECT NULL, NULL, destination_state, sum&#40;package_weight&#41;)
[//]: # (FROM shipping GROUP BY destination_state;)
[//]: # (```)

### **ROLLUP**

[//]: # (与 GROUPING SETS 类似，)
You can use the ROLLUP option in a single query to generate multiple group sets.

ROLLUP assumes a hierarchy between input columns.

If you GRUOP BY Clause is as follows,

```sql
SELECT ...
FROM ...
GROUP BY ROLLUP(column_1,column_2);
```

t is equivalent to the following statement.

```sql
SELECT ...
FROM ...


UNION ALL

SELECT ...
FROM ...
GROUP BY
column_1

UNION ALL

SELECT ...
FROM ...
GROUP BY
column_1, column2;
```

[//]: # (GROUP BY GROUPING SETS&#40;)
[//]: # (    &#40;column_1, column_2&#41;,)
[//]: # (    &#40;column_1&#41;,)
[//]: # (    &#40;&#41;)
[//]: # (&#41;)

ROLLUP generates all grouping sets that are meaningful in this hierarchy. Whenever the value of column_1 changes，it will generate a subtotal line；

Therefore, we often use ROLLUP in reports to generate subtotals and totals. The order of columns in ROLLUP is very important.

**Example**:

```sql
SELECT station, visibility, avg(temperature) 
FROM air 
GROUP BY ROLLUP (station, visibility);
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

### **CUBE**
Similar to ROLLUP, CUBE is an extension of the GROUP BY clause. It allows you to generate subtotals for all combinations of grouping columns specified in the GROUP BY clause.

[//]: # (CUBE 就像结合了 GROUPING SETS 和 ROLLUP。)
CUBE creates a grouping set for each possible combination of the specified expression set. First, GROUP BY (A, B, C), then (A, B), (A, C), (A), (B, C), (B), (C), and finally GROUP BY the entire table.

```sql
SELECT ... 
FROM ...
GROUP BY CUBE (column1, column2);
```

Equivalent to

```sql
SELECT ...
FROM ...
GROUP BY column1

UNION ALL

SELECT ...
FROM ...
GROUP BY column2

UNION ALL

SELECT ...
FROM ...
GROUP BY column1, column2

UNION ALL

SELECT ...
FROM ...
;
```

**Example**：
```sql
SELECT station, visibility, avg(temperature) 
FROM air 
GROUP BY CUBE (station, visibility);
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


[//]: # (### **GROUPING**)
[//]: # (    GROUPING&#40;column_expression&#41;)
[//]: # (**说明**：GROUPING函数只能用于有GROUP BY 子句的表达式)
[//]: # (当指定`GROUP BY`时，只能在 SELECT 列表、HAVING 和 ORDER BY 子句中使用 GROUPING。)
[//]: # (**参数**： 只能是GROUP BY 子句中的表达式)
[//]: # (```sql)
[//]: # (SELECT origin_state,)
[//]: # (origin_zip,)
[//]: # (destination_state,)
[//]: # (sum&#40;package_weight&#41;,)
[//]: # (grouping&#40;origin_state, origin_zip, destination_state&#41;)
[//]: # (FROM shipping)
[//]: # (GROUP BY GROUPING SETS &#40;)
[//]: # (    &#40;origin_state&#41;,)
[//]: # (    &#40;origin_state, origin_zip&#41;,)
[//]: # (    &#40;destination_state&#41;)
[//]: # (&#41;;)
[//]: # (-- origin_state | origin_zip | destination_state | _col3 | _col4)
[//]: # (-- --------------+------------+-------------------+-------+-------)
[//]: # (-- California   | NULL       | NULL              |  1397 |     3)
[//]: # (-- New Jersey   | NULL       | NULL              |   225 |     3)
[//]: # (-- New York     | NULL       | NULL              |     3 |     3)
[//]: # (-- California   |      94131 | NULL              |    60 |     1)
[//]: # (-- New Jersey   |       7081 | NULL              |   225 |     1)
[//]: # (-- California   |      90210 | NULL              |  1337 |     1)
[//]: # (-- New York     |      10002 | NULL              |     3 |     1)
[//]: # (-- NULL         | NULL       | New Jersey        |    58 |     6)
[//]: # (-- NULL         | NULL       | Connecticut       |  1562 |     6)
[//]: # (-- NULL         | NULL       | Colorado          |     5 |     6)
[//]: # (-- &#40;10 rows&#41;)
[//]: # (```)
[//]: # (**注意**： GROUPING 用于区分 ROLLUP、CUBE 或 GROUPING SETS 返回的空值与标准空值。)
[//]: # (作为 ROLLUP、CUBE 或 GROUPING SETS 操作的结果返回的 NULL 是 NULL 的一种特殊用途。)
[//]: # (这充当结果集中的列占位符，表示全部。)