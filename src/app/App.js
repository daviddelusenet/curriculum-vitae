import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

// Styles
import GlobalStyle from './styles/base';

// Child components
import DemographicInformation from './components/DemographicInformation/DemographicInformation';
import DevelopmentSkills from './components/DevelopmentSkills/DevelopmentSkills';
import Introduction from './components/Introduction/Introduction';
import PersonalInterests from './components/PersonalInterests/PersonalInterests';
import WorkingExperience from './components/WorkingExperience/WorkingExperience';
import WorkOverview from './components/WorkOverview/WorkOverview';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 30px 100px;
    max-width: 760px;
`;

const App = () => (
    <Wrapper>
        <GlobalStyle />
        <DemographicInformation />
        <Introduction />
        <WorkingExperience />
        <WorkOverview />
        <DevelopmentSkills />
        <PersonalInterests />
    </Wrapper>
);

export default hot(module)(App);
