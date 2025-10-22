import { Flex } from '@mantine/core';
import styled from 'styled-components';

const Card = styled.div`
  width: 345px;
  height: 345px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px #00000020;


  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const ServicesGroup = () => {
  return (

   <Flex wrap="wrap" w="100%" justify="center" gap={20}>
       <Card>1</Card>
       <Card>2</Card>
       <Card>3</Card>
       <Card>4</Card>
       <Card>5</Card>
       <Card>6</Card>
       <Card>7</Card>
       <Card>8</Card>
   </Flex>
    
  );
};

export default ServicesGroup;
