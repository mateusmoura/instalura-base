import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import get from 'lodash/get';

export const TextStyleVariants = ({ variant } = {}) => css`
  ${() => (
    css`
      font-size: ${({ theme }) => get(theme.typographyVariants, `${variant}.fontSize`)};
      font-weight: ${({ theme }) => get(theme.typographyVariants, `${variant}.fontWeight`)};
      line-height: ${({ theme }) => get(theme.typographyVariants, `${variant}.lineHeight`)};
    `
  )}
`;

export const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants({ variant })}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

const Text = ({ tag, variant, children, ...props }) => (
  <TextBase as={tag} variant={variant} {...props}>
    {children}
  </TextBase>
);

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

export default Text;