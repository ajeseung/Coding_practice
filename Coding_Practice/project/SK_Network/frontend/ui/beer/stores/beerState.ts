import { Beer } from "./beerType";

export const beerState = () => ({
  beerList: [] as Beer[],
  beer: null as Beer | null,

  currentPage: 1,
  totalPages: 0,
});
