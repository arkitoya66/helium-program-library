import { Keypair as HeliumKeypair } from "@helium/crypto";
import bs58 from "bs58";

const run = async () => {
  const ecc = await (await HeliumKeypair.makeRandom()).address.publicKey;
  console.log(ecc);
};

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => process.exit());
