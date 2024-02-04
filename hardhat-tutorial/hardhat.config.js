require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY_URL = "https://eth-sepolia.g.alchemy.com/v2/6c0cCidCsIPiNtm91nOemYmvzNDdpM0L";

const SEPOLIA_PRIVATE_KEY = "ce4111d66627d7f0e832585a5e689a69b35f3f4bae45ea5ccc708dedfc6c502f";

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

// Contract Address: 0x82fD75e1165C297eE48299396901736304366FE8