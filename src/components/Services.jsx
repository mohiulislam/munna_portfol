import ServiceCard from "./ServiceCard";
import { SiFiverr } from "react-icons/si";

const Services = () => {

  return (
    <div className="bg-primary py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-12 gap-6">
        <ServiceCard
          title="SEO"
          description="Optimize your website to rank higher on search engines and drive more organic traffic."
          Icon={SiFiverr}
        />
        <ServiceCard
          title="PPC"
          description="Create effective pay-per-click campaigns to drive more targeted traffic to your website."
        />
        <ServiceCard
          title="Social Media"
          description="Engage your audience and build your brand on popular social media platforms like Facebook, Instagram, and Twitter."
        />
        <ServiceCard
          title="Content Marketing"
          description="Attract and engage your audience with high-quality, targeted content that drives traffic and leads."
        />
      </div>
    </div>
  );
};

export default Services;
