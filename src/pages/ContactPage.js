import React from 'react';
import LargeBanner from '../components/LargeBanner';
import { Form } from 'react-bootstrap';
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            user_email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.sendEmail(event);
        
        this.setState({
            disabled: true,
        })
    }

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_f78eecp', 'template_v5rk4k2', e.target, 'user_CDuFtprzCtjoic7tLtJPP')
          .then((result) => {
            this.setState({
                disabled: true,
                emailSent: true,
            })
            console.log(result.text);
          }, (error) => {
            this.setState({
                disabled: true,
                emailSent: false,
            })
          });
         
    }

    render() {
        return (
          <div>
              <LargeBanner title={this.props.title} />

              <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control required 
                            id="full-name" 
                            name="user_name" 
                            type="text" 
                            value={this.state.user_name} 
                            onChange={this.handleChange}/>                           
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control required
                            id="email" 
                            name="user_email" 
                            type="email" 
                            value={this.state.user_email} 
                            onChange={this.handleChange}/>                           
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control required
                            id="message" 
                            name="message" 
                            as="textarea"
                            rows="3" 
                            value={this.state.message} 
                            onChange={this.handleChange}/>                           
                        </Form.Group>

                        <Button className="d-inlineblock" varient="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <div className="d-inline">
                                <svg class="d-inline checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>}  
                        {this.state.emailSent === false && <p className="d-inline err-msg">Message Failed :(</p> }
                  </Form>
              </Content>

              

          </div>
        );
    }

}

export default ContactPage;
