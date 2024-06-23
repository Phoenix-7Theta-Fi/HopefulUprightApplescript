import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase.from('products').select('*');
      setProducts(data || []);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductListing;
