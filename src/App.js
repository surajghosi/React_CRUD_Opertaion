import UsersContainer from './components/UsersContainer'
import { Container } from 'react-bootstrap'

const App = () => { 
    return (
    <>
        <Container className="col-6 mx-auto">
        
            <div className='row'>
                <div className="col text-center">
                    <h2>Users list</h2>
                </div>
            </div>
            
            <UsersContainer/>
        
        </Container>
    </>
    ); 
}
    
export default App;
