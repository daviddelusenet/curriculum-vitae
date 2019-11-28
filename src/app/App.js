import DemographicInformation from './components/DemographicInformation/DemographicInformation';
import DevelopmentSkills from './components/DevelopmentSkills/DevelopmentSkills';
import GlobalStyles from './styles/globalStyles';
import { hot } from 'react-hot-loader';
import Introduction from './components/Introduction/Introduction';
import media from 'styled-media-query';
import PersonalInterests from './components/PersonalInterests/PersonalInterests';
import React from 'react';
import styled from 'styled-components';
import WorkingExperience from './components/WorkingExperience/WorkingExperience';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 24px 80px;
    max-width: 760px;

    ${media.greaterThan('medium')`
        padding: 0 32px 100px;
    `}
`;

const App = () => (
    <Wrapper>
        <GlobalStyles />
        <DemographicInformation />
        <Introduction />
        <WorkingExperience />
        <DevelopmentSkills />
        <PersonalInterests />
    </Wrapper>
);

export default hot(module)(App);
