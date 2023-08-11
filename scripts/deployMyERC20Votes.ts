import dotenv from "dotenv";
import { MyERC20Votes__factory } from "../typechain-types";
import { account1 } from "./scriptsConfig";


async function main() {

    const erc20VotesFactory = new MyERC20Votes__factory(account1);

    const contract = await erc20VotesFactory.deploy();

    await contract.waitForDeployment()
    const contractAddress = await contract.getAddress()
    console.log(`MyERC20Votes deployed to ${contractAddress}`);

    const parsed = { MyERC20VotesContractAddress: contractAddress}
    //@ts-ignore
    dotenv.populate(process.env, parsed)
}

main().then()