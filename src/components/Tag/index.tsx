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
                  Talk about munus tag. How munus tag works. Describe features
                  and benefits. Could add a link to show a more detailed guide
                  on how to use.
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
