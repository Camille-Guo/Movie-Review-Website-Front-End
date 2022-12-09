
import React from 'react';
import {
    MDBCard,
    // MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBTypography
} from 'mdb-react-ui-kit';
import Layout from '../layout/Layout';

function About() {
    return (
        <Layout>
            <div className="container" style={{ width: '80%', marginLeft: '8%' }}>
                <MDBRow className='row-cols-1 row-cols-md-1 g-4'>
                    <MDBCol>
                        <MDBCard>
                            <div className="rounded-top d-flex flex-row" style={{ backgroundColor: 'beige', height: '80px' }}>
                                <div className="ms-3" style={{ marginTop: '20px' }}>
                                    <MDBTypography tag="h2" style={{ color: 'black', textShadow: '2px 2px 5px red'}}>Project MONVIE - Team BK</MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Introduction</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">
                                            Content Here
                                        </MDBCardText>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                &nbsp;
                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                    <MDBCol>
                        <MDBCard>
                            <div className="rounded-top d-flex flex-row" style={{ backgroundColor: 'gold', height: '70px' }}>
                                <div className="ms-3" style={{ marginTop: '20px' }}>
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>Member Name</MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Overview</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">
                                            Content Here
                                        </MDBCardText>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <div className="rounded-top d-flex flex-row" style={{ backgroundColor: 'lavender', height: '70px' }}>
                                <div className="ms-3" style={{ marginTop: '20px' }}>
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>Member Name</MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Overview</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">
                                            Content Here
                                        </MDBCardText>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                &nbsp;
                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                    <MDBCol>
                        <MDBCard>
                            <div className="rounded-top d-flex flex-row" style={{ backgroundColor: 'lavender', height: '70px' }}>
                                <div className="ms-3" style={{ marginTop: '20px' }}>
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>Member Name</MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Overview</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">
                                            Content Here
                                        </MDBCardText>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <div className="rounded-top d-flex flex-row" style={{ backgroundColor: 'lavender', height: '70px' }}>
                                <div className="ms-3" style={{ marginTop: '20px' }}>
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>Member Name</MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Overview</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">
                                            Content Here
                                        </MDBCardText>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </Layout>
    )
}

export default About;
