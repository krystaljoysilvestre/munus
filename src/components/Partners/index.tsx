import TetrixLogo from "../../assets/logos/tetrix.svg";
import AWSLogo from "../../assets/logos/aws.svg";
import MicrosoftLogo from "../../assets/logos/microsoft.svg";
import CdAsiaOnlineLogo from "../../assets/logos/cd-asia-online.svg";
import SA6Logo from "../../assets/logos/studio-after-six.svg"; 
import IDMetaLogo from "../../assets/logos/IDmeta.svg";

import { Wrapper, Container, Heading, Logos, Logo } from "./style";

const Partners = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>OUR PARTNERS</Heading>
        <Logos className="has-spacer">
          <Logo>
            <img src={TetrixLogo} alt="Tetrix" />
          </Logo>
          <Logo>
            <img src={AWSLogo} alt="AWS" />
          </Logo>
          <Logo>
            <img src={MicrosoftLogo} alt="Microsoft" />
          </Logo>
        </Logos>
        <Logos>
          <Logo>
            <img src={CdAsiaOnlineLogo} alt="CDAsiaOnline" />
          </Logo>
          <Logo>
            <img src={SA6Logo} alt="Studio After Six" />
          </Logo>
          <Logo>
            <img src={IDMetaLogo} alt="IDMeta" />
          </Logo>
        </Logos>
      </Container>
    </Wrapper>
  );
};

export default Partners;
