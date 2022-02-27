import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img<Pick<Props, 'large'>>`
    position: absolute;
    width: 100%;
    height: ${ props => props.large ? '100%' : '50vh' };
    object-fit: cover;
`;

interface Props {
    imgSrc: string,
    large?:boolean
}

export const BGImage:React.FC<Props> = ({ imgSrc, large=false }) => {
    return (
        <StyledImg large={large} src={ imgSrc } />
    )
}
