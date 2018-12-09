import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from  './actionTypes'
import axios from 'axios';
export const getInputChangeAction=(value)=> ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const addItemAction=()=> ({
    type:ADD_TODO_ITEM,
});

export const deleteItemAction=(index)=> ({
    type:DELETE_TODO_ITEM,
    index
});

export const initListAction=(data)=> ({
    type:INIT_LIST_ACTION,
    data
});

export const getTodoList =()=>{
    return (dispatch)=>{
        axios
        .get(
          'https://easy-mock.com/mock/5bdd1c98217bf75be9bd98cd/manager/api/listTest'
        )
        .then(res => {
          const data = res.data.result;
          const action=initListAction(data);
          dispatch(action);
        });
    }
}