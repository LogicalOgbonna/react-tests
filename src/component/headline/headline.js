import React, { Component } from "react";
import "./headline.scss"
class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        const { header, description } = this.props;
        if (!header) return null
        return (
            <div data-test="headerlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{description}</p>
            </div>
        );
    }
}

export default Headline;