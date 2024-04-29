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
          {/* <Link>
            <a href="#">Linkedin</a>
          </Link> */}
          <Link>
            <a href="https://www.instagram.com/mymunus.office/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Link>
          <Link>
            <a href="https://www.facebook.com/profile.php?id=61558765251998" target="_blank" rel="noopener noreferrer">Facebook</a>
          </Link>
        </SocialLinks>
        <Email href="mailto:access@mymunus.com">access@mymunus.com</Email>
      </Wrapper>
      <Copyright>© 2024 All Rights Reserved</Copyright>
    </Center>
  );
};

export default Footer;
