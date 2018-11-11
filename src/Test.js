import React, { Component, Fragment } from 'react';
import './test.css';
import DataList from "./DataList";
import axios from 'axios'
class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            'inputValue': '',
            'list': [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    //在组件即将被挂载到页面是  自动执行
    componentWillMount() {
        //console.log('componentWillMount');
    }

    render() {
        //console.log('render');
        return (
            <Fragment>
                <div>
                    {/*这是注释*/}
                    <label htmlFor="content">输入内容</label>
                    <input id="content" className="input" value = {this.state.inputValue} onChange = {this.handleInputChange} ref={(input) => {this.input=input}}/>
                    <button onClick = {this.handleClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
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

    shouldComponentUpdate() {
        //console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        //console.log('componentWillUpdate');
    }

    componentDidMount() {
        axios.get('v1/test').then((res) => {
           this.setState(() => ({
               list: [...res.data.data]
           }));
        });
        //console.log('componentDidMount');
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        //console.log('componentWillUnmount')
    }

    handleInputChange(e) {
        const value = this.input.value;
        this.setState(() => ({
               inputValue: value
        }));
    }
    handleClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            //console.log(this.ul.querySelectorAll('li').length);
        });
    }
    handleDel(index) {
        //拷贝副本出来进行修改操作
        this.setState((prevStaet) => {
            const list = [...prevStaet.list];
            list.splice(index, 1);
            return {list};
        })
    }
}

export default Test;