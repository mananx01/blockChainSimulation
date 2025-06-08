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
}

class Blockchain {
    chain = []
    constructor() {
        // creating genesis (first) block
        this.chain.push(new Block(0,Date.now(),"genesis data","0"));
    }

    get_latest_block() {
        let n = this.chain.length;
        return this.chain[n-1];
    }

    add_block(b) {
        b.previousHash = this.get_latest_block().hash;
        b.hash = b.calculateHash();
        this.chain.push(b)
    }

    printChain() {
        this.chain.forEach(block => {
            console.log(`Index: ${block.index}`);
            console.log(`Hash: ${block.hash}`);
            console.log(`PreviousHash: ${block.previousHash}`);
            console.log(`Data: ${block.data}`);
            console.log('----------------------------------');
        });
    }

}

let myChain = new Blockchain();
myChain.add_block(new Block(1, Date.now(), "BlockData1"));
myChain.add_block(new Block(2, Date.now(), "BlockData2"));
myChain.add_block(new Block(3, Date.now(), "BlockData3"));
myChain.add_block(new Block(4, Date.now(), "BlockData4"));
myChain.add_block(new Block(5, Date.now(), "BlockData5"));



console.log("Initial Chain:");
myChain.printChain();

// Tampering with block2 then 
console.log("\n Tampering Block 2...");
myChain.chain[2].data = "block-2 updated data !!";
myChain.chain[2].hash = myChain.chain[2].calculateHash();

console.log("\nBlockchain After Tampering:");
myChain.printChain();


console.log("\nNow block 3 prevhash is invalid as block2 hash is changed so this is inconsistency.\nBlockchain is INVALID !!");
