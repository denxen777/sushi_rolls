export type TStateCart = {
  items: TItemCart[];
  totalPrice: number;
};

export type TItemCart = {
  id: number;
  imgURL: string;
  name: string;
  weight: number;
  price: number;
  amount: number;
};
