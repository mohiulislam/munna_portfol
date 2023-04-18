const ContactCard = ({ title, contact, link, Icon }) => {

  return (
    <div className="flex flex-col bg-secondary rounded-md items-center mb-56 p-5">
      <div className="bg-blue-900 p-2 rounded-full">
        <Icon className="text-white text-3xl" />
      </div>

      <h1 className="text-xl font-bold">{title}</h1>
      <p>{contact}</p>
    </div>
  );
};

export default ContactCard;
