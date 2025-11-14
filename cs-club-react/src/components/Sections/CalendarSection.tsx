import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 80px 0;
  background-color: #ffffff;
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
  padding: 20px 0;
`;

const EntryTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #23214c;
  margin: 0;
  text-align: center;
`;

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CalendarIframe = styled.iframe`
  width: 100%;
  height: 600px;
  border: 0;

  @media (max-width: 768px) {
    height: 450px;
  }
`;

interface CalendarSectionProps {
  calendarSrc?: string;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ calendarSrc }) => {
  // Default calendar src - replace with your Google Calendar embed URL
  const defaultCalendarSrc = "https://calendar.google.com/calendar/embed?src=c_c229b4c4675adeb72fabaa7b643a500748ae31dc521889f58e797def5a714092%40group.calendar.google.com&ctz=America%2FNew_York";

  return (
    <Section id="calendar">
      <ContentBlock>
        <SectionTitleHolder>
          <EntryTitle>CALENDAR</EntryTitle>
        </SectionTitleHolder>

        <CalendarContainer>
          <CalendarIframe
            src={calendarSrc || defaultCalendarSrc}
            title="CS Club Calendar"
          />
        </CalendarContainer>
      </ContentBlock>
    </Section>
  );
};

export default CalendarSection;
