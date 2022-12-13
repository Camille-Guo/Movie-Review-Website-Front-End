
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBTypography
} from 'mdb-react-ui-kit';
import * as HiIcons from 'react-icons/hi';
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
                                    <MDBTypography tag="h2" style={{ color: 'black', textShadow: '2px 2px 5px red' }}>Project MONVIE - Team BK</MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1" style={{ margin: '-20px 0' }}>Introduction</p>
                                    <div className="p-4" style={{ height: '170px' }}>
                                        <MDBCardText className="font-italic mb-1" style={{ margin: '-10px 0' }}>
                                            Project MONVIE (Movie - MON VIE) is a movie introduction and discussion website, allowing users to search for movies, view movie details and read other users' comments about movies.
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1">
                                            If you want to comment on your favorite movie, you are welcome to register as a member. After registration, you could rate your favorite / non-favorite film, and write your comment about the movies, to share your opinions with all fellows through this website.
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
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>
                                        <HiIcons.HiUserGroup />&nbsp;Rucheng Ren
                                    </MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1" style={{ margin: '-20px 0' }}>
                                        Group Leader
                                    </p>
                                    <div className="p-4">
                                        <MDBCardText className="font-italic mb-1" style={{ margin: '-10px 0' }}>
                                            Main Tasks:
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1" style={{ height: '120px' }}>
                                            <ul>
                                                <li>Logo</li>
                                                <li>Register/Login</li>
                                                <li>Modify Password</li>
                                                <li>DB Connection</li>
                                                <li>Display Movies</li>
                                                <li>Display Reviews</li>
                                                <li>Local Storage</li>
                                            </ul>
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
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>
                                        <HiIcons.HiUser />&nbsp;Xiaoming Su
                                    </MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1" style={{ margin: '-20px 0' }}>
                                        Group Member
                                    </p>
                                    <div className="p-4">
                                        <MDBCardText className="font-italic mb-1" style={{ margin: '-10px 0' }}>
                                            Main Tasks:
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1" style={{ height: '120px' }}>
                                            <ul>
                                                <li>User Page</li>
                                                <li>View Profile</li>
                                                <li>Edit Profile</li>
                                                <li>Edit profile button</li>
                                                <li>User Reviews button</li>
                                                <li>Display User Info</li>
                                                <p></p>
                                            </ul>
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
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>
                                        <HiIcons.HiUser />&nbsp;Zibin Guo
                                    </MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1" style={{ margin: '-20px 0' }}>
                                        Group Member
                                    </p>
                                    <div className="p-4">
                                        <MDBCardText className="font-italic mb-1" style={{ margin: '-10px 0' }}>
                                            Main Tasks:
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1" style={{ height: '120px' }}>
                                            <ul>
                                                <li>View Reviews</li>
                                                <li>Add Review</li>
                                                <li>Edit Review</li>
                                                <li>Delete Review</li>
                                                <li>Rating System </li>
                                                <li>Header</li>
                                                <li>Search Bar</li>
                                                <li>Change Theme</li>
                                            </ul>
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
                                    <MDBTypography tag="h4" style={{ color: 'black' }}>
                                        <HiIcons.HiUser />&nbsp;Qichen Zhu
                                    </MDBTypography>
                                </div>
                            </div>
                            <p></p>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1" style={{ margin: '-20px 0' }}>
                                        Group Member
                                    </p>
                                    <div className="p-4">
                                        <MDBCardText className="font-italic mb-1" style={{ margin: '-10px 0' }}>
                                            Main Tasks:
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-1" style={{ height: '120px' }}>
                                            <ul>
                                                <li>Main Page</li>
                                                <li>Sidebar</li>
                                                <li>Home Carousel</li>
                                                <li>Movie Box</li>
                                                <li>Movie Modal</li>
                                                <li>About Page</li>
                                                <li>Recommends</li>
                                                <li>3rd party API</li>
                                            </ul>
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
