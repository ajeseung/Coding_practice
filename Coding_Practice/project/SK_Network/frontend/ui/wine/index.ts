import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
  meta: {
    name: "wine",
    configKey: "wine",
  },

  setup(moduleOptions, nuxt) {
    const themeDir = resolve(__dirname, "..");

    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        name: "Wine",
        path: "/wine/list",
        file: resolve(themeDir, "wine/pages/list/Wine.vue"),
      });

      pages.push({
        name: "WineRegister",
        path: "/wine/register",
        file: resolve(themeDir, "wine/pages/register/Register.vue"),
      });

      pages.push({
        name: "WineRead",
        path: "/wine/read/:id",
        file: resolve(themeDir, "wine/pages/read/Read.vue"),
      });
    });

    nuxt.hook("imports:dirs", (dirs) => {
      dirs.push(resolve(__dirname, "store"));
    });
  },
});
