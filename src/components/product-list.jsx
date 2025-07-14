import { useShoppingCart } from "../hooks";
import catalogProducts from "../data.json"; 

export default function ProductList() {
  const { products, addProduct } = useShoppingCart();

  const isInCart = (id) => products.some((p) => p.id === id);

  return (
    <div className="container mx-auto px-4 mt-8">
      <h3 className="text-center text-2xl font-semibold mb-8">Catálogo de Productos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {catalogProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-contain bg-white rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h5 className="text-lg font-semibold mb-2">{product.name}</h5>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="font-medium text-indigo-700 mb-4">$ {product.price.toFixed(2)}</span>
              <button
                onClick={() => addProduct(product)}
                disabled={isInCart(product.id)}
                className={`mt-auto px-4 py-2 rounded border font-medium transition-colors ${
                  isInCart(product.id)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {isInCart(product.id) ? "En el carrito" : "Agregar al carrito"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
