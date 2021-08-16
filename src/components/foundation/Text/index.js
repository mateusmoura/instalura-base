/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { get } from 'lodash';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariants = ({ variant } = {}) => css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants[variant].fontSize};
    font-weight: ${theme.typographyVariants[variant].fontWeight};
    line-height: ${theme.typographyVariants[variant].lineHeight};
  `}
`;

export const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants({ variant })}

  ${propToStyle('margin')}
  ${propToStyle('textAlign')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginBottom')}

  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

const Text = ({
  tag, variant, children, ...props
}) => (
  <TextBase as={tag} variant={variant} {...props}>
    {children}
  </TextBase>
);

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

export default Text;
