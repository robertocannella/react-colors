import React, {Component} from 'react';
import './ColorBox.css';

type ColorBoxProps = {
    background: string,
    name: string
}

class ColorBox extends Component<ColorBoxProps,any> {
    constructor(props:ColorBoxProps) {
        super(props);

    }

    render() {
        const {name, background} = this.props;
        return (
            <div style={{ background }} className={"ColorBox"}>
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className="copy-button">
                    Copy
                </button>
            </div>
                <span className="see-more">More</span>
            </div>
        );
    }
}

export default ColorBox;