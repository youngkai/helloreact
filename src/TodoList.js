import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { getInputValue, handleClickAction, handleDelAction } from './store/actionCreators';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleClick = this.handleClick.bind(this);
        this.handleChnage = this.handleChnage.bind(this);
        this.handleTest = this.handleTest.bind(this);
        store.subscribe(this.handleTest);
    }

    render() {
        return(
            <Fragment>
                <div>
                    hello,world
                    <Input value={this.state.inputValue} onChange={this.handleChnage} placeholder='请输入呀' style={{width: 300}}/>
                    <Button type="primary" onClick={this.handleClick}>点击我</Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleDel.bind(this, index)}>{item}</List.Item>)}
                />
            </Fragment>
        );
    }

    handleClick() {
        const action = handleClickAction(this.state.inputValue);
        store.dispatch(action);
    }
    handleChnage(e) {
        const action = getInputValue(e.target.value);
        store.dispatch(action);
    }
    handleTest() {
        this.setState(store.getState());
    }
    handleDel(index) {
        const action = handleDelAction(index);
        store.dispatch(action);
    }
}

export default TodoList;