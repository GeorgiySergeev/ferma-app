'use client';
import React, { useState, useEffect } from 'react';
import Cart1 from '@/components/cart-1';
import products from '@/utilities/products';
import { useCart } from '@/context/CartContext';
import Product from '@/components/Product';
import { Report } from 'notiflix/build/notiflix-report-aio';

function MainComponent() {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useCart();

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-scree bg-white  dark:bg-gray-900">
      <section className="relative h-[80vh] min-h-[500px]">
        <img
          src="/images/hero/hero-farm.jpeg"
          alt="Сервіс турботи FERMA"
          className="w-full h-full object-cover"
          priority="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Сервіс турботи <span className="text-green-400">FERMA</span>
            </h1>
            <p className="hero__text text-xl md:text-3xl uppercase tracking-wider mb-8 opacity-90">
              Власне фермерське господарство
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Замовити зараз
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-8">Наша продукція</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <Product key={product.id} {...product} addToCart={addToCart} />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <i className="fas fa-truck text-[#2E7D32] text-3xl mb-2"></i>
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600 dark:text-gray-400">Веземо свіже</p>
            </div>
            <div className="text-center">
              <i className="fas fa-certificate text-[#2E7D32] text-3xl mb-2"></i>
              <h3 className="font-semibold mb-2">Якість</h3>
              <p className="text-gray-600 dark:text-gray-400">100% натуральна продукція</p>
            </div>
            <div className="text-center">
              <i className="fas fa-leaf text-[#2E7D32] text-3xl mb-2"></i>
              <h3 className="font-semibold mb-2">Власна ферма</h3>
              <p className="text-gray-600 dark:text-gray-400">Власна ферма, власне виробництво</p>
            </div>
          </div>
        </section>
      </main>

      {isCartOpen && (
        <Cart1
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={(data) => {
            console.log('Checkout:', data);
            Report.success('Замовлення успішно оформлено!', 'Дякуємо і гарного вам дня!', 'OK');
            setCartItems([]);
            setIsCartOpen(false);
          }}
        />
      )}

      {cartItems.length > 0 && (
        <div
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-4  right-4 bg-[#2E7D32] text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-[#1B5E20]">
          <div className="flex items-center gap-2">
            <i className="fas fa-shopping-cart"></i>
            <span>{cartItems.length} товарів у кошику</span>
            <span className="ml-2">|</span>
            <span>
              Сума:<span className="ml-2"></span>
              {cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)} грн.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;
