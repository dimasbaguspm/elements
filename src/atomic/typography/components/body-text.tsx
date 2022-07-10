import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { getColorPalette } from '../../../utils/color';
import { TypographyProps } from '../interface';

const BodyText: FC<TypographyProps> = ({ children, colorText = 'dark', ...rest }) => {
  const finalProps = {
    ...rest,
    colorText,
  };
  return <TextWrapper {...finalProps}>{children}</TextWrapper>;
};

export { BodyText };

const TextWrapper = styled.p<Omit<TypographyProps, 'children'>>`
  color: ${(props) => getColorPalette(props.colorText)};
  font-weight: 800;
  ${(props) =>
    !props.boldText &&
    css`
      font-weight: 400;
    `}

  font-size: 1rem;
`;
