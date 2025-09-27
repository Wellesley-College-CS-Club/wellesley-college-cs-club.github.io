import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 80px 0;
  background-color: #f8f9fa;
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
  background-color: #f8f9fa;
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

const ContentTitleHolder = styled.div`
  margin-bottom: 30px;
`;

const ContentTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #23214c;
  margin: 0;
`;

const AboutText = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  .one-half {
    flex: 1;
    line-height: 1.8;
  }

  strong {
    color: #32db89;
    font-weight: 700;
  }

  em {
    color: #727190;
  }
`;

const TeamSliderWrapper = styled.div`
  position: relative;
  margin-top: 40px;
`;

const TeamSlider = styled.div`
  overflow: hidden;
`;

const TeamSlides = styled.div<{ $currentSlide: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${props => props.$currentSlide * 100}%);
`;

const TeamSlide = styled.div`
  min-width: 100%;
  display: flex;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const MemberContentHolder = styled.div`
  flex: 2;
  padding-right: 30px;
`;

const MemberName = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #23214c;
  margin: 0 0 10px 0;
`;

const MemberPosition = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #e64b77;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 20px 0;
`;

const MemberContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #555;

  p {
    margin: 0;
  }
`;

const MemberImageHolder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  border: 4px solid #e64b77;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const SliderButton = styled.button<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#e74c78' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e74c78;
    transform: scale(1.2);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #e64b77;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: #d63a65;
  }
`;

const NextButton = styled(NavButton)`
  right: 20px;
`;

const BackButton = styled(NavButton)`
  left: 20px;
`;

interface TeamMember {
  name: string;
  position: string;
  class: string;
  major: string;
  minor?: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Claire Cao',
    position: 'CO-PRESIDENT',
    class: '2026',
    major: 'Computer Science and Mathematics',
    description: "Hey everyone!~~ I'm Claire, and I'm a junior studying CS & Math 👩🏻‍💻🧮. I'm super interested in creating innovative software and exploring anything AI/ML-related! On campus, I'm involved in CS Club 🤗, WES, and WADO. Outside of academics, I love experimenting with new baking recipes 🍪🍰, discovering unique cafes and restaurants 🍵🍱, and exploring late-night Boston!",
    image: '/assets/team/2425/claire_cao.JPG'
  },
  {
    name: 'Annie Chen',
    position: 'CO-PRESIDENT',
    class: '2026',
    major: 'Computer Science and Mathematics',
    description: "Hi everyone! I'm Annie :) I like to crochet, rock climb, read (hopefully more this year), and find yummy food places around Boston. My academic interests lie in CV and ML, as well as the ethics of technology. Excited for all of the events/opportunities we have planned for this year!",
    image: '/assets/team/2324/annie_chen.jpg'
  },
  {
    name: 'Becky Chen',
    position: 'CO-WORKSHOP CHAIR',
    class: '2025',
    major: 'Computer Science, Psychology',
    description: 'I like playing escape room/mystery games like Rusty Lake!',
    image: '/assets/team/2324/becky_chen.jpg'
  },
  {
    name: 'Diya Khanna',
    position: 'CO-WORKSHOP CHAIR',
    class: '2025',
    major: 'Computer Science',
    minor: 'Psychology',
    description: "Hi! My name is Diya. I am so excited to be working as Co-Workshop Chair this year with Becky. I'm a senior majoring in CS and minoring in Psychology. Home for me is Delhi, India. If I am not fixing bugs in my code, you can find me exploring new food spots in the city, watching telenovelas or playing badminton :)",
    image: '/assets/team/2425/Diya_Khanna.jpg'
  },
  {
    name: 'Elizabeth Yan',
    position: 'CO-WEB WIZARD (WWW)',
    class: '2026',
    major: 'Computer Science, Mathematics',
    minor: 'Philosophy (unofficially)',
    description: "Hello, I'm Elizabeth! In my free time, I enjoy dancing, writing, buying clothes, and overdosing on sugar. My guilty pleasures (or not so much guilty as they are embarrassing) are doing logic-based problems and keeping my Github contribution graph green (it is not going too well sadly 😿). I'm super excited to get to know everyone in CS Club this year!",
    image: '/assets/team/2425/Elizabeth_Yan.JPG'
  },
  {
    name: 'Sophie Lin',
    position: 'CO-WEB WIZARD (WWW)',
    class: '2027',
    major: 'Computer Science',
    description: "hello! i'm sophie and i'm super excited to be co-www this year! I'm interested in the use of machine learning in a musical context and the ethical implications surrounding it. In my free time, I enjoy playing percussion, bouldering, and exploring boston for good matcha!",
    image: '/assets/team/2425/Sophie_Lin.jpg'
  }
];

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Section id="about">
      <ContentBlock>
        <SectionTitleHolder className="section-title-holder">
          <SectionNum>
            <span>03</span>
          </SectionNum>
          <EntryTitle>ABOUT</EntryTitle>
        </SectionTitleHolder>

        <SectionContentHolder>
          <ContentTitleHolder>
            <ContentTitle>About</ContentTitle>
          </ContentTitleHolder>

          <AboutText>
            <div className="one-half">
              Wellesley CS Club is established to provide a forum for events within the CS major/minor community and to provide opportunities for enrichment through tech-related events
            </div>
            <div className="one-half">
              <strong>WORKSHOPS ·</strong> <em>Explore industry related workshops/job opportunities</em><br />
              <strong>SOCIAL EVENTS ·</strong> <em>Connect with other CS/MAS students and professors to build a stronger community among ourselves</em><br />
              <strong>WHACK ·</strong> <em>Build projects, have fun, be creative, break, learn, and ask questions in a space that celebrates diversity</em>
            </div>
          </AboutText>

          <TeamSliderWrapper>
            <TeamSlider>
              <TeamSlides $currentSlide={currentSlide}>
                {teamMembers.map((member, index) => (
                  <TeamSlide key={index}>
                    <MemberContentHolder>
                      <MemberName>{member.name}</MemberName>
                      <MemberPosition>{member.position}</MemberPosition>
                      <MemberContent>
                        <p>
                          Class: {member.class}<br />
                          Major: {member.major}
                          {member.minor && <><br />Minor: {member.minor}</>}
                          <br /><br />
                          {member.description}
                        </p>
                      </MemberContent>
                    </MemberContentHolder>
                    <MemberImageHolder>
                      <MemberImage src={member.image} alt={`Picture of ${member.name}`} />
                    </MemberImageHolder>
                  </TeamSlide>
                ))}
              </TeamSlides>
            </TeamSlider>

            <BackButton onClick={prevSlide}>
              ←
            </BackButton>

            <NextButton onClick={nextSlide}>
              →
            </NextButton>

            <SliderControls>
              {teamMembers.map((_, index) => (
                <SliderButton
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </SliderControls>
          </TeamSliderWrapper>
        </SectionContentHolder>
      </ContentBlock>
    </Section>
  );
};

export default AboutSection;