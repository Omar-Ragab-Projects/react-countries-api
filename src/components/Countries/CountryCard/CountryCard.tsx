import { useEffect, useState } from "react";
import "./CountryCard.css";
import CardInformation from "./CardInformation/CardInformation";
import { useNavigate } from "react-router-dom";
type name = {
  [key: string]: string;
};
function CountryCard({ countries, country, src, population, region, capital }) {
  // const [showPopup, setShowPopup] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (selectedCountry) {
  //     navigate("/country-information");
  //   }
  // }, [selectedCountry]);

  function onShowPopup() {
    // setShowPopup(true);

    const selected =
      countries[countries.map((c) => c.name.common).indexOf(country)];

    setSelectedCountry(selected);
    // navigate("/country-information");
  }

  return (
    <div className="country-card" onClick={onShowPopup}>
      <img src={src} />
      <div className="details">
        <h3 className="country">{country}</h3>
        <p>
          <b>Population: </b>
          <span>{population}</span>
        </p>
        <p>
          <b>Region: </b>
          <span>{region}</span>
        </p>
        <p>
          <b>Capital: </b>
          <span>{capital}</span>
        </p>
      </div>
      {/* <CardInformation selectedCountry={selectedCountry} /> */}
    </div>
  );
}

export default CountryCard;
