import { defineStore } from "pinia";
import { wineState } from "./wineState";
import { wineAction } from "./wineActions";

export const useWineStore = defineStore("wineStore", {
  state: wineState,
  actions: wineAction,
});
