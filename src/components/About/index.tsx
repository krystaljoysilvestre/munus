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
              unlock accessible, client-centered, and ethical technology that
              fosters Professional-Client work experiences.
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
                With the swift growth of digital transformation and software
                services, having to be physically present is becoming less
                essential to getting things done.
                <br />
                <br />
                Munus capitalizes on this opportunity to use technology as a
                bridge to simplify the process of getting professional practices
                started and professional needs fulfilled remotely.
              </Description>
            </Content>
          </Anchor>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default About;
