import nerdImage from "../Assets/images/illustration.png";
import React from "react";
import Button from "./Button";
import Image from "./Image";
import { CardContainer, ContentContainer } from "./Styles/Container.styles";
import { H1, P, Tag } from "./Styles/Elements.styles";

const Card = () => {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag bgColor="#4361ee">EXCLUSIVE</Tag>
        <H1>React Styled Components</H1>

        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <div className="buttons">
          <Button text="Watch now" />
          <Button text="Github repo" />
        </div>
      </ContentContainer>
      <Image imgSrc={nerdImage} altTag="nerd" width="300px" />
    </CardContainer>
  );
};

export default Card;
