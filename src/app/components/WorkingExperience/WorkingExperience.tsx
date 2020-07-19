import React, { FunctionComponent } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const WorkingExperience: FunctionComponent = () => (
    <>
        <Title>{'Working experience'}</Title>
        <Subtitle date="July 2020 - present">
            {'senior front-end developer at '}
            <a href="https://codedazur.com/" rel="noopener noreferrer" target="_blank">
                {`Code d'Azur`}
            </a>
        </Subtitle>
        <Paragraph>
            {`Code d'Azur is a creative agency based in Amsterdam, Barcelona and Austin, Texas. Code d'Azur has a strong
            digital DNA and roots in digital production. At Code d'Azur we create digital campaigns but also focus on services
            and products.`}
            {`Together with my colleageus at Code d'Azur I'll be working for a lot of renowned clients like Philips, Polestar,
            KLM, ABN AMRO and many more.`}
        </Paragraph>
        <Subtitle date="August 2019 -  July 2020">
            {'front-end developer consultant at '}
            <a href="https://cygnigroup.com/nl/" rel="noopener noreferrer" target="_blank">
                {'Cygni NL'}
            </a>
        </Subtitle>
        <Paragraph>
            {`Cygni NL is a consultant company based in Amsterdam and is the sister company of Cygni Sweden.
            Cygni decided to expand to the Dutch market due to its success in Sweden. Cygni NL was founded at
            the start of 2019 and I'm actually the first developer they hired.`}
        </Paragraph>
        <Paragraph>
            {'I only did one assignment as a consultant: I helped '}
            <a href="http://www.dexels.com/" rel="noopener noreferrer" target="_blank">
                {'Dexels'}
            </a>
            {` with the rebuild of their Club application with web technologies. I was the tech lead on this project and
            our team was using TypeScript, React, Redux and Styled Components.`}
        </Paragraph>
        <Paragraph>
            {`Before we started with the rebuild of the Club application we first developed a React UI kit which we
            published as a `}
            <a href="https://www.npmjs.com/package/dexels-ui-kit" rel="noopener noreferrer" target="_blank">
                {'NPM package'}
            </a>
            {'.'}
        </Paragraph>
        <Paragraph>
            {`When I was not on an assignment or had any spare time I was working on an internal project for Cygni called
            Scorekeeper. This is an application where employees can keep track of the results of the numerous games they
            play versus each other.`}
        </Paragraph>
        <Paragraph>
            {`One of the goals of this project was to teach myself new things. This means I was trying to primarily use
            technologies I was not (super) familiar with yet. I developed both the front and back-end of this
            application. For the front-end I was using TypeScript, React, Styled Components and Apollo GraphQL.`}
        </Paragraph>
        <Paragraph>
            {`The back-end is a Node.js (Express) server which exposes a GraphQL API to the front-end. This API uses
            Sequelize to communicate with a Postgres database.`}
        </Paragraph>
        <Subtitle date="January 2018 - August 2019">
            {'front-end developer at '}
            <a href="https://random.studio/" rel="noopener noreferrer" target="_blank">
                {'Random Studio'}
            </a>
        </Subtitle>
        <Paragraph>
            {`Random is an independent strategy and design studio which blurs the boundaries between art, design and
            technology. Random prides itself on being one of the best companies in the world when it comes to developing
            innovative B2B and B2C experiences.`}
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
            {`. The Video Wall was originally built in C and was therefore difficult to maintain. I rebuilt the Video
            Wall with web technologies like React and Styled Components. I also built a Node server using Express to
            communicate between the Video Wall and the Touch Table.`}
        </Paragraph>
        <Paragraph>
            {`One of my most treasured projects to date is the webshop I've built for one of my favorite designers: Raf
            Simons. This was a relatively straight forward project, I used React and Styled Components
            for the front-end and Shopify for the back-end. The front-end uses the Shopify JavaScript SDK to communicate
            with the back-end, thus creating a fully custom shopping experience.`}
        </Paragraph>
        <Paragraph>
            {'The last year of my time at Random I spent on their biggest project, the '}
            <a
                href={
                    'https://fashionunited.com/news/retail/the-store-of-the-future-inside-tommy-hilfiger-s-' +
                    'amsterdam-store/2018120730514'
                }
                rel="noopener noreferrer"
                target="_blank"
            >
                {'Store of the Future'}
            </a>
            {` they’re developing for PVH. I was the lead developer on multiple sub-projects of that project. For
            example, I've rebuilt the entire product detail page and catalog browser. This project is built with React,
            CSS Modules and Redux.`}
            {`I also did a lot of architectural work on this project and have even developed an entire design-system
            including a component library with React and Storybook.`}
        </Paragraph>
        <Subtitle date="February 2016 - January 2018">
            {'(intern) front-end developer at '}
            <a href="https://momkai.com/" rel="noopener noreferrer" target="_blank">
                {'Momkai'}
            </a>
        </Subtitle>
        <Paragraph>
            {`I began working at Momkai at the start of my graduation internship. During this internship, I mainly
            focused on improving my JavaScript skills and writing cleaner code. After my internship ended, I started
            working full time at Momkai.`}
        </Paragraph>
        <Paragraph>
            {`VanMoof was the first client I worked for while at Momkai: I built them a bike configurator. When you use
            this configurator, you can do simple configuration changes to your selected bike. This configurator is
            built using Backbone.js and vanilla JavaScript and the styling is done with SCSS. I also worked on several
            other components of the `}
            <a href="https://vanmoof.com" rel="noopener noreferrer" target="_blank">
                {'VanMoof website'}
            </a>
            {'.'}
        </Paragraph>
        <Paragraph>
            {'My favorite project I worked on at Momkai is the '}
            <a href="https://masterdigitaldesign.com/why-apply" rel="noopener noreferrer" target="_blank">
                {'Master Digital Design project'}
            </a>
            {`. This project contains a lot of SVG animations and really pushes the limits of responsive design. I
            didn’t use any library or framework for this project, everything is just pure vanilla JavaScript.`}
        </Paragraph>
        <Paragraph>
            {'The last project I worked on before I left Momkai is their '}
            <a href="https://momkai.com/" rel="noopener noreferrer" target="_blank">
                {'portfolio website'}
            </a>
            {`. I did a lot of work on this project with React and GSAP. Since the website went live it has won multiple
            acclaimed design awards.`}
        </Paragraph>
        <Paragraph>
            {`Besides the projects described above I also did some work for various other client like the KNVB, Het
            Scheepvaartmuseum, IKEA and Bugaboo.`}
        </Paragraph>
        <Subtitle date="March 2012 - January 2016">
            {'(internship) front-end developer at '}
            <a href="https://atabix.com/" rel="noopener noreferrer" target="_blank">
                {'Atabix Solutions'}
            </a>
        </Subtitle>
        <Paragraph>
            {`I started this job as an intern as well. After my internship ended, both parties were so excited about the
            collaboration so far that Atabix offered me a job. I had a lot of fun working there for four years and
            worked on numerous projects for clients like Oger, AFC and Cosmic Cowboys.`}
        </Paragraph>
        <Subtitle date="2008 - 2010">{'technical support at the University of Applied Sciences Amsterdam'}</Subtitle>
        <Paragraph>
            {`My job here was to help students and teachers with any technical difficulties they faced. This could vary
            from setting up new computers to helping out with Photoshop or Final Cut Pro.`}
        </Paragraph>
    </>
);

export default WorkingExperience;
