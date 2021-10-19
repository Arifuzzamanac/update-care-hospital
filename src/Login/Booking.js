import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is booking {serviceId}</h2>

            <Link to='/'>
                <button className='btn btn-primary'>Go Home</button>
            </Link>
        </div>
    );
};

export default Booking;