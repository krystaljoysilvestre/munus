import { useContext } from "react";

import { ModalContext } from "../../context/ModalProvider";

import { Footer } from "../../components";
import {
  Wrapper,
  Container,
  Title,
  Actions,
  ButtonOutlined,
  Button,
} from "./style";

const ContactUs = () => {
  const modal = useContext(ModalContext);

  return (
    <Wrapper id="contact">
      <Container>
        <Title>
          Your office is getting <br /> ready for you.
        </Title>
        <Actions>
          <ButtonOutlined href="mailto:access@mymunus.com">
            Ask us more
          </ButtonOutlined>
          <Button onClick={() => modal.setIsModalOpen(true)}>
            Open an Office
          </Button>
        </Actions>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ContactUs;
