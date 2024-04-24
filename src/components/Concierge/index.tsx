import MarkerPinIcon from "../../assets/icons/marker-pin.svg";
import FolderSearchIcon from "../../assets/icons/folder-search.svg";
import ShieldTickIcon from "../../assets/icons/shield-tick.svg";

import {
  Container,
  Wrapper,
  Heading,
  Badge,
  Subheading,
  Cards,
  CardItem,
  IconContainer,
  Icon,
  Text
} from "./style";

const Concierge = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>MUNUS CONCIERGE</Heading>
        <Badge>COMING SOON!</Badge>
        <Subheading>Professional aid at your fingertips</Subheading>
        <Cards>
          <CardItem>
            <IconContainer>
              <Icon
                src={MarkerPinIcon}
                alt="Find professionals based on your location and need."
              />
            </IconContainer>
            <Text>Find professionals based on your location and need.</Text>
          </CardItem>
          <CardItem>
            <IconContainer>
              <Icon
                src={FolderSearchIcon}
                alt="Review a variety of professionals in their digital offices."
              />
            </IconContainer>
            <Text>
              Review a variety of professionals in their digital offices.
            </Text>
          </CardItem>
          <CardItem>
            <IconContainer>
              <Icon
                src={ShieldTickIcon}
                alt="Work with your chosen professional in a secure environment."
              />
            </IconContainer>
            <Text>
              Work with your chosen professional in a secure environment.
            </Text>
          </CardItem>
          <CardItem>
            <IconContainer>
              <Icon
                src={FolderSearchIcon}
                alt="Track progress and settle engagements with ease."
              />
            </IconContainer>
            <Text>Track progress and settle engagements with ease.</Text>
          </CardItem>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Concierge;
