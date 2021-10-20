import React from 'react';
import { Card, CardGroup, Nav } from 'react-bootstrap';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img, description } = expert;
    return (
        <div className='col-md-3 col-sm-6 col-12 mb-5'>
            <CardGroup className="expert">
                <Card className='mb-4'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <div>
                        <div className="d-flex justify-content-center">
                            <Nav.Link><i className="fab fa-facebook-square fs-3"></i></Nav.Link>
                            <Nav.Link><i className="fab fa-twitter-square fs-3"></i></Nav.Link>
                            <Nav.Link><i className="fab fa-instagram-square fs-3"></i></Nav.Link>
                        </div>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Expert;