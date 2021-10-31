import React from "react";
import TypeCard from "../fragment/TypeCard";

const TypeSection = () => {
  return (
    <div className="type-section" id="types">
      <h3 className="title">other types of bikes</h3>
      <div className="card-box">
        <TypeCard text="hybrid bikes" />
        <TypeCard text="fixie bikes" />
        <TypeCard text="folding bikes" />
        <TypeCard text="mount bikes" />
        <TypeCard text="city bikes" />
        <TypeCard text="lolly bikes" />
        <TypeCard text="jeda bikes" />
      </div>
    </div>
  );
};

export default TypeSection;

