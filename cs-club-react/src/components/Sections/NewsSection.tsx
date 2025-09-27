import React from 'react';
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
  max-width: 800px;
  margin: 0 auto;
`;

const BlogHolder = styled.div`
  display: block;
`;

const BlogItemHolder = styled.article`
  display: flex;
  margin-bottom: 40px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Num = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #e64b77;
  margin-right: 20px;
  min-width: 60px;
`;

const Info = styled.div`
  flex: 1;
`;

const Author = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const CatLinks = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
`;

const EventTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #23214c;
  margin: 0;
  line-height: 1.4;
`;

interface NewsItem {
  date: string;
  day: string;
  time: string;
  location?: string;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    date: '3/28',
    day: 'Tuesday',
    time: '4 PM',
    location: 'SCI H101',
    title: 'MAS Talk: Anti-Colonialism in Game Design'
  },
  {
    date: '3/27',
    day: 'Wednesday',
    time: '7-8 PM',
    location: 'SCI H305',
    title: 'Coding Club'
  },
  {
    date: '3/28',
    day: 'Thursday',
    time: '6:30-7:30 PM',
    location: 'SCI L043',
    title: 'SIDI Tableau and Excel Workshop'
  },
  {
    date: '3/29',
    day: 'Friday',
    time: '3 PM',
    title: 'Game Jam'
  }
];

interface NewsSectionProps {}

const NewsSection: React.FC<NewsSectionProps> = () => {
  return (
    <Section id="news">
      <ContentBlock>
        <SectionTitleHolder className="section-title-holder">
          <SectionNum>
            <span>01</span>
          </SectionNum>
          <EntryTitle>NEWS</EntryTitle>
        </SectionTitleHolder>

        <SectionContentHolder>
          <BlogHolder>
            {newsItems.map((item, index) => (
              <BlogItemHolder key={index}>
                <Num>{item.date}</Num>
                <Info>
                  <Author>{item.day}</Author>
                  <CatLinks>
                    {item.time}
                    {item.location && <><br />{item.location}</>}
                  </CatLinks>
                  <EventTitle>{item.title}</EventTitle>
                </Info>
              </BlogItemHolder>
            ))}
          </BlogHolder>
        </SectionContentHolder>
      </ContentBlock>
    </Section>
  );
};

export default NewsSection;