import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  background: #EBF7F1;
  padding-top: 80px;
  padding-bottom: 80px;

  @media ${device.laptop} {
    padding-top: 100px;
    padding-bottom: 180px;
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h4`
  color: #F42424;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Reddit Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 60px;
`;

export const Logos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 24px;

  @media ${device.laptop} {
    flex-direction: row;
    width: 95%;
    justify-content: space-between;
    margin-bottom: 0px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    display: block;
  }
`;
