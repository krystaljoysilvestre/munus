import banner from "../../assets/about-banner.jpg";
import mobileBanner from "../../assets/about-banner_mobile.jpg";

import {
  Wrapper,
  Section,
  Container,
  Heading,
  Content,
  Title,
  Description,
  Badge,
  Divider,
  DesktopBanner,
  MobileBanner,
  Anchor,
  Spacer,
} from "./style";

const About = () => {
  return (
    <Wrapper id="about">
      <Section>
        <Container>
          <Heading>ABOUT MUNUS</Heading>
          <Content>
            <Title>
              Made by pros, <br />
              for pros.
            </Title>
            <Description>
              <Badge>mūnŭs / moo-nuhs</Badge>
              Latin for Service or Duty, Munus is what inspires our mission. We
              team-up with professionals from different practices in order to
              deliver accessible, ethical technology that fosters
              Professional-Client work experiences.
            </Description>
          </Content>
          <Divider>
            <DesktopBanner src={banner} alt="about-banner" />
            <MobileBanner src={mobileBanner} alt="about-banner" />
          </Divider>
        </Container>
      </Section>
      <Section>
        <Container>
          <Anchor>
            <Spacer />
            <Heading>OUR MUNUS</Heading>
            <Content>
              <Title>
                Open doors to <br />
                opportunities.
              </Title>
              <Description>
                With the swift growth of digitization and software services, the
                days of having to be physically present to accomplish tasks are
                behind us.
                <br />
                <br />
                Munus capitalizes on technology to simplify the process of getting
                professional practices started and professional needs fulfilled.
              </Description>
            </Content>
          </Anchor>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default About;
