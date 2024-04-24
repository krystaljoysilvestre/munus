import styled from "styled-components";
import { device } from "../../constants/device";

export const Center = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1840px;
  margin: 0 auto;
  margin-bottom: 24px;
  position: relative;
  flex-direction: column;
  gap: 24px;
  padding-top: 28px;

  @media ${device.laptop} {
    flex-direction: row;
    padding: 0 40px;
    height: 40px;
    margin-bottom: 20px;
  }
`;


export const Logo = styled.img`
  display: block;
`;

export const SocialLinks = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;

  @media ${device.laptop} {
    position: absolute;
    left: 0;
  }
`;

export const Link = styled.div`
  display: flex;
  height: 40px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;

  & a {
    color: #01263A;
    leading-trim: both;
    text-edge: cap;
    font-feature-settings: 'ss04' on, 'ss06' on, 'salt' on;
    font-family: "Wanted Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    text-decoration: none;
  }
`;

export const Email = styled.a`
  color: #01263A;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: 'ss04' on, 'ss06' on, 'salt' on;
  font-family: "Wanted Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  text-decoration: none;
  cursor: pointer;
  z-index: 9;
`;

export const Copyright = styled.div`
  color: #01263A;
  text-align: center;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
