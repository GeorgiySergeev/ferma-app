'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">FERMA</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Молочна продукція.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#2E7D32]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2E7D32]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2E7D32]">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Швидка навігація
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#2E7D32]">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#2E7D32]">
                  Наша продукція
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Контакти</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>Україна, Київська область
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>+380 99 123 4567
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>info@ferma.ua
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} FERMA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
