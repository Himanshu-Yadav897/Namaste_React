import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { resName } = props;
  // console.log(resName);
  
  const { name, cuisines, avgRating, sla } = resName.info;

  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resName.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating + "*"}</h4>
      <h4>{sla.deliveryTime + " minutes"}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black p-2 m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
