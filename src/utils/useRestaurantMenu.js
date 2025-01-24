import { useEffect, useState } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (resid) => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, [resid])

    const fetchData = async()=> {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const data = await fetch(proxyUrl+Menu_API + resid);
        const json = await data.json();

        setResInfo(json);

    }

    return ResInfo;
};

export default useRestaurantMenu;
