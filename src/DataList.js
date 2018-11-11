import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DataList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { item, index, test } = this.props;
        return (
            <li onClick={this.handleClick} key={index}>
                {test} {item}
            </li>
        )
    }

    handleClick() {
        const { delItem, key1 } = this.props;
        delItem(key1);
    }

    componentWillReceiveProps() {
        //console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        //console.log('child componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.item !== this.props.item) {
            return true;
        }else{
            return false;
        }
    }
}

DataList.propTypes = {
    test: PropTypes.string.isRequired,
    item: PropTypes.string,
    delItem: PropTypes.func,
    index: PropTypes.number
};

DataList.defaultProps = {
    test: ''
};
export default DataList;