import React from "react";
import { Form, Button, Row, Col, Container, Stack} from "react-bootstrap";
import { useContext, useState, handleSubmit } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContex';
import CancelButton from "./CancelButton";
import MyButton from "./UI/MyButton";
import { paste } from "@testing-library/user-event/dist/paste";

const EditUserInfoForm = () => {
  const navigate = useNavigate();
	const user = useContext(UserContext);
	const email = user.email;
  const password = user.password;
	const [username, setUsername] = useState();
  const [data, setData] = useState([]);
	const [oldPassword, setOldPassword] = useState();
	// const [newPassword, setNewPassword] = useState();
	// const [confirmPassword, setConfirmPassword] = useState();
	const [message, setMessage] = useState('');

	const fetchData = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/users', {
			method: 'POST',
			body: JSON.stringify({
        username: username,
        email:email,
        password:password
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 5 }}>
          <img src={'../images/person.png'} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <h1>Edit your information</h1>
        </Col>
      </Row>
       <Row>
          <Col md={{ span: 6, offset: 4 }}>
    
            <Form onSubmit={fetchData}>
            
              <div><h3>Your logged Email is {email}</h3></div>
              <div class="mb-3">
            <label for="FormControlInput" class="form-label">Username</label>
              <input 
              type="text" 
              class="form-control" 
              id="FormControlInput" 
              placeholder={user.username}>
              </input>
              </div>
              {/* <div class="mb-3">
              <label for="FormControlInput" class="form-label">Input your password to confirm</label>
              <input 
              type="password"  
              class="form-control" 
              id="FormControlInput" 
              placeholder={user.password}>
              </input>
              </div> */}
                <Stack gap={2} className="col-md-5 mx-auto">
                  <Button  type="submit" variant="secondary">Save changes</Button>
                  <MyButton><CancelButton /></MyButton>
                </Stack>
            </Form>
            
          </Col>
        </Row>
      </Container>
    
  )};
export default EditUserInfoForm;