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
import React, { FunctionComponent } from 'react';
import ExternalLink from '../../atoms/ExternalLink/ExternalLink';
import { ReactSVG } from 'react-svg';

const DemographicInformation: FunctionComponent = () => (
    <Wrapper>
        <Name>{'David de Lusenet'}</Name>
        <Occupation>{'Front-end developer'}</Occupation>
        <Inner>
            <InformationWrapper>
                <InformationRow>
                    <InformationKey>{'Date of birth'}</InformationKey>
                    <InformationValue>{'June 24, 1992'}</InformationValue>
                </InformationRow>
                <InformationRow>
                    <InformationKey>{'Nationality'}</InformationKey>
                    <InformationValue>{'Dutch'}</InformationValue>
                </InformationRow>
                <InformationRow>
                    <InformationKey>{'Current location'}</InformationKey>
                    <InformationValue>{'Amsterdam'}</InformationValue>
                </InformationRow>
                <InformationRow>
                    <InformationKey>{'Drivers license'}</InformationKey>
                    <InformationValue>{'B'}</InformationValue>
                </InformationRow>
                <Icons>
                    <ExternalLink href="https://github.com/daviddelusenet" title="Check out my code">
                        <ReactSVG src="/assets/images/github.svg" />
                    </ExternalLink>
                    <ExternalLink
                        href="https://www.linkedin.com/in/david-de-lusenet-31b838111/"
                        title="Connect with me"
                    >
                        <ReactSVG src="/assets/images/linkedin.svg" />
                    </ExternalLink>
                    <ExternalLink href="mailto:david@lusenet.nl" target="_self" title="Send me an email">
                        <ReactSVG src="/assets/images/mail.svg" />
                    </ExternalLink>
                    {/* <ExternalLink href="tel:+31650469600" title="You used to call me on my cellphone">
                        <ReactSVG src="/assets/images/phone.svg" />
                    </ExternalLink> */}
                </Icons>
            </InformationWrapper>
            <AvatarWrapper>
                <Avatar alt="Avatar of David de Lusenet" src="assets/images/avatar.png" />
            </AvatarWrapper>
        </Inner>
    </Wrapper>
);

export default DemographicInformation;
