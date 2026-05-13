import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mergeConfig } from "vite";

const lovableConfig = defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  cloudflare: false,
});

export default async (env: Parameters<typeof mergeConfig>[0]) => {
  const base = typeof lovableConfig === "function" ? await lovableConfig(env as any) : lovableConfig;
  return mergeConfig(base as any, {
    server: {
      host: "0.0.0.0",
      port: 5000,
      strictPort: true,
      allowedHosts: true,
    },
  });
};
