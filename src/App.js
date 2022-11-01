import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div>
      <CartProvider>
          <Home />
          <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
