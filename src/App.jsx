import "./styles/App.scss";
import { useState } from "react";
import DataCards from "../data";
import Card from "./components/Card";

function App() {

  // set state
  const [deck, setDeck] = useState(DataCards);


  // function for change selection
  function selectCard(id) {
    setDeck(oldValue => {
      return oldValue.map(card => {
        return card.id === id ? { ...card, selected: !card.selected } : card
      })
    })
    console.log("funzione bene")
  }

  // map Datacards into new array
  const rawData = deck.map((item) => {
    return <Card key={item.id} id={item.id} {...item} handleClick={() => selectCard(item.id)}></Card>;
  });

  return (
    <div className="container text-center">
      <h1 className="display-1">Check our Champions</h1>

      {/* print array */}
      <div className="row g-5">{rawData}</div>
    </div>
  );
}

export default App;
