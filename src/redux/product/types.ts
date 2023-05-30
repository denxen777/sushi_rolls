export type TStateProduct = {
  items: TItemProduct[];
  status: 'loading' | 'success' | 'error';
};

export type TItemProduct = {
  id: number;
  imgURL: string;
  name: string;
  weight: number;
  description: string;
  price: number;
  categoryId: number;
  amount: number;
};
