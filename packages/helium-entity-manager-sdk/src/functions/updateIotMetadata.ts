import { HeliumEntityManager } from "@helium/idls/lib/types/helium_entity_manager";
import { Asset, AssetProof, getAsset, getAssetProof } from "@helium/spl-utils";
import { BN, Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { iotInfoKey } from "../pdas";

export async function updateIotMetadata({
  program,
  rewardableEntityConfig,
  assetId,
  location,
  elevation,
  gain,
  assetEndpoint,
  getAssetFn = getAsset,
  getAssetProofFn = getAssetProof,
}: {
  program: Program<HeliumEntityManager>;
  location: BN | null;
  elevation: number | null;
  gain: number | null;
  assetId: PublicKey;
  rewardableEntityConfig: PublicKey;
  assetEndpoint?: string;
  getAssetFn?: (url: string, assetId: PublicKey) => Promise<Asset | undefined>;
  getAssetProofFn?: (
    url: string,
    assetId: PublicKey
  ) => Promise<AssetProof | undefined>;
}) {
  // @ts-ignore
  const endpoint = assetEndpoint || program.provider.connection._rpcEndpoint;
  const asset = await getAssetFn(endpoint, assetId);
  if (!asset) {
    throw new Error("No asset with ID " + assetId.toBase58());
  }
  const assetProof = await getAssetProofFn(endpoint, assetId);
  if (!assetProof) {
    throw new Error("No asset proof with ID " + assetId.toBase58());
  }
  const { root, proof, leaf, treeId, nodeIndex } = assetProof;
  const {
    ownership: { owner },
  } = asset;

  const [info] = iotInfoKey(rewardableEntityConfig, assetId);

  return program.methods
    .updateIotInfoV0({
      location,
      elevation,
      gain,
      hash: leaf.toBuffer().toJSON().data,
      root: root.toBuffer().toJSON().data,
      index: nodeIndex,
    })
    .accounts({
      // hotspot: assetId,
      rewardableEntityConfig,
      hotspotOwner: owner,
      iotInfo: info,
      merkleTree: treeId,
    })
    .remainingAccounts(
      proof.map((p) => {
        return {
          pubkey: p,
          isWritable: false,
          isSigner: false,
        };
      })
    );
}
