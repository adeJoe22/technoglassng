import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => {
  return <UniversalButton onClick={onClick}>{children}</UniversalButton>;
};

export default Button;

const UniversalButton = styled.button`
  padding: 10px 40px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: #ffffff;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }  
`;