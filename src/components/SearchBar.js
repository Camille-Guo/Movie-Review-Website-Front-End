import React, { useRef,useState  } from "react";
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	Button,
} from 'react-bootstrap';
import * as FcIcons from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar(options) {
  const navigate = useNavigate();
	const [query, setQuery] = useState('');

	const searchMovie = async (e) => {
		e.preventDefault();
		console.log('Searching');
		// alert(query);
		// alert(localStorage.getItem("query"));

		try {
			// navigation.navigate(name, params)
		 navigate('/searchhome', { state: { query } });
		} catch (error) {
			console.log(error);
		}
	};
	const changeHandler = (e) => {
		setQuery(e.target.value);
		// alert(query);
		// localStorage.setItem("query", query);
	};


  return (
		<>
			<Navbar
				// bg="light"
				expand="lg"
				// variant="light"
				// style={{ position: "absolute", right: "20%", color: "red" }}
			>
				<Container fluid>
					{/* <Navbar.Brand href="">Welcome</Navbar.Brand> */}
					{/* <Navbar.Brand href="">Trending</Navbar.Brand> */}
					<Navbar.Toggle aria-controls="navbarScroll">
						{<FcIcons.FcSearch />}
					</Navbar.Toggle>
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-3"
							style={{ maxHeight: '100px' }}
							navbarScroll
						></Nav>
						<Form className="d-flex" onSubmit={searchMovie}>
							<FormControl
								type="search"
								placeholder="Movie Search"
								className="me-2"
								aria-label="search"
								name="query"
								value={query}
								onChange={changeHandler}
								required
							></FormControl>
							<Button variant="secondary" type="submit">
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);






















  // const searchValueRef = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // prevent page reload
  //   fetch("https://api.themoviedb.org/3/search/movie", {
  //     method: "POST",

  //     body: JSON.stringify({
  //       api_key: "287aa00fd9d0384e651f7f3865c5a54f",
  //       query: searchValueRef.current.value,
  //       page: 1,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((data) => data.json())
  //     // .then((json) => alert(JSON.stringify(json))); // to fill in based on callPostBody
  //     .then((json) => {
  //       alert(JSON.stringify(json));
        
  //     });
  // };

  // return (
  //   <Form  className="d-flex mx-5" onSubmit={handleSubmit}>
  //     <Form.Control
  //     type="search"
  //     className="me-2"
  //     aria-label="search"
  //     ref={searchValueRef}
  //     placeholder="Movie Name"
  //     tyle={{ maxLeft: "5%" }}
  //     />
  //     <Button variant="success" type="submit">
  //       Search
  //     </Button>
  //   </Form>
  // );
}

export default SearchBar;
