// all the miners with their computational power
const miner = [
    { id: 'MinerA', power: Math.random() },
    { id: 'MinerB', power: Math.random() },
    { id: 'MinerC', power: Math.random() }
];

// all the stakers with the amount of their stake in blochchain
const staker = [
    { id: 'StakerX', stake: Math.floor(Math.random()*9000 + 1000) },
    { id: 'StakerY', stake: Math.floor(Math.random()*9000 + 1000) },
    { id: 'StakerZ', stake: Math.floor(Math.random()*9000 + 1000) }
];

// all delegates and the votes they get from each voter
const delegates = ['Manan', 'Avishi', 'Raghav'];
const votes = [
    { voter: 'Voter1', vote: 'Manan' },
    { voter: 'Voter2', vote: 'Avishi' },
    { voter: 'Voter3', vote: 'Manan' }
];

// Proof-of-Work
miner.forEach((miner) => {
    console.log("minerId: " + miner.id + " | power: " + miner.power)
})
miner.sort((a,b) => b.power-a.power); // decending order
let powWinner = miner[0]
console.log(`PoW Winner: ${powWinner.id} with power ${powWinner.power.toFixed(4)}\nMiner with highest computational power wins.\n`);



// Proof-of-Stake
staker.forEach((staker) => {
    console.log("stakerId: " + staker.id + " | stake: " + staker.stake)
})
let posWinner = staker.reduce((prev, curr) => curr.stake > prev.stake ? curr : prev);
console.log(`PoS Winner: ${posWinner.id} with stake ${posWinner.stake}\nValidator with highest stake is selected.\n`);



// Delegated Proof-of-Stake
const voteCounts = {};
votes.forEach(v => voteCounts[v.vote] = (voteCounts[v.vote] || 0) + 1);
console.log("Delegate Votes: ", voteCounts)
let dposWinner = Object.keys(voteCounts).reduce((a, b) => voteCounts[a] > voteCounts[b] ? a : b);
console.log(`DPoS Winner: ${dposWinner}\nDelegate with most votes from users is chosen.`);

