import React, { useContext } from "react";

// Import context
import { RestroListContext } from "../../context/restroListContext";

const RestroFilter = () => {
  const sortingOptions = [
    {
      title: "Rating",
      value: "Rating",
    },
    {
      title: "Review",
      value: "Review",
    },
    {
      title: "Price",
      value: "Price",
    },
  ];

  const { restroList, filter, setFilter } = useContext(RestroListContext);

  // Toggle Event
  const toggleEvent = (event) => {
    const sortList = document.querySelector(".filter-list");

    const { target } = event;

    if (!target.closest(".list-header__filter")) {
      sortList.classList.toggle("filter-list--hide");
    }
  };

  // Toggle sort list functionality
  const toggleSortList = () => {
    const sortList = document.querySelector(".filter-list");
    sortList.classList.toggle("filter-list--hide");

    if (!sortList.classList.contains("filter-list--hide")) {
      document.addEventListener("click", toggleEvent);
    } else {
      document.removeEventListener("click", toggleEvent);
    }
  };

  // Update filter
  const updateFilter = (nextFilter) => {
    if (filter !== nextFilter) {
      setFilter(nextFilter);
    }

    toggleSortList();
  };

  return (
    <div className="list-header">
      <div className="list-header__title">
        {restroList.length} Result near you, Sorted by {filter}
      </div>
      <div className="list-header__filter">
        <button className="filter-btn" onClick={toggleSortList}>
          Sort By
        </button>
        <ul className="filter-list filter-list--hide">
          {sortingOptions.map((sortingOption) => {
            const { title, value } = sortingOption;

            return (
              <li className="item" onClick={() => updateFilter(value)}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestroFilter;
