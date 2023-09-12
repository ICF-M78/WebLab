import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
/** element-plus 自动导入 相关 */
import AutoImport from "unplugin-auto-import/vite";
/** element-plus 自动导入 相关 */
import Components from "unplugin-vue-components/vite";
/** element-plus 自动导入 相关 */
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./",
  build: {
    outDir: "../server/public",
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss",
      },
    }),
    /** element-plus 自动导入 相关 */
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    /** element-plus 自动导入 相关 */
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  define: {
    "process.env": {
      BASE_URL: "",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    open: true,
    port: 8080,
    proxy: {
      "^/dev": {
        target: "http://localhost:7070/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
  optimizeDeps: {
    include: ["@kangc/v-md-editor/lib/theme/vuepress.js"],
  },
});
