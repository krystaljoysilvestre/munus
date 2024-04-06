import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  background: #ECF8F2;
  padding-top: 80px;
  padding-bottom: 200px;

  @media ${device.laptop} {
    padding-top: 153px;
    padding-bottom: 211px;
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
  text-align: center;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Reddit Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 16px;

  @media ${device.laptop} {
    margin-bottom: 8px;
  }
`;

export const Badge = styled.div`
  border-radius: 16px;
  background: #01263A;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  width: fit-content;
  color: #A5FF5E;
  font-family: "Reddit Mono";
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media ${device.laptop} {
    margin-bottom: 16px;
  }
`;

export const Subheading = styled.h3`
  color: #01263A;
  text-align: center;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: -0.64px;
  margin: 0;
  margin-bottom: 48px;

  @media ${device.laptop} {
    margin-bottom: 64px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    gap: 32px;
  }
`;

export const CardItem = styled.div`
  border-radius: 16px;
  background: #FFF;
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media ${device.tablet} {
    width: calc(50% - 56px);
  }

  @media ${device.laptop} {
    flex: 1 0 0;
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  border-radius: 8px;
  background: rgba(244, 36, 36, 0.20);  
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;

export const Text = styled.div`
  color: #01263A;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.4px;
`;
