const deposit = amout => {
    return {
        type: 'deposit',
        payload: { amout },
    };
};


function fundsReduser(state=0, action) {
    switch (action.type) {
        case 'deposit':
            return state + action.payload.amout;

            default:
                return state;
    }
}

const store = createStore(fundsReduser);

<button onClick={REDUX.dispatch(deposit(100))}></button>;