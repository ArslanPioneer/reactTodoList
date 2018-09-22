import React, { Component } from 'react';
import 'antd/dist/antd.css';
import  store from './store/index.js';
import {getInputChangeAction, getAddItemAction , getDeleteItemAction, initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.InputChange = this.InputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.btnClick= this.btnClick.bind(this);
    this.handleItemDelete=this.handleItemDelete.bind(this);

    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      InputChange={this.InputChange}
      handleStoreChange={this.handleStoreChange}
      btnClick={this.btnClick}
      handleItemDelete={this.handleItemDelete}
      />
    
    )
  }
  componentDidMount () {
    axios.get('./list.json').then((res) => {
      const data = res.data;
      const action =initListAction(data);
      store.dispatch(action)
    })
  }

  InputChange(e) {
    const action =getInputChangeAction(e.target.value);
    store.dispatch(action);    
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  btnClick() {
    const action = getAddItemAction();
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index) ;
    store.dispatch(action);
  }
}

export default TodoList;