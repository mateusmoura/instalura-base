import { css } from 'styled-components';
import { isObject, mapValues, map } from 'lodash';
import { breakpointsMedia } from './breakpointsMedia';

const propToStyle = (propName) => (props) =>
{
  const propValue = props[propName];

  if (isObject(propValue)) {
    return css`
      ${breakpointsMedia({
      ...mapValues(propValue, cssElement => ({
        [propName]: cssElement,
      }))
    })}
    `;
  }

  return {
    [propName]: props[propName],
  };
}

export default propToStyle;