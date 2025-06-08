# Blockchain Simulation 

This project demonstrates core concepts of blockchain technology, including block structure and tamper detection, Proof-of-Work mining, and consensus mechanisms such as PoW, PoS, and DPoS.

---

## 📄 1. `blockchain_simulation.js`

### Description
This script defines a simple blockchain consisting of:
- Block fields: index, timestamp, data, previousHash, hash, nonce
- A hash generator using SHA-256
- Chaining of 5 blocks via `previousHash`
- A demonstration of how altering data in one block invalidates the entire chain

### Highlights
- View all blocks and their hashes
- Change Block 2’s data to simulate tampering
- Observe how the rest of the chain becomes invalid without recomputing hashes

### Run
```bash
node blockchain_simulation.js
```

---

## ⛏️ 2. `mining_simulation.js`

### Description
This script simulates the Proof-of-Work (PoW) mechanism used in many blockchains.

### Features
- Uses a mining function that increases the nonce until a hash with leading zeros is found
- Adjustable difficulty level
- Tracks time taken and number of attempts

### Run
```bash
node mining_simulation.js
```

---

## 🤝 3. `consensus_demo.js`

### Description
This script compares three blockchain consensus mechanisms:

- **Proof of Work (PoW)**: Validator selected by highest computational power
- **Proof of Stake (PoS)**: Validator selected by highest stake
- **Delegated Proof of Stake (DPoS)**: Validator selected via votes

### Highlights
- Random mock data for miners, stakers, and voters
- Explains the logic behind each consensus selection
- Compares how consensus is reached in different systems

### Run
```bash
node consensus_demo.js
```

---

## 📦 Requirements

- Node.js
- JavaScript familiarity

---

## 🧠 Learning Objectives

- Understand blockchain data structure
- Simulate Proof-of-Work mining
- Compare validator selection in PoW, PoS, and DPoS

---

## 📁 Folder Structure

```
project-folder/
├── blockchain_simulation.js    # Block creation and tampering logic
├── mining_simulation.js        # PoW mining simulation
├── consensus_demo.js           # Consensus mechanism comparison
└── README.md                   # Documentation
```

## Author
Manan Upmanyu