import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import MenuItem from "./MenuItem";
import VegNonVegFilter from "./VegNonVegFilter";
import RestaurantTitle from "./RestaurantTitle";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  //   const [searchComponent, setSearchComponent] = useState(false);
  const [open, setOpen] = useState(true);

  const toggleAccordion = () => {
    setOpen(!open);
  };

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
    setFilteredMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    // console.log("useeffect" + json.data);
  };

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

  const { title } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  //   component start here
  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
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
          <span className="menu-title-wrapper">
            <h3>-- Menu -- </h3>
          </span>
        </div>
        {/* search input will go here */}
        <div>
          {/* <div>
            <SearchMenu
              title={title}
              countOfMenu={filteredMenu}
              itemCards={filteredMenu}
              searchComponent={searchComponent}
              setSearchComponent={setSearchComponent}
              filteredMenu={filteredMenu}
              setFilteredMenu={setFilteredMenu}
              resInfo={resInfo}
            />
          </div> */}

          <div>
            <VegNonVegFilter
              resInfo={resInfo}
              setFilteredMenu={setFilteredMenu}
            />
          </div>
        </div>
        <div>
          <span className="bottom-border-span"></span>
        </div>
        <div>
          {/* Menu Item start here */}
          <div>
            <div className="accordion-wrapper">
              <button className="toggle-button" onClick={toggleAccordion}>
                <h3 className="accordion">
                  {title} ({filteredMenu.length})
                </h3>
                <span>
                  <span>
                    {open ? (
                      <i className="fas fa-solid fa-angle-up fa-lg"></i>
                    ) : (
                      <i className="fas fa-solid fa-angle-down fa-lg"></i>
                    )}
                  </span>
                </span>
              </button>
            </div>

            <MenuItem
              open={open}
              setOpen={setOpen}
              title={title}
              //   countOfMenu={filteredMenu}
              itemCards={filteredMenu}
            />
            {/* <MenuItem
              title={
                resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[4]?.card?.card?.title
              }
              countOfMenu={
                resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[4]?.card?.card?.itemCards
              }
              itemCards={
                resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[4]?.card?.card?.itemCards
              }
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
