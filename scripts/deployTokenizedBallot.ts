import dotenv from "dotenv";
import { MyERC20Votes__factory, TokenizedBallot__factory } from "../typechain-types";
import { account1 } from "./scriptsConfig";
import { ethers } from "hardhat";


async function main() {

    const tokenizedBallotFactory = new TokenizedBallot__factory(account1);
    const contract = await tokenizedBallotFactory.deploy(
        [
            "0x63686f636f6c6174650000000000000000000000000000000000000000000000",
            "0x7661696e696c6c61000000000000000000000000000000000000000000000000",
            "0x6672657361000000000000000000000000000000000000000000000000000000"
        ],
        process.env.MyERC20VotesContractAddress!,
        "4076910",
    );

    await contract.waitForDeployment()
    const contractAddress = await contract.getAddress()
    console.log(`TokenizedBallot deployed to ${contractAddress}`);

    const parsed = { TokenizedBallot: contractAddress }
    //@ts-ignore
    dotenv.populate(process.env, parsed)
}

main().then()