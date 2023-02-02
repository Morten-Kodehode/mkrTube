import { useEffect, useState } from "react";
import "./Index.css";
import { Header } from "./components/Header/Header";
import MainVideoGrid, { Item } from "./components/MainVideoGrid/MainVideoGrid";
import axios from "axios";

const baseUrl = "https://mkrtube.com/api/?view=demo";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(baseUrl);
      setItems(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
        <MainVideoGrid items={items} />
      </div>
    </div>
  );
}
export default App;
