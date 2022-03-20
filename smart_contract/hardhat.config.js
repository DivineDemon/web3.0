require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.13",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Q4uEac3drJpruG3BkPmCXh5eOU-r-dSP",
      accounts: [
        "577d9ac7999ffc5460849fa731e866aed1a90c18949f1933272c01656c67697e",
      ],
    },
  },
};
