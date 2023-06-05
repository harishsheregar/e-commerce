import React from "react";
import styled from "styled-components";
import Homesection from "../Components/Homesection";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";
import Footer from "../Components/Footer";
import FeatureProducts from "../Components/FeatureProducts";

const HomePage = () => {
  const data = {
    name: "E-commerce Store",
  };
  return (
    <>
      <Homesection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default HomePage;
