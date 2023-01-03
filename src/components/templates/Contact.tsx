import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const title = 'Contact';
const description = 'Schedule a free 30 minute consultation session';

const Contact: React.FC = () => (
  <BaseContainer id="contact" bg="bg-tertiary-light">
    <TitleHeader title={title} description={description} />
    <InlineWidget
      url="https://calendly.com/d/hhc-dnq-wfd/hashcloak-services-inquiries"
      styles={{ height: '900px', width: '100%' }}
    />
  </BaseContainer>
);

export default Contact;
