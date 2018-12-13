import React from 'react';
import {connect} from 'react-redux';


export default class TodoList extends React.Component {
  
  render() {
    return (
      <div>
        <input value={this.props.inputValue}
                onChange={this.props.changeInputValue}/>
        <button>提交</button>
        <ul>
           <li>Dell</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps=(state)=> {
  return {
    inputValue: state.inputValue
  }
}
//store.dispatch
const mapDispatchToprops =(dispatch) => {
  return {
    changeInputValue(e){
      console.log(e.target.value);
    }
  }
}

connect(mapStateToProps,mapDispatchToprops)(TodoList);