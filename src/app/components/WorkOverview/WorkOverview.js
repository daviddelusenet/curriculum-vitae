import List from '../List/List';
import Paragraph from '../Paragraph/Paragraph';
import React from 'react';
import Title from '../Title/Title';

const WorkOverview = () => (
    <>
        <Title>
            {'A selection of my work'}
        </Title>
        <Paragraph>
            {`During my time as a developer I worked on a lot of projects. Below you will find some of my better work so
            far. All of these projects are build in collaboration with my colleagues at Momkai or Random Studio.`}
        </Paragraph>
        <List listItems={[
            '<a href="https://shop.rafsimons.com/" rel="noopener noreferrer" target="_blank">Raf Simons webshop</a>',
            '<a href="https:/www.momkai.com/" rel="noopener noreferrer" target="_blank">Momkai portfolio</a>',
            '<a href="https:/www.knvb.nl/" rel="noopener noreferrer" target="_blank">KNVB</a>',
            '<a href="https://www.masterdigitaldesign.com/why-apply/" rel="noopener noreferrer" target="_blank">'
      + 'Master Digital Design</a>',
            '<a href="https://www.vanmoof.com" rel="noopener noreferrer" target="_blank">VanMoof</a>',
        ]}
        />
        <Paragraph>
            {`I also build the entire video wall part of the Digital Showroom which is used by Tommy Hilfiger. Since
            this isn't an online application I can't place a link to that project here. However, you can
            watch `}
            <a href="https://www.youtube.com/watch?v=tQ1VpM7pjsA" rel="noopener noreferrer" target="_blank">
                {'this interesting video'}
            </a>
            {' explaining what the Digital Showroom is.'}
        </Paragraph>
    </>
);

export default WorkOverview;
