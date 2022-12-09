import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MovieBox from "../components/MovieBox";
import MainCarousel from "../components/MainCarousel";
import Layout from "../layout/Layout";
const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=801f3117b8bdd3cee1d9c532a1edb00e";

const MovieHome = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);
  console.log('movies' + movies);
  console.log('name: ' + movies.map((movie)=>movie.title ));


  return (
    <Layout>
      <Row>
        <MainCarousel />
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <div className="grid">
            {movies.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default MovieHome;
