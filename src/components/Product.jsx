export default function Product({ id, image, name, weight, option, price, addToCart }) {
  const product = { id, image, name, weight, option, price };
  return (
    <div
      key={id}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative group">
        <img src={image} alt={name} className="w-full h-48 object-contain mt-4 p-2" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
          <p className="flex items-center">
            <i className="fa-solid fa-weight-hanging text-orange-600 mr-3"></i>
            <span className="font-medium mr-2">Вага:</span> {weight}
          </p>
          <p className="flex items-center">
            <i className="fa-solid fa-cow text-green-600 mr-3"></i>
            <span className="font-medium mr-2">Жирність:</span> {option}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-gray-900 dark:text-orange-600">
            {price} грн.
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            До кошику
          </button>
        </div>
      </div>
    </div>
  );
}
