import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import FormPage from "./Components/Forms/Forms";
import AppNavBar from './Components/Framework/Navbar';
import Logo from './Components/Framework/Logo';



const App = () => {
    return (
        <Container fluid = "md" >
            <Row className='ma5'>
                <AppNavBar />
            </Row>
            <Row>
                <Col md="3">
                    <Logo/>
                </Col>
                <Col md="9">
                    <FormPage />
                    {/* <LoginSignup /> */}
                </Col>
            </Row>
            
        </Container>
    )
}
export default App