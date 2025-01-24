import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-slate-100  shadow-lg mx-auto my-4 p-4   ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg ">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>

        {showItems ? <ItemList items={data.itemCards} /> : false}
      </div>
    </div>
  );
};

export default RestaurantCategory;
