import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { getColorPalette } from '../../../utils/color';
import { TypographyProps } from '../interface';

const Subheading: FC<TypographyProps> = ({ children, colorText = 'secondary', ...props }) => {
  const textFinalProps = {
    ...props,
    colorText,
  };
  return <TextWrapper {...textFinalProps}>{children}</TextWrapper>;
};

export { Subheading };

const TextWrapper = styled.h2<Omit<TypographyProps, 'children'>>`
  color: ${(props) => getColorPalette(props.colorText)};
  font-weight: 800;
  ${(props) =>
    !props.boldText &&
    css`
      font-weight: 400;
    `}

  font-size: 1.5rem;
`;
