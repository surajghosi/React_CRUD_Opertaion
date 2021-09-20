import { React } from 'react'
import { Card } from 'react-bootstrap'

const User = (props) => {
    return (
    <>
        <Card id={props.user.id} key={props.user.id} className='my-3'>
            <Card.Body>
                <Card.Title style={{color:'blue'}}>{`${props.user.firstname} ${props.user.lastname}`}</Card.Title>
                <Card.Text className='d-flex justify-content-between'>
                    <span>Email: {props.user.email}</span>
                    <span>Phone: {props.user.phone}</span>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default User;