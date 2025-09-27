import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Section = styled.div`
  background-color: #f8f9fa;
`;

const ContentBlock = styled.div`
  width: 1170px;
  max-width: 100%;
  margin: 0 auto;
  padding: 80px 20px 40px 20px;
  text-align: center;
`;

const FullWidthCarouselSection = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: #f8f9fa;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
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
  width: 100%;
  padding: 40px 0 60px 0;
`;

const TeamSlider = styled.div`
  overflow: hidden;
  width: 100%;
`;

const TeamSlides = styled.div<{ $currentSlide: number; $isTransitioning: boolean }>`
  display: flex;
  transition: ${props => props.$isTransitioning ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'};
  transform: translateX(-${props => props.$currentSlide * 100}%);
`;

const TeamSlide = styled.div`
  min-width: 100%;
  display: flex;
  background: transparent;
  padding: 40px;
  gap: 60px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 60%;
    background: #1e3a8a;
    border-radius: 24px 24px 0 0;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    padding: 40px 60px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    gap: 30px;
  }
`;

const MemberContentHolder = styled.div`
  flex: 2;
  text-align: left;
  padding: 0 0 80px 160px;
  z-index: 2;
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 50px 50px 80px;
    min-height: 250px;
  }
`;

const MemberName = styled.h4`
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 0 0 15px 0;
`;

const MemberPosition = styled(motion.p)`
  font-size: 60px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 20px 0;
  position: absolute;
  bottom: -40px;
  left: 25%;
  transform: translateX(-50%);
  width: 50%;
  text-align: center;
  z-index: 0;
  white-space: nowrap;
`;

const MemberContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    margin: 0;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const MemberImageHolder = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 130px 120px 80px 0;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    padding: 90px 50px 50px 50px;
  }
`;

const MemberImage = styled.img`
  width: 350px;
  height: 420px;
  object-fit: cover;
  border-radius: 24px;
  border: 5px solid #e64b77;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 280px;
    height: 336px;
  }
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
  background: rgba(230, 75, 119, 0.9);
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #d63a65;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 16px;
  }
`;

const NextButton = styled(NavButton)`
  right: 5%;

  @media (max-width: 768px) {
    right: 20px;
  }
`;

const BackButton = styled(NavButton)`
  left: 5%;

  @media (max-width: 768px) {
    left: 20px;
  }
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
    position: 'WEB WIZARD',
    class: '2026',
    major: 'Computer Science, Mathematics',
    minor: 'Philosophy (unofficially)',
    description: "Hello, I'm Elizabeth! In my free time, I enjoy dancing, writing, buying clothes, and overdosing on sugar. My guilty pleasures (or not so much guilty as they are embarrassing) are doing logic-based problems and keeping my Github contribution graph green (it is not going too well sadly 😿). I'm super excited to get to know everyone in CS Club this year!",
    image: '/assets/team/2425/Elizabeth_Yan.JPG'
  },
  {
    name: 'Sophie Lin',
    position: 'WEB WIZARD',
    class: '2027',
    major: 'Computer Science',
    description: "hello! i'm sophie and i'm super excited to be co-www this year! I'm interested in the use of machine learning in a musical context and the ethical implications surrounding it. In my free time, I enjoy playing percussion, bouldering, and exploring boston for good matcha!",
    image: '/assets/team/2425/Sophie_Lin.jpg'
  }
];

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 (first real slide)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  // Create slides with clones for infinite effect
  // Structure: [lastSlide_clone, slide1, slide2, ..., slideN, firstSlide_clone]
  const infiniteSlides = [
    teamMembers[teamMembers.length - 1], // Clone of last slide at beginning
    ...teamMembers, // All real slides
    teamMembers[0] // Clone of first slide at end
  ];

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentSlide(prev => prev + 1);
    setAnimationKey(prev => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentSlide(prev => prev - 1);
    setAnimationKey(prev => prev + 1);
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning) return;
    setCurrentSlide(index + 1); // +1 because of clone at beginning
    setAnimationKey(prev => prev + 1);
  };

  // Handle infinite loop by jumping to real slides when reaching clones
  const handleTransitionEnd = () => {
    if (currentSlide === 0) {
      // At clone of last slide (beginning), jump to real last slide
      setIsTransitioning(false);
      setCurrentSlide(teamMembers.length);
    } else if (currentSlide === infiniteSlides.length - 1) {
      // At clone of first slide (end), jump to real first slide
      setIsTransitioning(false);
      setCurrentSlide(1);
    }
  };

  // Re-enable transitions after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

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
        </SectionContentHolder>
      </ContentBlock>

      <FullWidthCarouselSection>
        <TeamSliderWrapper>
            <TeamSlider>
              <TeamSlides
                $currentSlide={currentSlide}
                $isTransitioning={isTransitioning}
                onTransitionEnd={handleTransitionEnd}
              >
                {infiniteSlides.map((member, index) => (
                  <TeamSlide key={index}>
                    <MemberContentHolder>
                      <MemberName>{member.name}</MemberName>
                      {index === currentSlide && (
                        <MemberPosition
                          key={animationKey}
                          initial={{ y: -150, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                            delay: 1.0
                          }}
                        >
                          {member.position}
                        </MemberPosition>
                      )}
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
                  active={index === currentSlide - 1} // -1 because currentSlide accounts for clone at beginning
                  onClick={() => goToSlide(index)}
                />
              ))}
            </SliderControls>
          </TeamSliderWrapper>
      </FullWidthCarouselSection>
    </Section>
  );
};

export default AboutSection;