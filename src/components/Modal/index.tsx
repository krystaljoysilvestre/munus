import { useState, useContext } from "react";
import $ from "jquery";

import { ModalContext } from "../../context/ModalProvider";

import {
  Overlay,
  Container,
  CloseButton,
  Heading,
  Title,
  InputContainer,
  Input,
  Submit,
  Mobile,
  Desktop,
  ModernDrawer,
  DrawerContainer,
} from "./style";

const Modal = () => {
  // @ts-ignore
  const modal = useContext(ModalContext);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      const form = $(e.target);

      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
          setIsLoading(false);
          setIsSuccess(true);
        },
      });
    }
  };

  return (
    <>
      <Mobile>
        <ModernDrawer
          open={modal.isModalOpen}
          onClose={() => modal.setIsModalOpen(false)}
          direction="bottom"
          duration={300}
          lockBackgroundScroll
        >
          <DrawerContainer>
            <CloseButton
              onClick={() => {
                modal.setIsModalOpen(false);
                setIsSuccess(false);
                setEmail("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#DBF3E7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </CloseButton>
            <Heading>Open an office</Heading>
            {isSuccess ? (
              <Title>Email sent.</Title>
            ) : (
              <>
                <Title>
                  Don’t miss out! <br /> Unlocking great things soon.
                </Title>
                <form
                  action="https://mymunus.com/server.php"
                  method="post"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <InputContainer>
                    <Input
                      autoFocus
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Submit type="submit" value="Submit" />
                  </InputContainer>
                </form>
              </>
            )}
          </DrawerContainer>
        </ModernDrawer>
      </Mobile>
      <Desktop>
        <Overlay isOpen={modal.isModalOpen}>
          <Container>
            <CloseButton
              onClick={() => {
                modal.setIsModalOpen(false);
                setIsSuccess(false);
                setEmail("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#DBF3E7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </CloseButton>
            <Heading>Open an office</Heading>
            {isSuccess ? (
              <Title>Email sent.</Title>
            ) : (
              <>
                <Title>
                  Don’t miss out! <br /> Unlocking great things soon.
                </Title>
                <form
                  action="https://mymunus.com/server.php"
                  method="post"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <InputContainer>
                    <Input
                      autoFocus
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Submit type="submit" value="Submit" />
                  </InputContainer>
                </form>
              </>
            )}
          </Container>
        </Overlay>
      </Desktop>
    </>
  );
}

export default Modal;
