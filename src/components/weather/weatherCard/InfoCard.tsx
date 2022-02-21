import React from 'react';
import styled from 'styled-components';
import { StyledBody } from '../../shared/FontStyles';

type propInfoType = 'image' | 'degree' | 'percent';
interface Props {
    info: any,
    infoType: propInfoType,
    title: string
}

const StyledInfoContainer = styled.div`
    background: rgba(237, 242, 244, 0.70);
    padding: 1rem;
    width: 10rem;
    min-height: 8rem;
    position: relative;
    text-align: center;
`;
const StyledInfoCardFont = styled.p`
    font-size: 48px;
    color: #000;
    font-weight: 400;
`;
const StyledInfoCardTitle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
`;

export const InfoCard: React.FC<Props> = ({ info, infoType, title }) => {
    return (
        <StyledInfoContainer>
            {
                infoType === 'image' && (
                    <img src={ `https://openweathermap.org/img/wn/${info.icon}@2x.png` } alt={ info.description } loading='lazy' />
                )
            }
            {
                infoType === 'degree' && (
                    <StyledInfoCardFont>{ info }&deg;</StyledInfoCardFont>
                )
            }
            {
                infoType === 'percent' && (
                    <StyledInfoCardFont>{ info }%</StyledInfoCardFont>
                )
            }
            <StyledInfoCardTitle>
                <StyledBody>{ 
                    title.toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
                        .join(' ') }
                </StyledBody>
            </StyledInfoCardTitle>
        </StyledInfoContainer>
    )
}
