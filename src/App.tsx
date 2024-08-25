import Header from "./components/header/Header";
import Filter from "./components/Filter/Filter";
import Countries from "./components/Countries/Countries";
import { useState } from "react";

function App() {
  const [searchVal, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  function onSelectedRegion(e) {
    setSelectedRegion(e.target.textContent);
    openMenu();
  }

  function openMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Header />
      <Filter
        searchVal={searchVal}
        onChange={handleSearchChange}
        currentRegion={selectedRegion}
        onChangeRegion={onSelectedRegion}
        showMenu={showMenu}
        openMenu={openMenu}
      />
      <Countries searchValue={searchVal} searchRegion={selectedRegion} />
    </>
  );
}

export default App;
