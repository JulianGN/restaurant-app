import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 90px;
    height: 90px;
    padding: 5px;
    border-radius: 1rem;
    background-image: url(${props => props.photo});
    background-size: cover;
`

const Title = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    color: #ffffff;
    font-size: 1rem;
`

const ImageCard = ({photo, title}) => (
        <Card photo={photo}>
            <Title>{title}</Title>
        </Card>
    );




export default ImageCard;