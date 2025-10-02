import { StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { FOOTER_CONFIG } from "@/store/footer";

// Reusable components
const ActionButton = ({
  button,

}: {
  button: (typeof FOOTER_CONFIG.header.buttons)[0];
  path: string;
}) => {
  const Icon = button.icon;
  return (
    <Button
      size="lg"
      variant={button.variant}
      className={`lg:text-lg lg:w-64 md:py-8 lg:py-10 rounded-lg lg:rounded-3xl flex items-center justify-center ${button.className}`}
    >
      <Icon />
      <span>{button.text}</span>
    </Button>
  );
};

const SocialIcon = ({
  social,
}: {
  social: (typeof FOOTER_CONFIG.contact.socialMedia)[0];
}) => {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      className="text-neutral-200 bg-[#EC1E24] p-1.5 md:p-2 rounded-full"
      aria-label={social.label}
    >
      <Icon className="h-4 w-4 lg:h-6 lg:w-6" />
    </a>
  );
};

const NavigationSection = ({
  section,
}: {
  section: typeof FOOTER_CONFIG.navigation.company;
}) => (
  <div>
    <h3 className="text-white font-bold mb-4">{section.title}</h3>
    <hr className="border-[#EC1E24] border-2 w-50" />
    <ul className="space-y-3 grid grid-cols-2 mt-3">
      {section.links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className={"hover:text-neutral-200"}>
            {link.text}
            {link.badge && (
              <span className="bg-green-500 p-0.5 rounded text-xs">
                {link.badgeText}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ProgramSection = ({
  program,
  showViewAll = true,
}: {
  program: (typeof FOOTER_CONFIG.programs)[0];
  showViewAll?: boolean;
}) => (
  <div>
    <h3 className="text-white font-bold mb-6">{program.title}</h3>
    <ul className="space-y-3">
      {program.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {showViewAll && (
        <li>
          <a href="#" className="hover:text-neutral-200">
            View All
          </a>
        </li>
      )}
    </ul>
  </div>
);

const TrustpilotRating = () => (
  <div className="flex items-center space-x-0 bg-white w-fit text-black p-2 pr-10 rounded-xl">
    <div className="text-green-700 text-4xl xl:text-6xl p-1 rounded">★</div>
    <span className="font-semibold mt-1 text-2xl lg:text-4xl">
      {FOOTER_CONFIG.contact.trustpilot.text}
    </span>
    <span className="h-7 w-fit px-2 ml-5 items-center bg-neutral-800 flex text-white gap-2">
      {FOOTER_CONFIG.contact.trustpilot.rating}
      <StarIcon size={18} color="transparent" fill="#FBD033" />
    </span>
  </div>
);

const HelplineNumber = () => (
  <div className="w-fit  text-white px-4 py-1.5 font-semibold border border-gray-200 rounded-sm relative">
    <span className="absolute -top-3 left-2/6 transform -translate-x-1/2 text-white px-4 py-0.5 rounded-full text-[8px] bg-[#EC1E24]">
      HELPLINE
    </span>
    {FOOTER_CONFIG.contact.helpline}
  </div>
);

export default function Footer() {
  const { header, contact, navigation, programs, specializations } =
    FOOTER_CONFIG;

  return (
    <div className="max-w-[1536px] mx-auto text-neutral-200 py-10 ">
      {/* Header Section */}
      <header className="flex flex-row justify-between overflow-hidden relative rounded-2xl items-center h-40 lg:h-52 px-2 md:px-4 lg:px-10 bg-[#192E50] bg-opacity-90 mx-4 lg:mx-4">
        <div className="flex items-center">
          <h1 className="ml-2 text-2xl md:text-3xl lg:text-5xl font-semibold">
            {header.title}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 z-[999]">
          {header.buttons.map((button) => (
            <ActionButton key={button.id} button={button} path={button.path} />
          ))}
        </div>
        <img
          src="/Shape.svg"
          alt=""
          className="absolute w-full h-full -top-5 left-0"
        />
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-15">
        <div className="grid lg:grid-cols-3 gap-y-4 gap-x-10 ">
          {/* Contact and Social */}
          <div className="flex flex-col gap-6 my-3">
            <div className="flex gap-4">
              {contact.logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8"
                />
              ))}
            </div>
            <TrustpilotRating />
            <div className="flex gap-4  lg:block items-center">
              <div className="flex space-x-2 lg:mb-8">
                {contact.socialMedia.map((social, index) => (
                  <SocialIcon key={index} social={social} />
                ))}
              </div>
              <HelplineNumber />
            </div>
          </div>

          {/* Navigation Sections */}
          <NavigationSection section={navigation.company} />
          <NavigationSection section={navigation.quickLinks} />
        </div>

        <div className="h-1 my-10 lg:my-20 border-b w-full" />

        {/* Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-y-15">
          {programs.map((program, index) => (
            <ProgramSection key={index} program={program} />
          ))}
        </div>

        <div className="h-1 my-10 lg:my-20 border-b w-full" />

        {/* Specializations Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-15  mx-autol">
          {specializations.map((specialization, index) => (
            <ProgramSection key={index} program={specialization} />
          ))}
        </div>
      </main>
    </div>
  );
}
