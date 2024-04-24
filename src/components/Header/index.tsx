import { useEffect, useState } from "react";

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
  // ButtonText,
  Button,
  MobileWrapper,
  MenuButton,
  ModernDrawer,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuItem
} from "./style";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

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

    setTimeout(() => {
      setIsDrawerOpen(false);
    }, 100);
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
            {/* <ButtonText href="#">Login</ButtonText> */}
            <Button>Open an Office</Button>
          </Actions>
        </Right>
      </DesktopWrapper>
      <MobileWrapper>
        <Logo src={logo} alt="munus-logo" />
        <MenuButton onClick={toggleDrawer}>
          <img src={menuIcon} alt="menu-icon" />
        </MenuButton>
      </MobileWrapper>
      <ModernDrawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="bottom"
        duration={300}
        lockBackgroundScroll
      >
        <DrawerHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#DBF3E7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </DrawerHeader>
        <DrawerMenu>
          <DrawerMenuItem>
            <span onClick={() => scrollTo("about")}>About</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span onClick={() => scrollTo("services")}>Services</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span onClick={() => scrollTo("ligala")}>Ligala</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span onClick={() => scrollTo("tag")}>Tag</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span onClick={() => scrollTo("contact")}>Contact</span>
          </DrawerMenuItem>
        </DrawerMenu>
      </ModernDrawer>
    </Wrapper>
  );
};

export default Header;
