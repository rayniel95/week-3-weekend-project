import { ethers } from "hardhat";
import { MyERC20Votes, MyERC20Votes__factory } from "../typechain-types";
import { account1 } from "./scriptsConfig";

const tokenDecimals = 18
 
async function main() {
    const myERC20VotesContractFactory = new MyERC20Votes__factory(account1);
    const myERC20VotesContract = myERC20VotesContractFactory.attach(
        process.env.MyERC20VotesContractAddress!
    ) as MyERC20Votes;
    
    await myERC20VotesContract.mint(process.env.account1!, ethers.parseUnits(process.env.account1InitialBalance!, tokenDecimals));
    await myERC20VotesContract.mint(process.env.account2!, ethers.parseUnits(process.env.account2InitialBalance!, tokenDecimals));
    await myERC20VotesContract.mint(process.env.account3!, ethers.parseUnits(process.env.account3InitialBalance!, tokenDecimals));
    await myERC20VotesContract.mint(process.env.account4!, ethers.parseUnits(process.env.account4InitialBalance!, tokenDecimals));
    await myERC20VotesContract.mint(process.env.account5!, ethers.parseUnits(process.env.account5InitialBalance!, tokenDecimals));
}

main().then()