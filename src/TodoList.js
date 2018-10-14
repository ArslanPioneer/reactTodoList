import  React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            inputValue: '',
            list: [1,2,3]
        }
        this.handleBtnInputValue=this.handleBtnInputValue.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleBtnDelete=this.handleBtnDelete.bind(this)
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.inputValue}
                onChange={this.handleBtnInputValue}/>
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </div>
        )
    }
    getTodoItem () {
         return (
            this.state.list.map((item,index) => {
                return (
                    <TodoItem data={item}
                              num={index}
                              deleteItem={this.handleBtnDelete}/>
                )
                //<li key={index} onClick={this.handleBtnDelete.bind(this,index)}>{item}</li>
            })
        )
    }
    handleBtnInputValue(e) {
        const value = e.target.value;
        this.setState(() =>({
            inputValue:value
        }))
    }
    handleBtnClick() {
        this.setState(()=> ({
            list: [...this.state.list,this.state.inputValue],
            inputValue:''
        }))
    }

    handleBtnDelete(index) {
        const list =[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}