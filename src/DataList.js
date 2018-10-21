import React, { Component } from 'react';

class DataList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { item, index } = this.props;
        return (
            <li onClick={this.handleClick} key={index}>
                {item}
            </li>
        )
    }

    handleClick() {
        const { delItem, key1 } = this.props;
        delItem(key1);
    }
}

export default DataList;