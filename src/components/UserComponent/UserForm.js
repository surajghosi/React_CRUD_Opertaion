import {React, useState} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'

const UserForm = (props) => { 
    let [firstname, setFirstName] = useState('')
    let [lastname, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [emptyFields, setEmptyFields] = useState(true)

    const FirstName = e => setFirstName(e.target.value)
    const LastName = e => setLastName(e.target.value)
    const Email = e => setEmail(e.target.value)
    const Phone = e => setPhone(e.target.value)

    const formSubmitted = e => {
        e.preventDefault()
        if(firstname && lastname && email && phone) {
            setEmptyFields(false)
            props.setUserList(list => [{id: Math.random(), firstname, lastname, email, phone}, ...list])
        }
        else setEmptyFields(true)
    }

    return (
    <>
        <div>
            {
                emptyFields && (
                    <Alert variant='danger'>
                        Please fill all empty inputs
                    </Alert>
                )
            }

            <Form onSubmit={formSubmitted}>
                <Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="firstname" value={firstname} className={!firstname?'border-danger':''} onChange={FirstName}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="lastname" value={lastname} className={!lastname?'border-danger':''} onChange={LastName}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} className={!email?'border-danger':''} onChange={Email}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" name="number" min="1111111111" max="9999999999" value={phone} className={!phone?'border-danger':''} onChange={Phone}/>
                </Form.Group>

                <Button variant="success" type="submit" className='mx-auto'>
                    Add
                </Button>
            </Form>
            
        </div>
    </>)
}

export default UserForm;