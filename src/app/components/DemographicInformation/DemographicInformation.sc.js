import styled from 'styled-components';
import media from 'styled-media-query';
import { SOURCE_SERIF_PRO } from '../../../utils/consts';

export const Wrapper = styled.div`
  padding: 80px 0 64px;
`;

export const Name = styled.h1`
  font-family: ${SOURCE_SERIF_PRO};
  font-size: 40px;
  font-weight: bold;
  
  ${media.greaterThan('medium')`
    font-size: 64px;
  `};
`;

export const Occupation = styled.h2`
  margin: 0 0 24px;
  font-size: 20px;
  
  ${media.greaterThan('medium')`
    font-size: 32px;
  `};
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InformationWrapper = styled.div`
  flex: 1 1 auto;
  order: 2;
  width: 100%;

  ${media.greaterThan('medium')`
    order: 1;
    flex: 0 0 auto;
    width: 500px;
  `};
`;

export const InformationRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  line-height: 1.5;
  font-size: 16px;
`;

export const InformationKey = styled.p`
  flex: 0 0 auto;
  padding: 0 16px 0 0;
  width: 200px;
`;

export const InformationValue = styled.p`
  flex: 1 1 auto;
  font-weight: 300;
  font-style: italic;
`;

export const Icons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 24px 0 0;
  
  a {
    display: block;
    flex: 0 0 auto;
    margin: 0 16px 0 0;
    width: 32px;
    height: 32px;
    
    &:last-of-type {
      margin: 0;
    }
  }
  
  svg {
    width: 32px;
    height: 32px;
  }
`;

export const AvatarWrapper = styled.figure`
  flex: 0 0 auto;
  order: 1;
  margin: 0 0 16px;
  width: 200px;
  
  ${media.greaterThan('medium')`
    order: 2;
    margin: 0;
  `};
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
`;
