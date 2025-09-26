import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  color: #01263a;
  text-align: center;
  font-feature-settings: "ss06" on, "ss05" on, "ss18" on, "ss17" on, "ss16" on,
    "ss15" on, "ss14" on, "ss13" on, "ss12" on, "ss11" on, "ss10" on, "ss09" on,
    "ss08" on, "ss07" on;
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
  border: 1px solid #01263a;
  display: flex;
  width: 100%;
  max-width: 340px;
  height: 46px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #f42424;
  display: inline-flex;
  height: 48px;
  width: 100%;
  max-width: 342px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  leading-trim: both;
  text-edge: cap;
  font-family: "Wanted Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.32px;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16),
      0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  }

  @media ${device.laptop} {
    width: 153px;
  }
`;

// Tabs
export const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 24px;
  flex-wrap: wrap;
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 16px;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  font-size: 18px;
  font-weight: bold;
  color: ${({ active }) => (active ? "#f42424" : "#00263b")};
  border-color: ${({ active }) => (active ? "#f42424" : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f42424;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  padding: 40px 16px;
  text-align: center;
  font-family: "Wanted Sans";
`;

// Board / Executives
export const TabContent = styled.div`
  animation: fadeIn 0s ease-in-out;
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #0f172a;
  text-align: center;
`;

export const Address = styled.div`
  font-size: 16px;
  font-family: "Wanted Sans";
  margin-bottom: 12px;
  color: #0f172a;
  text-align: center;
`;

export const BoardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;
`;

export const BoardRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export const BoardMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  text-align: center;
`;

export const BoardPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

export const MemberName = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #00263b;
`;

export const MemberPosition = styled.div`
  font-size: 14px;
  color: #5f6f7d;
  margin-top: 4px;
  line-height: 1.3;
`;

export const FadeInAnimation = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
