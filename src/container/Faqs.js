import React from "react";

import Accordion from "../components/Accordin";
import OptForm from "../components/Opt-Form";
import faqsData from "../fixtures/faqs.json";

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
