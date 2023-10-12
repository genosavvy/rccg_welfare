import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Forms.css';
import axios from 'axios';



function FormPage() {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    firstname:'',
    lastname: '',
    birthday: '',
    wedding: '',
    consent: ''
  });

  const [ result, setResult ] = useState(null)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
    
  };

  return (
    <section className='formsection'>
    <div className='form-content'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='header'>
        <h1>Special Day Register </h1>
      </Row>
      <div className='form-text'>
      <Row className="mb-3  fs-3 text">
        <Form.Group as={Col} md="4" controlId="firstname">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name='firstname'
            value={state.name}
            placeholder="First name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name='lastname'
            value={state.lastname}
            placeholder="Last name"
            onChange={onInputChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3 fs-4 text">
        <Form.Group as={Col} md="6" controlId="birthday">
          <Form.Label>When is your Birthday Celebration this year?</Form.Label>
          <Form.Control 
            type="date" 
            placeholder="Date of Birth" 
            required
            name='birthday'
            value={state.birthday}
            onChange={onInputChange}
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="wedding">
          <Form.Label>When is your Wedding Aniversary this year?</Form.Label>
          <Form.Control 
            type="date" 
            placeholder="Wedding Aniversary"
            name='wedding'
            value={state.wedding}
            onChange={onInputChange}
            
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId='consent'>
        <Form.Check
          type='checkbox'
          required
          label="I consent to being celebrated in church"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          name='consent'
          value={state.consent}
          onChange={onInputChange}
        />
      </Form.Group>
      </div>
      <div className='submitbutton'>
      <Button type="submit" className='center'>Submit form</Button>
      </div>
    </Form>
    </div>
    </section>
  );
}

export default FormPage;