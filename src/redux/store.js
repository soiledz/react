import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteBarReducer from "./sitebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {post: 'Hi', likesCount: 23},
                {post: 'How are you', likesCount: 11},
                {post: '))))))))))', likesCount: 23},
                {post: 'hellow', likesCount: 23},
                {post: 'whats up', likesCount: 23},
                {post: 'maaaaan', likesCount: 23},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            ],
            newTextMessage: ""

        },
        friendsPage: {
            friendsList: [
                {id: 1, ava: 1, name: 'Dmitrych'},
                {id: 2, ava: 2, name: 'Rovens'},
                {id: 3, ava: 3, name: 'Oksana'},
                {id: 4, ava: 4, name: 'Dmitrych'},
                {id: 5, ava: 5, name: 'Rovens'},
                {id: 6, ava: 6, name: 'Oksana'}

            ]
        },
        siteBar: {
            friendsBar: [
                {id: 1, ava: 1, name: 'Dmitrych'},
                {id: 2, ava: 2, name: 'Rovens'},
                {id: 3, ava: 3, name: 'Oksana'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;    //Наблюдатель observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = siteBarReducer(this._state.siteBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
//window.state = state;

//store - OOP
