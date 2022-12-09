import React from "react";
import { Row, Col } from "react-bootstrap";
import EditProfileButton from "../components/EditProfileButton";
import MyReviewButton from "../components/MyReviewButton";
import Layout from "../layout/Layout";
import ChangePasswordButton from "../components/ChangePasswordButton";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContex';
import { useContext} from 'react';
import MyCard from "../components/UI/MyCard";



//profile page

const DisplayUserInfo = () => {

  const navigate = useNavigate();
	const user = useContext(UserContext);
	const email = user.email;
	const username = user.username;
	//const [message, setMessage] = useState('');

	// const fetchData = (e) => {
	// 	e.preventDefault();
	// 	fetch('http://localhost:3001/user/change-password', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			username,
	// 			email,
	// 		}),
	// 		headers: {
	// 			'Content-type': 'application/json; charset=UTF-8',
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		;
	// };
  return (
    <Layout>
      <Row>
        <Col md={{ span: 3, offset: 4 }}>
          <img src={"../images/person.png"} />
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <h1> Your Profile</h1>
        </Col>
      </Row>

      <MyCard>
        <Row>   
          <Col sm={3} /><Col sm={2}><h5>Name:</h5></Col>
          <Col sm={7}><h5>{username}</h5></Col>
        </Row> 

        <Row> 
          <Col sm={3} /><Col sm={2}><h5>Email:</h5></Col>
          <Col sm={7}><h5>{email}</h5></Col>
        </Row>
      </MyCard>

      <Row>
        <Col sm={3} />
        <Col sm={2}>
          <EditProfileButton />
        </Col>
        <Col sm={2}>

        </Col>
        <Col sm={2}>
          <MyReviewButton />
        </Col>
        <Col sm={3} />
      </Row>
    </Layout>
  );
};

export default DisplayUserInfo;
