import { TronWeb } from "tronweb";

const privateKey = "";
const apiKey = "";

var tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
  headers: { "TRON-PRO-API-KEY": apiKey },
  privateKey: privateKey,
});
//  Sunpump contract address
const contractAddress = "TTfvyrAz86hbZk5iDpKD78pqLGgi8C7AAw";

// exact AmountTRX amount
export async function buyTRXPump(address, amountTRX) {
  try {
    const transaction = await tronWeb.transactionBuilder.triggerSmartContract(
      contractAddress,
      "purchaseToken(address,uint256)",
      {
        feeLimit: 1000 * 10 ** 6, //maximum fee, 1000 TRX for now
        callValue: amountTRX * 10 ** 6, // Add decimals to TRX amount
      },
      [
        { type: "address", value: address },
        { type: "uint256", value: "0" }, // This is the min amount out, you can calculate it using the smart contract
      ],
      tronWeb.defaultAddress.base58
    );

    // Sign the transaction
    const signedTransaction = await tronWeb.trx.sign(transaction.transaction);

    // Broadcast the transaction
    const receipt = await tronWeb.trx.sendRawTransaction(signedTransaction);

    console.log("Transaction receipt:", receipt);
  } catch (error) {
    console.error("Error triggering contract:", error);
  }
}
