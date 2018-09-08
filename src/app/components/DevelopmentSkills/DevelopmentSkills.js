import React from 'react';

// Child components
import List from '../List/List';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';

const DevelopmentSkills = () => (
  <React.Fragment>
    <Title>Development skills</Title>
    <List listItems={[
      'HTML5',
      'CSS3/SASS',
      'JavaScript ES6',
      'React',
      'Redux',
      'Styled Components/React CSS Modules',
      'GSAP',
      'Webpack',
      'Git',
    ]}
    />
    <Paragraph>Tools I&apos;ve worked with in the past:</Paragraph>
    <List listItems={[
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
    ]}
    />
  </React.Fragment>
);

export default DevelopmentSkills;
