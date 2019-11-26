import React from 'react';

// Child components
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';

const Introduction = () => (
    <>
        <Title>Introduction</Title>
        <Paragraph>
      Since a young age I was always interested in technology.
      However, I didn&apos;t start coding until about 2010, when I started with my education
      Communication and Multimedia Design at the University of Applied Sciences Amsterdam.
        </Paragraph>
        <Paragraph>
      During my first job, at a company called Atabix Solutions, I learned a lot of my basic development skills.
      At that time, Atabix was still an up and coming agency. They gave me the opportunity to have a lot of
      responsibility within the company and to kickstart my personal career.
        </Paragraph>
        <Paragraph>
      After working at Atabix for almost four years, I needed to do a graduation internship to wrap up my education.
      Since it was time for a change I decided to do this internship at Momkai. When I finished my internship Momkai
      offered me a full time job which I gratefully accepted.
        </Paragraph>
        <Paragraph>
      At Momkai I started taking serious steps towards becoming an experienced developer. I (finally) stopped working
      with tools like jQuery and started doing projects with React. After two fun years where I learned a lot I decided
      I was ready for something new. So I started applying for front-end developer positions at various creative
      agencies and ended up at Random Studio.
        </Paragraph>
        <Paragraph>
      Until this very day I&apos;m still happily doing exciting projects at Random.
            {' '}
            <a
                href="https://random.studio/"
                rel="noopener noreferrer"
                target="_blank"
                title="Just do it"
            >
        Go check out our work!
            </a>
        </Paragraph>
    </>
);

export default Introduction;
