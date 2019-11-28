import media from 'styled-media-query';
import styled from 'styled-components';

export const StyledList = styled.ul`
    margin: 0 0 24px;

    ${media.greaterThan('medium')`
        margin: 0 0 40px;
    `}
`;

export default StyledList;
