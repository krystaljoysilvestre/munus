import { useEffect } from "react";
import logo from "../../assets/munus-logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import {
  Wrapper,
  DesktopWrapper,
  Left,
  Center,
  Right,
  Logo,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Actions,
  ButtonText,
  Button,
  MobileWrapper,
  MenuButton,
} from "./style";

const Header = () => {
  useEffect(() => {
    window.onscroll = () => stickOnScroll();

    const header = document.getElementById("header")!;
    const sticky = header.offsetTop;

    const stickOnScroll = () => {
      if (window.scrollY > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }, []);

  const scrollTo = (section: string) => {
    document && document.getElementById(section)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Wrapper id="header">
      <DesktopWrapper>
        <Left>
          <Logo src={logo} alt="munus-logo" />
        </Left>
        <Center>
          <Nav>
            <NavItem>
              <NavLink onClick={() => scrollTo("about")}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo("services")}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo("ligala")}>
                Ligala<Badge>New</Badge>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo("tag")}>
                Tag<Badge>New</Badge>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollTo("contact")}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Center>
        <Right>
          <Actions>
            <ButtonText href="#">Login</ButtonText>
            <Button>Open an Office</Button>
          </Actions>
        </Right>
      </DesktopWrapper>
      <MobileWrapper>
        <Logo src={logo} alt="munus-logo" />
        <MenuButton>
          <img src={menuIcon} alt="menu-icon" />
        </MenuButton>
      </MobileWrapper>
    </Wrapper>
  );
};

export default Header;
