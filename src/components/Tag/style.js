import styled, { css } from 'styled-components';
import { fontStyle, flexPosition } from '../../styles/mixins';
import {
  FONT_WEIGHT_BOLD,
  GRAY_DARKER,
  FONT_SIZE_6,
  GRAY_MEDIUM,
  GRAY_MEDIUM_2,
  GRAY_LIGHT,
  DANGER_COLOR,
} from '../../styles/variables';

const errorTag = css`
  ${fontStyle(GRAY_LIGHT, FONT_SIZE_6, FONT_WEIGHT_BOLD)}
  background-color: ${DANGER_COLOR};
`;

const secondaryTag = css`
  ${fontStyle(GRAY_DARKER, FONT_SIZE_6, FONT_WEIGHT_BOLD)}
  border: 1px solid ${GRAY_MEDIUM};
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const disabledStyle = css`
  border: none;
  background-color: ${GRAY_MEDIUM_2};
  &:hover {
    background-color: ${GRAY_MEDIUM_2};
  }
  color: #fff;
`;

export const CustomTag = styled.span`
  display: inline-block;
  position: relative;
  ${flexPosition({ align: 'center', justify: 'center' })}
  ${fontStyle(props => props.color, FONT_SIZE_6, FONT_WEIGHT_BOLD)}
  min-width: 50px;
  border-radius: 20px;
  padding: 5px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  color: ${({ color }) => color || '#FFF'};
  height: ${({ height }) => height || '20px'};
  width: ${({ width }) => width || '120px'};
  border: ${props => props.border};
  &:hover {
    ${props => props.hoverStyle};
  }
  ${({ customStyles }) => customStyles};
  ${({ error }) => error ? errorTag : null};
  ${({ secondary }) => secondary ? secondaryTag : null};
  ${({ disabled }) => disabled ? disabledStyle : null};
`;
