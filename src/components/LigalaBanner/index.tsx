import BannerImageDesktop from "../../assets/ligala-banner.svg";

import { Wrapper, Banner, Bg, Anchor, Heading } from "./style";

const LigalaBanner = () => {
  return (
    <Wrapper>
      <Banner>
        <Bg src={BannerImageDesktop} alt="Ligala" />
      </Banner>
      <Anchor>
        <Heading>Introducing</Heading>
      </Anchor>
    </Wrapper>
  );
};

export default LigalaBanner;
