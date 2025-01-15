import { defineStore } from "pinia";
import { beerState } from "./beerState";
import { beerAction } from "./beerActions";

export const useBeerStore = defineStore("beerStore", {
  state: beerState,
  actions: beerAction,
});
