import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/ui/Title";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
//Heisenberg chutiya
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Title />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};
export default App;
