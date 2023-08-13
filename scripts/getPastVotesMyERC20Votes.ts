import dotenv from "dotenv";
dotenv.config();
import { MyERC20Votes, MyERC20Votes__factory } from "../typechain-types";
import { ethers } from "hardhat";

//REVIEW - i am curious about the difference between getvotes and balance of
// and how it is posible to know from erc20votes contract which votes where
// cast in the tokenized ballot contract


async function main() {
    const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
    const account = new ethers.Wallet(process.env.toGetPastVotesPrivateKey!, alchemyProvider);

    const myERC20VotesFactory = new MyERC20Votes__factory(account);

    const contract = myERC20VotesFactory.attach(
        process.env.MyERC20VotesContractAddress! as string
    ) as MyERC20Votes;

    const contractAddress = await contract.getPastVotes(
        account.address,
        process.env.getPastVotesTargetBlock!
    );
    console.log(`you have ${ethers.formatUnits(contractAddress, 18)} past votes at block ${process.env.getPastVotesTargetBlock!}`);
}

main().then()