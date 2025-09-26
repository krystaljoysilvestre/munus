import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #fff -32.44%, #ebf7f1 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 654px;
  max-height: 900px;
  padding-top: 28px;
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #01263a;
  max-width: 500px;
  text-align: center;
  font-feature-settings: "ss06" on, "ss05" on, "ss18" on, "ss17" on, "ss16" on,
    "ss15" on, "ss14" on, "ss13" on, "ss12" on, "ss11" on, "ss10" on, "ss09" on,
    "ss08" on, "ss07" on;
  font-family: "Nanum Myeongjo", serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -3px;
  margin: 0;
  margin-bottom: 56px;

  @media ${device.tablet} {
    max-width: 700px;
    font-size: 72px;
    margin-bottom: 64px;
  }

  @media ${device.laptop} {
    max-width: 995px;
    font-size: 90px;
  }

  @media ${device.laptopL} {
    font-size: 100px;
  }
`;

export const Description = styled.div`
  color: #01263a;
  text-align: center;
  font-family: "Wanted Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.42px;
  max-width: 380px;
  margin-bottom: 28px;

  @media ${device.laptopL} {
    font-size: 21px;
    max-width: 454px;
    margin-bottom: 32px;
  }
`;

export const Sup = styled.sup`
  color: #01263a;
  font-family: "Wanted Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.42px;
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
  display: flex;
  width: 100%;
  max-width: 340px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #01263a;
  color: #01263a;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: "dlig" on;
  font-family: "Wanted Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;
  text-decoration: none;

  @media ${device.laptop} {
    width: 151px;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  border: none;
  height: 48px;
  width: 100%;
  max-width: 342px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #f42424;
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: "dlig" on;
  font-family: "Wanted Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16),
      0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  }

  @media ${device.laptop} {
    width: 153px;
  }
`;
