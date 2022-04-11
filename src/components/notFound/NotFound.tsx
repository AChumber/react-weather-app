import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
    background: rgba(250,250,250,1);
    background: linear-gradient(121deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 25%);
    width: 90%;
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        font-size: 2.5rem;
    }

    & p {
        margin: 1rem 0;
        font-size: 1.2rem;
        color: #3B3B3B; 
    }
`;

const BGImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


const NotFound = () => {
    return (
        <>
            <BGImage src={`${process.env.PUBLIC_URL}/assets/pexels-cloudy.jpg`} alt="cloudy but light" />
            <NotFoundContainer>
                <h1>404! Could not find the route you wanted.</h1>
                <p>Hmmm, sorry about that. Please check if you entered the url correctly.</p>
                <Link to="/">Click to Go Home</Link>
            </NotFoundContainer>
        </>
    )
}

export default NotFound