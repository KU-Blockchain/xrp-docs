# XRP Ledger

**Consensus**

Consensus is the most important property of any decentralized payment system. In traditional centralized payment systems, one authoritative administrator gets the final say in how and when payments occur. Decentralized systems, by definition, don't have an administrator to do that. Instead, decentralized systems like the XRP Ledger define a set of rules all participants follow, so every participant can agree on the exact same series of events and their outcome at any point in time. We call this set of rules a consensus protocol.

Consensus protocols are a solution to the double-spend problem: the challenge of preventing someone from successfully spending the same digital money twice. The hardest part about this problem is putting transactions in order: without a central authority, it can be difficult to resolve disputes about which transaction comes first when you have two or more mutually-exclusive transactions sent around the same time. For a detailed analysis of the double-spend problem, how the XRP Ledger Consensus Protocol solves this problem, and the tradeoffs and limitations involved, see Consensus Principles and Rules.


The XRP Ledger uses a consensus protocol unlike any digital asset that came before it. This protocol, known as the XRP Ledger Consensus Protocol, is designed to have the following important properties:

Everyone who uses the XRP Ledger can agree on the latest state, and which transactions have occurred in which order.
All valid transactions are processed without needing a central operator or having a single point of failure.
The ledger can make progress even if some participants join, leave, or behave inappropriately.
If too many participants are unreachable or misbehaving, the network fails to make progress rather than diverging or confirming invalid transactions.
Confirming transactions does not require wasteful or competitive use of resources, unlike most other blockchain systems.

Current Centralized Payment Systems are parties exchanging with an intermediary that being in this fragmented 3 Finite Automata.  Where behavior of exchnage depends on the intermediary (The Bank) to validate transactions.
