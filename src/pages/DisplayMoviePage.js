import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import MovieInfo from "../components/MovieInfo";
import MovieReviewsDisplay from "../components/MovieReviewsDisplay";

function DisplayMoviePage() {
  // const movieId = { movie_id };
  // const movieId = '123';
  return (
    <Layout>
      <MovieInfo />
      <MovieReviewsDisplay/>
    </Layout>
  );
}

export default DisplayMoviePage;
