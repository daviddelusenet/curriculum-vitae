import React, { FunctionComponent } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';

const Introduction: FunctionComponent = () => (
    <>
        <Title>{'Introduction'}</Title>
        <Paragraph>
            {`Ever since a young age I was always interested in technology. I was spending a lot of time behind my
            computer, just browsing the web, playing video games and downloading music. However, I didn't start coding
            until about 2010, when I started with my study Communication and Multimedia Design at the University of
            Applied Sciences (HvA).`}
        </Paragraph>
        <Paragraph>
            {`In my second year it was required to do an intership and I decided to do this internship at a company
            called Atabix Solutions. At Atabix is where I learned most of my basic development skills. Back in 2012,
            Atabix was still an up and coming agency. This gave me the opportunity to have a lot of responsibility
            within the company and to kickstart my career as a developer.`}
        </Paragraph>
        <Paragraph>
            {`After working at Atabix for almost four years, it was time to wrap up my education by means of a
            graduation internship. I managed to get an internship at a design studio called Momkai, where I got offered
            a full-time job upon completion.`}
        </Paragraph>
        <Paragraph>
            {`At Momkai I started taking serious steps towards becoming an experienced developer. I (finally) stopped
            working with tools like jQuery and started working on projects with React and Backbone.js. After two fun
            years, where I grew both personally and professionally, it was time for a change. I started applying
            for front-end developer positions at various creative agencies and ended up at a Random Studio.`}
        </Paragraph>
        <Paragraph>
            {`I worked at Random for about one and half years. While it was a really fun place to work, I noticed that I
            sometimes was missing a challenge in my day-to-day operations. Since all my jobs so far had been in the creative
            industry I wanted to try something else. This made me decide to persue a job in the consultancy sector instead
            and I joined an awesome company called Cygni.`}
        </Paragraph>
        <Paragraph>
            {`At Cygni I was working as a consultant front-end developer and I did an assignment at a company called Sportlink,
            which went really well. However, I was missing the creativity and comradery most creative digital agencies had to offer.
            Because of this I left Cygni and went back to the creative sector: I joined Code d'Azur as a senior front-end developer.`}
        </Paragraph>
    </>
);

export default Introduction;
