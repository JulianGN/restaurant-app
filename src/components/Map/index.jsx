import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);
  const { google, query, placeId } = props;



  const getRestaurantById = useCallback(
    (placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null)); // fazemos isso para limpar qualquer informação anterior

      const request = {
        placeId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        }
      });
    },
    [google, map, dispatch]
  );

  useEffect(() => {
    if (placeId) {
        getRestaurantById(placeId);
    }
  }, [placeId]);

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([])); //zera a array antes de carregar as novas

      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch, google]
  );

  useEffect(() => {
    if (query) {
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([])); // aqui também limpamos

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      zoom={15}
      {...props}>
          {/* Inserindo acima as props que não são as padrões */}
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
