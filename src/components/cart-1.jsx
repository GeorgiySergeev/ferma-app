'use client';
import React, { useState, useEffect } from 'react';

function Cart1({ items = [], onClose, onUpdateQuantity, onRemove, onCheckout }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full md:w-[480px] bg-white dark:bg-gray-700 h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Кошик</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-8">
              <i className="fas fa-shopping-cart text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600 dark:text-gray-400 text-2xl">Кошик порожній</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-2xl">
                        {item.name}
                      </h3>
                      <p className="text-[#2E7D32] font-bold">{item.price} грн.</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                          <i className="fas fa-minus text-white"></i>
                        </button>
                        <span className="w-8 text-center text-white">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                          <i className="fas fa-plus"></i>
                        </button>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 py-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-900 dark:text-white">Разом до сплати:</span>
                    <span className="text-gray-900 dark:text-white">{total} грн.</span>
                  </div>
                </div>

                <button
                  onClick={() => onCheckout({ items, total })}
                  className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-md font-semibold">
                  Зробити замовлення
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart1;
