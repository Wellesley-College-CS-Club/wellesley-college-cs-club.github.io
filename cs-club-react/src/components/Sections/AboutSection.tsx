import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  padding: 0 0 120px 160px; 
  z-index: 2;
  position: relative;

  min-height: 420px;  

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  bottom: -10px;
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
  hometown: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Claire Cao',
    position: 'CO-PRESIDENT',
    class: '2026',
    major: 'Computer Science and Mathematics',
    hometown: "",
    description: "Hey everyone!~~ I'm Claire, and I'm a junior studying CS & Math 👩🏻‍💻🧮. I'm super interested in creating innovative software and exploring anything AI/ML-related! On campus, I'm involved in CS Club 🤗, WES, and WADO. Outside of academics, I love experimenting with new baking recipes 🍪🍰, discovering unique cafes and restaurants 🍵🍱, and exploring late-night Boston!",

    image: '/assets/team/2425/claire_cao.JPG'
  },
  {
    name: 'Annie Chen',
    position: 'CO-PRESIDENT',
    class: '2026',
    major: 'Computer Science and Mathematics',
    hometown: "",
    description: "Outside of school, I love photography, climbing, and listening to true crime podcasts! On the CS side, I enjoy working with data and exploring the applications and ethics of machine learning, and I’m currently doing research in the MOGU Lab.",

    image: '/assets/team/2526/AnnieChen.jpg'
  },
  {
    name: 'Cayla Gililland',
    position: 'TREASURER',
    class: '2026',
    major: 'CS + Philosophy minor',
    hometown: "Cheyenne, Wyoming",
    description: "I'm a senior majoring in CS.",

    image: '/assets/team/2526/CaylaGililland.jpg'
  },
  {
    name: 'Aadya Nishtha',
    position: 'TREASURER',
    class: '2028',
    major: 'Computer Science and Economics',
    hometown: "Singapore",
    description: "I'm a sophomore interested in ML, and I'm excited to be a returning treasurer for CS club this year! I'm excited for our upcoming events such as big-little, as it was one of my favourite memories with CS club, along with our Professor Tea's. In my free time, I love testing new AI chatbots, drawing, and occasionally reading (rarely). ",

    image: '/assets/team/2526/AadyaNishtha.PNG'
  },
  {
    name: 'Ashley Sheng',
    position: 'CO-SOCIAL CHAIR',
    class: '2026',
    major: 'Computer Science and Math',
    hometown: "Sugar Land, Texas",
    description: "I'm a senior interested in formal methods, and I'm excited to organize more events where CS students can connect. In my free time, I like watching sitcoms and doing yoga.",
    image: '/assets/team/2526/AshleySheng.jpeg'
  },
  {
    name: 'Hana Takatori',
    position: 'CO-SOCIAL CHAIR',
    class: '2028',
    major: 'Computer Science and Economics',
    hometown: "Tokyo, Japan",
    description: "I'm a sophomore interested in the intersection of health care and technology, and I'm so excited to be serving as CS Club's co-social chair this year! In my free time, I love drinking boba and do puzzle games. I'm doing UROP at Senseable City Lab this semester.  ",

    image: '/assets/team/2526/HanaTakatori.jpeg'
  },
  {
    name: 'Karen Xiao',
    position: 'CO-NETWORKING',
    class: '2026',
    major: 'Computer Science & Math',
    hometown: "Philadelphia, PA",
    description: "I'm a senior interested in CS research at the intersection of HCI, learning sciences, and data science and I'm so excited to be co-networking chair again this year! In my free time I love going into Boston and hanging out with friends :)",

    image: '/assets/team/2526/KarenXiao.JPG'
  },
  {
    name: 'Grace Jiang',
    position: 'CO-NETWORKING',
    class: '2026',
    major: 'Computer Science and Economics',
    hometown: "San Jose, CA",
    description: "Hi! I'm Grace, a senior majoring in CS and Econ. I'm originally from California, but I'm moving to NYC next year for work! :) In my free time, I love sewing and trying new restaurants.",

    image: '/assets/team/2526/GraceJiang.jpg'
  },
  {
    name: 'Nessa Tong',
    position: 'CO-PUBLICITY CHAIR',
    class: '2027',
    major: 'Computer Science and Physics',
    hometown: "Fremont, CA",
    description: "I'm a junior interested in algorithms and machine learning, and I'm excited to spend another year as CS Club's pub chair! I look forward to meeting everyone at our events (and getting free boba... stay tuned...). Outside of school, I love trying new restaurants, going to concerts, and taking long walks.",

    image: '/assets/team/2526/NessaTong.jpg'
  },
  {
    name: 'Aileen Du',
    position: 'CO-PUBLICITY CHAIR',
    class: '2027',
    major: 'Computer Science and Music/Math',
    hometown: "Auckland, New Zealand",
    description: "I'm a junior interested in software engineering, and I'm excited to serve as the co-pub chair this year alongside Nessa! Outside of academics, I am a part of the golf team and the Blue Notes a cappella group. ",

    image: '/assets/team/2526/AileenDu.jpg'
  },
  {
    name: 'Sophie Lin',
    position: 'WEB WIZARD',
    class: '2027',
    major: 'Computer Science & Math minor',
    hometown: "",
    description: "hello everyone! I'm Sophie :) My academic interests mainly lie in the field of machine learning, particularly (ethical) music AI, but I'm also interested in full-stack web dev and agentic AI! In my free time, I love to learning new pieces on the marimba, make my own matcha, or explore boston for the best boba! ",

    image: '/assets/team/2526/SophieLin.jpg'
  },
  {
    name: 'Bessie Li',
    position: 'CO-WORKSHOP CHAIR',
    class: '2027',
    major: 'Computer Science',
    hometown: "Boston, MA",
    description: "I'm a junior interested in bioinformatics, and I'm so excited to be serving as CS Club's Co-Workshop Chair this year! I'm super excited for all of our upcoming events. In my free time, I love eating food and listening to music.",

    image: '/assets/team/2526/BessieLi.jpg'
  },
  {
    name: 'Felix Holmes',
    position: 'CO-WORKSHOP CHAIR',
    class: '2027',
    major: 'Computer Science and Philosophy',
    hometown: "Bartlesville, OK",
    description: "i'm a junior in cs + philosophy, and i'm excited to be serving as co-workshop chair this year! in my free time, i like to read!",

    image: '/assets/team/2526/temp.png'
  },
  {
    name: 'Grace Wang',
    position: 'SECRETARY',
    class: '2028',
    major: 'Computer Science and Economics',
    hometown: "San Diego, CA",
    description: "I'm a sophomore interested in AI in fintech and cybersecurity. I'm very excited to be joining CS club as secretary this year! In my free time love to nordic ski. I also love to watch food videos, try new foods, and rating them on my Beli (follow @gswagon)! ",

    image: '/assets/team/2526/GraceWang.jpg'
  },
  {
    name: 'Rue Huang',
    position: 'CO-FIRST YEAR REP',
    class: '2029',
    major: 'Undecided',
    hometown: "Shenzhen, China",
    description: "I’m a freshman interested in product management and will be serving as one of the Co–First-Year Reps this year! I’m super excited for all the upcoming events—especially the first-year bonding activities and alumni panels. In my free time, I love being outdoors, doing all kinds of sports, and playing guitar!",

    image: '/assets/team/2526/RueHuang.jpg'
  },
  {
    name: 'Kalei Kieu',
    position: 'CO-FIRST YEAR REP',
    class: '2029',
    major: 'Prospectivve Computer Science',
    hometown: "Scarborough, ME",
    description: "I'm a freshman interested in CS and specifically the societal impacts that technology (such as AI) can have on communities! I'm really excited to be involved with CS Club this year and I look forward to meeting/getting along with my fellow first-years through the events we have planned this year :)! My other interests include reading, playing video games, and painting!",

    image: '/assets/team/2526/KaleiKieu.png'
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

          <SectionNum>
            <span>03</span>
          </SectionNum>
          <EntryTitle>Meet the Team!</EntryTitle>

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