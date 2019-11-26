import {
    Avatar,
    AvatarWrapper,
    Icons,
    InformationKey,
    InformationRow,
    InformationValue,
    InformationWrapper,
    Inner,
    Name,
    Occupation,
    Wrapper,
} from './DemographicInformation.sc';
import GithubSVG from '../../../svg/github.svg';
import LinkedInSVG from '../../../svg/linkedin.svg';
import MailSVG from '../../../svg/mail.svg';
import PhoneSVG from '../../../svg/phone.svg';
import React from 'react';

const DemographicInformation = () => (
    <Wrapper>
        <Name>
            {'David de Lusenet'}
        </Name>
        <Occupation>
            {'Front-end developer'}
        </Occupation>
        <Inner>
            <InformationWrapper>
                <InformationRow>
                    <InformationKey>
                        {'Date of birth'}
                    </InformationKey>
                    <InformationValue>
                        {'June 24, 1992'}
                    </InformationValue>
                </InformationRow>
                <InformationRow>
                    <InformationKey>
                        {'Nationality'}
                    </InformationKey>
                    <InformationValue>
                        {'Dutch'}
                    </InformationValue>
                </InformationRow>
                <InformationRow>
                    <InformationKey>
                        {'Current home town'}
                    </InformationKey>
                    <InformationValue>
                        {'Amsterdam'}
                    </InformationValue>
                </InformationRow>
                <Icons>
                    <a
                        href="https://github.com/daviddelusenet"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Check out my code"
                    >
                        <GithubSVG />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/david-de-lusenet-31b838111/"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Connect with me"
                    >
                        <LinkedInSVG />
                    </a>
                    <a href="mailto:david@lusenet.nl" title="Send me an email to say hi">
                        <MailSVG />
                    </a>
                    <a href="tel:+31650469600" title="You used to call me on my cellphone">
                        <PhoneSVG />
                    </a>
                </Icons>
            </InformationWrapper>
            <AvatarWrapper>
                <Avatar alt="Avatar of David de Lusenet" src="assets/images/avatar.png" />
            </AvatarWrapper>
        </Inner>
    </Wrapper>
);

export default DemographicInformation;
