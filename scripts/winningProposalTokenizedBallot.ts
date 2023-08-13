import dotenv from "dotenv";
dotenv.config();
import { MyERC20Votes, MyERC20Votes__factory, TokenizedBallot, TokenizedBallot__factory } from "../typechain-types";
import { ethers } from "hardhat";


async function main() {
    const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
    const account = new ethers.Wallet(process.env.toWinningProposalPrivateKey!, alchemyProvider);

    const tokenizedBallotFactory = new TokenizedBallot__factory(account);

    const contract = tokenizedBallotFactory.attach(
        process.env.TokenizedBallot! as string
    ) as TokenizedBallot;

    const winningName = await contract.winningProposal();
    
    console.log(`winnerProposal: ${winningName}`);
}

main().then()


