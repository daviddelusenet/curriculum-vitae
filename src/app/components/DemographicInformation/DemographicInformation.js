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
import React from 'react';
import ReactSVG from 'react-svg';

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
                        {'Current location'}
                    </InformationKey>
                    <InformationValue>
                        {'Amsterdam'}
                    </InformationValue>
                </InformationRow>
                <InformationRow>
                    <InformationKey>
                        {'Drivers license'}
                    </InformationKey>
                    <InformationValue>
                        {'B'}
                    </InformationValue>
                </InformationRow>
                <Icons>
                    <a
                        href="https://github.com/daviddelusenet"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Check out my code"
                    >
                        <ReactSVG src="/assets/images/github.svg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/david-de-lusenet-31b838111/"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Connect with me"
                    >
                        <ReactSVG src="/assets/images/linkedin.svg" />
                    </a>
                    <a href="mailto:david@lusenet.nl" title="Send me an email to say hi">
                        <ReactSVG src="/assets/images/mail.svg" />
                    </a>
                    <a href="tel:+31650469600" title="You used to call me on my cellphone">
                        <ReactSVG src="/assets/images/phone.svg" />
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
