import styled from 'styled-components';
import {
    compose,
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
} from 'styled-system';

const composedStyleProps = compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
);

const Box = styled.div`
    ${composedStyleProps}
`;

export default Box;
