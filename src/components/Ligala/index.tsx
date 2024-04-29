import { useContext } from "react";

import Banner from "../../assets/quarantine.jpg";
import ShieldTickIcon from "../../assets/icons/shield-tick.svg";
import ScaleIcon from "../../assets/icons/scale.svg";
import MonitorIcon from "../../assets/icons/monitor.svg";
import FolderCheckIcon from "../../assets/icons/folder-check.svg";
import SearchIcon from "../../assets/icons/search-md.svg";
import MessageIcon from "../../assets/icons/message-dots-circle.svg";

import { ModalContext } from "../../context/ModalProvider";

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
  Button,
} from "./style";

const Ligala = () => {
  const modal = useContext(ModalContext);

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
                    src={MonitorIcon}
                    alt="Save them the travel. Onboard all your clients virtually."
                  />
                </Icon>
                Save them the travel. Onboard all your clients virtually.
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ScaleIcon}
                    alt="Get access to our legal resource library powered by CDAsia."
                  />
                </Icon>
                Get access to our legal resource library powered by CDAsia.
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={FolderCheckIcon}
                    alt="Stay on track. Manage client appointments and more."
                  />
                </Icon>
                Stay on track. Manage client appointments and more.
              </ListItem>
              <Actions>
                <Button onClick={() => modal.setIsModalOpen(true)}>
                  Open an Office
                </Button>
              </Actions>
            </List>
          </Column>
          <Divider />
          <Column>
            <List>
              <Heading>TRYING TO FIND A LAWYER?</Heading>
              <Subheading>Find trusted lawyers for your legal needs</Subheading>
              <ListItem>
                <Icon>
                  <img
                    src={SearchIcon}
                    alt="Discover the right lawyer for your needs and budget."
                  />
                </Icon>
                Discover the right lawyer for your needs and budget.
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={ShieldTickIcon}
                    alt="Have peace of mind knowing your data and information are secure"
                  />
                </Icon>
                Have peace of mind knowing your data and information are secure
              </ListItem>
              <ListItem>
                <Icon>
                  <img
                    src={MessageIcon}
                    alt="Consult, video chat, share files and more. All in one place."
                  />
                </Icon>
                Consult, video chat, share files and more. All in one place.
              </ListItem>
            </List>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Ligala;
