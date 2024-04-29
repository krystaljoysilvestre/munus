import styled from "styled-components";
import Drawer from "react-modern-drawer";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 99;
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  height: 56px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;

  & img {
    display: block;
  }
`;

export const DesktopWrapper = styled.div`
  padding: 8px 33px 8px 32px;
  display: none;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
  }

  @media ${device.desktop} {
    max-width: 1855px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
`;

export const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
`;

export const Logo = styled.img`
  height: 20px;
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media ${device.laptop} {
    gap: 16px;
  }
`;

export const NavItem = styled.li`
  padding: 0 12px;
  height: 40px;
  display: flex;
  align-items: center;

  @media ${device.laptop} {
    padding: 0 16px;
  }
`;

export const NavLink = styled.div`
  color: #01263A;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: 'ss04' on, 'ss06' on, 'salt' on;
  font-family: "Wanted Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  gap: 4px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
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
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonText = styled.a`
  display: inline-flex;
  height: 40px;
  padding: 0 16px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #01263A;
  leading-trim: both;
  text-edge: cap;
  font-family: "Wanted Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0.28px;
`;

export const Button = styled.a`
  display: inline-flex;
  height: 40px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #F42424;
  color: #FFF;
  leading-trim: both;
  text-edge: cap;
  font-feature-settings: 'dlig' on;
  font-family: "Wanted Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
  letter-spacing: 0.28px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16), 0px 2px 3px 0px rgba(0, 0, 0, 0.10);
  }
`;

export const ModernDrawer = styled(Drawer)`
  height: 494px !important;
  border-radius: 16px 16px 0px 0px;
  background: radial-gradient(94.82% 94.82% at 22% 26.92%, #F42424 19.1%, #C00B4C 100%) !important;
`;

export const DrawerHeader = styled.div`
  height: 56px;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 18px;
`;

export const DrawerMenu = styled.div`
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  gap: 32px;
`;

export const DrawerMenuItem = styled.div`
  color: #FFF;
  font-feature-settings: 'ss06' on, 'ss05' on, 'ss18' on, 'ss17' on, 'ss16' on, 'ss15' on, 'ss14' on, 'ss13' on, 'ss12' on, 'ss11' on, 'ss10' on, 'ss09' on, 'ss08' on, 'ss07' on;
  font-family: "Wanted Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.64px;

  & span {
    cursor: pointer;
  }

  & button {
    display: flex;
    height: 48px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: #FFF;
    border: none;
    width: 100%;
    color: #F42424;
    leading-trim: both;
    text-edge: cap;
    font-feature-settings: 'dlig' on;
    font-family: "Wanted Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
    cursor: pointer;

    @media ${device.mobileL} {
      max-width: 342px;
    }
  }
`;
