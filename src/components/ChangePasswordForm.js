import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../contexts/UserContex';
import { User } from '../helpers/LocalStorage';

const ChangePasswordForm = () => {
	const navigate = useNavigate();
	const user = useContext(UserContext);
	const email = user.email;
	const username = user.username;
	const [oldPassword, setOldPassword] = useState();
	const [newPassword, setNewPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/user/change-password', {
			method: 'POST',
			body: JSON.stringify({
				username,
				email,
				oldPassword,
				newPassword,
				confirmPassword,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.info(res)
				console.info(message)
				if (!res.message) {
					User.setUser(res.data);
					navigate('/');
				} else {
					setMessage(res.message);
				}
			});
	};
	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="my-5 mx-3" controlId="formBasicEmail">
					<Form.Control
						type="email"
						placeholder="Email"
						value={email}
						readable="readonly"
					/>
				</Form.Group>
				<Form.Group className="mb-5 mx-3">
					<Form.Control
						type="text"
						placeholder="Username"
						value={username}
						readable="readonly"
					/>
				</Form.Group>
				<Form.Group className="mb-5 mx-3" controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="Old Password"
						value={oldPassword}
						onChange={(e) => {
							setOldPassword(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-5 mx-3" controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="New Password"
						value={newPassword}
						onChange={(e) => {
							setNewPassword(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-5 mx-3">
					<Form.Control
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
						}}
					/>
				</Form.Group>
				{(message==='') && (
					<Form.Group className="mx-3 mb-5">
						<Form.Text>{message}</Form.Text>
					</Form.Group>
				)}
				<Button
					variant="primary"
					type="submit"
					className="mx-3"
					style={{ width: '100px', float: 'right' }}
				>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default ChangePasswordForm;
