import styled from 'styled-components';

export const Hero = styled.section`
  width: 100%;
  min-height: 40vh;
  background-color: rgba(236, 76, 138, 0.7);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const State = styled.h2``;

export const Visibility = styled.h3``;

export const InfoWrapper = styled.div`
  width: 100%;
  background: #ec4c8a;
`;

export const DetailsPageTitle = styled.h3`
  padding: 1rem;
`;

export const DetailsWrapper = styled.div``;

export const DetailCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  &:nth-child(odd) {
    background-color: #db4781;
  }
`;

export const DetailTitle = styled.h2``;

export const DetailNumber = styled.h2``;

export const NoData = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  font-size: 5rem;
`;

export const NoDataText = styled.h2``;

export const BackButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 1rem;
`;
