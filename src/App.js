import "./App.css";
import Charts from "./components/charts/Charts";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <h1 className="title">Project Dynamic Charts!</h1>
      <Search />
      <div>
        Charts
        <div className="Charts">
          <Charts name="Monster Preto" tag="Basico" price="25,00" />
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default App;
