import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Signup extends React.Component {

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Input onChange={(e) => this.handleChange(e)} name="name" required={true} label="Name" type="text" />
        <Form.Input onChange={(e) => this.handleChange(e)} name="email" required={true} label="Email" type="email" />
        <Form.Input onChange={(e) => this.handleChange(e)} name="password" 
        required={true} label='Enter Password' type='password' />
        <Form.Input onChange={(e) => this.handleChange(e)} name="password_confirmation" 
        required={true} label='Confirm Password' type='password' />
        <Button type='submit'>Submit</Button>
      </Form>
      )
    }

    handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
    }
    
  
  handleSubmit = (e) => {
    e.preventDefault()
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch(`http://localhost:3000/api/v1/users`, request)
    .then(r => r.json())
    .then(data => this.handleResponse(data, e))
  }
  handleResponse = (data, e) => {
    e.target.reset()
    localStorage.token = data.token
  }

}
export default Signup;