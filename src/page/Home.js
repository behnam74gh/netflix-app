import React from "react";

import FaqsContainer from "../container/Faqs";
import FooterContainer from "../container/Footer";
import HeaderContainer from "../container/Header";
import JumbotronContainer from "../container/Jumbotron";
import OptForm from "../components/Opt-Form";
import { Feature } from "../components/Feuture";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, Tv programmes and more</Feature.Title>
          <Feature.SubTitle>
            Watch enywhere. Cansel at any time
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
