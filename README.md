# Week 3 weekend project solution

## Contract address

- Tokenized Ballot: `0xC2BAff2532b35a632C0A1Df9b57A5622f9F044B7`
- ERC20Votes: `0xE1841fd4a6E8C3e43dCD8a560bEF4d8Cc9795ffB`

## Address

1. 0xA97DdeF8f2c72ab32cE91aAA4a59e90bA13af865
2. 0x2bd1d6940A761D5435dd9cF1Be91Dbdc8C91719A
3. 0x3f20A07BBcB12fa58388e6F51E2eA9c7bDa34276
4. 0x5D3fe95e4760eb838FD2588E14D0e18865f12cE9
5. 0x4729c5B2634490f2B338d1b9Fb23690F6D605898

## Scripts

- delegateVoteMyERC20Votes
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toBeDelegatePrivateKey: The private key of the account that will delegate
        3. MyERC20VotesContractAddress: The contract address of the ERC20Votes
        4. delegateeAddress: The address of the delegatee

- deployMyERC20Votes
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. account1PrivKey: The private key of the deployer

- deployTokenizedBallot
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. account1PrivKey: The private key of the deployer
        3. MyERC20VotesContractAddress: The contract address of the ERC20Votes
        4. targetBlockNumber: The block number of the last minted transaction in the ERC20Votes contract. That is, when all the account have voting power.
    
- getPastVotesMyERC20Votes
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toGetPastVotesPrivateKey: The private key of the account that will get past votes
        3. MyERC20VotesContractAddress: The contract address of the ERC20Votes
        4. getPastVotesTargetBlock: The block number to see the past votes.

- getVotesMyERC20Votes
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toGetVotesPrivateKey: The private key of the account that will get votes
        3. MyERC20VotesContractAddress: The contract address of the ERC20Votes

- mintMyERC20Votes
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. account1PrivKey: The private key of the account that will mint
        3. MyERC20VotesContractAddress: The contract address of the ERC20Votes
        4. account1InitialBalance: The amount of tokens to be minted for account 1.
        5. account2InitialBalance: The amount of tokens to be minted for account 2.
        6. account3InitialBalance: The amount of tokens to be minted for account 3.
        7. account4InitialBalance: The amount of tokens to be minted for account 4.
        8. account5InitialBalance: The amount of tokens to be minted for account 5.
        9. account1: The address of the account 1 that will receive tokens.
        10. account2: The address of the account 2 that will receive tokens.
        11. account3: The address of the account 3 that will receive tokens.
        12. account4: The address of the account 4 that will receive tokens.
        13. account5: The address of the account 5 that will receive tokens.

- selfDelegateMyERC20Votes
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toSelfDelegatePrivateKey: The private key of the account that will self delegate
        3. MyERC20VotesContractAddress: The contract address of the ERC20Votes

- voteTokenizedBallot
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toVotePrivateKey: The private key of the account that will vote
        3. TokenizedBallot: The contract address of the TokenizedBallot
        4. proposalToVote: The number of the proposal to vote.
        5. amountToVote: The amount of tokens to vote.

- winningNameTokenizedBallot
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toWinningNamePrivateKey: The private key of the account that execute the contract.
        3. TokenizedBallot: The contract address of the TokenizedBallot

- winningProposalTokenizedBallot
    - Environment variables
        1. ALCHEMY_API_KEY: The api key of your alchemy account
        2. toWinningProposalPrivateKey: The private key of the account that execute the contract.
        3. TokenizedBallot: The contract address of the TokenizedBallot