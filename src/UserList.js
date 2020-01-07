import React from 'react';


function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users, onRemove}) {

    return (
        <div>
            {
                users.map(
                    (user, index) => (<User user={user} key={user.id} onRemove={onRemove}/>)
                )
            }
        </div>
    );
}

export default UserList;