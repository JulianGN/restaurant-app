import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: 1rem;
    padding: 1rem;
    background-color: #ffffff;
    border-left: 5px solid transparent;
    transition: .5s;
    gap: 1rem;
    :hover {
        background-color: ${props => props.theme.colors.background};
        border-left: 5px solid ${props => props.theme.colors.primary};
        transition: .25s;
    } 
`

export const RestaurantInfo = styled.div`
    display:flex;
    flex-direction: column;
`

export const Title = styled.h4`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 10px;
`;

export const Address = styled.address`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    font-size: .75rem;
    line-height: 1rem;  
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const RestaurantPhoto = styled.img`
    width: 100px;
    height: 100px;
    border-radius: .5rem;
    object-fit: cover;
`;