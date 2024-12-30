import { useState } from "react";

const VegNonVegFilter = (props) => {
  const [veg, setVeg] = useState(false);
  const [nonVeg, setNonVeg] = useState(false);

  const { resInfo, setFilteredMenu } = props;

  //   non veg selection
  const handleNonVegClick = (e) => {
    if (!veg && !nonVeg) {
      setFilteredMenu(
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    }
    setNonVeg(e.target.checked); // Use e.target.checked to toggle the nonVeg state
    if (e.target.checked) {
      const filteredMenuList =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.filter(
          (item) => item.card.info.itemAttribute.vegClassifier === "NONVEG"
        );
      setFilteredMenu(filteredMenuList);
      setVeg(false); // Ensure Veg filter is deactivated
    } else {
      // Reset to the full menu when unchecked
      setFilteredMenu(
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    }
  };

  //   Veg selection
  const handleVegClick = (e) => {
    if (!veg && !nonVeg) {
      setFilteredMenu(
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    }

    setVeg(e.target.checked); // Use e.target.checked to toggle the veg state

    if (e.target.checked) {
      const filteredMenuList =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.filter(
          (item) => item.card.info.itemAttribute.vegClassifier === "VEG"
        );
      setFilteredMenu(filteredMenuList);
      setNonVeg(false); // Ensure Non-Veg filter is deactivated
    } else {
      // Reset to the full menu when unchecked
      setFilteredMenu(
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    }
  };

  return (
    <div className="flex items-center my-4 mx-0 gap-5">
      <label className="switch">
        <input
          type="checkbox"
          checked={veg}
          value="Veg"
          id="veg"
          onChange={(e) => handleVegClick(e)}
        />
        <span className="slider"></span>
      </label>
      <label htmlFor="veg" className="switch-label">
        Veg
      </label>

      <label className="switch">
        <input
          type="checkbox"
          checked={nonVeg}
          value="Non-veg"
          id="non-veg"
          onChange={(e) => handleNonVegClick(e)}
        />
        <span className="slider"></span>
      </label>
      <label htmlFor="non-veg" className="switch-label">
        Non-veg
      </label>
    </div>
  );
};

export default VegNonVegFilter;
