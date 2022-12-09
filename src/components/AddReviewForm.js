import React, { useState, useEffect, useContext } from "react";
import { Rating } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import MyCard from "./UI/MyCard";
import { Row, Col } from "react-bootstrap";
import { UserContext } from "../contexts/UserContex";
import { User, Movie } from "../helpers/LocalStorage";

// movie_id; movie_name; user_id; user_name;
function AddReviewForm() {
  const user = useContext(UserContext);
  const { movie_id } = useParams();
  console.log(movie_id);

  const API_URL =
    "https://api.themoviedb.org/3/movie/" +
    movie_id +
    "?api_key=801f3117b8bdd3cee1d9c532a1edb00e";
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.info("data" + data);
      });
  }, []);
  const movieId = movie_id;
  const movieName = movie.title;
  // const [movieId, setMovieId] = useState(
  //   // localStorage.getItem("movieId") || "307463"
  //   movie_id

  // );
  // const [movieName, setMovieName] = useState(
  //   // localStorage.getItem("movieName") || "spider man2"
  //   movie.title
  // );

  const [userId, setUserId] = useState(user.id);
  const [username, setUsername] = useState(user.username);
  const [inputContentText, setInputContentText] = useState();
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();
  const handleRating = (rate) => {
    setRating(rate);
  };
  // Optional callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const [updateDate, setUpdateDate] = useState();
  useEffect(() => {
    setUpdateDate(moment().format("DD-MM-YYYY hh:mm:ss a"));
  }, []);
  console.log(updateDate);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/addreview", {
      method: "POST",
      body: JSON.stringify({
        movieId: movieId,
        movieName: movieName,
        userId: userId,
        username: username,
        updateDate: updateDate,
        rate: rating,
        // content: [
        //   {
        //     contentText: inputContentText,
        //   },
        // ],
        content: inputContentText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success
          ? alert("Add Review Successful")
          : alert(JSON.stringify(json));
      });
    try {
      navigate("/myreview", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <MyCard style={{ backgroundColor: "#6c757d" }}>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Movie Name:</h5>
            </Col>
            <Col sm={8}>
              <p class="text-start">{movieName}</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">User Name:</h5>
            </Col>
            <Col sm={8}>
              <p class="text-start">{username}</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Rating:</h5>
            </Col>
            <Col sm={8}>
              <p class="text-start">
                {" "}
                <Rating
                  onClick={handleRating}
                  onPointerEnter={onPointerEnter}
                  onPointerLeave={onPointerLeave}
                  onPointerMove={onPointerMove}
                  initialValue={rating}
                  ratingValue={rating}
                  /* Available Props */
                />
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Update Date:</h5>
            </Col>
            <Col sm={8}>
              <p class="text-start">
                {" "}
                {moment(updateDate).format("DD-MM-YYYY h:mm:ss a")}
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Comment:</h5>
            </Col>
            <Col sm={8} />
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={10}>
              <Form onSubmit={handleSubmit}>
                {/* <Form.Group className='mb-5'>
          <Form.Text>{errorMsg}</Form.Text>
        </Form.Group> */}
                <Form.Group className="my-3 mx-3" controlId="formBasicEmail">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Content Text"
                    value={inputContentText}
                    onChange={(e) => {
                      setInputContentText(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mx-3"
                  style={{ width: "100px", float: "right" }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </MyCard>
      </div>
    </>
  );
}

export default AddReviewForm;
