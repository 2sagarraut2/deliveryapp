import { MENU_IMAGES } from "../utils/constants";

const MenuItem = (props) => {
  const { itemCards } = props;
  // console.log("Menu items", itemCards);

  return (
    <div>
      <div className="">
        <div className="">
          {itemCards.map((item) => (
            <div
              className="flex justify-between items-start mb-2 py-4 border-b-2 border-solid -gray-300"
              key={item?.card?.info?.id}
            >
              <div className="flex flex-wrap box-border">
                <div className="list-none p-0 m-0">
                  <div>
                    {item?.card?.info?.itemAttribute.vegClassifier === "VEG" ? (
                      <i
                        className="fas fa-solid fa-square"
                        style={{ color: "#008000" }}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-solid fa-drumstick-bite"
                        style={{ color: "#ff0000" }}
                      ></i>
                    )}
                  </div>
                  <li className="text-lg font-medium mb-1">
                    {item?.card?.info?.name}
                  </li>
                  <li className="text-base font-normal mb-2">
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </li>
                  {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                    <li className="flex">
                      <div>
                        <span>
                          <i
                            className="fas fa-solid fa-star"
                            style={{ color: "#1ba672" }}
                          ></i>
                        </span>
                        <span
                          style={{ color: "#1ba672" }}
                          className="font-medium"
                        >
                          {item?.card?.info?.ratings?.aggregatedRating?.rating}
                        </span>
                      </div>
                      <div>
                        <span>
                          (
                          {
                            item?.card?.info?.ratings?.aggregatedRating
                              ?.ratingCountV2
                          }
                          )
                        </span>
                      </div>
                    </li>
                  )}
                  <div className="text-sm leading-none mt-0">
                    {item?.card?.info?.description}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-end box-border">
                {item?.card?.info?.imageId && (
                  <img
                    className="w-3/5 h-5 rounded-2xl object-cover"
                    alt="menu-image"
                    style={{ width: "60%", height: "60%" }}
                    src={MENU_IMAGES + item?.card?.info?.imageId}
                  />
                )}
                <button className="p-2 border-amber-200 bg-white text-black shadow-lg absolute rounded-lg">
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="block mb-1 w-full"></span>
      </div>
    </div>
  );
};

export default MenuItem;
