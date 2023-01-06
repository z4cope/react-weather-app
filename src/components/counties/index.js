import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { getLocations } from '../../features/locations/locationSLice';
import { getDetails } from '../../features/details/detailsSlice';

import {
  Hero,
  CountyTitle,
  StatesWrapper,
  Arrow,
  State,
  StateCard,
  Longitude,
} from './styles/counties';

const Counties = () => {
  const dispatch = useDispatch();
  const contries = [];
  let contry = '';
  useEffect(() => {
    dispatch(getLocations('Egypt'));
  }, [dispatch]);

  const locations = useSelector((state) => state.locations.locationsArr);

  const sendDetailsData = (lat, lon) => {
    dispatch(getDetails({ lat, lon }));
  };

  if (locations.length) {
    locations.map((loc) => {
      contries.push(loc);
      return loc;
    });

    contry = contries[0].name;
  }

  return (
    <>
      <Hero background="../assets/maps.webp">
        <CountyTitle>{contry}</CountyTitle>
      </Hero>
      <StatesWrapper>
        {locations.length ? (
          locations.map((loc) => (
            <Link
              onClick={() => sendDetailsData(loc.lat, loc.lon)}
              key={uuidv4()}
              to="/details"
            >
              <StateCard background="./assets/europe.png">
                <Arrow background="./assets/right.png" />
                <State>{loc.name}</State>
                <Longitude>{loc.lon}</Longitude>
              </StateCard>
            </Link>
          ))
        ) : (
          <>No locations yet</>
        )}
        <State></State>
      </StatesWrapper>
    </>
  );
};

export default Counties;
