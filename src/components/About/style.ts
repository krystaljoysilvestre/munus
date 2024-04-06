import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
`;

export const Section = styled.div`
  &:first-child {
    background: none;
    padding-top: 80px;
  }

  &:last-child {
    background: #EBF7F1;
    padding-bottom: 5px;
  }

  @media ${device.laptop} {
    &:first-child {
      padding-top: 120px;
    }

    &:last-child {
      background: #EBF7F1;
      padding-bottom: 30px;
    }
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
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
  margin-bottom: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  gap: 56px;

  @media ${device.laptop} {
    font-size: 24px;
    flex-direction: row;
    gap: 0;
    margin-bottom: 100px;
  }
`;

export const Title = styled.h2`
  color: #01263A;
  flex: 1;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Nanum Myeongjo";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -1.92px;
  margin: 0;

  @media ${device.laptop} {
    font-size: 56px;
  }

  @media ${device.laptopL} {
    font-size: 64px;
  }
`;

export const Description = styled.div`
  flex: 1;
  color: #01263A;
  font-variant-numeric: ordinal;
  font-feature-settings: 'dlig' on, 'ss12' on, 'ss06' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss18' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.48px;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  width: fit-content;
  margin-bottom: 19px;
  padding: 0 12px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  background: #01263A;
  color: #A5FF5E;
  leading-trim: both;
  text-edge: cap;
  font-variant-numeric: ordinal;
  font-feature-settings: 'dlig' on, 'ss12' on, 'ss06' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss18' on, 'ss07' on;
  font-family: "Reddit Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const Divider = styled.div`
  margin-bottom: -29.5%;

  @media ${device.tablet} {
    margin-bottom: -14.5%;
  }
`;

export const DesktopBanner = styled.img`
  width: 100%;
  display: none;
  border-radius: 16px;

  @media ${device.tablet} {
    display: block;
  }
`;

export const MobileBanner = styled.img`
  width: 100%;
  display: block;
  border-radius: 16px;
  max-height: 350px;
  object-fit: cover;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Anchor = styled.div`
  padding-top: 29.5%;

  @media ${device.tablet} {
    padding-top: 14.5%;
  }
`;

export const Spacer = styled.div`
  height: 100px;
`;
