import { useShoppingCart } from "../hooks";

export default function Cart() {
  const { products, removeProduct, clearShoppingCart } = useShoppingCart();

  if (products.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 mt-8 text-center text-gray-500">
        El carrito está vacío.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <ul className="space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
          >
            <span>{product.name}</span>
            <button
              onClick={() => removeProduct(product.id)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={clearShoppingCart}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Vaciar Carrito
      </button>
    </div>
  );
}
