import React from 'react';
import seedPalettes from './seedColor'
import Palette from "./Palette";
import {generatePalette} from "./colorHelpers";

function App() {
  return (
    <div className="Palette">
        {/*Header goes here*/}
        <div>
            <Palette palette={{...generatePalette(seedPalettes[0])}}></Palette>
        </div>
        {/*Footer goes here*/}
    </div>
  );
}
console.log(generatePalette(seedPalettes[0]))

export default App;
