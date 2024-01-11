import styled from 'styled-components';
import { CommonStyle, CommonStylePropsType } from './CommonStyle';

export interface BoxPropsType extends CommonStylePropsType {}

const Box = styled.div<BoxPropsType>`
  ${CommonStyle}
`;

export default Box;
