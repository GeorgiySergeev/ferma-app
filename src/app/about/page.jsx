'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import Cart1 from '@/components/cart-1';
import Link from 'next/link';

function MainComponent() {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative h-[500px]">
        <img
          src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg"
          alt="Beautiful dairy farm with cows grazing in green pastures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold text-white text-center">FERMA</h1> */}
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div>
            <Link href="/" className=" dark:text-gray-300 hover:text-[#2E7D32] block mb-3">
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Про нас</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-xl">
                <span className="text-green-600 text-2xl">
                  Унікальний сервіс турботи про близьких — Ferma.
                </span>
                <br></br> Ми створили цей сервіс для обмеженого кола людей, які цінують якісні
                продукти харчування та прагнуть підтримувати своє здоров’я і здоров’я своїх рідних.
                Наші продукти надходять безпосередньо з фермерського господарства, розташованого в
                екологічно чистому регіоні України — Закарпатті, де дотримуються найвищих стандартів
                якості та чистоти. Це не просто магазин, а спільнота однодумців, які взяли на себе
                відповідальність піклуватися один про одного.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xl">
                <span className="text-green-600">
                  Ми не рекламуємо наш сервіс у соціальних мережах
                </span>{' '}
                або через інші засоби масової комунікації, адже ферма має обмежені виробничі
                потужності. Зараз спільнота ще відкрита для нових учасників, але при досягненні 30
                сімей прийом нових членів припиниться. Зважаючи на обмежену кількість учасників і
                високі стандарти якості,{' '}
                <span className="text-green-600">
                  всі замовлення приймаються лише за умови 100% передплати.
                </span>
                Замовлення потрібно робити до першої половини дня вівторка, що дозволяє нам
                ефективно планувати виробництво та доставку, гарантуючи стабільність і якість
                обслуговування кожного члена нашої спільноти.
              </p>
            </div>
            <img
              src="images/about/hero-1.webp"
              alt="Modern dairy farm facilities with advanced milking equipment"
              className="rounded-lg shadow-lg "
            />
          </div>
        </section>
        <section className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Ми цінуємо</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-left">
              <i className="fas fa-award text-[#2E7D32] text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Якість нашої молочної продукціі</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ми використовуємо лише найкращі продукти, які були виготовлені на нашому
                фермерському господарстві.
              </p>
            </div>
            <div className="text-left">
              <i className="fas fa-heart text-[#2E7D32] text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Здоровя наших корів</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ми цінуємо наших корівок. Дбаємо про здоров’я кожної, як про власне.
              </p>
            </div>
            <div className="text-left">
              <i className="fas fa-leaf text-[#2E7D32] text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Нашу ферму</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ми знаходимося в екологічному регіоні Закарпатті, де дотримується найвищих
                стандартів якості та чистоти.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Наша ферма</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="/images/about/about-1.jpg"
              alt="Fresh milk bottles from our dairy"
              className="rounded-lg"
            />
            <img
              src="/images/about/about-2.jpg"
              alt="Artisanal cheese production"
              className="rounded-lg"
            />
            <img
              src="/images/about/about-3.jpg"
              alt="Our happy dairy cows"
              className="rounded-lg"
            />

            <img
              src="/images/about/about-5.jpg"
              alt="Fresh yogurt and dairy products"
              className="rounded-lg"
            />
          </div>
        </section>
      </main>
      {isCartOpen && (
        <Cart1
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={(productId, quantity) => {
            setCartItems(
              cartItems
                .map((item) => (item.id === productId ? { ...item, quantity } : item))
                .filter((item) => item.quantity > 0),
            );
          }}
          onRemove={(productId) => {
            setCartItems(cartItems.filter((item) => item.id !== productId));
          }}
          onCheckout={(data) => {
            console.log('Checkout:', data);
            setIsCartOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default MainComponent;
