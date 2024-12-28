const RestaurantTitle = (props) => {
  const {
    orderabilityCommunication,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    name,
  } = props;
  return (
    <div>
      <h1 className="res-name-menus">{name}</h1>
      <div className="res-info-container">
        <div className="res-info-container-child">
          {orderabilityCommunication?.message?.text && (
            <div className="open-status-message-container">
              <i className="fas fa-solid fa-circle-exclamation"></i>
              <h3 className="open-status-message">
                {orderabilityCommunication?.message?.text}
              </h3>
            </div>
          )}
          <div className="rating-sla">
            <div className="res-info-rating-cost">
              <h3>
                <i
                  className="fas fa-solid fa-star"
                  style={{ color: "#f38027" }}
                ></i>{" "}
                {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}{" "}
                <i
                  className="fas fa-solid fa-wallet"
                  style={{ color: "#f38027" }}
                ></i>
              </h3>
              {/* <h3>{veg ? "Veg" : "Non-veg"}</h3> */}
              <h4>{cuisines.join(", ")}</h4>
              <h4>Outlet {areaName}</h4>
              <h5>
                {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTitle;
