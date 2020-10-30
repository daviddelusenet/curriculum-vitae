import styled, { ThemeProvider } from 'styled-components';
import DemographicInformation from './components/layouts/DemographicInformation/DemographicInformation';
import DevelopmentSkills from './components/layouts/DevelopmentSkills/DevelopmentSkills';
import GlobalStyles from './styles/globalStyles';
import { hot } from 'react-hot-loader';
import Introduction from './components/layouts/Introduction/Introduction';
import media from 'styled-media-query';
import PersonalInterests from './components/layouts/PersonalInterests/PersonalInterests';
import React from 'react';
import rem from './styles/mixins/rem';
import themeLight from './styles/themes/light';
import WorkingExperience from './components/layouts/WorkingExperience/WorkingExperience';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 0 ${rem(24)} ${rem(40)};
    max-width: ${rem(760)};

    ${media.greaterThan('medium')`
        padding: 0 ${rem(32)} ${rem(80)};
    `}
`;

const App = () => (
    <ThemeProvider theme={themeLight}>
        <Wrapper>
            <GlobalStyles />
            <DemographicInformation />
            <Introduction />
            <WorkingExperience />
            <DevelopmentSkills />
            <PersonalInterests />
        </Wrapper>
    </ThemeProvider>
);

export default hot(module)(App);
