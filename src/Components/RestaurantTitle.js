const RestaurantTitle = (props) => {
  // console.log(props);
  const {
    orderabilityCommunication,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla,
    name,
  } = props;
  return (
    <div>
      <div className="my-4 pl-2">
        <h1 className="font-extrabold text-2xl">{name}</h1>
      </div>
      <div className="pt-0 pl-4 pr-4 pb-4 border-x-8 border-b-8 rounded-b-3xl border-slate-300 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="rounded-3xl border-2 p-4">
          {orderabilityCommunication?.message?.text && (
            <div className="border-1 border-solid">
              <i className="fas fa-solid fa-circle-exclamation"></i>
              <h3 className="open-status-message">
                {orderabilityCommunication?.message?.text}
              </h3>
            </div>
          )}
          <div className="font-semibold text-base">
            <div className="res-info-rating-cost">
              <h3>
                <i
                  className="fas fa-solid fa-star"
                  style={{ color: "#1ba672" }}
                ></i>{" "}
                {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}{" "}
              </h3>
              {/* <h3>{veg ? "Veg" : "Non-veg"}</h3>
              <h4>{cuisines.join(", ")}</h4> */}
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
