import { defineStore } from "pinia";
import { whiskeyState } from "./whiskeyState";
import { whiskeyAction } from "./whiskeyActions";

export const useWhiskeyStore = defineStore("whiskeyStore", {
  state: whiskeyState,
  actions: whiskeyAction,
});
