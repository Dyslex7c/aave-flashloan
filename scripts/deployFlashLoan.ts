import hre from "hardhat";

async function main() {
  console.log("Deployment in progress");
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

  const contractAddress = await flashLoan.getAddress();

  console.log("Flash Loan contract deployed at:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});