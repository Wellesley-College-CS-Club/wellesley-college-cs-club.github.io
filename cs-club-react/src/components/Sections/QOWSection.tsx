import React from 'react';
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
  max-width: 800px;
  margin: 0 auto;
`;

const ProgressBar = styled.div`
  margin-bottom: 30px;
`;

const ProgressBarFieldHolder = styled.div<{ $width: string }>`
  width: ${props => props.$width};
  position: relative;
`;

const ProgressBarTitle = styled.div<{ $color: string }>`
  color: ${props => props.$color};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProgressBarField = styled.div<{ $backgroundColor: string }>`
  height: 4px;
  background-color: ${props => props.$backgroundColor};
  border-radius: 2px;
`;

const Question = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 30px;

  code {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
  }

  b {
    font-weight: 700;
  }
`;

const SolutionText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`;

const CodeBlock = styled.pre`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  color: #333;
  margin-top: 20px;
`;

interface QOWSectionProps {}

const QOWSection: React.FC<QOWSectionProps> = () => {
  return (
    <Section id="skills">
      <ContentBlock>
        <SectionTitleHolder className="section-title-holder">
          <SectionNum>
            <span>04</span>
          </SectionNum>
          <EntryTitle>QOW</EntryTitle>
        </SectionTitleHolder>

        <SectionContentHolder>
          <ProgressBar>
            <ProgressBarFieldHolder $width="75%">
              <ProgressBarTitle $color="#55B286">THIS WEEK'S PROBLEM</ProgressBarTitle>
              <ProgressBarField $backgroundColor="#32DB8A" />
            </ProgressBarFieldHolder>
          </ProgressBar>

          <Question>
            You have a long flowerbed in which some of the plots are planted, and some are not.
            However, flowers cannot be planted in <b>adjacent</b> plots.<br /><br />

            Given an integer array <code>flowerbed</code> containing <code>0</code>'s and <code>1</code>'s,
            where <code>0</code> means empty and <code>1</code> means not empty, and an integer <code>n</code>,
            return <code>true</code> if <code>n</code> new flowers can be planted in the <code>flowerbed</code> without
            violating the no-adjacent-flowers rule and <code>false</code> otherwise.
          </Question>

          <ProgressBar>
            <ProgressBarFieldHolder $width="75%">
              <ProgressBarTitle $color="#B24564">SAMPLE SOLUTION</ProgressBarTitle>
              <ProgressBarField $backgroundColor="#E74C78" />
            </ProgressBarFieldHolder>
          </ProgressBar>

          <SolutionText>
            <b>Check back next week!</b>
          </SolutionText>

          <CodeBlock>
{`// Sample solution will be posted here next week
function canPlaceFlowers(flowerbed, n) {
    // Implementation coming soon...
}`}
          </CodeBlock>
        </SectionContentHolder>
      </ContentBlock>
    </Section>
  );
};

export default QOWSection;