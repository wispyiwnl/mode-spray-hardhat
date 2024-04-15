import { artifacts } from 'hardhat'

async function main() {
  const contractName = 'USDCCoin' // 'BaseSpray', USDCCoin, ModeSpray
  const contractArtifact = await artifacts.readArtifact(contractName)

  console.log('Contract ABI:')
  console.log(JSON.stringify(contractArtifact.abi, null, 2))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
