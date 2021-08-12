import { css } from 'styled-components';
import { isObject, mapValues, map } from 'lodash';
import { breakpointMedia } from './breakpointMedia';

const propToStyle = (propName) => (props) =>
{
  const propValue = props[propName];

  if (isObject(propValue)) {
    return css`
      ${breakpointMedia({
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