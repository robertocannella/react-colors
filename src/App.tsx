import React from 'react';
import seedPalettes from './seedColor'
import Palette from "./Palette";

function App() {
  return (
    <div className="Palette">
        {/*Header goes here*/}
        <div>
            <Palette palette={{...seedPalettes[1]}}></Palette>
        </div>
        {/*Footer goes here*/}
    </div>
  );
}

export default App;
