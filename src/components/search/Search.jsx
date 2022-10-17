import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="Search">
      <input
        className="Search-input"
        placeholder="Pesquise o nome do Chart"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
