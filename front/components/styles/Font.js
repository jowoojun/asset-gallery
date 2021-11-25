import styled from 'styled-components';
import { DefaultFontColor } from './Color';

export const Font = styled.p`
  color: ${props => props.theme.color? props.theme.color : DefaultFontColor};
  font-size: ${props => props.theme.fs? props.theme.fs : '1em'};
  margin: ${props => props.theme.margin? props.theme.margin : 0 };
  padding: ${props => props.theme.padding? props.theme.padding : 0 };
`;