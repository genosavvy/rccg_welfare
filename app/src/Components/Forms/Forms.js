import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Instance from '../Instance';
import './Forms.css';



function FormPage() {
  const forminputs = {
    firstname:'',
    lastname: '',
    birthday: '',
    wedding: '',
    consent: false
  }

  const [validated, setValidated] = useState(false);
  const [formvalues, setFormvalues] = useState( forminputs );
 

  // Handle form input values
  const onInputChange = event => {
    // const { name, value } = event.target;

    if (event.target.name === 'consent') {

      setFormvalues({...formvalues,[event.target.name]: event.target.checked});
      return
    }
    setFormvalues({...formvalues,[event.target.name]: event.target.value});
  };

  // Handle form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formvalues)
    Instance.post('/register', {...formvalues})
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((e)=> {
        console.log(e)
      })
    setFormvalues(forminputs)
    }

  return (
    <section className='formsection'>
    <div className='form-content'>
    <Form  onSubmit={handleSubmit}>
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
            value={formvalues.firstname}
            placeholder="First name"
            onChange={onInputChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name='lastname'
            value={formvalues.lastname}
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
            value={formvalues.birthday}
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
            value={formvalues.wedding}
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
          value={formvalues.consent}
          checked = {formvalues.consent}
          onChange= {onInputChange}
        />
      </Form.Group>
      </div>
      <div className='submitbutton'>
      <Button type="submit" className ='center'>Submit form</Button>
      </div>
    </Form>
    </div>
    </section>
  );
}

export default FormPage;