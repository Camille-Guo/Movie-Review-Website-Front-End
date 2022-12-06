import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

const Movie1 = () => {
    return (
        <div className="container" style={{ width: '80%', marginLeft: '20%' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '300px'}}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src="https://image.tmdb.org/t/p/w500/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg"
                                        alt="Boruto: Naruto the Movie image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                </div>
                                <div className="ms-3" style={{ marginTop: '75px' }}>
                                    <MDBTypography tag="h3">Boruto: Naruto the Movie</MDBTypography>
                                    <MDBTypography tag="h6">Hiroyuki Yamashita</MDBTypography>
                                    <MDBTypography tag="h6" style={{paddingTop:'10px'}}>Japanese |<span style={{paddingLeft:'5px'}}>2015-08-07 |</span><span style={{paddingLeft:'5px'}}>IMDb: 7.6</span></MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1" style={{ paddingTop: '15%' }}>Overview</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">
                                            The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy with his Hokage duties, puts a damper on Boruto's fire. He ends up meeting his father's friend Sasuke, and requests to become... his apprentice!? The curtain on the story of the new generation rises!
                                        </MDBCardText>
                                    </div>
                                </div>
                                {/* <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Comments</MDBCardText>
                                </div>
                                <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow> */}

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Movie1;