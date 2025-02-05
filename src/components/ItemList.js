import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = (Items) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    // Dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {Items.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 bg-black text-white rounded-lg mx-[50px] my-[72px]  shadow-lg m-auto"
                onClick={() => handleAddItems(item)}
                
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
