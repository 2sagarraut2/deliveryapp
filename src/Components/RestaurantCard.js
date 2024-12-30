import React from "react";
// import "../App.css";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantsData } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } =
    restaurantsData?.info;

  return (
    <div>
      <div>
        <img
          alt="food"
          className="w-64 h-40 rounded-xl"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="flex flex-col p-2 overflow-hidden text-ellipsis truncate w-64 flex-wrap">
          <div className="flex font-bold text-lg">{name}</div>
          <div className="flex">
            <div>
              <i
                className="fas fa-solid fa-star"
                style={{ color: "#f38027" }}
              ></i>
            </div>
            <span>
              {" "}
              <h4 className="m-0 text-base font-semibold">
                <span className="font-normal">{avgRatingString}</span> •{" "}
                <span>{sla?.slaString} </span>
              </h4>
            </span>
            {/* <div>
              <i class="fa fa-solid fa-truck" style={{ color: "#FFD43B" }}></i>
            </div> */}
          </div>
          <div className="w-60 truncate">
            <div className="overflow-hidden text-ellipsis truncate w-60 flex flex-wrap">
              <h4 className="font-light w-full overflow-hidden text-ellipsis truncate line-clamp-1 ">
                {cuisines.join(", ")}
              </h4>
            </div>
            <div>
              <h4 className="font-light w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {areaName}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
