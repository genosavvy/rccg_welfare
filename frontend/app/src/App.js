import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import FormPage from "./Forms";
import AppNavBar from './Navbar';


const App = () => {
    return (
        <Container fluid = "md" >
            <Row className='ma5'>
                <AppNavBar />
            </Row>
            <Row>
                <Col></Col>
                <Col md="9">
                    <FormPage />
                </Col>
            </Row>
            
        </Container>
    )
}
export default App