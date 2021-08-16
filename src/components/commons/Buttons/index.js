import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariants } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const ButtonGhost = css`
  background: transparent;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  color: white;
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button`
  border: 0;
  opacity: 1;
  cursor: pointer;
  font-weight: bold;
  padding: 12px 40px;
  border-radius: 8px;

  // Define typograph
  ${TextStyleVariants({ variant: 'smallestException' })}

  ${({ ghost }) => {
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    opacity: .5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants({ variant: 'smallestException' })}
    `,
    md: css`
      ${() => TextStyleVariants({ variant: 'paragraph1' })}
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
