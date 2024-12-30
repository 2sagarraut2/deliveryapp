import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
// import VegNonVegFilter from "./VegNonVegFilter";
import RestaurantTitle from "./RestaurantTitle";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  // const [filteredMenu, setFilteredMenu] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  const params = useParams();
  const { resId } = params;

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json);
    // setFilteredMenu(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
    // console.log("useeffect, " + json);
  };

  // console.log(
  //   resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    );

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRatingString,
    // cloudinaryImageId,
    // labels,
    totalRatingsString,
    orderabilityCommunication,
    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  //   component start here
  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-72 p-8">
      <RestaurantTitle
        orderabilityCommunication={orderabilityCommunication}
        avgRatingString={avgRatingString}
        totalRatingsString={totalRatingsString}
        costForTwoMessage={costForTwoMessage}
        cuisines={cuisines}
        areaName={areaName}
        sla={sla}
        name={name}
      />
      <div>
        <div>
          <span className="flex justify-center my-4 mx-12">
            <h3>-- Menu --</h3>
          </span>
        </div>
        {/* <div>
          <div>
            <VegNonVegFilter
              resInfo={resInfo}
              setFilteredMenu={setFilteredMenu}
            />
          </div>
        </div> */}
        <div>
          <span className="block mb-2 w-full"></span>
        </div>
        <div>
          {/* accordion is here */}
          <div>
            <div>
              {categories.map((category, index) => (
                // controlled component
                <RestaurantCategory
                  // filteredMenu={filteredMenu}
                  key={category?.card?.card?.title}
                  data={category?.card?.card}
                  showItems={index === showIndex ? true : false}
                  setShowIndex={() => setShowIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
