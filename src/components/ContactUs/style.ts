import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  height: 100vh;
  min-height: 654px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.h2`
  color: #01263A;
  text-align: center;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Minion Pro";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -1.92px;
  margin: 0;
  margin-bottom: 56px;

  @media ${device.tablet} {
    font-size: 56px;
  }

  @media ${device.laptop} {
    font-size: 64px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ButtonOutlined = styled.a`
  border-radius: 8px;
  border: 1px solid #01263A;
  display: flex;
  width: 100%;
  max-width: 340px;
  height: 46px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #01263A;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: 'dlig' on;
  font-family: "Wanted Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;

  @media ${device.laptop} {
    width: 151px;
  }
`;

export const Button = styled.a`
  border-radius: 8px;
  background: #F42424;
  display: inline-flex;
  height: 48px;
  width: 100%;
  max-width: 342px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #FFF;
  leading-trim: both;
  text-edge: cap;
  font-family: "Wanted Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16), 0px 2px 3px 0px rgba(0, 0, 0, 0.10);
  }

  @media ${device.laptop} {
    width: 153px;
  }
`;
