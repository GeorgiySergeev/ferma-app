export default function Product({ id, image, name, weight, option, price, addToCart }) {
  const product = { id, image, name, weight, option, price };
  return (
    <>
      <div
        key={id}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <p>Вага: {weight}</p>
            <p>Жирність: {option}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-orange-400">
              {price} грн.
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2 rounded-md">
              Додати в кошик
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
