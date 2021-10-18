import React from 'react';
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div className='col-md-3 col-sm-6 col-12 mb-5 p-2'>
            <img className='img-fluid' src={img} alt="" />
            <h2> {name}</h2>
            <p>{description}</p>
            <Button variant="primary">Appointment on {name.toLowerCase()}</Button>
        </div>
    );
};

export default Service;