import { map } from 'lodash';
import { css } from 'styled-components';
import breakpoints from '../breakpoints';

const breakpointsMedia = (cssByBreakpoints) => map(cssByBreakpoints, (cssElement, breakpointName) => css`@media screen and (min-width: ${breakpoints[breakpointName]}px) {
    ${cssElement}
  }`);

export default breakpointsMedia;
