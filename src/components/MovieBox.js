import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_IMG = "https://image.tmdb.org/t/p/w500";
const MovieBox = ({ id,title, poster_path, vote_average, release_date, overview }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className='card text-center bg-secondary mb-3'>
            <div className='card-body'>
            <Link to={'/movie/'+id}>
                <img className='card-img-top' src={API_IMG + poster_path} alt="img"/>
            </Link>
                <div className='card-body'>
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View Movie</button>
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header style={{color:'black'}} closeButton>
                            <Modal.Title><h3>{title}</h3></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{color:'black'}}>
                            <img className='card-img-top' style={{width:'14rem'}} src={API_IMG + poster_path} alt="img"></img>
                            <br></br>
                            <h5>IMDb Average: {vote_average}</h5>
                            <h5>Release Date: {release_date}</h5>
                            <h6>Overview</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;