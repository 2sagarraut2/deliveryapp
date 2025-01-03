import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = ({ resId }) => {
  const [resInfo, setResInfo] = useState([]);

  // fetch data
  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json);
    // console.log("useeffect" + json);
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
