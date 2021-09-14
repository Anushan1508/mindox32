import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard";
import ContactSocial from "../../components/ContactSocial/ContactSocial";
import Hero from "../../components/HeroContact";
import SendMessage from "../../components/SendMessage/SendMessage";

const ContactUS = () => {
  return (
    <div>
      <Hero />
      <ContactCard />
      <SendMessage />
      <ContactSocial />
    </div>
  );
};

export default ContactUS;
