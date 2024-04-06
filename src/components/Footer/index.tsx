import MunusLogoBlack from "../../assets/munus-logo_black.svg";

import {
  Center,
  Wrapper,
  Logo,
  SocialLinks,
  Link,
  Email,
  Copyright,
} from "./style";

const Footer = () => {
  return (
    <Center>
      <Wrapper>
        <div>
          <Logo src={MunusLogoBlack} alt="Munus Logo" />
        </div>
        <SocialLinks>
          <Link>
            <a href="#">Linkedin</a>
          </Link>
          <Link>
            <a href="#">Instagram</a>
          </Link>
          <Link>
            <a href="#">Facebook</a>
          </Link>
        </SocialLinks>
        <Email>access@mymunus.com</Email>
      </Wrapper>
      <Copyright>© 2024 All Rights Reserved</Copyright>
    </Center>
  );
};

export default Footer;
