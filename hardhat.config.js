require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
console.log("Loading private key...")
const PRIVKEY = process.env.HARDHAT_PRIVATE_KEY;
console.log("Private key:",PRIVKEY)
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      accounts: [PRIVKEY]
    },
    harmonytestnet: {
      url: "https://api.s0.b.hmny.io",
      chainId: 1666700000,
      accounts: [PRIVKEY]
    },
    harmony: {
      url: "https://harmony-0-rpc.gateway.pokt.network",
      chainId: 1666600000,
      accounts: [PRIVKEY]
    },
    mainnet: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      accounts: [PRIVKEY]
    }
  },
  solidity: "0.8.4",
};
