import React, { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8c2b21fee8234e1b802c9913d32508e1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NewsList/>
    );
}

export default App;
 
