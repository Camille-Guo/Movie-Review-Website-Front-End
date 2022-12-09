import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import MyCard from "./UI/MyCard";
import { Row, Col } from "react-bootstrap";

function ReviewList() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || "1234"
  );

  const fetchData = () => {
    fetch("http://localhost:3001/commandreviews/get", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (recordId) => {
    // e.preventDefault();
    // alert(recordId);
    console.log({ recordId });

    fetch("http://localhost:3001/commandreviews/" + recordId, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((json) => {
        json.success
          ? alert("Delete Review Successful")
          : alert(JSON.stringify(json));
      });
    //
    try {
      navigate("/myreview", { replace: true });
      // this.forceUpdate([true]);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <div className="App">
      {/* <div> */}
      {/* {data.length > 0 ? ( */}
      {data.map((item, index) => (
        <MyCard style={{ backgroundColor: "#6c757d" }} key={item + index}>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Movie Name:</h5>
            </Col>
            <Col sm={8}>
              <p class="text-start">{item.movieName}</p>
            </Col>
          </Row>

          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Rating:</h5>
            </Col>
            <Col sm={8}>
              <h5 class="text-start">
                {" "}
                <Rating
                  initialValue={item.rate}
                  ratingValue={item.rate}
                  /* Available Props */
                />
              </h5>
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
                {moment(item.updateDate).format("DD-MM-YYYY h:mm:ss a")}
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={2}>
              <h5 class="text-end">Comment:</h5>
            </Col>
            <Col sm={8}>
              <p
                className="text-wrap text-start"
                style={{ wordBreak: "break-all" }}
              >
                {item.content}
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm={2} />
            <Col sm={2}>
              {" "}
              <Link to={"/edit/" + item._id}>
                <Button class="btn btn-primary btn-sm"> EDIT </Button>
              </Link>
            </Col>
            <Col sm={8}>
              <h5>
                {" "}
                <Button
                  variant="danger"
                  class="btn btn-danger  btn-sm"
                  value={item._id}
                  onClick={(e) => handleSubmit(e.target.value)}
                >
                  {" "}
                  DELETE
                </Button>
              </h5>
            </Col>
          </Row>
        </MyCard>
      ))}
      {/* ) : (
          <h5 class="text-center">Sorry!! No Movies Found!</h5>
        )} */}
    </div>
  );
}

export default ReviewList;
