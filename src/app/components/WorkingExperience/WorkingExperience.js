import Paragraph from '../Paragraph/Paragraph';
import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';

const WorkingExperience = () => (
    <>
        <Title>
            {'Working experience'}
        </Title>
        <Subtitle date="January 2018 - present">
            {'front-end developer at Random Studio'}
        </Subtitle>
        <Paragraph>
            {`The latest stop on my front-end developer journey: Random Studio. Random is a independent strategy and
            design studio which blurs the boundaries between art, design and technology.`}
        </Paragraph>
        <Paragraph>
            {`At Random we're primarily doing projects for high fashion brands but we're in the process of
            exploring other fields where we could be of value. Random has a real culture of participation which makes
            it a lot of fun to work there.`}
        </Paragraph>
        <Subtitle date="July 2016 - January 2018">
            {'front-end developer at Momkai'}
        </Subtitle>
        <Paragraph>
            {`After my internship ended, I started working full time at Momkai. Here I really made the next step in
            expanding my development skills. For example, I started working with React and became proficient in writing
            Webpack configurations.`}
        </Paragraph>
        <Paragraph>
            {`Momkai gave me the opportunity to work on a lot of interesting projects like the KNVB, the Master Digital
            Design, IKEA and VanMoof.`}
        </Paragraph>
        <Subtitle date="February 2016 - June 2016">
            {'intern front-end developer at Momkai'}
        </Subtitle>
        <Paragraph>
            {`I started working at Momkai as an intern during my graduation internship. During my internship,
            I mainly focused on improving my JavaScript skills and writing cleaner code.`}
        </Paragraph>
        <Subtitle date="March 2012 - January 2016">
            {'(intern) front-end developer at Atabix Solutions'}
        </Subtitle>
        <Paragraph>
            {`I started this job as an intern as well. After my internship ended, both parties were so excited about the
            collaboration so far that Atabix offered me a job. I had a lot of fun working there for four years and
            worked on numerous projects.`}
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
