import React, {useState} from "react";
import TypeCard from "../fragment/TypeCard";

const TypeSection = () => {
  const [holdAnime, setholdAnime] = useState(false)
  return (
    <div className="type-section" id="types">
      <h3 className="title">other types of bikes</h3>
      <div
        onMouseLeave={() => setholdAnime(false)}
        onMouseOver={() => setholdAnime(true)}   
        className={`card-box ${!holdAnime && "card-box-anime"}`}   
      >
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

