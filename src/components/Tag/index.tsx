import Banner from "../../assets/woman-pay.jpg";
import Card from "../../assets/card-2.png";

import {
  Wrapper,
  Divider,
  Section,
  Title,
  Text,
  Container,
  Paper,
  Content,
  ContentTitle,
  ContentText,
  Heading,
  Badge,
  ImageContainer,
  Image,
} from "./style";

const Tag = () => {
  return (
    <Wrapper id="tag">
      <Divider>
        <img src={Card} alt="Tap and Go" />
      </Divider>
      <Section>
        <Title>
          Connect at <br /> your convenience
        </Title>
        <Text>
          Break the ice. Introduce yourself <br /> with a tap or scan.
        </Text>
        <Container>
          <Paper>
            <Content>
              <div>
                <Heading>
                  Munus<span>Tag</span>
                  <sup>™</sup>
                </Heading>
                <Badge>COMING SOON!</Badge>
              </div>
              <div>
                <ContentTitle>Tap-And-Go</ContentTitle>
                <ContentText>
                  Munus Tag helps you stay reachable and memorable across
                  platforms. It’s the easy way to grow your network and keep the
                  conversation going.
                </ContentText>
              </div>
            </Content>
            <ImageContainer>
              <Image src={Banner} alt="Quarantine pay" />
            </ImageContainer>
          </Paper>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Tag;
