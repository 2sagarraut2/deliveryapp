import MenuItem from "./MenuItem";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const { title, itemCards } = data;

  console.log(itemCards);

  const handleToggleClick = () => {
    setShowIndex();
  };

  return (
    <div className="rounded cursor-pointer">
      <div>
        <button
          className="flex justify-between items-center w-full p-4 cursor-pointer text-base border-t-8 border-solid -gray-300"
          onClick={handleToggleClick}
        >
          <h3 className="m-0 text-lg font-bold flex align-middle">
            {title} ({data.itemCards.length})
          </h3>
          <span>
            <span>
              <i className="fas fa-solid fa-angle-up fa-lg"></i>
            </span>
          </span>
        </button>
      </div>
      {showItems && <MenuItem itemCards={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
