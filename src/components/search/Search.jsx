import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input placeholder="Pesquise o nome do Chart"></input>
    </>
  );
};

export default Search;
