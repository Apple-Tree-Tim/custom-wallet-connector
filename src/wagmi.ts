import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";
import {
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { CustomWallet } from "./wallets/CustomWallet";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [CustomWallet],
    },
    {
      groupName: "Others",
      wallets: [rainbowWallet, walletConnectWallet],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
  }
);

export const config = createConfig({
  chains: [arbitrum, base, mainnet, optimism, polygon, sepolia],
  ssr: true,
  connectors,
});
