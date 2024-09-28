import React, { useContext } from "react";

// Import components
import RestroList from "../components/RestroList";
import HeroContainer from "../components/HeroContainer";
import RestroFilter from "../components/RestroFilter";

// Import context
import { RestroListContext } from "../context/restroListContext";

const Home = (props) => {
  const { restroList } = useContext(RestroListContext);

  return (
    <main className="hero-wrapper">
      <div className="container-fluid">
        <HeroContainer />

        {restroList.length ? (
          <React.Fragment>
            <RestroFilter />
            <RestroList />
          </React.Fragment>
        ) : (
          false
        )}
      </div>
    </main>
  );
};

export default Home;
