import { React } from 'react'
import User from "./User/User";

const UsersList = (props) => {
    return(
    <>
        <h4 className={`mt-3 text-center ${props.users.length===0?'text-muted':''}`}>
            {props.users.length === 0 ? 'Empty list' : props.users.length+' users'}
        </h4>
        {
            props.users.map(user => (
                <User user={user}/>
            ))
        }
    </>
    )
}

export default UsersList;