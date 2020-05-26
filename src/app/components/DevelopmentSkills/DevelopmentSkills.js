import List from '../List/List';
import ListItem from '../ListItem/ListItem';
import Paragraph from '../Paragraph/Paragraph';
import React from 'react';
import Title from '../Title/Title';

const currentTools = [
    'HTML5',
    'CSS3/SASS/React CSS Modules',
    'TypeScript/JavaScript ES6',
    'React',
    'Redux',
    'Node.js/Express',
    'Apollo GraphQL',
    'Storybook',
    'Styled Components',
    'GSAP',
    'Webpack',
    'Rollup',
    'Babel',
    'Git',
    'ESLint',
    'Stylelint',
    'Prettier',
];

const previousTools = [
    'PixiJS',
    'Backbone.js',
    'jQuery',
    'PHP',
    'MySQL',
    'Twig',
    'Smarty',
    'Twitter Bootstrap',
    'Zurb Foundation',
    'Gulp',
    'Grunt',
];

const DevelopmentSkills = () => (
    <>
        <Title>{'Development skills'}</Title>
        <List>
            {currentTools.map((tool) => (
                <ListItem key={tool}>{tool}</ListItem>
            ))}
        </List>
        <Paragraph>{"Tools I've worked with in the past:"}</Paragraph>
        <List>
            {previousTools.map((tool) => (
                <ListItem key={tool}>{tool}</ListItem>
            ))}
        </List>
    </>
);

export default DevelopmentSkills;
