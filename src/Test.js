import React, { Component, Fragment } from 'react';
import './test.css';
import DataList from "./DataList";

class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            'inputValue': '',
            'list': ['学习中文', '学习英文'],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/*这是注释*/}
                    <label htmlFor="content">输入内容</label>
                    <input id="content" className="input" value = {this.state.inputValue} onChange = {this.handleInputChange}/>
                    <button onClick = {this.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return(
                                    <DataList item={item} key1={index} key={index} delItem={this.handleDel} />
                            )
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
        //拷贝副本出来进行修改操作
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Test;