import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

// Child components
import DemographicInformation from './components/DemographicInformation/DemographicInformation';
import Paragraph from './components/Paragraph/Paragraph';

// Styled components
const Wrapper = styled.div`
    max-width: 760px;
    margin: 0 auto;
    padding: 0 30px 100px;
`;

const App = () => (
  <Wrapper>
    <DemographicInformation />
    <Paragraph>Hello world</Paragraph>
  </Wrapper>
);

export default hot(module)(App);
