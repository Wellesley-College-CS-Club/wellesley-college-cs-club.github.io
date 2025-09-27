import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface Member {
  id: number;
  name: string;
  color: string;
  imageUrl: string;
  intro: string;
}

const exampleMembers: Member[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    color: '#FF6B6B',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    intro: 'Passionate about AI and machine learning. Always exploring new algorithms and their applications in real-world problems.'
  },
  {
    id: 2,
    name: 'Bob Smith',
    color: '#4ECDC4',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    intro: 'Full-stack developer with a love for clean code and innovative web solutions. Enjoys mentoring new programmers.'
  },
  {
    id: 3,
    name: 'Carol Davis',
    color: '#45B7D1',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    intro: 'Cybersecurity specialist dedicated to protecting digital infrastructure. Advocates for ethical hacking and privacy rights.'
  },
  {
    id: 4,
    name: 'David Wilson',
    color: '#FFA07A',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    intro: 'Data scientist who transforms complex datasets into actionable insights. Passionate about visualization and storytelling with data.'
  },
  {
    id: 5,
    name: 'Eva Martinez',
    color: '#98D8C8',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    intro: 'Mobile app developer creating user-friendly applications. Believes in the power of technology to improve everyday life.'
  }
];

const SlideshowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
`;

const SlideContainer = styled(motion.div)<{ $bgColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MemberImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const MemberName = styled(motion.h2)`
  color: white;
  font-size: 2.5rem;
  margin: 2rem 0 1rem 0;
  text-align: center;
  font-weight: 300;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 1rem 0;
  }
`;

const NextButton = styled(motion.button)`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 2rem;
    right: 2rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const FinalViewContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const MemberCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

const FinalMemberImage = styled(motion.img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const FinalMemberName = styled(motion.h3)`
  color: white;
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem 0;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MemberIntro = styled(motion.p)`
  color: white;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.5;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1001;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

interface MemberSlideshowProps {
  members?: Member[];
  onClose?: () => void;
}

const MemberSlideshow: React.FC<MemberSlideshowProps> = ({
  members = exampleMembers,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinalView, setShowFinalView] = useState(false);

  const handleNext = () => {
    if (currentIndex < members.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowFinalView(true);
    }
  };

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -1000,
      opacity: 0
    }
  };

  const finalViewVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const memberCardVariants = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const introVariants = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 10,
        delay: 0.3
      }
    }
  };

  return (
    <SlideshowContainer>
      <AnimatePresence mode="wait">
        {!showFinalView ? (
          <SlideContainer
            key={currentIndex}
            $bgColor={members[currentIndex].color}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <MemberImage
              src={members[currentIndex].imageUrl}
              alt={members[currentIndex].name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            />
            <MemberName
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {members[currentIndex].name}
            </MemberName>
            <NextButton
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {currentIndex < members.length - 1 ? 'Next' : 'Meet Everyone'}
            </NextButton>
          </SlideContainer>
        ) : (
          <FinalViewContainer
            key="final"
            variants={finalViewVariants}
            initial="hidden"
            animate="visible"
          >
            {members.map((member, index) => (
              <MemberCard
                key={member.id}
                variants={memberCardVariants}
                custom={index}
              >
                <FinalMemberImage
                  src={member.imageUrl}
                  alt={member.name}
                />
                <FinalMemberName>
                  {member.name}
                </FinalMemberName>
                <MemberIntro
                  variants={introVariants}
                  custom={index}
                >
                  {member.intro}
                </MemberIntro>
              </MemberCard>
            ))}
          </FinalViewContainer>
        )}
      </AnimatePresence>

      {onClose && (
        <CloseButton
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ×
        </CloseButton>
      )}
    </SlideshowContainer>
  );
};

export default MemberSlideshow;