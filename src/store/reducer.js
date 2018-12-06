import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from  './actionTypes'
const defaultState ={
    inputValue: '123',
    list: [1,2,3]
}
//reducer可以接受state但是绝不能修改state
//纯函数给定输入才有给定的输出
export default (state=defaultState,action) => {
    //state上次暂存的数据,action传过来的数据
    console.log(state,action);
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState =JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState =JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState =JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    
    return state;
}