import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
  meta: {
    name: "whiskey",
    configKey: "whiskey",
  },

  setup(moduleOptions, nuxt) {
    const themeDir = resolve(__dirname, "..");

    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        name: "Whiskey",
        path: "/whiskey/list",
        file: resolve(themeDir, "whiskey/pages/list/Whiskey.vue"),
      });

      pages.push({
        name: "WhiskeyRegister",
        path: "/whiskey/register",
        file: resolve(themeDir, "whiskey/pages/register/Register.vue"),
      });

      pages.push({
        name: "WhiskeyRead",
        path: "/whiskey/read/:id",
        file: resolve(themeDir, "whiskey/pages/read/Read.vue"),
      });
    });

    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(resolve(__dirname, "store"));
    });
  },
});
