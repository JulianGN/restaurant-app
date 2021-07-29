import styled from "styled-components";
import Slider from "react-slick";
import TextField from "@material/react-text-field";

export const WrapperS = styled.div`
    display:flex;  
`

export const Container = styled.aside`
    background-color: ${props => props.theme.colors.background}; 
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`

export const TextFieldS = styled(TextField)`
    width: 100%;
`

export const Map = styled.div`
    background-color: black;
    width: 50vw;
`

// estilizando o componente do slick slider
export const Carousel = styled(Slider)`
    width: 100%;
    .slick-slide{
        margin-right: 30px;
    }
    .slick-list{
        width: 100%;
    }
`

export const CarouselTitle = styled.h1`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`

export const ModalContent = styled.p`
    ${ModalTitle}
    line-height: 19px;
    font-size: 16px;
    font-weight: normal;
`