# XRPL

[Analysis fo the XRP Ledger Consensus Protocol](https://arxiv.org/abs/1802.07242v1)

Add post script file here

The XRP Ledger Consensus Protocol is a previously developed consensus protocol powering the XRP Ledger. It is a low-latency Byzantine agreement protocol, capable of reaching consensus without full agreement on which nodes are members of the network. We present a detailed explanation of the algorithm and derive conditions for its safety and liveness.

> We will be utilizing the `XRPLF/xrpl-dev-portal` for referencing documentation on XRPL

### XRP Basics

**1.  What is XRP?**


XRPL (XRP Ledger) is a Distributed Ledger Technology, is a decentralized, public blockchain led by a global developer community.  The ledger is owned by Ripple Labs Inc.  XRP is a Internationally recognized standarized asset/currency code validated and now compliant by ISO 20022 - ISO 2022 is under SWIFT known to be the Society for Worldwide Interbank Financial Telecommunications which provides a secure messaging system for financial transactions between participating banks.  A Currency Code is a code allocated to a currency by a Maintenance Agency under an international identification scheme as described in the latest edition of the international standard ISO "Codes for the representation of currencies and funds".

**2.  What does XRP Stand for?**

> XRP is the three-letter currency/asset code formed by appending a single character to a two-letter county code of the issuing country.

**X** - Asset

**RP** - Ripple Labs

The **X** Represents assets not issued by any country, via standarizations XRP is not issued by any country, thus for assets not issued by any country, the first letter must be X.  No country codes starting with X will be issued. So, for example, since the chemical symbol for gold is Au, gold’s currency code is XAU.  XRP’s first letter is X because XRP is not issued by any country.  In the early days, we called the ledger’s native asset “ripples”. So the natural currency code to choose was “XRP”. 

**Examples**

1. USD - United States "Dollar"
    
    Since the United States’ country code is “US”, US dollars have the currency code “USD”.

2.  EUR - European Union "Euro"

    The European Union is a not a country, but still acts as a country code. The EU has the country code “EU”, so the currency code for Euros is “EUR”.

3.  XBT - Bitcoin "Asset"

    Some people use “BTC” for bitcoin, however the formalization standard of bitcoin is actually “XBT”. 

**3.  What is [ISO 20022](https://www.iso20022.org)?**

ISO2022 - Universal Financial Industry Message Scheme

ISO20022 International Organization for Standardization is a single standarization approach (methodology, process, repository) to be used by all financial standards initiatives.  It is a standard/protocol that allows for electronic data to interchange between different financial institutions. In covers financial information transferred between organizations that include credit or debit card transactions, settlement data and securities trading, and other payment transactions.  In general the payment protocols and messages across the world are validated by countries and financial networks which all adhere to various standardizations.  These standardizations are recognized by the IS) 20022 which bring legacy payment infrastructure to help global interoperabilityy and allow for world's cross-border payment flows.  RippleNet is apart of the ISO 20022 Registrtaion Management Group (RMG) standards body and the first member focused on Distributed Ledger Technology (DTL).  

**4.  What is [SWIFT](https://www.swift.com)**

Swift is the global providor of secure financial messaging services and implements cross-border payment systems such as ISO 2022

### What is the Purpose of this Repo

**This is a test repo that will review over the basics of the xrp ledger**

**Purpose**
- Find out how to use a local XRP chain
- Reading and writing to it 
- How to create NFTs on it
- attestation managers
- how to swap in and out different chains

Semantic Remote Attestation Evidence Health Ledger

A repo that will outline a research project proposal for the XRP

Semantic Remote Attestation Evidence on Chain
- health records and ledgers for evidence
- system and local manisfests
- Local instances of the XRP ledger.
- What do we need to download an XRP client.
- Getting it initialized for the client
- Lauren wants to do a hackathon with XRP 
### Goal
How to read and write out of the blockchain

### Reference
Develop a basic understanding of the XRP Ledger's consensus mechanism.
[Documentation](https://xrpl.org/concepts.html)