import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ListItem extends Component {

    render() {
        const { title, description } = this.props;

        if (!title) return null
        return (
            <div data-test="listItemComponent">
                <h1 data-test="title">{title}</h1>
                <div data-test="description">
                    {description}
                </div>
            </div>
        )
    }
}

ListItem.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string
}


export default ListItem
