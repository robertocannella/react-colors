import React, {Component} from 'react';
import './ColorBox.css';
import CopyToClipboard from "react-copy-to-clipboard";

type ColorBoxProps = {
    background: string,
    name: string
}
type ColorBoxState = {
    isCopied: boolean
}

class ColorBox extends Component<ColorBoxProps,ColorBoxState> {
    constructor(props:ColorBoxProps) {
        super(props);
        this.state = {
            isCopied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({isCopied:true},()=>{
            setTimeout(()=>{
                this.setState({isCopied:false},)
            },1500)
        })
    }
    render() {
        const {name, background} = this.props;
        const {isCopied} = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={"ColorBox"}>
                    <div style={{ background }} className={`copy-overlay ${isCopied && 'show'}`}></div>
                    <div className={`copy-msg ${isCopied && 'show'}`}>
                        <h1>copied</h1>
                        <p>{background}</p>
                    </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button  className={"copy-button"}>
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