import React, { useState } from 'react';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-text-field'
import { Input } from '@material/react-text-field';
// import '@material/react-text-field/dist/text-field.css';




import { Container, Search, Logo, TextFieldS, Wrapper, Map, Carousel, CarouselTitle } from './styles';

// Images
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

// Componentes
import ImageCard from '../../components/ImageCard'
import RestaurantCard from '../../components/RestaurantCard'
import Modal from '../../components/Modal';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return(
        <Wrapper>
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
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                        </TextFieldS>
                        <CarouselTitle>Na sua área</CarouselTitle>
                        <Carousel {...settings}>
                            <ImageCard photo={restaurante} title="Restaurante 1"/>
                            <ImageCard photo={restaurante} title="Restaurante 2"/>
                            <ImageCard photo={restaurante} title="Restaurante 3"/>
                            <ImageCard photo={restaurante} title="Restaurante 4"/>
                            <ImageCard photo={restaurante} title="Restaurante 5"/>
                            <ImageCard photo={restaurante} title="Restaurante 6"/>
                        </Carousel>
                        <button onClick={() => setModalOpened(true)}>Abrir modal</button>
                </Search>

                <RestaurantCard />
                
            </Container>
            <Map />

            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    );
}

export default Home;