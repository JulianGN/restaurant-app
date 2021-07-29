import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-text-field'
import { Input } from '@material/react-text-field';
// import '@material/react-text-field/dist/text-field.css';

import { Container, Search, Logo, TextFieldS, WrapperS, Map, Carousel, CarouselTitle, ModalTitle, ModalContent } from './styles';

// Images
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

// Componentes
import ImageCard from '../../components/ImageCard'
import RestaurantCard from '../../components/RestaurantCard'
import Modal from '../../components/Modal';
import MapContainer from '../../components/Map';
import { Loader } from '../../components';
import { ImageSkeleton } from '../../components';

const Home = () => {
    
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    const hasRestaurants = restaurants.length > 0;
    

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(value);
        }
    }

    const handleOpenModal = (placeId) => {
        setPlaceId(placeId);
        setModalOpened(true)
    }

    return(
        <WrapperS>
            <Container>
                <Search>

                        <Logo src={logo} alt="Restaurant Finder"/>

                        <TextFieldS
                        label='Pesquisar estabelecimento'
                        outlined
                        // helperText={<HelperText>Help Me!</HelperText>}
                        // onTrailingIconSelect={() => this.setState({value: ''})}
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                        ><Input
                        value={value}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                        </TextFieldS>

                        {/* se tiver itens no restaurante, retorna o carousel, se não, carrega o loader */}
                        {restaurants.length > 0 ? (
                            <>
                                <CarouselTitle>Na sua área</CarouselTitle>
                                <Carousel {...settings}>
                                {restaurants.map((restaurant) => (
                                    <ImageCard key={restaurant.place_id} restaurant={restaurant} />
                                ))}
                                </Carousel>
                            </>
                        ) : <Loader />}

                </Search>

                {restaurants.map((restaurant) => (
                    <RestaurantCard
                    key={restaurant.place_id}
                    restaurant={restaurant}
                    onClick={() => {
                        handleOpenModal(restaurant.place_id);
                        setModalOpened(true);
                    }} /> ))  }              
                


            <Modal modalOpened={modalOpened} onClose={() => setModalOpened(false)}>
            {restaurantSelected ? (
                <>
                    <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                    <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                    <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                    <ModalContent>
                        {restaurantSelected?.opening_hours?.open_now ? 'Aberto agora!' : 'O estabelecimento está fechado agora :('}
                    </ModalContent>
                </>
            ) : (
                <>
                    <ImageSkeleton width="10px" height="10px" />
                    <ImageSkeleton width="10px" height="10px" />
                    <ImageSkeleton width="10px" height="10px" />
                    <ImageSkeleton width="10px" height="10px" />
                </>
            )}
            </Modal>
        </Container>

        <MapContainer query={query} placeId={placeId}/>

        </WrapperS>
    );
}

export default Home;