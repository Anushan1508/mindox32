import React from "react";
import ContactSocial from "../../components/ContactSocial/ContactSocial";
import Hero from "../../components/HeroContact";
import SendMessage from "../../components/SendMessage/SendMessage";

const ContactUS = () => {
  return (
    <div>
      <Hero />
      <SendMessage />
      <ContactSocial />
    </div>
  );
};

export default ContactUS;
