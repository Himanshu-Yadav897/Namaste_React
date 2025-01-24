import { clearItems } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearItems());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
        <button className="bg-black text-white rounded-lg p-2 m-2"
        onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>Your Cart is Empty, do more Shopping</h1>}
      </div>
    </div>
  );
};

export default Cart;
