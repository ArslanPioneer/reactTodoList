import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render() {
        return (
            <div>
            <div>
              <Input
                value={this.props.inputValue}
                placeholder="Hello world"
                style={{ width: 300, marginRight: 10 }}
                onChange = {this.props.InputChange}
              />
              <Button type="primary" onClick={this.props.btnClick}>提交</Button>
              <List
                style={{ width:300 ,marginTop:20}}
                bordered
                dataSource={this.props.list}
                renderItem={(item,index) => <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>}
              />
            </div>
          </div>
        )
    }
}

export default TodoListUI;