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
    return state;
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { users } = state;
    const { username, email } = state.inputs;

    const onChange = useCallback(e => {

    }, []);

      return (
        <>
            <CreateUser username={username} email={email}/>
            <UserList users={[users]} />
            <div>활성 사용자 수: 0</div>
        </>
      )
}

export default App;






