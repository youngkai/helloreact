import React, { Component, Fragment } from 'react';

class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            'inputValue': '',
            'list': ['学习中文', '学习英文'],
        };
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value = {this.state.inputValue} onChange = {this.handleInputChange.bind(this)}/>
                    <button onClick = {this.handleClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleDel.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
     handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
     }
    handleDel(index) {
        const list = [...this.state.list];
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Test;