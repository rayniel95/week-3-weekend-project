// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract TokenSale {
    uint256 public ratio;
    address public paymentToken;
    constructor(uint256 _ratio, address _paymentToken) {
        ratio = _ratio;
        paymentToken = _paymentToken;
    }

}
