import React,{ useState , useEffect} from 'react'
import {Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { User} from "../helpers/LocalStorage";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBTypography,
  } from "mdb-react-ui-kit";
import AddReviewButton from '../components/AddReviewButton'

function  MovieInfo() {
    const userInfo = User.getUser;
    const { movie_id } = useParams();
    // console.log('33333 '+movie_id);
    const API_URL =
      "https://api.themoviedb.org/3/movie/" +
      movie_id +
      "?api_key=801f3117b8bdd3cee1d9c532a1edb00e";
    const API_IMG = "https://image.tmdb.org/t/p/w500";
  
    const [movie, setMovie] = useState({});

  
    useEffect(() => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        });
    }, [movie_id]);

    return(
        <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "250px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={API_IMG + movie.poster_path}
                    alt={movie.title}
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "75px" }}>
                  <MDBTypography tag="h3">{movie.title}</MDBTypography>
                  <MDBTypography tag="h6" style={{ paddingTop: "10px" }}>
                    <span style={{ paddingLeft: "5px" }}>
                      {movie.release_date} |
                    </span>
                    <span style={{ paddingLeft: "5px" }}>
                      {movie.runtime} h |
                    </span>
                    <span style={{ paddingLeft: "5px" }}>
                      IMDb: {movie.vote_average}
                    </span>
                    <span style={{ paddingLeft: "5px" }}>
                      {/* Company: {movie.production_companies[0]} */}
                    </span>
                  </MDBTypography>
                  <MDBTypography tag="h6" style={{ paddingTop: "10px" }}>
                  <div>
                    {movie.genres &&
                      movie.genres.length > 0 &&
                      movie.genres.map((gen) => <span>{gen.name} /</span>)}
                  </div>
                  </MDBTypography>
                  <MDBTypography tag="h6" style={{ paddingTop: "10px" }}>
                      <AddReviewButton/>
                  </MDBTypography>

                 
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p
                    className="lead fw-normal mb-1"
                    style={{ paddingTop: "5%" }}
                  >
                    Overview
                  </p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      {movie.overview}
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
             
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
                    }
export default MovieInfo


