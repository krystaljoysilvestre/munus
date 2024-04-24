import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.60);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  border-radius: 32px;
  background: #00263B;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.16);
  width: 442px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: relative;
`;

export const CloseButton = styled.div`
  width: fit-content;
  right: 35px;
  top: 25px;
  margin-bottom: 10px;
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Heading = styled.div`
  color: #A3FF48;
  font-family: "Reddit Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-top: 15px;
`;

export const Title = styled.div`
  color: #FFF;
  font-family: "Nanum Myeongjo";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 40px */
  letter-spacing: -1.2px;
`;

