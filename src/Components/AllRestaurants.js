import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const AllRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(false);
  // const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>You are offline</h1>
      </div>
    );
  }

  const filterRestaurants = () => {
    if (!ratingFilter) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4
      );

      setFilteredRestaurants(filteredList);
      setRatingFilter(true);
    } else {
      setFilteredRestaurants(listOfRestaurants);
      setRatingFilter(false);
    }
  };

  // const handleTypeText = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const handleOnSearch = () => {
  //   // console.log(searchText);
  //   const searchedRestaurants = listOfRestaurants.filter(
  //     (res) =>
  //       res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //       res.info.cuisines
  //         .toString()
  //         .toLowerCase()
  //         .includes(searchText.toLowerCase()) ||
  //       res.info.areaName.toLowerCase().includes(searchText.toLowerCase())
  //   );

  //   setFilteredRestaurants(searchedRestaurants);
  // };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-44">
      <div className="flex py-4 ">
        {/* <section>
          <h3 className="whats-mind">What's on your mind?</h3>
        </section> */}
        <section className="flex items-start px-2">
          {/* <input
            value={searchText}
            onChange={handleTypeText}
            name="search-input"
            className="search-input"
            placeholder="Search for restaurant and food"
          />
          <button className="filter-button" onClick={handleOnSearch}>
            Search
          </button> */}

          <button
            className="rounded-full border-2 border-solid border-[#02060c26] py-2 px-4 font-normal text-sm"
            onClick={filterRestaurants}
          >
            {ratingFilter ? "Ratings 4.0+ X" : "Ratings 4.0+"}
          </button>
        </section>
      </div>
      <div className="flex items-start flex-wrap cursor-pointer">
        {filteredRestaurant.map((restaurant) => {
          return (
            <div
              key={restaurant.info.id}
              className="m-4 gap-y-1 grid grid-rows-1 grid-flow-row gap-1 hover:scale-95 translate-y-px"
            >
              <Link
                className="no-underline decoration-inherit"
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard restaurantsData={restaurant} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllRestaurants;
