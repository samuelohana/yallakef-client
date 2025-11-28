export interface Activity {
  imageUrl: string;
  isFavorite: boolean;
  isFeatured: boolean;
  category: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  priceType: 'person' | 'group';
}

