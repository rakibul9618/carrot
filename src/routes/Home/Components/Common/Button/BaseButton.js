import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    outline: none,
`;

const BaseButton = ({
  onClick, className, style, children,
}) => (
  <Button
    onClick={onClick}
    className={className}
    style={style}
  >
    {children}
  </Button>
);

export default BaseButton;
