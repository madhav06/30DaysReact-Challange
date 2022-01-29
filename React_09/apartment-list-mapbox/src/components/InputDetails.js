import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";
import { addApartmentMutation } from "../queries/query";

export default function InputDetails({ location }) {
  const [addApartment, { data }] = useMutation(addApartmentMutation);

  const [state, setState] = useState({
    title: "",
    price: 0,
    sqm: 0,
    bathrooms: 0,
    bedrooms: 0,
    image: "",
    lat: location.lat,
    lng: location.lng,
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  console.log(state);

  return (
    <div className="filter-container">
      <h4>Description</h4>
      <input
        type="text"
        name="title"
        placeholder=""
        onChange={(event) => changeHandler(event)}
      />

      <h4>Price</h4>
      <input
        type="number"
        name="price"
        placeholder=""
        onChange={(event) => changeHandler(event)}
      />

      <h4>Square meters</h4>
      <input
        type="number"
        name="sqm"
        placeholder=""
        onChange={(event) => changeHandler(event)}
      />
      <h4>Number of Bedrooms</h4>
      <input
        type="number"
        name="bedrooms"
        placeholder=""
        onChange={(event) => changeHandler(event)}
      />
      <h4>Number of Bathrooms</h4>
      <input
        type="number"
        name="bathrooms"
        placeholder=""
        onChange={(event) => changeHandler(event)}
      />

      <h4>Image</h4>
      <input
        type="text"
        name="image"
        placeholder=""
        onChange={(event) => changeHandler(event)}
      />

      <br />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          addApartment({
            variables: {
              title: state.title,
              price: Number(state.price),
              sqm: Number(state.sqm),
              bedrooms: Number(state.bedrooms),
              bathrooms: Number(state.bathrooms),
              image: state.image,
              lat: state.lat,
              lng: state.lng,
            },
          });
        }}
      >
        Add
      </Button>
    </div>
  );
}
