'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Header() {
  const { cartItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-slate-400 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-end">
        <Link href="/">
          <img src="/images/logo-ferma.png" alt="logo" width={'180px'} />
        </Link>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="text-gray-700 dark:text-gray-300">
            <i className="fas fa-shopping-cart text-2xl text-green-700"></i>
            <span className="ml-1">{cartItems.length}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
