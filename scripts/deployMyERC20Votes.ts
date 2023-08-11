import dotenv from "dotenv"
dotenv.config()
import { ethers } from "hardhat";
import { MyERC20Votes__factory } from "../typechain-types";


async function main() {
    const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
    const account1 = new ethers.Wallet(process.env.account1PrivKey!, alchemyProvider);

    const erc20VotesFactory = new MyERC20Votes__factory(account1);

    const contract = await erc20VotesFactory.deploy();

    await contract.waitForDeployment()
    const contractAddress = await contract.getAddress()
    console.log(`MyERC20Votes deployed to ${contractAddress}`);
}

main().then()