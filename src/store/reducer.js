const initalState= {
    inputValue: '',
    list: [1,2,3]
}

export default (state = initalState, action) => {
    if(action.type === 'change_input_value') {
        const newState= JSON.parse(JSON.stringify(state));
        newState.inputValue = action.payload;
        return newState;
    }

    if(action.type === 'add_list') {
        const newState= JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        console.log('123');
        newState.inputValue='';
        return newState;
    }
    return state;
}

 