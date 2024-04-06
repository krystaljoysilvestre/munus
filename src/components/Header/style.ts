import styled from "styled-components";
import { device } from "../../constants/device";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999;
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  height: 56px;

  @media ${device.laptop} {
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

  @media ${device.laptop} {
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
  gap: 16px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  padding: 0 16px;
  height: 40px;
  display: flex;
  align-items: center;
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

  &:hover {
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16), 0px 2px 3px 0px rgba(0, 0, 0, 0.10);
  }
`;
