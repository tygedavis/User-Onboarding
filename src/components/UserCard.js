import React from 'react';

const UserCard = (props) => {
    return (
        <div className='userCard'>
            {props.user.map(users => (
                <div key={users.createdAt} className='userInfo' >
                    <h2>New User</h2>
                    <h3>{users.name}</h3>
                    <p>{users.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard;