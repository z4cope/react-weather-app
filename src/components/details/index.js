import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Hero,
  State,
  Visibility,
  InfoWrapper,
  DetailsPageTitle,
  DetailsWrapper,
  DetailCard,
  DetailTitle,
  DetailNumber,
  NoData,
  NoDataText,
  BackButton,
} from './styles/details';

const Details = () => {
  const details = useSelector((state) => state.data.detailsArr);
  return (
    <>
      {details.name ? (
        <>
          <Hero background="./assets/maps.webp">
            <State>{details.name}</State>
            <Visibility>Time zone: {details.timezone}</Visibility>
          </Hero>
          <InfoWrapper>
            <DetailsPageTitle>Weather Details</DetailsPageTitle>
            <DetailsWrapper>
              <DetailCard>
                <DetailTitle>Clouds</DetailTitle>
                <DetailNumber>{details.clouds.all}</DetailNumber>
              </DetailCard>
              <DetailCard>
                <DetailTitle>Longnitude</DetailTitle>
                <DetailNumber>{details.coord.lon}</DetailNumber>
              </DetailCard>
              <DetailCard>
                <DetailTitle>Latitude</DetailTitle>
                <DetailNumber>{details.coord.lat}</DetailNumber>
              </DetailCard>
              <DetailCard>
                <DetailTitle>Temperature</DetailTitle>
                <DetailNumber>{details.main.temp}</DetailNumber>
              </DetailCard>
              <DetailCard>
                <DetailTitle>Visibility</DetailTitle>
                <DetailNumber>{details.visibility}</DetailNumber>
              </DetailCard>
              <DetailCard>
                <DetailTitle>Wind</DetailTitle>
                <DetailNumber>{details.wind.speed}</DetailNumber>
              </DetailCard>
            </DetailsWrapper>
          </InfoWrapper>
        </>
      ) : (
        <NoData>
          <NoDataText>No data</NoDataText>
          <Link to="/">
            <BackButton>Pick a country</BackButton>
          </Link>
        </NoData>
      )}
    </>
  );
};

export default Details;
