import React from "react";
import { Form, Button, Row, Col, Container, Stack} from "react-bootstrap";
import { useContext, useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { UserContext } from '../contexts/UserContex';
import { User } from '../helpers/LocalStorage';
import CancelButton from "./CancelButton";

const EditUserInfoForm = () => {
  const navigate = useNavigate();
	const user = useContext(UserContext);
	const email = user.email;
  // const password = user.password;
  // const avatar = user.avatar;
	const [username, setUsername] = useState(user.username);
	const [message, setMessage] = useState('');


  const fetchData = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/user/edit', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
        username: username,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
    .then((res) => res.json())
    .then((res) => {
      if (!res.message) {
        User.setUser(res.data);
        navigate('/');
      } else {
        setMessage(res.message);
      }
    });
  }
  return (
    <>
      <Row>
        <Col md={{ span: 3, offset: 4 }}>
          <img src={'../images/person.png'} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <h1>Edit your Profile</h1>
        </Col>
      </Row>
       <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <Form onSubmit={fetchData}>
            
            <div><h3>Email : {email}</h3></div>
              
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please input a new username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);}}
                ></Form.Control>
              </Form.Group>
              {(message==='') && (
					<Form.Group className="mx-3 mb-5">
						<Form.Text>{message}</Form.Text>
					</Form.Group>
				)}
                <Stack gap={2} className="col-md-5 mx-auto">
                  <Button  type="submit" variant="primary">Save changes</Button>
                  <CancelButton />
                </Stack>
            </Form>
            
          </Col>
        </Row>
      </>
  )};
export default EditUserInfoForm;