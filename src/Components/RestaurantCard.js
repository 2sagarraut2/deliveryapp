import React from "react";
import "../App.css";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantsData } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } =
    restaurantsData?.info;

  return (
    <div>
      <div className="card">
        <img
          alt="food"
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="res-info">
          <div className="res-name">{name}</div>
          <div className="res-icon-container">
            <div>
              <i
                className="fas fa-solid fa-star"
                style={{ color: "#f38027" }}
              ></i>
            </div>
            <span>
              {" "}
              <h4 className="rating-sla">
                <span className="rating">{avgRatingString}</span> •{" "}
                <span className="sla">{sla?.slaString} </span>
              </h4>
            </span>
            {/* <div>
              <i class="fa fa-solid fa-truck" style={{ color: "#FFD43B" }}></i>
            </div> */}
          </div>
          <h4 className="cuisines">{cuisines.join(", ")}</h4>
          <h4 className="area-name">{areaName}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
