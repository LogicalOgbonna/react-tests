import React, { Component } from "react";
import PropTypes from "prop-types"
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

Headline.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        routes: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
            loggedIn: PropTypes.bool,
        }))
    })
}

export default Headline;