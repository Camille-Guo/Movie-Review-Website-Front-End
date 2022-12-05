import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import MyButton from './UI/MyButton'

function RegisterForm() {
  const [inputEmail, setInputEmail] = useState();
  const [inputUsername, setInputUsername] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [inputComfirmPassword, setInputComfirmPassword] = useState();
  const[errorMsg, setErrorMsg] = useState();
  const [emailErrMsg, setEmailErrMsg] = useState('* We\'ll never share your email with anyone else.');
  const [pwdErrMsg, setPwdErrMsg] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({
        email: inputEmail,
        username: inputUsername,
        password: inputPassword,
        comfirmpassword: inputComfirmPassword,
      }),
      headers: {
        'Content-type': "application/json; charset=UTF-8",
      }
    })
      .then((data) => data.json())
      .then((json) => {
          // (json.success? alert('Registration sucessful') : alert(JSON.stringify(json)));
          setErrorMsg(json.errorMsg);
          setPwdErrMsg(json.pwdErrMsg);
          setEmailErrMsg(json.emailErrMsg);
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className='mb-5'>
          <Form.Text>{errorMsg}</Form.Text>
        </Form.Group> */}
        <Form.Group className='my-3 mx-3' controlId="formBasicEmail">
          <Form.Control type='email' placeholder='Email' value={inputEmail} onChange={(e)=>{setInputEmail(e.target.value)}} />
          <Form.Text className="text-muted">{emailErrMsg}</Form.Text>
        </Form.Group>
        <Form.Group className='mb-5 mx-3'>
          <Form.Control type='text' placeholder='Username' value={inputUsername} onChange={(e)=>{setInputUsername(e.target.value)}}/>
        </Form.Group>
        <Form.Group className='mb-5 mx-3' controlId="formBasicPassword">
          <Form.Control type='password' placeholder='Password' value={inputPassword} onChange={(e)=>{setInputPassword(e.target.value)}}/>
        </Form.Group>
      <Form.Group className='mb-5 mx-3'>
          <Form.Control type='password' placeholder='Comfirm Password' value={inputComfirmPassword} onChange={(e)=>{setInputComfirmPassword(e.target.value)}}/>
          <Form.Text className="text-muted">{pwdErrMsg}</Form.Text>
        </Form.Group>
        <Button variant='primary' type="submit" className='mx-3' style={{width:'100px' ,float:'right'}}>Register</Button>

      {/* <MyButton type="submit" className="mx-3" style={{float:'right'}}>
          Register
        </MyButton> */}
      </Form>
    </>
  )
}

export default RegisterForm
