import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className='col-md-3 col-sm-6 col-12 mb-5 p-2'>
            <img className='img-fluid' src={img} alt="" />
            <h2> {name}</h2>
            <p>{description}</p>
            <Link to={`/Booking/${id}`}>
                <button className='btn btn-primary'>Appointment on {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;