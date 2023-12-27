import { defineConfig } from 'vite'
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { imports } from "vite-plugin-vue-autoimportconfigextend";
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue: "https://s.gonwee.com/cdn/vue@3.2.37.js?dev",
    },
    extensions: [".js", ".vue", ".json", ".ts"],
  },
  plugins: [
    vue(),
    DefineOptions(),
    AutoImport({
      dts: "./auto-import.d.ts",
      eslintrc: {
        enabled: true,
      },
      imports: imports("vue", "vue-router", {
        target: "utils",
        include: ["index.js"],
      }),
    }),
  ],
  build: {
    emptyOutDir: false, // 避免dist被清空
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "gw-map-studio",
      fileName: (format) => `gw-map-studio.${format}.js`,
    },
    rollupOptions: {
      // 把不想打包进你的包的包排除掉
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 6600,
    proxy: {},
  },
});
