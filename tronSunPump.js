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

// Amount of tokens to send (make sure to use the correct decimal format)

export async function buyTRXPump(address, amountTRX) {
  try {
    console.log("Transaction receipt:", receipt);
  } catch (error) {
    console.error("Error triggering contract:", error);
  }
}
