import React from 'react';
import seedPalettes, {IPalette} from './seedColor'
import Palette from "./Palette";

function App() {
  return (
    <div className="App">
      <Palette {...seedPalettes[0] as IPalette}/>
    </div>
  );
}

export default App;
