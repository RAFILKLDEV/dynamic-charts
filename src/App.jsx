import { useState } from "react";
import Charts from "./components/charts/Charts";
import Search from "./components/search/Search";
import bebidas from "./bebidas.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  function renderCharts() {
    return bebidas.map((e, i) => {
      if (search[0] === "#") {
        let newstr = search.replace(/#/, "");
        if (e.tag.toLowerCase().includes(newstr.toLowerCase())) {
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
      }

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
    });
  }

  return (
    <div className="App">
      <h1 className="Title">Project Dynamic Charts!</h1>
      <Search search={search} setSearch={setSearch} />
      <div>
        <div className="Title">Charts</div>
        <div className="Charts">{renderCharts()}</div>
      </div>
    </div>
  );
}

export default App;
