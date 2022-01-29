import React, { useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { getFilteredQuery } from "../queries/query";
import MapContainer from "../components/MapContainer";
import Button from "@material-ui/core/Button";
import List from "./List";

export default function Filter({ showMap, ShowLanding }) {
  const [showList, setShowList] = useState(false);
  const [state, setState] = useState({
    price1: 0,
    price2: 10000,
    sqm1: 0,
    sqm2: 1000,
    bedrooms: 100,
  });

  const [getApartment, { data, loading, error }] =
    useLazyQuery(getFilteredQuery);

  const changeHandler = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.value]: value,
    });
  };

  const mapOrList = () => {
    if (!showMap && !ShowLanding) {
      return (
        <List array={data.apartmentsFilter} loading={loading} error={error} />
      );
    } else if (showMap && !ShowLanding) {
      return (
        <MapContainer
          array={data.apartmentsFilter}
          loading={loading}
          error={error}
        />
      );
    }
  };

  return (
    <div className="filter-container">
      {showList && data ? (
        mapOrList()
      ) : (
        <>
          <h4>Precio</h4>
          <input
            type="number"
            name="price1"
            placeholder=""
            onChange={(event) => changeHandler(event)}
          />
          <input
            type="number"
            name="price2"
            placeholder=""
            onChange={(event) => changeHandler(event)}
          />
          <h4>Tamaño</h4>
          <input
            type="number"
            name="sqm1"
            placeholder=""
            onChange={(event) => changeHandler(event)}
          />
          <input
            type="number"
            name="sqm2"
            placeholder=""
            onChange={(event) => changeHandler(event)}
          />
          <h4>Habitaciones</h4>
          <input
            type="text"
            name="bedrooms"
            placeholder=""
            onChange={(event) => changeHandler(event)}
          />
          +
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              getApartment({
                variables: {
                  price1: Number(state.price1),
                  price2: Number(state.price2),
                  sqm1: Number(state.sqm1),
                  sqm2: Number(state.sqm2),
                  bedrooms: Number(state.bedrooms),
                },
              });
              setShowList(true);
            }}
          >
            Search
          </Button>
        </>
      )}
    </div>
  );
}
