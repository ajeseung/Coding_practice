export interface BeerState {
  beerList: Beer[];
  beer: Beer | null;

  currentPage: Number;
  totalPages: Number;
}

export interface Beer {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}
