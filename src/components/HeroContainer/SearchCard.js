import React, { useState, useRef } from "react";

// import components
import ActionBtn from "./ActionBtn";
import FormInput from "./FormInput";

// Import utils
import getLocation from "../../utils/getLocation";

// Import services
import fetchRestroByGeo from "../../services/fetchRestroByGeo";
import fetchRestroByLocality from "../../services/fetchRestroByLocality";

const SearchBar = (props) => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const [locality, setLocality] = useState("");

  const [geolocation, toggleGeolocation] = useState(false);

  const [areaRadius, setAreaRadius] = useState(5000);

  const { setLoading, updateRestroList, loading } = props;

  const localityRef = useRef();

  // Handle input fileds update
  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name) {
      if (name == "locality" && value != locality) setLocality(value);

      if (name == "areaRadius" && value != areaRadius) {
        let regex = /^\d*$/;
        if (regex.test(value)) setAreaRadius(value);
      }
    }
  };

  // Handle geo coordinates update
  const handleCoordinates = async () => {
    if (geolocation) return false;

    const { error, data } = await getLocation();

    if (data) {
      setCoordinates(data);
      setLocality(`${data.latitude}, ${data.longitude}`);
      toggleGeolocation(!geolocation);
    } else {
      alert(error);
    }
  };

  // Handle geo coordinates clearence
  const handleGeoClearance = () => {
    setCoordinates({ latitude: 0, longitude: 0 });
    setLocality("");
    toggleGeolocation(!geolocation);
  };

  const handleRestroSearch = async () => {
    if (!locality.length) {
      localityRef.current.placeholder = "Provide a location first";
      return false;
    }

    if (!loading) {
      if (geolocation) {
        setLoading(true);
        const { payload, error } = await fetchRestroByGeo(
          { ...coordinates },
          areaRadius
        );
        setLoading(false);
        updateRestroList({ payload, error });
      } else {
        setLoading(true);
        const { payload, error } = await fetchRestroByLocality(
          locality,
          areaRadius
        );
        setLoading(false);
        updateRestroList({ payload, error });
      }
    }
  };

  return (
    <div className="hero-container__search-bar">
      <div className="search-bar__left">
        <FormInput
          type="Location"
          placeholder="Enter Locality"
          name="locality"
          value={locality}
          handleChange={handleChange}
          disabled={geolocation}
          clearance={geolocation}
          handleClearance={handleGeoClearance}
          refer={localityRef}
        />
        <ActionBtn type="Location" handleClick={handleCoordinates} />
      </div>
      <div className="search-bar__right">
        <FormInput
          type="Radius"
          placeholder="Radius (in mtr)"
          name="areaRadius"
          value={areaRadius}
          handleChange={handleChange}
        />
        <ActionBtn
          type="Search"
          handleClick={handleRestroSearch}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default SearchBar;
