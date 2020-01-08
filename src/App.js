import React, { useRef, useState, useMemo, useCallback } from 'react';
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

function App() {
    const [inputs, setInputs] = useState({
       username: '',
       email: ''
    });

    const { username, email } = inputs;
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }, [inputs]);

    const [users, setUsers ] = useState([
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
    ]);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
          id: nextId.current,
          username,
          email
        };
        setUsers(users => users.concat(user));

        setInputs({
           username: '',
           email: ''
        });

        nextId.current += 1;
    }, [username,email]);

    const onRemove = useCallback(id => {
        setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setUsers(users => users.map(
            user => user.id === id
                ? {...user, active: !user.active}
                : user
        ));
    }, []);

    const count = useMemo(() => CountActiveUsers(users), [users]);

      return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}/>
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성 사용자 수: {count}</div>
        </>
      )
}

export default App;






