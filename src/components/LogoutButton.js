import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function LogoutButton() {
	return (
		<div>
			<Link to="/identity#logout">
				<Button variant="secondary">Logout</Button>
			</Link>
		</div>
	);
}
export default LogoutButton;
