import React from "react";
import ContactCard from "./ContactCard";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";

function Contact() {
  return (
    <section>
      <ContactCard
        title="Gmail"
        contact="mohiulislam900@gmail.com"
        link="google.com"
        Icon={HiMail}
      />
      <ContactCard
        title="Whatsapp"
        contact="mohiulislam900@gmail.com"
        link="google.com"
        Icon={IoLogoWhatsapp}
      />
      <ContactCard
        title="Messenger"
        contact="mohiulislam900@gmail.com"
        link="google.com"
        Icon={BsMessenger}
      />
      <ContactCard
        title="Upwork"
        contact="mohiulislam900@gmail.com"
        link="google.com"
        Icon={SiUpwork}
      />
      <ContactCard
        title="Fiverr"
        contact="mohiulislam900@gmail.com"
        link="google.com"
        Icon={SiFiverr}
      />
    </section>
  );
}

export default Contact;
