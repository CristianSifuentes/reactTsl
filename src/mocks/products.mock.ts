// Import all product images
import blackTshirt from '@/assets/product-black-tshirt.jpg';
import whiteHoodie from '@/assets/product-white-hoodie.jpg';
import greySweatshirt from '@/assets/product-grey-sweatshirt.jpg';
import blackJacket from '@/assets/product-black-jacket.jpg';
import whiteCap from '@/assets/product-white-cap.jpg';
import blackBackpack from '@/assets/product-black-backpack.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Tesla Black T-Shirt',
    price: 35,
    image: blackTshirt,
    category: 'T-Shirts',
    description:
      'Premium cotton t-shirt with a minimalist design inspired by Tesla.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
  },
  {
    id: '2',
    name: 'Tesla White Hoodie',
    price: 85,
    image: whiteHoodie,
    category: 'Hoodies',
    description: 'High-quality hoodie with embroidered Tesla logo.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray'],
  },
  {
    id: '3',
    name: 'Tesla Gray Sweatshirt',
    price: 75,
    image: greySweatshirt,
    category: 'Sweatshirts',
    description: 'Classic crewneck sweatshirt with a modern and comfortable fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Black', 'Navy Blue'],
  },
  {
    id: '4',
    name: 'Tesla Black Jacket',
    price: 150,
    image: blackJacket,
    category: 'Jackets',
    description: 'Water-resistant technical jacket with an elegant design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Dark Gray'],
  },
  {
    id: '5',
    name: 'Tesla White Cap',
    price: 25,
    image: whiteCap,
    category: 'Accessories',
    description: 'Adjustable cap with high-quality embroidered Tesla logo.',
    sizes: ['One Size'],
    colors: ['White', 'Black', 'Gray'],
  },
  {
    id: '6',
    name: 'Tesla Black Backpack',
    price: 120,
    image: blackBackpack,
    category: 'Accessories',
    description:
      'Minimalist backpack with organized compartments and ergonomic design.',
    sizes: ['One Size'],
    colors: ['Black', 'Gray'],
  },
  {
    id: '7',
    name: 'Tesla White T-Shirt',
    price: 35,
    image: blackTshirt, // Reused image for simplicity
    category: 'T-Shirts',
    description: 'White organic cotton t-shirt with subtle Tesla logo.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray'],
  },
  {
    id: '8',
    name: 'Tesla Black Hoodie',
    price: 85,
    image: whiteHoodie,
    category: 'Hoodies',
    description: 'Black hoodie with kangaroo pocket and front design.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy Blue'],
  },
];
