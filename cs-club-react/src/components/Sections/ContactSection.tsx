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
  max-width: 900px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactInfo = styled.div`
  flex: 1;

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 20px;
  }

  strong {
    color: #e64b77;
  }
`;

const ContactForm = styled.div`
  flex: 1;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e64b77;
  }

  &::placeholder {
    color: #999;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e64b77;
  }

  &::placeholder {
    color: #999;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const SubmitButton = styled.button`
  background-color: #e64b77;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d63a65;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MapContainer = styled.div`
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 450px;
    border: none;
  }
`;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [placeholder, setPlaceholder] = useState<{[key: string]: string}>({
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string, currentPlaceholder: string) => {
    setPlaceholder(prev => ({
      ...prev,
      [fieldName]: ''
    }));
  };

  const handleBlur = (fieldName: string, originalPlaceholder: string) => {
    setPlaceholder(prev => ({
      ...prev,
      [fieldName]: originalPlaceholder
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple mailto implementation (matches original functionality)
    const subject = encodeURIComponent(formData.subject || 'Contact from CS Club Website');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:csclub@wellesley.edu?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  return (
    <Section id="contact">
      <ContentBlock>
        <SectionTitleHolder className="section-title-holder">
          <SectionNum>
            <span>05</span>
          </SectionNum>
          <EntryTitle>CONTACT</EntryTitle>
        </SectionTitleHolder>

        <SectionContentHolder>
          <ContactContent>
            <ContactInfo>
              <p>
                Enrich Wellesley community's Computer Science experience beyond the CS curriculum.
              </p>
              <p>
                <strong>For more information,</strong> please follow Wellesley CS Club on Facebook.
              </p>
            </ContactInfo>

            <ContactForm>
              <form onSubmit={handleSubmit}>
                <FormField>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder={placeholder.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name', 'Name')}
                    onBlur={() => handleBlur('name', 'Name')}
                  />
                </FormField>

                <FormField>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder={placeholder.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email', 'Email')}
                    onBlur={() => handleBlur('email', 'Email')}
                  />
                </FormField>

                <FormField>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    placeholder={placeholder.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject', 'Subject')}
                    onBlur={() => handleBlur('subject', 'Subject')}
                  />
                </FormField>

                <FormField>
                  <TextArea
                    name="message"
                    value={formData.message}
                    placeholder={placeholder.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message', 'Message')}
                    onBlur={() => handleBlur('message', 'Message')}
                  />
                </FormField>

                <SubmitButton type="submit">
                  SEND
                </SubmitButton>
              </form>
            </ContactForm>
          </ContactContent>

          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11805.17946097437!2d-71.3059277!3d42.2935733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a36c95e0f9f4735!2sWellesley+College!5e0!3m2!1sen!2sus!4v1556858404377!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wellesley College Location"
            />
          </MapContainer>
        </SectionContentHolder>
      </ContentBlock>
    </Section>
  );
};

export default ContactSection;