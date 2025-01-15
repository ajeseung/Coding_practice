export interface WhiskeyState {
  whiskeyList: Whiskey[];
  whiskey: Whiskey | null;

  currentPage: Number;
  totalPages: Number;
}

export interface Whiskey {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}
