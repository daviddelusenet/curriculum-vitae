import React, { FunctionComponent, ReactNode } from 'react';

interface ExternalLinkProps {
    children: ReactNode;
    href: string;
    rel?: string;
    target?: string;
    title?: string;
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
    children,
    href,
    rel = 'noopener noreferrer',
    target = '_blank',
    title,
}) => (
    <a href={href} rel={rel} target={target} title={title}>
        {children}
    </a>
);

export default ExternalLink;
