import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function EditProfile() {
	return (
		<div>
			<Link to="/edituser">
				<Button variant="primary">Edit Profile</Button>
			</Link>
		</div>
	);
}
export default EditProfile;