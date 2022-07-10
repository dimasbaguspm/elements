import React, { FC } from 'react';

import styled, { css } from 'styled-components';
import { getColorPalette } from '../../../utils/color';
import { TypographyProps } from '../interface';

const Heading: FC<TypographyProps> = ({ children, colorText = 'primary', ...props }) => {
  const textFinalProps = {
    ...props,
    colorText,
  };

  return <TextWrapper {...textFinalProps}>{children}</TextWrapper>;
};

export { Heading };

const TextWrapper = styled.h1<Omit<TypographyProps, 'children'>>`
  color: ${(props) => getColorPalette(props.colorText)};
  font-weight: 800;
  ${(props) =>
    !props.boldText &&
    css`
      font-weight: 400;
    `}

  font-size: 2rem;
`;
