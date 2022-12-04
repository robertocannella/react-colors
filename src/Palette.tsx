import React, {Component} from 'react';
import {IPalette} from "./seedColor";
import ColorBox from "./ColorBox";
import './Palette.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type PaletteProps = {
    palette: IPalette
}
type PaletteState = {
    level: number
}

class Palette extends Component<any,PaletteState> {
    constructor(props:any) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel (level:number|number[]){
        if (Array.isArray(level))
            return

        this.setState({level})
        console.log(level)

    }
    render() {
        const {colors} = this.props.palette;
        const {level } = this.state;

        const colorBoxes = colors[level].map((color:any)=>(
            <ColorBox background={color.hex} name={color.name}></ColorBox>
        ))
        return (
            <div className={"Palette"}>
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onChange={this.changeLevel} />
                <div className={"Palette-colors"}>{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;