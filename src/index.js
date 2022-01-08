import Web3 from "web3";
import fs from "fs";

const ACCOUNT_FILEPATH = "./accounts.txt";
const ACCOUNT_AMOUNT = 1;

const WALLET_FILEPATH = "./wallet.txt";
const WALLET_AMOUNT = 2;

const TESTNET_RPC_ENDPOINT = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const MAINNET_RPC_ENDPOINT = "https://bsc-dataseed1.binance.org:443/";

const web3 = new Web3(MAINNET_RPC_ENDPOINT);

const createAccounts = (amount) => {
  const accounts = [];
  for (let i = 0; i < amount; i++) {
    accounts.push(web3.eth.accounts.create());
  }
  return accounts;
};

const createWallets = (amount) => {
  const wallets = [];
  const ws = web3.eth.accounts.wallet.create(amount);
  for (let i = 0; i < amount; i++) {
    wallets.push(ws[i]);
  }
  return wallets;
};

(async function main() {
  const wallets = createWallets(WALLET_AMOUNT);
  const fileData = wallets
    .map(({ address, privateKey }) => `${address}\n${privateKey}`)
    .join("\n\n");
  fs.writeFileSync(WALLET_FILEPATH, fileData);
})();
