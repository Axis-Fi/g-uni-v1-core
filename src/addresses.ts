/* eslint-disable @typescript-eslint/naming-convention */
interface Addresses {
  Gelato: string;
  WETH: string;
  DAI: string;
  USDC: string;
  UniswapV3Factory: string;
  Swapper: string;
  GelatoDevMultiSig: string;
  GUniFactory: string;
  GUniImplementation: string;
}

const AXIS_PROTOCOL = "0xB47C8e4bEb28af80eDe5E5bF474927b110Ef2c0e";

export const getAddresses = (network: string): Addresses => {
  switch (network) {
    case "mainnet":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        GUniFactory: "0xEA1aFf9dbFfD1580F6b81A3ad3589E66652dB7D9",
        GUniImplementation: "",
      };
    case "optimism":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        GUniFactory: "0x2845c6929d621e32B7596520C8a1E5a37e616F09",
        GUniImplementation: "0x8582Bf142BE76fEF830D23f590a2587f2aD7C216",
      };
    case "polygon":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "0x2E185412E2aF7DC9Ed28359Ea3193EBAd7E929C6",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        GUniFactory: "0x37265A834e95D11c36527451c7844eF346dC342a",
        GUniImplementation: "0xd2Bb190dD88e7Af5DF176064Ec42f6dfA8672F40",
      };
    case "goerli":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        GUniFactory: "",
        GUniImplementation: "",
      };
    case "anvil":
      return {
        Gelato: "0x0000000000000000000000000000000000000000",
        Swapper: "",
        GelatoDevMultiSig: "0x0000000000000000000000000000000000000000",
        WETH: "0x0000000000000000000000000000000000000000",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "",
        GUniFactory: "",
        GUniImplementation: "",
      };
    case "arbitrum":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        GUniFactory: "0x873966578C8ECcD61fc68F1Be3681146f86587e4",
        GUniImplementation: "0x37886d0667c16f41F73F6586f087166Ae3CF1155",
      };
    case "arbitrumSepolia":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x2dCC5a88A861FB73613153F82CF801cd09E72a5F",
        GUniFactory: "0x39AC4439e6CB9427C073259e5742529cE46DD663",
        GUniImplementation: "0xF3e2578C66071a637F06cc02b1c11DeC0784C1A6",
      };
    case "base":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
        GUniFactory: "0x5D7ddDFee9fB5709Ccdea49Acd51db3d73BC75Fa",
        GUniImplementation: "0xE03E5bF70E04dB487bCa3A36beEFccd7b6be582F",
      };
    case "baseSepolia":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24",
        GUniFactory: "0x04974BcFC715c148818724d9Caab3Fe8d0391b8b",
        GUniImplementation: "0xF5c31d08a71c854A9f607A5992456dBC31B11e16",
      };
    case "blast":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "0x4300000000000000000000000000000000000004",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x71b08f13B3c3aF35aAdEb3949AFEb1ded1016127",
        GUniFactory: "0xC11a71a304aB4c147e926342BA4CcCFd62d7368e",
        GUniImplementation: "0xD33e5cC03ad1C8F73cc57053f8a749ac76F14988",
      };
    case "blastSepolia":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "0x4200000000000000000000000000000000000023",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x84fF29e6321c9dd328B8B383b08dd2815b121243",
        GUniFactory: "0xED28E5230E934cf9C843C08818D0639176040297",
        GUniImplementation: "0xdde18C0c3B637F4BA02f5567a671F5e28b7404e7",
      };
    case "mantle":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "",
        GUniFactory: "",
        GUniImplementation: "",
      };
    case "mantleSepolia":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0xE292cF4e316191CbFEbD74909356DF3cd9455e96",
        GUniFactory: "0x08B87749b379f5BCA1d74A7B3d4e9f3DeD41C706",
        GUniImplementation: "0xE292cF4e316191CbFEbD74909356DF3cd9455e96",
      };
    case "mode":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "0x4200000000000000000000000000000000000006",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "",
        GUniFactory: "",
        GUniImplementation: "",
      };
    case "modeSepolia":
      return {
        Gelato: AXIS_PROTOCOL,
        Swapper: "",
        GelatoDevMultiSig: AXIS_PROTOCOL,
        WETH: "",
        DAI: "",
        USDC: "",
        UniswapV3Factory: "0x0f88f3f5108eB3BD1A2D411E9a1fD41997811D88",
        GUniFactory: "0x2dCC5a88A861FB73613153F82CF801cd09E72a5F",
        GUniImplementation: "0xe1B83edA3399A2c9B8265215EA21042C9b918dc5",
      };
    default:
      throw new Error(`No addresses for Network: ${network}`);
  }
};
