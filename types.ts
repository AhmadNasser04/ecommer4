export type Category = {
  id: string;
  name: string;
  slogan: string;
  imageUrl: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  isFeatured: boolean;
  images: Image[];
  category: Category;
  color: Color;
  size: Size;
};

export type Image = {
  id: string;
  url: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};
