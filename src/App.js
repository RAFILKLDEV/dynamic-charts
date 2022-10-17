import { useState } from "react";
import "./App.css";
import Charts from "./components/charts/Charts";
import Search from "./components/search/Search";
import { bebidas } from "./constants";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1 className="title">Project Dynamic Charts!</h1>
      <Search search={search} setSearch={setSearch} />
      <div>
        Charts
        <div className="Charts">
          {bebidas.map((e, i) => {
            if (e.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Charts key={i} name={e.name} tag={e.tag} price={e.price} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
