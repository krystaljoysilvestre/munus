import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  padding-top: 100px;

  @media ${device.tablet} {
    padding-top: 150px;
  }
`;


export const Divider = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -30%;
  padding-left: 10%;

  & img {
    display: block;
    width: 100%;
    max-width: 619px;
  }

  @media ${device.tablet} {
    padding-left: 100px;
    margin-bottom: -205px;

    & img {
      width: 619px;
    }
  }
`;

export const Section = styled.div`
  background: #DBF3E7;
  padding-top: 20%;
  padding-bottom: 100px;

  @media ${device.tablet} {
    padding-top: 200px;
    padding-bottom: 150px;
  }
`;

export const Title = styled.h2`
  margin-top: 108px;
  margin-bottom: 40px;
  color: #01263A;
  text-align: center;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Nanum Myeongjo";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -1.68px;

  @media ${device.tablet} {
    font-size: 56px;
  }
`;

export const Text = styled.div`
  margin-bottom: 80px;
  color: #01263A;
  text-align: center;
  font-feature-settings: 'ss04' on, 'ss06' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
`;

export const Paper = styled.div`
  border-radius: 16px;
  background: #EBF7F1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 11px 14px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  margin-bottom: 0px;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  border-radius: 16px 0 0 16px;
  padding: 24px 24px 40px;
  justify-content: space-between;
  background: #fff;

  @media ${device.laptop} {
    width: 43%;
    padding: 45px 56px 56px;
  }
`;

export const ContentTitle = styled.h2`
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Nanum Myeongjo";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -1.68px;
  margin: 0;
  margin-bottom: 32px;

  @media ${device.laptop} {
    font-size: 56px;
  }
`;

export const ContentText = styled.div`
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const Heading = styled.h3`
  color: #F42424;
  font-family: "Wanted Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin: 0;
  margin-bottom: 16px;

  & span {
    color: #F42424;
    font-family: "Wanted Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 100%;
  }

  & sup {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 40px;

    & span {
      font-size: 40px;
    }

    & sup {
      font-size: 25px;
    }
  }
`;

export const Badge = styled.div`
  border-radius: 16px;
  background: #01263A;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  color: #A5FF5E;
  font-family: "Reddit Mono";
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: 13px;  
  letter-spacing: 1px;
  text-transform: uppercase;
  width: fit-content;
  margin-bottom: 64px;

  @media ${device.laptop} {
    margin-bottom: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 67%;
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
    height: 480px;
    border-radius: 0 16px 16px 0;
  }
`;
