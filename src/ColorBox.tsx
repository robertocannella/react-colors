import React, {Component} from 'react';
import './ColorBox.css';
import CopyToClipboard from "react-copy-to-clipboard";

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
            <CopyToClipboard text={background}>
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
            </CopyToClipboard>
        );
    }
}

export default ColorBox;