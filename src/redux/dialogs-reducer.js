const SEND_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Rovens'},
        {id: 5, name: 'Vlados'},
        {id: 6, name: 'Bratuha'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: '))))))))))'},
        {id: 4, message: 'hellow'},
        {id: 5, message: 'whats up'},
        {id: 6, message: 'maaaaan'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreation = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;