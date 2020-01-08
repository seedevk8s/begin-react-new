import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function CountActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(users => users.active).length;
}

const initialState = {
  inputs: {
      username: '',
      email: ''
  },
  users:  [
      {
          id: 1,
          username: 'velopert',
          email: 'public.veloper@gmail.com',
          active: true,
      },
      {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false,
      },
      {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false,
      }
  ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        default:
            throw new Error('Unhandled action');
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { users } = state;
    const { username, email } = state.inputs;

    const onChange = useCallback(e => {
        const { name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, []);

      return (
        <>
            <CreateUser
                username={username}
                email={email}
                onCreate={onChange}
            />
            <UserList users={[users]} />
            <div>활성 사용자 수: 0</div>
        </>
      )
}

export default App;






