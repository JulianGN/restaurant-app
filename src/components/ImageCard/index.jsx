import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageSkeleton from '../ImageSkeleton';

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

const ImageCard = ({photo, title}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true)
    }, [photo])
    return (
        <>
        {imageLoaded ? (
             <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
        ) : <ImageSkeleton width='90px' height='90px' />}

        </>
    )};




export default ImageCard;