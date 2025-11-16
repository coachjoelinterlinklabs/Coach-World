import fs from "fs";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";


(async () => {
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const payer = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(fs.readFileSync("../wallet.json", "utf8"))));
const metaplex = Metaplex.make(connection).use(keypairIdentity(payer)).use(bundlrStorage());


// Upload metadata (image should be reachable via URL; for local testing upload to imgur or public URL)
const { uri } = await metaplex.nfts().uploadMetadata({
name: "Mentor #1",
description: "Coach World Mentor",
image: "https://example.com/assets/mentor1.png",
attributes: [ { trait_type: "Level", value: "1" } ]
});


const { nft } = await metaplex.nfts().create({
uri,
name: "Mentor #1",
sellerFeeBasisPoints: 500
});


console.log("Minted Mentor NFT:", nft.address.toBase58());
})();