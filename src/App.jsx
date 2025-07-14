import Header from "./components/header";
import ProductList from "./components/product-list";
import Cart from "./components/cart";
import UserForm from "./components/user-form";

function App() {
  return (
    <div className="w-full min-h-screen pb-12">
      <Header />
      <Cart />         {/* Mostrar carrito */}
      <ProductList />
      <UserForm />     {/* Mostrar formulario */}
    </div>
  );
}

export default App;
