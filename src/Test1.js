import React, { Component, Fragment } from 'react';
import './test.css';

class Test1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.list.map((item) => {
                      return (
                          <div key={item}>{item}</div>
                      );
                    })
                }
                <button onClick={this.handleAddItem}>button</button>
            </Fragment>
        );
    }

    handleClick() {
        this.setState({
            show: this.state.show ? false : true
        });
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
              list: [...prevState.list, 'item']
            };
        });
    }
}

export default Test1;