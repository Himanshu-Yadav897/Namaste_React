import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const { userName, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(proxyUrl + targetUrl);

    const JSON = await data.json();
    console.log(JSON);

    // Find the first valid card containing restaurants data dynamically
    const cards = JSON?.data?.cards;
    const foundCard = cards?.find(card =>
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    if (foundCard) {
      const restaurants = foundCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setList(restaurants);
      setFilter(restaurants);
    } else {
      console.error("No valid restaurant data found.");
    }
  };

  const OnlineStatus = useOnlineStatus();

  if (!OnlineStatus) {
    return <h1>offline, Please use your internet connection</h1>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-black border-solid "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg hover:bg-green-300"
            onClick={() => {
              const filter = list.filter((res) => {
                console.log(res.info.name);

                return res.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });

              setFilter(filter);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-300"
            onClick={() => {
              const filterList = list.filter((res) => {
                return res.info.avgRating < 4.3;
              });
              setFilter(filterList);
            }}
          >
            Top Rated Restaurants
          </button>

          <div className="m-6">
            <label>Username : </label>
            <input
              className="border border-black px-2"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {filter.map((res) => (
          <Link key={res.info.id} to={"restaurant/" + res.info.id}>
            {res.info.avgRating > 4.1 ? (
              <RestaurantCardPromoted resName={res} />
            ) : (
              <RestaurantCard resName={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
