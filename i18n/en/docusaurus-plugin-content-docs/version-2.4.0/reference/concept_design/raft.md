---
title: Raft Replication
order: 10
---

# Basic Concept of Raft Replication

In distributed systems, Raft is a consensus algorithm used to replicate logs to ensure agreement across multiple nodes. The nodes in Raft algorithm are classified as leaders, followers, and candidates.The nodes in the Rafah algorithm are divided into leaders (leader), followers (follower) and candidates (candidate).

When a node operates as a leader, it is responsible for receiving requests from clients and copying these requests into the logs of other nodes for data replication and consistency.

### The basic process of Raft replica replication

- Leadership election
  When the system starts or the current leader node loses contact, the candidates in the remaining nodes initiate a leadership election. Candidates send messages requesting votes to other nodes and wait for replies from other nodes within a certain period of time. If the candidate gains the support of the majority of nodes, it becomes the new leader.Candidates send requests for voting to other nodes and wait for responses from other nodes within a certain period of time.If the candidate enjoys the support of most nodes, it becomes a new leader.

- Log duplicates
  to receive client requests and append them to their own logs.The leader then sends these log entries to other nodes and awaits confirmation from most nodes.Log replication
  Once the leader is elected, it can receive requests from clients and append these requests to its own log. The leader will then send these log entries to the other nodes and wait for the confirmation of the majority of the nodes. Once the majority of nodes have acknowledged receiving and replicating these logs, the leader can apply the log entries to the local state machine to achieve data consistency.

- Followers copy
  when the follower node receives log entries sent by the leader, it append these log entries to its own log and send a confirmation message to the leader.Once the leader receives confirmation messages from most nodes, it knows that these log entries have been copied to most nodes, thus ensuring consistency.

- The troubleshooter
  will restart the election and select a new leader if the leader's node has lost contact or other failures.Newly elected leaders will continue to copy logs and maintain data consistency.

Through the above process, Raft algorithm realizes replica replication and consistency, and ensures data consistency and reliability in distributed system.

### Raft in CnosDB

Raft replication algorithm is introduced in CnosDB v2.4 version, each Replica Set is a Raft replication group, and the whole system runs in a Multi-Raft mode.

#### Data writing flow

- Determines which Bucket to write based on tenant, Database, and timestamp
- Hash to determine which Replica Set, or which Raft Copy Group to write based on Series Key
- Check if the requested node is a leader who wrote it directly, or forward it to lead for processing.

#### Raf replica group management

- Replication group creation and destruction
- Add a copy
- Delete a copy
- Move a copy
