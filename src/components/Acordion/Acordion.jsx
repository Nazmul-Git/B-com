import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Acordion = ({index,faq,formatIndex}) => {
    return (
        <Accordion.Item eventKey={index} key={index} className='card'>
            <Accordion.Button as={Card.Header} className='card-header'>
                <Link className='card-link' to='#'>
                    {formatIndex(index)}. {faq.question}
                </Link>
            </Accordion.Button>
            <Accordion.Body className='collapse show'>
                <Card.Body className='card-body'>{faq.answer}</Card.Body>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default Acordion;