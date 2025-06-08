const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        const str = this.index + this.timestamp + this.data + this.previousHash + this.nonce;
        return crypto.createHash('sha256').update(str).digest('hex');
    }

    mineBlock(difficulty) {
        const prefix = Array(difficulty + 1).join("0"); // must start with "0000" 
        let start = Date.now();
        while (this.hash.substring(0, difficulty) !== prefix) {
            this.nonce++;
            this.hash = this.calculateHash(); // recalculate hash wiht new nonce 
        }
        let end = Date.now();
        console.log(`Block mined! Hash: ${this.hash}`);
        console.log(`Nonce attempts: ${this.nonce}`);
        console.log(`Time taken: ${(end - start) / 1000} seconds`);
    }
}

let block = new Block(1, Date.now(), "transaction..", "0");
console.log("block hash is: ", block.hash)
block.mineBlock(4); // taken difficulty = 4


