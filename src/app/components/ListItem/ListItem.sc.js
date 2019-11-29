import media from 'styled-media-query';
import styled from 'styled-components';

export const StyledListItem = styled.li`
    position: relative;
    padding: 0 0 0 16px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 300;

    ${media.greaterThan('medium')`
        padding: 0 0 0 24px;
        font-size: 24px;
    `}

    &::after,
    &::before {
        display: block;
        position: absolute;
        top: 12px;
        left: 0;
        background-color: ${({ theme }) => theme.primaryTextColor};
        width: 8px;
        height: 1px;
        content: '';

        ${media.greaterThan('medium')`
            top: 18px;
            width: 12px;
        `}
    }

    &::after {
        transform: rotate(45deg);
    }

    &::before {
        transform: rotate(-45deg);
    }
`;

export default StyledListItem;
