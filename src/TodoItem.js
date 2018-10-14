import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClickDelete=this.handleClickDelete.bind(this)
    }
    render() {
        const {data} =this.props;
        return (
            <div onClick={this.handleClickDelete}>{data}</div>
        )
    }
    handleClickDelete() {
      const {deleteItem, num }=this.props;
      deleteItem(num);
    }
}