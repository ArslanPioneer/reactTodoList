import React, { Component } from 'react';
import { Input, Button,List } from 'antd';
import store from './store/index'
import 'antd/dist/antd.css';

export default class TodoList extends Component {
  constructor(props) {
      super(props);
      this.state =store.getState();
      this.changeInputValue = this.changeInputValue.bind(this);
      this.changeStore = this.changeStore.bind(this);
      this.handleClick = this.handleClick.bind(this);
      store.subscribe(this.changeStore);
  }
   
  render() {
    return (
      <div>
        <Input 
        value={this.state.inputValue} 
        inputplaceholder="todo info" 
        style={{ width: 300 }} 
        onChange={this.changeInputValue}
        />

        <Button 
        type="primary"
        onClick={this.handleClick}
        >点击</Button>

        <List
          style={{width:300}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
    
      </div>
    );
  }
  changeInputValue(e) {
      const action = {
          type: 'change_input_value',
          payload: e.target.value
      }
      store.dispatch(action);
  }
  handleClick() {
      const action = {
          type: 'add_list',
      }
      store.dispatch(action);
  }
  changeStore() {
     this.setState(store.getState());
  } 

}
