export interface NavMenu {
  title?: string;
  to?: string;
  icon?: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  fullPrice?: number;
  status?: IStatusProduct;
}

type IStatusProduct = 'New' | 'Sales';
