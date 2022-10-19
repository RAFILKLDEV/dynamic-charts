import { useState } from "react";
import Charts from "./components/charts/Charts";
import Search from "./components/search/Search";
import bebidas from "./bebidas.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h1 className="Title">Project Dynamic Charts!</h1>
      <Search search={search} setSearch={setSearch} />
      <div>
        <div className="Title">Charts</div>
        <div className="Charts">
          {bebidas.map((e, i) => {
            if (e.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Charts
                  key={i}
                  name={e.name}
                  tag={e.tag}
                  price={e.price}
                  url={e.url}
                />
              );
            }
            return this;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
