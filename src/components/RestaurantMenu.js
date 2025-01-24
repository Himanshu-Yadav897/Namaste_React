import useRestaurantMenu from "../utils/useRestaurantMenu";
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [ResInfo, setResInfo] = useState(null);

  // accordian state variable
  const [showItems, setShowItems] = useState(1);

  const { resid } = useParams();

  // abstraction of fetching the data in custom hooks
  const ResInfo = useRestaurantMenu(resid);
  // console.log("resInfo ", ResInfo);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(Menu_API + resid + Menu_API2);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  // };

  if (ResInfo === null) {
    return <Shimmer />;
  }

  // const { name, city, cuisines } = ResInfo?.data?.cards?.[2]?.card?.card?.info;

  // const { itemCards } =
  //   ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);

  const restaurantInfo =
    ResInfo?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card
      ?.info || {};

  const {
    name = "Restaurant Name",
    city = "City",
    cuisines = [],
  } = restaurantInfo;

  const menuCard = ResInfo?.data?.cards
    ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (card) => card?.card?.card?.itemCards
    );

  const categories = ResInfo?.data?.cards
    ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const itemCards = menuCard?.card?.card?.itemCards || [];

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-5">{name}</h1>
      <h2 className="font-bold text-lg">City - {city}</h2>
      <h4 className="font-bold text-lg">Cuisines - {cuisines.join(" , ")}</h4>

      {/* Accordian Category */}
      {categories.map((Category, index) => (
        <RestaurantCategory
          key={Category?.card?.card?.title}
          data={Category?.card?.card}
          showItems={index === showItems ? true : false}
          setShowItems={() => {
            setShowItems(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
