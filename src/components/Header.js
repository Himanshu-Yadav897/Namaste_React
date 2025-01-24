import { LOGO_URL } from "../utils/constants";
import { useState, React } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [Name, setName] = useState("login");
  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="flex justify-between  bg-slate-200 shadow-lg">
      <div className="logo-container ">
        <Link to={"/"}>
          {" "}
          <img className="w-48 h-36 " src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {OnlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:font-bold ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to={"/contact"}> Contact Us</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} Items)</Link>
          </li>
          <button
            className="hover:font-bold"
            onClick={() => {
              if (Name === "login") {
                setName("logout");
              } else {
                setName("login");
              }
            }}
          >
            {Name}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
