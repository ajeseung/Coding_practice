import { Whiskey } from "./whiskeyType";

export const whiskeyState = () => ({
  whiskeyList: [] as Whiskey[],
  whiskey: null as Whiskey | null,

  currentPage: 1,
  totalPages: 0,
});
