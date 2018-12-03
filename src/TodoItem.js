import React, { Component } from 'react';
import PropTypes from 'prop-types';
 class TodoItem extends Component {
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

TodoItem.propTypes = {
        data:PropTypes.string,
        deleteItem:PropTypes.func,
        num:PropTypes.number
}

export default TodoItem;