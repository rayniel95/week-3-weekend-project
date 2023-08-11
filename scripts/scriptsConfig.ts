import dotenv from "dotenv"
dotenv.config()
import { ethers } from "ethers";

export const alchemyProvider = new ethers.AlchemyProvider("sepolia", process.env.ALCHEMY_API_KEY);
export const account1 = new ethers.Wallet(process.env.account1PrivKey!, alchemyProvider);
export const account2 = new ethers.Wallet(process.env.account2PrivKey!, alchemyProvider);
export const account3 = new ethers.Wallet(process.env.account3PrivKey!, alchemyProvider);
export const account4 = new ethers.Wallet(process.env.account4PrivKey!, alchemyProvider);
export const account5 = new ethers.Wallet(process.env.account5PrivKey!, alchemyProvider);
