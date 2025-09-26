import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  background: #01263a;
  padding: 80px 0;

  @media ${device.laptop} {
    padding: 120px 0;
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 1145px;
  margin: 0 auto;
`;

export const Heading = styled.h4`
  color: #a5ff5e;
  text-align: center;
  font-feature-settings: "ss06" on, "ss05" on, "ss18" on, "ss17" on, "ss16" on,
    "ss15" on, "ss14" on, "ss13" on, "ss12" on, "ss11" on, "ss10" on, "ss09" on,
    "ss08" on, "ss07" on;
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
    margin-bottom: 16px;
  }
`;

export const Subheading = styled.h3`
  color: #fff;
  text-align: center;
  font-feature-settings: "ss06" on, "ss05" on, "ss18" on, "ss17" on, "ss16" on,
    "ss15" on, "ss14" on, "ss13" on, "ss12" on, "ss11" on, "ss10" on, "ss09" on,
    "ss08" on, "ss07" on;
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
  flex-direction: row;
  gap: 16px;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 48px;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    gap: 32px;
    margin-bottom: 64px;
  }
`;

export const CardItem = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;

  @media ${device.tablet} {
    width: calc(50% - 56px) !important;
  }

  @media ${device.laptop} {
    flex: 1 0 0;
    width: 100% !important;
  }
`;

export const IconContainer = styled.div`
  border-radius: 8px;
  background: rgba(165, 255, 94, 0.2);
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
  color: #fff;
  font-feature-settings: "ss06" on, "ss05" on, "ss18" on, "ss17" on, "ss16" on,
    "ss15" on, "ss14" on, "ss13" on, "ss12" on, "ss11" on, "ss10" on, "ss09" on,
    "ss08" on, "ss07" on;
  font-family: "Wanted Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.4px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    margin-bottom: 42px;
  }
`;

export const Button = styled.a`
  display: flex;
  border: none;
  cursor: pointer;
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
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16),
      0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  }

  @media ${device.laptop} {
    margin-bottom: 42px;
    padding: 0 16px;
    width: fit-content;
  }
`;
