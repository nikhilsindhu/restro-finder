import React, { useState } from "react";

const RestroListContext = React.createContext();

const RestroListProvider = (props) => {
  const { children } = props;

  const [restroList, setRestroList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Rating");

  const updateRestroList = ({ error, payload }) => {
    if (error) {
      setError(error);
      setRestroList([]);
    } else {
      setError(false);
      setRestroList(payload);
    }
  };

  return (
    <RestroListContext.Provider
      value={{
        restroList,
        updateRestroList,
        loading,
        setLoading,
        error,
        setFilter,
        filter,
      }}
    >
      {children}
    </RestroListContext.Provider>
  );
};

export { RestroListProvider, RestroListContext };
