import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC20, TokenSale } from "../typechain-types";


const RATIO = 10;

describe("NFT Shop", async () => {
  let tokenSaleContract: TokenSale;

  async function deployContracts() {
    const ERC20Factory = await ethers.getContractFactory("ERC20");
    const erc20TokenContract = await ERC20Factory.deploy("MyERC20", "MERC20");
    await erc20TokenContract.waitForDeployment();

    const erc20TokenContractAddress = await erc20TokenContract.getAddress();

    const TokenSaleFactory = await ethers.getContractFactory("TokenSale");
    const tokenSaleContract_ = await TokenSaleFactory.deploy(
      RATIO,
      erc20TokenContractAddress
    );
    await tokenSaleContract_.waitForDeployment();

    return {tokenSaleContract_}
  }
  beforeEach(async () => {
    const {tokenSaleContract_} = await loadFixture(deployContracts);
    tokenSaleContract = tokenSaleContract_;
  });

  describe("When the Shop contract is deployed", async () => {
    it("defines the ratio as provided in parameters", async () => {
      const ratio = await tokenSaleContract.ratio();
      expect(ratio).to.equal(RATIO);
    });

    it("uses a valid ERC20 as payment token", async () => {
      const erc20TokenContractAddress = await tokenSaleContract.getAddress();
      const ERC20Factory = await ethers.getContractFactory("ERC20");
      const erc20TokenContract = ERC20Factory.attach(erc20TokenContractAddress) as ERC20;
      await expect(erc20TokenContract.balanceOf(ethers.ZeroAddress)).not.to.be.reverted;
      await expect(erc20TokenContract.totalSupply()).not.to.be.reverted;
    });
  });

  describe("When a user buys an ERC20 from the Token contract", async () => {
    beforeEach(async () => {});

    it("charges the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("gives the correct amount of tokens", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user burns an ERC20 at the Shop contract", async () => {
    it("gives the correct amount of ETH", async () => {
      throw new Error("Not implemented");
    });

    it("burns the correct amount of tokens", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user buys an NFT from the Shop contract", async () => {
    it("charges the correct amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });

    it("gives the correct NFT", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When a user burns their NFT at the Shop contract", async () => {
    it("gives the correct amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });
  });

  describe("When the owner withdraws from the Shop contract", async () => {
    it("recovers the right amount of ERC20 tokens", async () => {
      throw new Error("Not implemented");
    });

    it("updates the owner pool account correctly", async () => {
      throw new Error("Not implemented");
    });
  });
});