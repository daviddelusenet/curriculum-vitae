import Paragraph from '../Paragraph/Paragraph';
import React from 'react';
import Title from '../Title/Title';

const Introduction = () => (
    <>
        <Title>
            {'Introduction'}
        </Title>
        <Paragraph>
            {`Since a young age I was always interested in technology.
            However, I didn't start coding until about 2010, when I started with my education
            Communication and Multimedia Design at the University of Applied Sciences Amsterdam.`}
        </Paragraph>
        <Paragraph>
            {`During my first job, at a company called Atabix Solutions, I learned a lot of my basic development skills.
            At that time, Atabix was still an up and coming agency. They gave me the opportunity to have a lot of
            responsibility within the company and to kickstart my personal career.`}
        </Paragraph>
        <Paragraph>
            {`After working at Atabix for almost four years, I needed to do a graduation internship to wrap up my
            education. Since it was time for a change I decided to do this internship at Momkai. When I finished my
            internship Momkai offered me a full time job which I gratefully accepted.`}
        </Paragraph>
        <Paragraph>
            {`At Momkai I started taking serious steps towards becoming an experienced developer. I (finally) stopped
            working with tools like jQuery and started doing projects with React and Backbone.js. After two fun years
            where I learned a lot I decided I was ready for something new. I started applying for front-end developer
            positions at various creative agencies and ended up at Random Studio.`}
        </Paragraph>
        <Paragraph>
            {`I worked at Random for about one and half years. While it was really fun to work there I noticed that I
            was missing challenge in my daily work. I came to the conclusion that while working in the creative
            industry it would be hard to find consistent technological challenge. I decided to persue a job in the
            consultant sector and joined an awesome company called Cygni.`}
        </Paragraph>
    </>
);

export default Introduction;
