import { useEffect, useState } from 'react';
import ShoppingCart from '../types/ShoppingCart';
import { useAlert } from '../contexts/AlertContext';

export default function useCartIds() {
  const [cart, setCart] = useState<ShoppingCart[]>([]);
  const { showAlert } = useAlert()

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(productId: number, quantity: number ) {
    const product = {
        productId: productId,
        quantity: quantity
    } as ShoppingCart
    setCart(prev => (prev.includes(product) ? prev : [...prev, product]));
    showAlert({ type: 'success', message: 'Item adicionado ao carrinho!' });
  }

  function removeFromCart(product: ShoppingCart) {
    setCart(prev => prev.filter(product => product.productId !== product.productId));
  }

  function clearCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }
}