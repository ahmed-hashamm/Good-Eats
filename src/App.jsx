
import Navbar from './components/Navbar'
import Category from './components/Category'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import Cart from './pages/cart/ShoopingCart'
import Food from "../src/pages/foodOptions/FoodPage";
import ShopContextProvider from './context/shop_context';

function App() {
  return (
    <div>
     <ShopContextProvider>

      <Router>
        <Navbar />
        <Routes>  
        <Route path="/" element={<Food/>}/>
        <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Category/>
      </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
