import React from 'react'

function UserList() {
    let users = ["Name1", "Name2", "Name3"]
    return (
        <div>
            {users.map((user) => { return <h2>{user}</h2>})}
        </div>
    )
}

export default UserList
