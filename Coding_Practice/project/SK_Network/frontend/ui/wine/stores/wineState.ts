import { Wine } from "./wineType";

export const wineState = () => ({
  wineList: [] as Wine[],
  wine: null as Wine | null,

  currentPage: 1,
  totalPages: 0,
});
