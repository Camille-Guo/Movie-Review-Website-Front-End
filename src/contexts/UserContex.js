import { createContext } from 'react';

import { User } from '../helpers/LocalStorage';

const userContent = {
	isLoggin: false,
	username: '',
	email: '',
	password:'',
	avatar: null,
	id: '',
};

export const UserContext = createContext(userContent);

const UserProvider = (props) => {
	const userInfo = User.getUser();

	let data = userContent;

	if (userInfo) {
		data = {
			...data,
			username: userInfo.username,
			email: userInfo.email,
			id: userInfo._id,
			password: userInfo.password,
			avatar:userInfo.avatar,
			isLoggin: true,
		};
	}

	return (
		<UserContext.Provider value={data}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
