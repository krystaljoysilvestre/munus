import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
`;

export const Bg = styled.img`
  margin-left: 50%; 
  transform: translate(-50%, 0%);
  width: 250%;

  @media ${device.tablet} {
    width: auto;
  }
`;

export const Anchor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    padding-top: 150px;
  }
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
`;
