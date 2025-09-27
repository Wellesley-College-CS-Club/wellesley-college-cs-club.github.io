import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  position: relative;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBlock = styled.div`
  width: 1170px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
`;

const TopLogo = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const BigTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  color: #23214c;
  margin: 20px 0;
  line-height: 1.2;

  span {
    font-weight: 700;
    color: #e64b77;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <Section id="home">
      <ContentBlock>
        <TopLogo src="/assets/images/csclublogo.png" alt="Wellesley CS Club Logo" />
        <br />
        <BigTitle>
          Wellesley College <span>Computer Science Club</span>
        </BigTitle>
      </ContentBlock>
    </Section>
  );
};

export default HomeSection;