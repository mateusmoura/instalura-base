import { isNumber } from 'lodash';
import styled, { css } from 'styled-components';

import propToStyle from '../../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  padding-left: 28px;
  margin-right: auto;
  padding-right: 28px;

  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      padding-left: 28px;
      padding-right: 28px;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-left: 16px;
      padding-right: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;
`;

const Col = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;

  ${({ value }) => {
    if (isNumber(value)) {
      return css`
      flex: 0 0 ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
    }
    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
            flex: 0 0 ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `,
      }),
      ...(value.sm && {
        sm: css`
            flex: 0 0 ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `,
      }),
      ...(value.md && {
        md: css`
            flex: 0 0 ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `,
      }),
      ...(value.lg && {
        lg: css`
            flex: 0 0 ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `,
      }),
      ...(value.xl && {
        xl: css`
            flex: 0 0 ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `,
      }),
    });
  }}

  ${({ offset }) => {
    if (isNumber(offset)) {
      return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
    }
    return breakpointsMedia({
      ...(offset?.xs && {
        xs: css`
      margin-left: ${(100 * offset.xs) / 12}%;
    `,
      }),
      ...(offset?.sm && {
        sm: css`
      margin-left: ${(100 * offset.sm) / 12}%;
    `,
      }),
      ...(offset?.md && {
        md: css`
      margin-left: ${(100 * offset.md) / 12}%;
    `,
      }),
      ...(offset?.lg && {
        lg: css`
      margin-left: ${(100 * offset.lg) / 12}%;
    `,
      }),
      ...(offset?.xl && {
        xl: css`
      margin-left: ${(100 * offset.xl) / 12}%;
    `,
      }),
    });
  }}

  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('marginTop')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
