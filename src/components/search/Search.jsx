import React from "react";

const Search = (props) => {
  return (
    <div className="Search">
      <input
        className="Search-input"
        placeholder="Pesquise o nome do Chart ou use # para Tag"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
