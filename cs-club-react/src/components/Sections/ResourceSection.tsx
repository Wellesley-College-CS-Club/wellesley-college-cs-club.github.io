import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 80px 0;
  background-color: #fff;
`;

const ContentBlock = styled.div`
  width: 1170px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionTitleHolder = styled.div`
  width: 100%;
  margin-bottom: 60px;
  background-color: #fff;
  padding: 20px 0;
`;

const SectionNum = styled.div`
  display: none;
`;

const EntryTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #23214c;
  margin: 0;
  text-align: center;
`;

const SectionContentHolder = styled.div`
  width: 100%;
`;

const SliderWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ServiceHolder = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #23214c;
  margin-bottom: 15px;
`;

const ServiceContent = styled.div`
  font-size: 14px;
  line-height: 1.6;

  p {
    margin: 5px 0;
  }

  a {
    color: #e64b77;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SliderButton = styled.button<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  background-color: ${props => props.active ? '#ffbb42' : '#ddd'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffbb42;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffbb42;
  color: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background: #e6a435;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NextButton = styled(NavButton)`
  right: -20px;
`;

const BackButton = styled(NavButton)`
  left: -20px;
`;

interface Resource {
  icon: string;
  title: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

const resourceSlides: Resource[][] = [
  [
    {
      icon: '/assets/demo-images/icon_01.png',
      title: 'CS Club Event Recordings',
      links: [
        {
          text: 'Tech Recruitment Season Advice Panel (Sept. 25, 2020)',
          url: 'https://drive.google.com/file/d/1A-mM1tQFHwMW_pBfxz6YxiBf2U8RNgg2/view?usp=sharing'
        }
      ]
    },
    {
      icon: '/assets/demo-images/icon_02.png',
      title: 'Facebook Groups',
      links: [
        { text: 'Wellesley CS', url: 'https://www.facebook.com/groups/1533918976902644/' },
        { text: 'Ladies Storm Hackathons', url: 'https://www.facebook.com/groups/LadiesStormHackathons/' },
        { text: 'Ladies Storm Hackathons (Jobs/Internships)', url: 'https://www.facebook.com/groups/LSHJobs/' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_03.png',
      title: 'Conferences',
      links: [
        { text: 'Grace Hopper (Usually in the Fall)', url: 'https://ghc.anitab.org/' },
        { text: 'Grace Hopper Scholarships', url: 'https://ghc.anitab.org/attend/scholarships/' },
        { text: 'WECode (End of February)', url: 'http://www.wecodeharvard.com/' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_04.png',
      title: 'Hackathons',
      links: [
        { text: 'WHACK', url: 'https://wellesleyhacks.org/' },
        { text: 'HackMIT', url: 'https://hackmit.org/' },
        { text: 'SisterHacks', url: 'http://sisterhacks.co/' }
      ]
    }
  ],
  [
    {
      icon: '/assets/demo-images/icon_03.png',
      title: 'Resume Resources',
      links: [
        { text: 'Wellesley Career Education', url: 'https://www.wellesley.edu/careereducation' },
        { text: 'Wellesley Recruiting Policies', url: 'https://www.wellesley.edu/careereducation/resources/campus-recruiting-program-policies-employers' },
        { text: 'Careercup Resume Guide', url: 'https://www.careercup.com/resume' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_04.png',
      title: 'Application',
      links: [
        { text: 'Software Engineer Internships', url: 'http://www.intern.supply/' },
        { text: 'UX + Design Internships', url: 'https://interns.design/' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_02.png',
      title: 'Technical Interviews',
      links: [
        { text: 'How to Prepare for Tech Interviews', url: 'https://www.reddit.com/r/cscareerquestions/comments/1jov24/heres_how_to_prepare_for_tech_interviews/' },
        { text: 'Big Collection of Interview Prep Links', url: 'https://www.reddit.com/r/cscareerquestions/comments/2lzc4h/big_collection_of_interview_preparation_links/' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_01.png',
      title: 'Research',
      links: [
        { text: 'Summer Research at Wellesley', url: 'https://www.wellesley.edu/sciencecenter/students/opportunities/summer2020' },
        { text: 'Summer Research Experiences for Undergrads (REU)', url: 'https://www.nsf.gov/crssprgm/reu/list_result.jsp?unitid=5049' },
        { text: 'MIT Undergraduate Research Opportunities (UROP)', url: 'https://urop.mit.edu/jobs-board' }
      ]
    }
  ],
  [
    {
      icon: '/assets/demo-images/icon_04.png',
      title: 'Recruiting Guide',
      links: [
        { text: 'First Year\'s Guide to Tech Internships', url: 'http://callacarter.com/csfrosh/' },
        { text: 'The Breakout List (startups)', url: 'https://breakoutlist.com/all' },
        { text: 'CS Internship Recruiting Guide', url: 'https://medium.com/@qrazhan/cs-internship-recruiting-guide-aebb68912808#.b3s5k570f' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_03.png',
      title: 'Fun Coding Websites',
      links: [
        { text: 'CodingBat (Java/Python)', url: 'http://codingbat.com/' },
        { text: 'CodeFights', url: 'https://codefights.com/signup/MM9wumPrWrWRmmki8/company-bots' },
        { text: 'VIM Adventures', url: 'http://vim-adventures.com/' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_01.png',
      title: 'How To',
      links: [
        { text: 'Learn Git in 15 Minutes', url: 'https://try.github.io/levels/1/challenges/1' },
        { text: 'Ruby on Rails Tutorial', url: 'https://www.railstutorial.org/book' }
      ]
    },
    {
      icon: '/assets/demo-images/icon_02.png',
      title: 'Mentorship',
      links: [
        { text: 'Mentor Contacts/Resources', url: 'https://docs.google.com/spreadsheets/d/16C7NPFSrGE_4mQdbKRP5-1ehFtUTd0Uy4-uL7eDGPFc/edit?usp=sharing' },
        { text: 'Systers', url: 'https://anitab.org/our-communities/systers/' },
        { text: 'CS Club Bigs/Littles! (Opening soon)', url: '#' }
      ]
    }
  ]
];

interface ResourceSectionProps {}

const ResourceSection: React.FC<ResourceSectionProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % resourceSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + resourceSlides.length) % resourceSlides.length);
  };

  return (
    <Section id="resource">
      <ContentBlock>
        <SectionTitleHolder className="section-title-holder">
          <SectionNum>
            <span>02</span>
          </SectionNum>
          <EntryTitle>RESOURCES</EntryTitle>
        </SectionTitleHolder>

        <SectionContentHolder>
          <SliderWrapper>
            <BackButton onClick={prevSlide}>
              ←
            </BackButton>

            {resourceSlides[currentSlide].map((resource, index) => (
              <ServiceHolder key={index}>
                <ServiceIcon src={resource.icon} alt="" />
                <ServiceTitle>{resource.title}</ServiceTitle>
                <ServiceContent>
                  {resource.links.map((link, linkIndex) => (
                    <p key={linkIndex}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                      </a>
                    </p>
                  ))}
                </ServiceContent>
              </ServiceHolder>
            ))}

            <NextButton onClick={nextSlide}>
              →
            </NextButton>
          </SliderWrapper>

          <SliderControls>
            {resourceSlides.map((_, index) => (
              <SliderButton
                key={index}
                active={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </SliderControls>
        </SectionContentHolder>
      </ContentBlock>
    </Section>
  );
};

export default ResourceSection;