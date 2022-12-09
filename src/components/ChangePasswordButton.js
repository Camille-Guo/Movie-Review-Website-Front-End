import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ChangePassword() {
	return (
		<div>
			<Link to="/user/update-password">
				<Button variant="primary">Change Password</Button>
			</Link>
		</div>
	);
}
export default ChangePassword;