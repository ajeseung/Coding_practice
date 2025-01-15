export interface WineState {
  wineList: Wine[];
  wine: Wine | null;

  currentPage: Number;
  totalPages: Number;
}

export interface Wine {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}
