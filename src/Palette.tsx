import React, {Component} from 'react';
import {IPalette} from "./seedColor";


class Palette extends Component<IPalette,any> {
    constructor(props:IPalette) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>PALETTE</h1>
            </div>
        );
    }
}

export default Palette;