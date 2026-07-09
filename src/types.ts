export interface Product {
  id: number;
  name: string;
  description: string;
  /** 税込価格（日本円） */
  price: number;
  /** public/images 配下の画像パス */
  imageUrl: string;
}
