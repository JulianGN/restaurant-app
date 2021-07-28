import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import ReactStars from 'react-rating-stars-component'

import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
        <RestaurantInfo>
            <Title>Nome do restaurante</Title>
            <ReactStars count={5} isHalf edit={false} value={4} />
            <Address>Rua do Teste Mestre, 123</Address>
        </RestaurantInfo>
    </Restaurant>
);

export default RestaurantCard;