export interface NavMenu {
  title?: string;
  to?: string;
  icon?: string;
}

interface ICategory {
  id: string;
  name: string;
}
export interface IProduct {
  id: string;
  name: string;
  price: number;
  rate?: number;
  fullPrice?: number;
  status?: IStatusProduct;
  description?: string;
  sizes?: string[];
  colors?: string[];
  sku?: string;
  tags?: string[];
  category?: ICategory;
  imageUrl: string;
  images?: string[];
  reviews?: IPreview[];
}
type IStatusProduct = 'New' | 'Sales';
interface IPreview {
  id: string;
  message: string;
  namReviewer: string;
  userId: string;
}
