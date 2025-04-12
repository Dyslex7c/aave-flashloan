# Flash Loan in Aave 

Contract address deployed at: 0xDa881253710F64FA147591fbc9E4Ba6D34B25B13

This smart contract leverages Aave V3's FlashLoanSimpleReceiverBase to request flash loans on the Sepolia testnet. It demonstrates how to initiate a flash loan, handle the execution logic, and repay the loan plus premium, all within a single transaction.

Call the `requestFlashLoan()` with the desired token and amount. The `executeOperation()` function is triggered automatically by Aave, allowing you to insert custom logic using the borrowed funds. Loan is repaid within the same transaction to avoid reversion.