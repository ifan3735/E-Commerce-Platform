import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import Button from '../Common/Button';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (response.ok) {
          const product = await response.json();
          setProduct(product);
        } else {
          console.error('Failed to fetch product');
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    getProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
      }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded" />
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-indigo-500 mb-4">${product.price.toFixed(2)}</p>
            <div className="mb-4">
              <label htmlFor="quantity" className="block mb-2">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 px-2 py-1 border rounded"
                min="1"
              />
            </div>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
