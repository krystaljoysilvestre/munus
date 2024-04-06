import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
  margin-top: 80px;

  @media ${device.laptop} {
    margin-top: 54px;
  }
`;

export const Paper = styled.div`
  border-radius: 16px;
  background: #EBF7F1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 11px 14px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    margin-bottom: 128px;
  }
`;

export const Content = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  padding: 24px 24px 40px;
  border-radius: 16px 16px 0 0;
  justify-content: space-between;

  @media ${device.laptop} {
    width: 45%;
    padding: 56px 45px 56px 56px;
    border-radius: 16px 16px 0 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 65%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0 0 16px 16px;
  display: block;
  max-height: 342px;
  object-fit: cover;

  @media ${device.laptop} {
    max-height: 100%;
    border-radius: 0 16px 16px 0;
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
  margin-bottom: 24px;

  @media ${device.laptop} {
    margin-bottom: 32px;
  }
`;

export const Subheading = styled.h3`
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.64px;
  margin: 0;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Nanum Myeongjo";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -1.68px;
  margin: 0;
  margin-bottom: 64px;

  @media ${device.laptop} {
    font-size: 56px;
    margin-bottom: 0;
  }
`;

export const Text = styled.div`
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.48px;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-top: 80px; 
  margin-bottom: 53px;
  flex-direction: column;

  @media ${device.laptop} {
    margin-top: 0;
    flex-direction: row; 
  }
`;

export const Divider = styled.div`
  background: #01263A;
  width: 1px;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 80px;

  @media ${device.laptop} {
    margin-bottom: 0;

    &:first-child {
      justify-content: start;
    }

    &:last-child {
      justify-content: end;
    }
  }
`;

export const List = styled.div`
  max-width: 100%;

  @media ${device.laptop} {
    max-width: 420px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media ${device.tablet} {
    align-items: center;
  }
`;

export const Icon = styled.div`
  border-radius: 8px;
  background: rgba(244, 36, 36, 0.20);
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  & img {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

export const Actions = styled.div`
  margin-top: 64px;
  margin-bottom: 80px;
  text-align: center;

  @media ${device.tablet} {
    margin-top: 53px;
    margin-bottom: 0;
    text-align: left;
  }
`;

export const Button = styled.a`
  border-radius: 8px;
  text-decoration: none;
  background: #F42424;
  display: inline-flex;
  height: 48px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #FFF;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: 'dlig' on;
  font-family: "Wanted Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;
  width: calc(100% - 32px);
  max-width: 310px;

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16), 0px 2px 3px 0px rgba(0, 0, 0, 0.10);
  }

  @media ${device.tablet} {
    width: fit-content;
  }
`;
