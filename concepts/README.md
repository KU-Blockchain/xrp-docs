# XRP Ledger Consensus Protocol

Understand the pre-requisit intro basics before diving into development on the Blockchain.  All references and info can be sourced here [XRPL Concepts Page](https://xrpl.org/intro-to-consensus.html)
## Network Protocols

Before we establish what the XRP Ledger Consensus Protocol is we need to first establish a basic understand on what a **communication/network protocol** is.  A protocol is a system of rules that allows two or more communications systems to transmit infomation/data via any kind of variation of a physical quantity.  The protocol defines a set of...

1. rules
2. syntax
3. semantics
4. synchronization

... of communication and possible error recovery methods.  Protocols in our case for the Consensus for XRP blockchain will be implemented by software.  Communication systms use well-defined formats for exchanging various messages.  Each of which has a specific meaning to elicit a response from a range of possble responses pre-determined for that particular situation.  The specified behavior for parties is independent of how it is to be implemented.  Communication protocols in general have to be agreeed upon for all parties involed.  In order to reach an agreement/consensus - a protocol may be developed into a technical standard / specification.  Multiple protocols often describe different aspects of a single communication. A group of protocols designed to work together is known as a protocol suite; when implemented in software they are a protocol stack.

**Protocol vs Programming Language**

> _**Protocols** are to communication what **Programming Languages** are to computations_

**Example Protocols**

1.  **SMTP** Simple Mail Transfer Protocol

    An internet standard communication protocol for electronic mail transmission.  Mail servers and other message transfer agents use SMTP to send and recieve mail messages.

2.  **HTTPS** Hypertext Transfer Protocol

    An application layer protocol in the Internet Protocol suite model for distributed, collaborative, hypermedia information sustems.  HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resoruces that users can easily access, (e.g. a mouse click by tapping the screen in a web browser)

3.  **SMS** Short Message Service

    Is a texting message service component of most telephone, internet, and mobile device systems.  It uses standardized communication protocols that let mobile devies excange short text messages and is an intermediary service thart can facilitate a text-to-voice conversion to be sent to landlines.  

##  Consensus Overview

Consensus is the most important property of any decentralized payment system. In traditional centralized payment systems, one authoritative administrator gets the final say in how and when payments occur. Decentralized systems, by definition, don't have an administrator to do that. Instead, decentralized systems like the XRP Ledger define a set of rules all participants follow, so every participant can agree on the exact same series of events and their outcome at any point in time. We call this set of rules a consensus protocol.

Consensus protocols are a solution to the double-spend problem: the challenge of preventing someone from successfully spending the same digital money twice. The hardest part about this problem is putting transactions in order: without a central authority, it can be difficult to resolve disputes about which transaction comes first when you have two or more mutually-exclusive transactions sent around the same time. For a detailed analysis of the double-spend problem, how the XRP Ledger Consensus Protocol solves this problem, and the tradeoffs and limitations involved, see Consensus Principles and Rules.

The XRP Ledger uses a consensus protocol unlike any digital asset that came before it. This protocol, known as the XRP Ledger Consensus Protocol, is designed to have the following important properties:

Current Centralized Payment Systems are parties exchanging with an intermediary that being in this fragmented 3 Finite Automata.  Where behavior of exchnage depends on the intermediary (The Bank) to validate transactions.

## XRP Ledger Consensus Protocol

The XRP Ledger Consensus Protocol is a previously developed consensus protocol powering the XRP Ledger. It is a low-latency Byzantine agreement protocol, capable of reaching consensus without full agreement on which nodes are members of the network. We present a detailed explanation of the algorithm and derive conditions for its safety and liveness.

### Properties

1.  Everyone who uses the XRP Ledger can agree on the latest state, and which transactions have occurred in which order.
All valid transactions are processed without needing a central operator or having a single point of failure.

2.  All valid transactions are processed without needing a central operator or having a single point of failure.  

3.  The ledger can make new blocks even if some participants join, leave, or behave inappropriately.

4.  The confimration of transactions is not a is a consensus mechanism which doe snot require any Proof of Work mining unlike other blockchain systems.  


### Consensus Research

Analysis of the XRP Ledger Consensus Protocol 

A detailed and updated analysis of the XRP Ledger consensus algorithm and its safety and liveness properties.