import { useEffect, useState } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (resid) => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, [resid])

    const fetchData = async()=> {
        const proxyUrl = `/.netlify/functions/swiggy-proxy?url=${encodeURIComponent(Menu_API)}`;;
        const data = await fetch(proxyUrl+resid);
        const json = await data.json();

        setResInfo(json);

    }

    return ResInfo;
};

export default useRestaurantMenu;
