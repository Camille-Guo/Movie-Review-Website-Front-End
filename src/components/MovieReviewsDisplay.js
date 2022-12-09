import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "react-simple-star-rating";

function MovieReviewsDisplay() {
  const {movie_id} = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/reviews?movieId=" + movie_id, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <div>
      {reviews.map((rev) => (
        <FetchReviewData key={rev._id} {...rev} />
      ))}
    </div>
  );
}

export default MovieReviewsDisplay;

export const FetchReviewData = ({
  movieId,
  movieName,
  username,
  rate,
  content,
  updateDate,
}) => {
  const formateDate = updateDate.substring(0, 10);
  const formateTime = updateDate.substring(11, 19);
  return (
    <Card className="mb-3 text-black"  >
      <Card.Header >
        <span>
          <b>{username}</b>
        </span>{" "}
        &nbsp; &nbsp; &nbsp;
        <span> &lt;&lt;{movieName} &gt;&gt;</span>&nbsp; &nbsp; &nbsp;
        <span>
          <Rating initialValue={rate} fillColor="orange" emptyColor="gray" size='15px'/> &nbsp;
          <b>{rate}/5</b>
        </span>
        &nbsp; &nbsp; &nbsp;
        <span>{formateDate}</span>&nbsp;
        <span>{formateTime}</span>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> {content} </p>
          <footer className="blockquote-footer d-flex justify-content-end">
            Review by &nbsp;{" "}
            <cite title="Source Title">
              {" "}
              <b> {username} </b>
            </cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
