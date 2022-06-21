import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
  lang: "ru-RU",
  title: "W3ref",
  description: "Справочник веба",

  base: "/",
  port: 8081,

  alias: {
    "@": path.resolve(__dirname),
    "@components": path.resolve(__dirname, "components"),
    "@data": path.resolve(__dirname, "data"),
    "@assets": path.resolve(__dirname, "assets"),
  },

  plugins: [
    searchPlugin({
      // your options
    }),
  ],

  theme,
});
