import React from 'react';

const UserCard = (props) => {
    return (
            <>
            {props.user.map(users => (
                <div key={users.createdAt} className='userInfo' >
                    <h2>New User</h2>
                    <h3>{users.name}</h3>
                    <p>Email: {users.email}</p>
                    <p>Password: <span className='password'>{users.password}</span></p>
                </div>
            ))}
            </>
    )
}

export default UserCard;