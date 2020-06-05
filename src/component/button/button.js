import React, { Component } from "react";
import PropTypes from "prop-types";
class Button extends Component {

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }
    render() {
        const { text } = this.props;
        return (
            <button onClick={() => this.submitEvent()} data-test="buttonComponent">
                {text}
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    emitEvent: PropTypes.func
}
export default Button;