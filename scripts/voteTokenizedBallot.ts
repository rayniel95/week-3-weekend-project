import dotenv from "dotenv";
dotenv.config();
import { MyERC20Votes, MyERC20Votes__factory, TokenizedBallot, TokenizedBallot__factory } from "../typechain-types";
import { ethers } from "hardhat";


async function main() {
    const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
    const account = new ethers.Wallet(process.env.toVotePrivateKey!, alchemyProvider);

    const tokenizedBallotFactory = new TokenizedBallot__factory(account);

    const contract = tokenizedBallotFactory.attach(
        process.env.TokenizedBallot! as string
    ) as TokenizedBallot;

    const contractAddress = await contract.vote(
        process.env.proposalToVote!,
        ethers.parseUnits(process.env.amountToVote!, 18)
    );
    console.log("you have voted");
}

main().then()

