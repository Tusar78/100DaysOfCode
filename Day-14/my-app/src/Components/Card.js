import nerdImage from '../Assets/images/illustration.png';
import React from 'react';
import Button from './Button';
import Content from './Content';
import Image from './Image';
import Tag from './Tag';

const Card = () => {
  return (
    <div className='card'>
      <Content> 
        <Tag text="EXCLUSIVE" />
        <h1>React Styled Components</h1>

        <p>Exclusive React JS Tutorial on Styled Components where you will learn why we need this & how to use it.</p>
        <div className='buttons'>
          <Button text="Watch now" />
          <Button text="Github repo" />
        </div>
      </Content>
      <Image imgSrc={nerdImage} altTag="nerd" width="300px"/>
    </div>
  );
};

export default Card;