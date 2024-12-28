import { useState } from "react";
import MenuItem from "./MenuItem";

const SearchMenu = (props) => {
  const {
    filteredMenu,
    setFilteredMenu,
    searchComponent,
    setSearchComponent,
    title,
    resInfo,
  } = props;
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

    const filteredMenuList = filteredMenu.filter(
      (item) =>
        item?.card?.info?.name
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        item?.card?.info?.description
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );

    setFilteredMenu(filteredMenuList);
  };

  const handleSearchButtonClick = () => {
    setSearchComponent(true);
  };

  const handleBackButtonClick = () => {
    setSearchComponent(false);
    setFilteredMenu(resInfo);
  };

  return (
    <div>
      <div>
        {!searchComponent && (
          <div className="menu-search-button">
            <i class="fas fa-solid fa-magnifying-glass"></i>
            <button className="search" onClick={handleSearchButtonClick}>
              <div className="menu-search-palceholder">Search</div>
            </button>
          </div>
        )}

        {searchComponent && (
          <div>
            <div className="menu-search-input-wrapper">
              <input
                value={searchText}
                onChange={handleSearchChange}
                className="menu-search-input"
                placeholder="Search for dishes"
              />
            </div>{" "}
            <i className="fas fa-solid fa-circle-xmark"></i>
            <div>
              <button className="search" onClick={handleBackButtonClick}>
                Back
              </button>
            </div>
            <MenuItem
              title={title}
              countOfMenu={filteredMenu}
              itemCards={filteredMenu}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMenu;
