import { useEffect, useState } from "react";
import "./countries.css";
import CountryCard from "./CountryCard/CountryCard";
import { Link } from "react-router-dom";
type data = {
  [key: string]: string;
};
function Countries({ searchValue, searchRegion }) {
  const [countries, setCountries] = useState([]);
  const [manyShow, setManyShow] = useState(8);
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    function fetchData() {
      fetch("https://restcountries.com/v3.1/all")
        .then((data) => data.json())
        .then((countries) => setCountries(countries));
    }

    fetchData();
  }, []);

  function showMore() {
    if (manyShow < countries.length) {
      setManyShow((s) => s + 8);
    } else {
      setShowBtn(!showBtn);
    }
  }
  const searchCountries = countries.filter(
    (c: { name: { common: string } }) =>
      c.name.common.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 &&
      c.region.toLowerCase().indexOf(searchRegion.toLowerCase()) > -1 &&
      c.name.common !== "Israel"
  );

  useEffect(() => {
    if (
      (searchValue.length > 0 || searchRegion !== "") &&
      searchCountries.length <= 8
    ) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
      setManyShow(8);
    }
  }, [searchValue, searchRegion]);
  return (
    <div className="countries">
      {searchCountries.map((country: data, index: number) => {
        if (index < manyShow) {
          return (
            <Link
              to={`country/${country.name.common}`}
              key={country.name.common}
              className="card-links"
            >
              <CountryCard
                key={index}
                country={country.name.common}
                src={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                countries={countries}
              />
            </Link>
          );
        }
      })}
      <button
        style={showBtn ? { display: "block" } : { display: "none" }}
        onClick={showMore}
      >
        Show More
      </button>
    </div>
  );
}

export default Countries;
