import React, {Component} from 'react';
import {IPalette} from "./seedColor";
import ColorBox from "./ColorBox";
import './Palette.css'

type PaletteProps = {
    palette: IPalette
}

class Palette extends Component<PaletteProps,any> {
    constructor(props:PaletteProps) {
        super(props);

    }

    render() {
        const colorBoxes = this.props.palette.colors.map((color)=>(
            <ColorBox background={color.color} name={color.name}></ColorBox>
        ))
        return (
            <div className={"Palette"}>
              <div className={"Palette-colors"}>{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;