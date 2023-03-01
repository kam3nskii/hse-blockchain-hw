require('dotenv').config();

let Web3 = require('web3');

const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://${process.env.ETHEREUM_NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`)
);

web3.eth.getBalance('0x00000000219ab540356cBB839Cbe05303d7705Fa').then(console.log);
