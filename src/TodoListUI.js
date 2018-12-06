import React, { Component,Fragment } from 'react';
import { Button, Input, List } from 'antd';
export default class TodoListUI extends Component {
  render() {
    return (
      <Fragment>
        <Input
          value={this.props.inputValue}
          onChange={this.props.handleBtnInputValue}
          style={{ width: 150, height: 40 }}
        />
        <Button onClick={this.props.handleBtnClick} type="primary">
          提交
        </Button>
        <List
          bordered
          dataSource={this.props.list}
          onClick={(index) => this.props.handleBtnDelete(index)}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    );
  }
}
