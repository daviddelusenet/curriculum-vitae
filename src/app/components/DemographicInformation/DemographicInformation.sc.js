import styled from 'styled-components';
import { SOURCE_SERIF_PRO } from '../../../utils/consts';

export const Wrapper = styled.div`
  padding: 80px 0 64px;
`;

export const Name = styled.h1`
  font-family: ${SOURCE_SERIF_PRO};
  font-size: 64px;
  font-weight: bold;
`;

export const Occupation = styled.h2`
  margin: 0 0 24px;
  font-size: 32px;
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const InformationWrapper = styled.div`
  flex: 0 0 auto;
  width: 500px;
`;

export const InformationRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 16px;
  line-height: 1.5;
`;

export const InformationKey = styled.p`
  flex: 0 0 auto;
  width: 200px;
  padding: 0 16px 0 0;
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
    width: 32px;
    height: 32px;
    margin: 0 16px 0 0;
    
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
  width: 200px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
`;
