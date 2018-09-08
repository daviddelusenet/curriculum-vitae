import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

// Child components
import DemographicInformation from './components/DemographicInformation/DemographicInformation';
import DevelopmentSkills from './components/DevelopmentSkills/DevelopmentSkills';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';
import PersonalInterests from './components/PersonalInterests/PersonalInterests';
import WorkingExperience from './components/WorkingExperience/WorkingExperience';
import WorkOverview from './components/WorkOverview/WorkOverview';

const Wrapper = styled.div`
    max-width: 760px;
    margin: 0 auto;
    padding: 0 30px 100px;
`;

const App = () => (
  <Wrapper>
    <DemographicInformation />
    <PersonalInformation />
    <WorkingExperience />
    <WorkOverview />
    <DevelopmentSkills />
    <PersonalInterests />
  </Wrapper>
);

export default hot(module)(App);
