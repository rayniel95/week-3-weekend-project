import dotenv from "dotenv";
dotenv.config();
import { MyERC20Votes, MyERC20Votes__factory, TokenizedBallot, TokenizedBallot__factory } from "../typechain-types";
import { ethers } from "hardhat";


async function main() {
    const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
    const account = new ethers.Wallet(process.env.toSelfDelegatePrivateKey!, alchemyProvider);

    const myERC20VotesFactory = new MyERC20Votes__factory(account);

    const contract = myERC20VotesFactory.attach(
        process.env.MyERC20VotesContractAddress! as string
    ) as MyERC20Votes;

    const contractAddress = await contract.delegate(
        process.env.toSelfDelegate!,
    );
    console.log("you have activate snapshots");
}

main().then()

