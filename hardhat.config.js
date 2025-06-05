require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    holesky: {
      url: "https://eth-holesky.g.alchemy.com/v2/IRAQIiMAtOBoAqvZmwv56",
      chainId: 17000,
      accounts: [ process.env.PRIVATE_KEY ]
    }
  }
};

// localhost: {
//   url: "http://127.0.0.1:8545",
//   chainId: 31337
// },

// holesky: {
//   url: process.env.HOLESKY_RPC_URL || "https://rpc.holesky.ethpandaops.io",
//   chainId: 17000,
//   accounts: [ process.env.PRIVATE_KEY ]
// }