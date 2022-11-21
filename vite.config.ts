import { defineConfig, normalizePath } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import px2rem from "postcss-pxtorem";
import viteEslint from 'vite-plugin-eslint';

const variablePath = normalizePath(path.resolve("./src/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
  },
  plugins: [react(),viteEslint()],
  css: {
    // 预处理器配置 每个scss文件 都加入 variablePath
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
    // css Module
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]",
      localsConvention: "camelCaseOnly",
    },
    // PostCSS
    postcss: {
      plugins: [autoprefixer(), px2rem({ replace: true })],
    },
  },
});
