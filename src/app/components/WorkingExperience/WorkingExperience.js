import Paragraph from '../Paragraph/Paragraph';
import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const WorkingExperience = () => (
    <>
        <Title>
            {'Working experience'}
        </Title>
        <Subtitle date="August 2019 - present">
            {'front-end developer consultant at Cygni Netherlands'}
        </Subtitle>
        <Paragraph>
            {`Cygni Netherlands is a young IT consultant company and the sister company of Cygni Sweden. Cygni Sweden
            is really succesful and they decided they wanted to expand their market. Cygni Netherlands was founded at
            the start of 2019 and I'm the first developer they hired.`}
        </Paragraph>
        <Paragraph>
            {'I\'m currently on my first assignment as a consultant: I\'m helping '}
            <a href="http://www.dexels.com/" rel="noopener noreferrer" target="_blank">
                {'Dexels'}
            </a>
            {` with the rebuild of their Club application while using web technologies. I'm the tech lead on this
            project and our team is using React, Styled Components and TypeScript`}
        </Paragraph>
        <Paragraph>
            {`Before we started with the rebuild of the Club application we've first developed a React UI kit which is
            published as a `}
            <a href="https://www.npmjs.com/package/dexels-ui-kit" rel="noopener noreferrer" target="_blank">
                {'NPM package'}
            </a>
            {'.'}
        </Paragraph>
        <Paragraph>
            {`When I'm not on an assignment or have any spare time I'm working on an internal project for Cygni: an
            application where employees can keep track of scores of the numerous games they play versus each other.
            Think games like table football, pool and table tennis.`}
        </Paragraph>
        <Paragraph>
            {`I'm using this project to teach myself new things so I'm trying to mostly use technologies I'm not
            familiar with yet. I'm developing both the front and back-end of this application. For the front-end I'm
            using TypeScript, React, Styled Components and Apollo GraphQL.`}
        </Paragraph>
        <Paragraph>
            {`The back-end is a Node (Express) server which exposes a GraphQL API. This API uses Sequelize to
            communicate with a Postgres database. Eventually this entire project will also be containerized using
            Docker.`}
        </Paragraph>
        <Subtitle date="January 2018 - August 2019">
            {'front-end developer at Random Studio'}
        </Subtitle>
        <Paragraph>
            {`Random is a independent strategy and design studio which blurs the boundaries between art, design and
            technology. Random prides itself on being one of the best companies in the world when it comes to developing
            innovative B2B and B2C experiences. Most of their clients are active the high fashion industry.`}
        </Paragraph>
        <Paragraph>
            {`I've worked on a lot of cool projects during my time at Random and really made the next step as a
            front-end developer. I became more proficient with React and Redux and started working with CSS-in-JS
            libraries like Styled Components.`}
        </Paragraph>
        <Paragraph>
            {'The first project I did at Random was the rebuild of the Video Wall PVH uses in their '}
            <a href="https://www.youtube.com/watch?v=X3fPWN-nt4o" rel="noopener noreferrer" target="_blank">
                {'Digital Showroom'}
            </a>
            {`. The Video Wall originally was built with C and was difficult to maintain. I rebuild the Video Wall while
            using web technologies like React and Styled Components. I also built a Node server using Express to
            communicate between the Video Wall and the Touch Table.`}
        </Paragraph>
        <Paragraph>
            {`One of my most treasured projects to date is the webshop I've built for one of my favorite fashion
            designers, Raf Simons. This was a relatively straight forward project, I used React and Styled Components
            for the front-end and Shopify for the back-end. By using the Shopify JavaScript SDK I could link the
            two together, thus creating a fully custom shopping experience.`}
        </Paragraph>
        <Paragraph>
            {'The last year of my time at Random I spent on their biggest project, the '}
            <a
                href={'https://fashionunited.com/news/retail/the-store-of-the-future-inside-tommy-hilfiger-s-'
                + 'amsterdam-store/2018120730514'}
                rel="noopener noreferrer"
                target="_blank"
            >
                {'Store of the Future'}
            </a>
            {` they’re developing for PVH. I was the lead developer on multiple sub-projects of that project.
            For example, I've rebuild the entire product detail page and catalog browser. This project is build
            with React, CSS Modules and Redux.`}
            {`I also did a lot of architectural work on this project and have even developed an entire design-system
            including component library using Storybook.`}
        </Paragraph>
        <Subtitle date="February 2016 - January 2018">
            {'(interm) front-end developer at Momkai'}
        </Subtitle>
        <Paragraph>
            {`I started working at Momkai as an intern during my graduation internship. During my internship, I mainly
            focused on improving my JavaScript skills and writing cleaner code. After my internship ended, I started
            working full time at Momkai.`}
        </Paragraph>
        <Paragraph>
            {`VanMoof was the first client I did work for while at Momkai: I built them a bike configurator. While using
            this configurator you could do simple configuration changes to your selected bike. This configurator is
            build using Backbone.js and vanilla JavaScript and the styling is done with SCSS. I also worked on several
            other components of `}
            <a href="https://vanmoof.com" rel="noopener noreferrer" target="_blank">
                {'the VanMoof website'}
            </a>
            {'.'}
        </Paragraph>
        <Paragraph>
            {'My favorite project I worked on at Momkai is the '}
            <a href="https://masterdigitaldesign.com/why-apply" rel="noopener noreferrer" target="_blank">
                {'Master Digital Design project'}
            </a>
            {`. This project contained a lot of SVG animations and really pushed the limits of responsive design. I
            didn’t use any library or framework for this project, everything is just pure vanilla JavaScript.`}
        </Paragraph>
        <Paragraph>
            {'The last project I worked on before I left Momkai is their '}
            <a href="https://momkai.com/" rel="noopener noreferrer" target="_blank">
                {'portfolio website'}
            </a>
            {`. I did a lot of work on this project with React and GSAP. The website launched after I left and has won
            multiple acclaimed design awards since.`}
        </Paragraph>
        <Paragraph>
            {`Besides the projects described above I also did some work for various other client like the KNVB, Het
            Scheepvaartmuseum, IKEA and Bugaboo.`}
        </Paragraph>
        <Subtitle date="March 2012 - January 2016">
            {'(intern) front-end developer at Atabix Solutions'}
        </Subtitle>
        <Paragraph>
            {`I started this job as an intern as well. After my internship ended, both parties were so excited about the
            collaboration so far that Atabix offered me a job. I had a lot of fun working there for four years and
            worked on numerous projects for clients like Oger, AFC and Cosmic Cowboys.`}
        </Paragraph>
        <Subtitle date="2008 - 2010">
            {'technical support at the University of Applied Sciences Amsterdam'}
        </Subtitle>
        <Paragraph>
            {`My job here was to help students and teachers with any technical difficulties they faced. This could vary
            from setting up new computers to helping out with Photoshop or Final Cut Pro.`}
        </Paragraph>
    </>
);

export default WorkingExperience;
