import { useContext } from "react";

import BuildingIcon from "../../assets/icons/building.svg";
import EyeIcon from "../../assets/icons/eye.svg";
import FlashIcon from "../../assets/icons/flash.svg";
import QRIcon from "../../assets/icons/qr-code.svg";

import { ModalContext } from "../../context/ModalProvider";

import {
  Container,
  Wrapper,
  Heading,
  Subheading,
  Cards,
  CardItem,
  IconContainer,
  Icon,
  Text,
  Actions,
  Button,
} from "./style";

const Offices = () => {
  const modal = useContext(ModalContext);

  return (
    <Wrapper id="services">
      <Container>
        <Heading>MUNUS OFFICES</Heading>
        <Subheading>Your work essentials all in one place</Subheading>
        <Cards>
          <CardItem>
            <IconContainer>
              <Icon
                src={BuildingIcon}
                alt="Work anytime and anywhere from your digital office."
              />
            </IconContainer>
            <Text>Work anytime and anywhere from your digital office.</Text>
          </CardItem>
          <CardItem>
            <IconContainer>
              <Icon
                src={EyeIcon}
                alt="Be discovered. Curate your digital office and connect with clients."
              />
            </IconContainer>
            <Text>
              Be discovered. <br /> Curate your digital office and connect with
              clients.
            </Text>
          </CardItem>
          <CardItem>
            <IconContainer>
              <Icon
                src={FlashIcon}
                alt="Simplify workflows with adaptive Microsoft management tools."
              />
            </IconContainer>
            <Text>
              Simplify workflows with adaptive Microsoft management tools.
            </Text>
          </CardItem>
          <CardItem>
            <IconContainer>
              <Icon
                src={QRIcon}
                alt="Share your profile and expertise with your network with ease."
              />
            </IconContainer>
            <Text>
              Share your profile and expertise with your network with ease.
            </Text>
          </CardItem>
        </Cards>
        <Actions>
          <Button href="https://ligala.mymunus.com/">Open an Office</Button>
        </Actions>
      </Container>
    </Wrapper>
  );
};

export default Offices;
