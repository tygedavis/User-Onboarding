import React from 'react';

const UserCard = (props) => {
    return (
        <div className='userCard'>
            {props.user.map(users => (
                <div key={users.createdAt} >
                    <h3>{users.name}</h3>
                    <p>{users.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard;