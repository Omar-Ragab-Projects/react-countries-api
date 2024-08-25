import { useEffect, useState } from "react";
import "./filter.css";
import { FaAngleDown, FaSearch } from "react-icons/fa";

function Filter({
  searchVal,
  onChange,
  currentRegion,
  onChangeRegion,
  showMenu,
  openMenu,
}) {
  // const [currentRegion, setCurrentRegion] = useState("Filter by Region");
  // const [showMenu, setShowMenu] = useState(false);
  const [regions, setRegions] = useState([]);
  // const [searchValue, setSearchValue] = useState("");

  // function selectedRegion(e) {
  //   setCurrentRegion(e.target.textContent);
  //   openMenu();
  // }

  // function openMenu() {
  //   setShowMenu(!showMenu);
  // }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((rezult) =>
        setRegions([...new Set(rezult.map((re: { region: any }) => re.region))])
      );
  }, []);

  // function searchInput(value: string) {
  //   setSearchValue(value);
  // }

  return (
    <div className="filter">
      <div className="search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchVal}
          onChange={onChange}
        />
      </div>
      <div className="filter-menu">
        <div className="filter-menu-header" onClick={openMenu}>
          <span>{currentRegion || "Filter by Region"}</span>
          <FaAngleDown />
        </div>
        <ul
          className="the-menu"
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          {regions.map((r, i) => {
            return (
              <li key={i} onClick={onChangeRegion}>
                {r}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
