---
sidebar_position: 8
---

# Tenant Resource Limit

The current resource isolation of CnosDB is at the tenant level, with two types of restriction：that limit the object created by the tenant, and one that limits the size and frequency of the tenant's reading and writing data.Both categories of restrictions can be set with a SQL and the SQL can only be used by the most privileged users.

#### Syntax

```sql
alone tenant <tenant_name> set _limiter '<limiter_json>';
```

#### Parameter Description

- tenant_name：Tenant name.
- Limiter_json：Tenant Resource Limit, classified as：objects limiting `object_config` and `request_config`, content must be in json format.

#### object_config with the following parameter：

| Parameter Name                                             | Description                                                                                                                                    | Required | Units |
| :--------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :---- |
| max_users_number | Specify how many users (members) will have a maximum number of users under a tenant, indicating unlimited when set to null. | Yes      | each  |
| max_databases                         | Specifies how many databases under the tenant are maximum and is set to null, indicating no limits.                                            | Yes      | each  |
| max_shard_number | Specifies how much shard the database under the tenant can be created and is set to null, which means unlimited.                               | Yes      | each  |
| max_repla_number | Specifies how much replica can be created under a tenant at most, indicating unlimited when set to null.                                       | Yes      | each  |
| max_return_time  | Specify TTL parameters for the database under the tenant, maximum size can be set and unlimited when null.                                     | Yes      | day   |

#### Example：

```json
"object_config": LOs
  "max_users_number@@": 1,
  "max_databases": 3,
  "max_shard_number@@": 2,
  "max_replicate_number@@": 2,
  "max_return_time": 30
},
```

#### request_config to limit reading and writing requests with the following parameter：

| Parameter Name                | Description                                                                                              | Required | Units |
| :---------------------------- | :------------------------------------------------------------------------------------------------------- | :------- | :---- |
| data_in  | Limit the size of the request for a certain period of time, set to null, indicating an unlimited limit.  | Yes      | Byte  |
| data_out | Limit the size of the request for a certain period of time, set to null, meaning that it is unlimited.   | Yes      | Byte  |
| queries                       | Limit the number of requests to read over a period of time, set to null, indicating no limit.            | Yes      | Times |
| Writes                        | Limit the number of requests to write within a certain period of time, set to null, indicating no limit. | Yes      | Times |

The `data_in` and `data_out` limits are implemented by token-based algorithms. They consist of two parts of：a remote token on meta, specified by `remote_bucket`, another local token on data specified by `local_bucket`. The token is in bytes.

#### remote_bucket contains the following parameter：

| Parameter Name | Description                                   | Units |
| :------------- | :-------------------------------------------- | :---- |
| max            | Limit the maximum number of tokens            | each  |
| Initial        | Limit the number of initial tokens of barrels | each  |
| refill         | Limit the number of tokens per fill           | each  |
| interval       | Time interval for filling tokens              | ms    |

#### local_bucket contains the following parameter：

| Parameters | Description                                   | Units |
| :--------- | :-------------------------------------------- | :---- |
| max        | Limit the maximum number of tokens            | each  |
| Initial    | Limit the number of initial tokens of barrels | each  |

The following token bucket setting indicates that 10 KB data sizes are allowed per 100 milliseconds and 10 KB data sizes are allowed per 100 ms;

#### Sample Data Writing Settings

```json
"data_in": {
  "remote_bucket": {
    "max": 10000,
    "initial": 0,
    "refill": 10000,
    "interval": 100
  },
  "local_bucket": {
    "max": 10000,
    "initial": 0
  }
  },
  "data_out": {
  "remote_bucket": {
    "max": 10000,
    "initial": 0,
    "refill": 10000,
    "interval": 100
  },
  "local_bucket": {
    "max": 100,
    "initial": 0
  }
}
```

#### Limit tenant size and number of times to read and write data below：

```json
"request_config": {
  "data_in": {
    "remote_bucket": {
      "max": 10000,
      "initial": 0,
      "refill": 10000,
      "interval": 100
    },
    "local_bucket": {
      "max": 10000,
      "initial": 0
    }
  },
  "data_out": {
    "remote_bucket": {
      "max": 100,
      "initial": 0,
      "refill": 100,
      "interval": 100
     },
    "local_bucket": {
      "max": 100,
      "initial": 0
    }
  },
  "queries": null,
  "writes": null
}
```

#### Overall Example

```json
alter tenant cnosdb set _limiter = '{
  "object_config": {
    "max_users_number": 1,
    "max_databases": 3,
    "max_shard_number": 2,
    "max_replicate_number": 2,
    "max_retention_time": 30
  },
  "request_config": {
    "data_in": {
      "remote_bucket": {
        "max": 10000,
        "initial": 0,
        "refill": 10000,
        "interval": 100
      },
      "local_bucket": {
        "max": 10000,
        "initial": 0
     }
    },
     "data_out": {
       "remote_bucket": {
       "max": 100,
       "initial": 0,
        "refill": 100,
        "interval": 100
  },
  "local_bucket": {
    "max": 100,
    "initial": 0
  }
  },
  "queries": null,
  "writes": null
  }
}';
```
