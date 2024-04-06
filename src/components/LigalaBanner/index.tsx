import BannerImage from "../../assets/ligala-banner.svg";

import { Wrapper, Banner, Bg, Anchor, Heading } from "./style";

const LigalaBanner = () => {
  return (
    <Wrapper>
      <Banner>
        <Bg src={BannerImage} alt="Ligala" />
      </Banner>
      <Anchor>
        <Heading>Introducing</Heading>
      </Anchor>
    </Wrapper>
  );
};

export default LigalaBanner;
