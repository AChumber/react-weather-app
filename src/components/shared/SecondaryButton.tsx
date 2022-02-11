import React from 'react';
import styled from 'styled-components';

interface Props {
    onClick?: () => any;
    children: React.ReactNode
}

const StyledSecondaryBtn = styled.button`
    font-size: 1.15rem;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid #2B2D42;
    background: linear-gradient(90.59deg, rgba(255, 255, 255, 0.6) 0.51%, rgba(255, 255, 255, 0) 99.7%);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s ease-in;

    &:hover {
        background-color: #EDF2F4;
        box-shadow: 1px 1px 4px rgba(43,45,66,0.3);
    }
`;

export const SecondaryButton = ({ children, onClick }: Props) => <StyledSecondaryBtn 
                                                                    onClick={ onClick && onClick }>{ children }</StyledSecondaryBtn>;
