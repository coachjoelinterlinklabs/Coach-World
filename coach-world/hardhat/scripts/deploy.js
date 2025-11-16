const hre = require("hardhat");


async function main() {
const [deployer] = await hre.ethers.getSigners();
console.log("Deploying contracts with:", deployer.address);


// Initial supply example: 5,000,000,000 tokens with 18 decimals
const initialSupply = hre.ethers.parseUnits("5000000000", 18);


const CJC = await hre.ethers.getContractFactory("CJCToken");
const cjc = await CJC.deploy(initialSupply);
await cjc.waitForDeployment();


console.log("CJC deployed to:", await cjc.getAddress());
}


main().catch((error) => {
console.error(error);
process.exitCode = 1;
});