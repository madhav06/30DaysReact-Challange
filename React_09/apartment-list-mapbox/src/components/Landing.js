import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getApartments } from "../queries/query";
import { MapContainer } from "./MapContainer";
import List from "./List";
import Filter from "./Filter";
import Navbar from "./Navbar";

export default function Landing() {
  const [showLanding, setShowLanding] = useState(true);
  const [showMap, setShowMap] = useState(false);

  const { loading, error, data } = useQuery(getApartments);

  const clickHandler = () => {
    setShowLanding(!showLanding);
  };

  const onShowMap = () => {
    setShowMap(!showMap);
  };

  const landingPage = () => {
    if (showLanding && data) {
      if (showMap) {
        return (
          <MapContainer
            array={data.apartments}
            loading={loading}
            error={error}
          />
        );
      }
      return <List array={data.apartments} loading={loading} error={error} />;
    } else {
      return <Filter showLanding={showLanding} showMap={showMap} />;
    }
  };

  return (
    <div>
      <Navbar
        clickHandler={clickHandler}
        onShowMap={onShowMap}
        showMap={showMap}
      />{" "}
      {landingPage()}
    </div>
  );
}
