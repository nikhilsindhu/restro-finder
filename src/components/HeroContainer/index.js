import React, { useContext } from "react";

// Import components
import SearchCard from "./SearchCard";

// Import contexts
import { RestroListContext } from "../../context/restroListContext";

const HeroContainer = () => {
  const { updateRestroList, setLoading, loading, error } =
    useContext(RestroListContext);

  return (
    <section className="hero-container flex-column">
      <h2 className="hero-container__heading">
        <span>Hungry</span>, We've an answer to that.
      </h2>
      <h3 className="hero-container__subheading">
        best Restaurant &amp; cuisine around you
      </h3>
      <SearchCard
        updateRestroList={updateRestroList}
        setLoading={setLoading}
        loading={loading}
      />
      {(loading || error) && (
        <div className="hero-container__status-bar">
          {loading ? "Loading . . ." : error ? `Oops, ${error}` : ""}
        </div>
      )}
    </section>
  );
};

export default HeroContainer;
