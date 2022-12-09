import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MyCard from "./UI/MyCard";
import { Row, Col } from "react-bootstrap";

function EditReviewForm() {
  // const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const { id } = useParams();
  const [movieId, setMovieId] = useState();
  const [movieName, setMovieName] = useState();
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
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
    callGetBody();
    setUpdateDate(moment().format("DD-MM-YYYY hh:mm:ss a"));
  }, []);
  console.log(id);

  const callGetBody = () => {
    fetch(`http://localhost:3001/commandreviews/${id}`, { method: "GET" })
      .then((response) => response.json())
      // .then((json) => alert(JSON.stringify(json)))
      .then((data) => {
        console.log(data);
        setMovieId(data.movieId);
        setMovieName(data.movieName);
        setUserId(data.userId);
        setUsername(data.username);
        setInputContentText(data.content);
        setRating(data.rate);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/commandreviews", {
      method: "PUT",
      body: JSON.stringify({
        recordId: id,
        movieId: movieId,
        movieName: movieName,
        userId: userId,
        username: username,
        updateDate: updateDate,
        rate: rating,
        content: inputContentText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success
          ? alert("Update Review Successful")
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
        <MyCard>
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
                {moment(updateDate).format("YYYY-MM-DD hh:mm:ss a")}
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

export default EditReviewForm;
