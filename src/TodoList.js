import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import axios from 'axios';
import store from './store';
import {getInitList, getInputChangeAction, addItemAction,deleteItemAction,initListAction} from './store/actionCreators';
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './store/actionTypes';
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    //取数据
    this.state = store.getState();
    this.handleBtnInputValue = this.handleBtnInputValue.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleBtnDelete = this.handleBtnDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
   
    const action=getInitList();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleBtnInputValue={this.handleBtnInputValue}
        handleBtnClick={this.handleBtnClick}
        handleBtnDelete={this.handleBtnDelete}
      />
    );
  }
  // getTodoItem() {
  //   return this.state.list.map((item, index) => {
  //     return (
  //       <TodoItem data={item} num={index} deleteItem={this.handleBtnDelete} />
  //     );
  //     //<li key={index} onClick={this.handleBtnDelete.bind(this,index)}>{item}</li>
  //   });
  // }
  handleBtnInputValue(e) {
    const action=getInputChangeAction(e.target.value);
    //传数据给store
    store.dispatch(action);
  }
  handleBtnClick() {
    const action =addItemAction();
    store.dispatch(action);
  }

  handleBtnDelete(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}
