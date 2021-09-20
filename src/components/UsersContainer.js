import React, { useState } from 'react'
import Form from "./UserComponent/UserForm";
import UsersList from "./UserComponent/UsersList";
const UsersContainer = () => {

    var [users, setUserList] = useState([])

    return (
        <>
            <Form setUserList={setUserList}/>

            <UsersList users={users} />
        </>
    )
}

export default UsersContainer;
