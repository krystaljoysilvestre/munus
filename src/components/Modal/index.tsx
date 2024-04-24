import { Overlay, Container, CloseButton, Heading, Title } from "./style";

const Modal = () => {
  return (
    <Overlay>
      <Container>
        <CloseButton>⨉</CloseButton>
        <Heading>Open an office</Heading>
        <Title>
          Don’t miss out! We’re getting ready to unlock great things.
        </Title>
        MOIdal
      </Container>
    </Overlay>
  );
}

export default Modal;
