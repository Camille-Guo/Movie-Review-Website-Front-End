import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MovieBox from "../components/MovieBox";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import MyCard from "../components/UI/MyCard";
// import 'bootstrap/dist/css/bootstrap.min.css';

const SearchHome = () => {
  const location = useLocation();
  // console.log(location);
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query";
  const [query, setQuery] = useState(location.state.query);
  // alert("searchome" + query);
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query=${query}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(query);
        setMovies(data.results);
      });
  }, []);

  return (
    <Layout>
      <MyCard>
        <Row>
          <Col md={12} lg={12}>
            {movies.length > 0 ? (
              <div class="grid">
                {movies.map((movieReq, index) => (
                  <MovieBox key={movieReq.id + index} {...movieReq} />
                ))}
              </div>
            ) : (
              <h5 class="text-center">Sorry!! No Movies Found!</h5>
            )}
          </Col>
        </Row>
      </MyCard>
    </Layout>
  );
};

export default SearchHome;
