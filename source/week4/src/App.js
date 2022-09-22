// ./App.js
import Menu from "./components/Menu";
import data from "./data/receips.json";



function App() {
  

  return (
    <div className="App">
      <Menu recipes={data} title="맛있는 조리법"></Menu>
    </div>
  );
}

export default App;
