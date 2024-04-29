import styled from "styled-components";
import Drawer from "react-modern-drawer";
import { device } from "../../constants/device";

interface OverlayProps {
  readonly isOpen: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.60);
  align-items: center;
  justify-content: center;
  display: ${props => props.isOpen ? "flex" : "none"};

`;

export const Container = styled.div`
  border-radius: 32px;
  background: #00263B;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.16);
  width: 442px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: relative;
  margin: 0 15px;
  cursor: pointer;

  @media ${device.tablet} {
    padding: 40px;
  }
`;

export const CloseButton = styled.div`
  width: fit-content;
  right: 35px;
  top: 25px;
  margin-bottom: 10px;
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
`;

export const Heading = styled.div`
  color: #A3FF48;
  font-family: "Reddit Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-top: 15px;
`;

export const Title = styled.div`
  color: #FFF;
  font-family: "Nanum Myeongjo";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  letter-spacing: -1.2px;

  @media ${device.desktop} {
    font-size: 40px;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid #CEDBD7;
  height: 48px;
  padding: 4px 4px 4px 12px;
  border-radius: 12px;
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  gap: 8px;
`;

export const Input = styled.input`
  border: none;
  height: 44px;
  flex: 1;
  background: none !important;
  outline: none;
  font-size: 16px;
  color: #fff;
  font-family: "Wanted Sans";
`;

export const Submit = styled.input`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: #F42424;
  padding: 8px 16px;
  leading-trim: both;
  color: #FFF;
  text-edge: cap;
  font-feature-settings: 'dlig' on;
  font-family: "Wanted Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
  letter-spacing: 0.28px;
`;

export const ModernDrawer = styled(Drawer)`
  height: 350px!important;
  border-radius: 16px 16px 0px 0px;
  background: #00263B !important;
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 24px;

  @media ${device.tablet} {
    padding: 40px;
  }
`;

export const Mobile = styled.div`
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Desktop = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

