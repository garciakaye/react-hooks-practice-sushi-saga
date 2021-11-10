import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, onEatSushi }) {
  const [visibleSushi, setVisibleSushi] = useState(0);
  
  const sushiCards = sushi
    .slice(visibleSushi, visibleSushi + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi}/>
  ));
  
  function handleLoadMore(){
    setVisibleSushi((visibleSushi) => (visibleSushi + 4));
  }

  return (
    <div className="belt">
      {sushiCards}
      <MoreButton onClickMore={handleLoadMore}/>
    </div>
  );
}

export default SushiContainer;
