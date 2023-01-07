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

export const CountyTitle = styled.h2`
  text-align: left;
`;

export const Arrow = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.3s ease;
`;

export const StatesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  height: 60vh;
  cursor: pointer;
`;

export const State = styled.h2`
  color: #fff;
  z-index: 5;
`;

export const StateCard = styled.div`
  background-color: #db4781;
  height: 30vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  transition: all 0.2s ease;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: 1;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: contain;
  }
  &:nth-child(odd) {
    background-color: #d04277;
  }
  &:hover {
    background-color: #e78dab;
  }
  &:hover ${Arrow} {
    right: 0.5rem;
  }
`;

export const Longitude = styled.h3`
  color: #fff;
  z-index: 5;
`;
