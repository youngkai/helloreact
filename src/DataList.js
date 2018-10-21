import React, { Component } from 'react';

class DataList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return <li onClick={this.handleClick} key={this.props.key1}> {this.props.item} </li>
    }

    handleClick() {
        this.props.delItem(this.props.key1);
    }
}

export default DataList;