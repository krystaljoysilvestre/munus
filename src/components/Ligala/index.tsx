import Banner from "../../assets/quarantine.jpg";
import ShieldTickIcon from "../../assets/icons/shield-tick.svg";
import ScaleIcon from "../../assets/icons/scale.svg";

import { LigalaBanner } from "../../components";

import {
  Wrapper,
  Container,
  Paper,
  Content,
  Heading,
  Subheading,
  Title,
  Text,
  ImageContainer,
  Image,
  Row,
  Column,
  Divider,
  List,
  ListItem,
  Icon,
  Actions,
  Button
} from "./style";

const Ligala = () => {
  return (
    <Wrapper id="ligala">
      <LigalaBanner />
      <Container>
        <Paper>
          <Content>
            <div>
              <Heading>LIGALA</Heading>
              <Title>
                The future of <br /> legal practice
              </Title>
            </div>
            <Text>
              Handle your client’s legal matters with ease and efficiency, all
              from the comfort of your digital law office.
            </Text>
          </Content>
          <ImageContainer>
            <Image src={Banner} alt="Quarantine" />
          </ImageContainer>
        </Paper>
        <Row>
          <Column>
            <List>
              <Heading>ARE YOU A LAWYER?</Heading>
              <Subheading>
                Setup your digital law office for client visits
              </Subheading>
              <ListItem>
                <Icon>
                  <img
                    src={ShieldTickIcon}
                    alt="Register and create your website within minutes, mention templates"
                  />
                </Icon>
                Register and create your website within minutes, mention
                templates
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="Digital library powered by CDAsia"
                  />
                </Icon>
                Digital library powered by CDAsia
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="How ligala works; describe feature. Insert placeholder line here."
                  />
                </Icon>
                How ligala works; describe feature. Insert placeholder line
                here.
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="How ligala works; describe feature. Insert placeholder line here."
                  />
                </Icon>
                How ligala works; describe feature. Insert placeholder line
                here.
              </ListItem>
              <Actions>
                <Button href="#">Accepting Registrations</Button>
              </Actions>
            </List>
          </Column>
          <Divider />
          <Column>
            <List>
              <Heading>FINDING A LAWYER?</Heading>
              <Subheading>Find trusted lawyers for your legal needs</Subheading>
              <ListItem>
                <Icon>
                  <img
                    src={ShieldTickIcon}
                    alt="Register and create your website within minutes, mention templates"
                  />
                </Icon>
                Register and create your website within minutes, mention
                templates
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="Digital library powered by CDAsia"
                  />
                </Icon>
                Digital library powered by CDAsia
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="How ligala works; describe feature. Insert placeholder line here."
                  />
                </Icon>
                How ligala works; describe feature. Insert placeholder line
                here.
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="How ligala works; describe feature. Insert placeholder line here."
                  />
                </Icon>
                How ligala works; describe feature. Insert placeholder line
                here.
              </ListItem>
            </List>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Ligala;
