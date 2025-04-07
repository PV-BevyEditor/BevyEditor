export function parseAssetId(assetId: string): string | undefined {
    let m = assetId.match(/(AssetId<.*?>\{ index: )([0-9]*)(.*)/);
    return m?.[2]
}
