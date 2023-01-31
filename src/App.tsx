import { useEffect, useState } from "react";
import "./Index.css";
import { Search } from "./components/search/search";
import MainVideoGrid, { Item } from "./components/MainVideoGrid/MainVideoGrid";
import axios from "axios";

const baseUrl = "https://db.versa-db.com/mkrtube/data.json";

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
        <Search />
        <MainVideoGrid items={items} />
      </div>
    </div>
  );
}

export default App;
