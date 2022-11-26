import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  background: #262626;
  width: 100%;
  height: 100vh;
`;

const CardContainer = styled.div`
  position: relative;
  background: #1e1e1e;
  height: 350px;
  width: 550px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 215px;
  position: absolute;
  left: 20px;
  z-index: 3;
`;

export { Container, CardContainer, ContentContainer };
