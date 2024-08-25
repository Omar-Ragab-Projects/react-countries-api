import { Link, useParams } from "react-router-dom";
import "./CardInformation.css";
import { useEffect, useState } from "react";
import Header from "../../../header/Header";

function CardInformation() {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((d) => d.json())
      .then((c) => setCountryInfo(c[0]));
  }, [name]);
  // console.log(Object.keys(countryInfo?.currencies)[0]);
  // console.log(countryInfo?.borders);
  if (countryInfo)
    return (
      <>
        <Header />
        <div className="card-information">
          <Link to={"/"}>
            <button>Back</button>
          </Link>

          <div className="card-info">
            <div className="image">
              <img src={countryInfo.flags.png} />
            </div>
            <div className="info">
              {" "}
              <h3>{countryInfo.name.common}</h3>
              <div className="more-info">
                <div className="left">
                  <div>
                    <b>Native Name: </b>
                    {countryInfo.name.official}
                  </div>
                  <div>
                    <b>Population: </b>
                    {countryInfo.population}
                  </div>
                  <div>
                    <b>Region: </b>
                    {countryInfo.region}
                  </div>
                  <div>
                    <b>Sub Region: </b>
                    {countryInfo.subregion}
                  </div>
                  <div>
                    <b>Capital: </b>
                    {countryInfo.capital}
                  </div>
                </div>
                <div className="right">
                  <div>
                    <b>TLD: </b>
                    {countryInfo.tld}
                  </div>
                  <div>
                    <b>Currencies: </b>
                    {Object.keys(countryInfo.currencies)}
                  </div>
                  <div>
                    <b>Languages: </b>
                    {Object.values(countryInfo.languages).join(" ")}
                  </div>
                </div>
              </div>
              {countryInfo.borders && (
                <div className="border-countries">
                  <b>Border Countries: </b>
                  {countryInfo.borders.map((b, i) => (
                    <span key={i}>{b}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
}

export default CardInformation;
