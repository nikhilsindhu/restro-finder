import React, { useContext } from "react";

// Import components
import RestroCard from "./RestroCard";

// Import context
import { RestroListContext } from "../../context/restroListContext";

// Import utils
import restroListSelector from "../../utils/restroListSelector";

const RestroList = (props) => {
  const { restroList, filter } = useContext(RestroListContext);

  const sortedRestroList = restroListSelector(filter, [...restroList]);

  return (
    <section className="resto-list__wrapper">
      <ul className="resto-list__container">
        {sortedRestroList &&
          sortedRestroList.map((restro) => {
            return <RestroCard {...restro} key={restro.id} />;
          })}
      </ul>
    </section>
  );
};

export default RestroList;
