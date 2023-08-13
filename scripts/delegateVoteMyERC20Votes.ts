import dotenv from "dotenv";
dotenv.config();
import { MyERC20Votes, MyERC20Votes__factory } from "../typechain-types";
import { ethers } from "hardhat";


async function main() {
    const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
    const account = new ethers.Wallet(process.env.toBeDelegatePrivateKey!, alchemyProvider);

    const erc20VotesFactory = new MyERC20Votes__factory(account);

    const contract = erc20VotesFactory.attach(
        process.env.MyERC20VotesContractAddress as string
    ) as MyERC20Votes;

    const contractAddress = await contract.delegate(
        process.env.delegateeAddress!
    );
    console.log(`${account.address} delegate to ${process.env.delegateeAddress!}`);
}

main().then()