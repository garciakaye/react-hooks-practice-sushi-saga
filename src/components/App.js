import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([]);
  const [wallet, setWallet] = useState (80);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiData) => {
        const updatedSushis = sushiData.map((sushi) => {
          return {...sushi, eaten: false};
        });
        setSushiData(updatedSushis)
      });
    }, []);
    
  function handleEatenSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushiData.map((sushi) => {
        if (sushi.id === eatenSushi.id) return {...sushi, eaten: true}
          return sushi;
      });

      setSushiData(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("You don't have any money left!");
    }
  }  

  const eatenSushis = sushiData.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushiData}
        onEatSushi={handleEatenSushi}
      />
      <Table wallet={wallet} plate={eatenSushis} />
    </div>
  );
}

export default App;
