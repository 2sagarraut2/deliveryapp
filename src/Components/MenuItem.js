import { MENU_IMAGES } from "../utils/constants";

const MenuItem = (props) => {
  const { itemCards, open } = props;

  return (
    <div>
      <div>
        <div>
          {open &&
            itemCards.map((item) => (
              <div className="menu-container" key={item?.card?.info?.id}>
                <div className="menu-card">
                  <div className="menu-name-price-dec-container">
                    <div>
                      {item?.card?.info?.isVeg ? (
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
                    <li className="menu-name">{item?.card?.info?.name}</li>
                    <li className="menu-price">
                      ₹
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </li>
                    <div className="menu-description">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                </div>
                <div className="menu-image-container">
                  {item?.card?.info?.imageId && (
                    <img
                      className="menu-image"
                      alt="menu-image"
                      style={{ width: "60%", height: "60%" }}
                      src={MENU_IMAGES + item?.card?.info?.imageId}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* <div>
        <span className="bottom-border-span"></span>
      </div> */}
    </div>
  );
};

export default MenuItem;
