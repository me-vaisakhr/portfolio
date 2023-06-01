/* eslint-disable react-refresh/only-export-components */
import { FC, memo } from "react";
import TypingAnimatedText from "../common/TypingAnimatedText";
import GithubIcon from "../../icons/GithubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import ContactButton from "../common/ContactButton";
import CodepenIcon from "../../icons/CodepenIcon";
import NavLinks from "../common/NavLinks";
import { Biodata } from "../../models/biodata";

interface PersonalInfoSectionProps {
  name: string;
  tagline?: string;
  bio?: string;
  connects?: Array<Biodata.Social>;
}
const PersonalInfoSection: FC<PersonalInfoSectionProps> = ({
  name,
  tagline,
  bio,
  connects,
}) => {
  const getFooterItemIcon = (id: string) => {
    switch (id) {
      case "github":
        return <GithubIcon className="w-4 h-4 fill-current" />;
      case "linkedin":
        return <LinkedInIcon className="w-4 h-4 fill-current" />;
      case "codepen":
        return <CodepenIcon className="w-4 h-4 fill-current" />;
      default:
        return <></>;
    }
  };
  return (
    <section className="h-screen relative items-center lg:fixed max-w-full lg:max-w-sm xl:max-w-lg font-logo flex flex-col justify-center lg:h-full gap-12 lg:gap-8 p-6 lg:items-baseline">
      <h1 className="text-3xl font-bold uppercase bg-gradient-to-r text-wh text-black dark:text-white text-center md:text-left bg-400 motion-reduce:animate-none animate-slide-up">
        {name}
      </h1>
      <h4 className="text-center md:text-left text-1xl -mt-5 font-bold font-default lowercase bg-gradient-to-r text-wh text-black dark:text-white bg-400 motion-reduce:animate-none animate-slide-up">
        {tagline}
      </h4>
      <TypingAnimatedText
        className="text-justify h-full"
        text={bio ? bio : ""}
        duration={50}
      />
      <div className="hidden font-default font-thin lg:flex flex-col gap-2 absolute bottom-24 animate-fade-in">
        <NavLinks />
      </div>

      <footer className="font-default flex flex-wrap justify-center lg:justify-start gap-4 xl:gap-8 col motion-reduce:animate-none animate-slide-down absolute bottom-8 w-9/12 lg:w-full">
        {connects?.map((connect, index) => (
          <ContactButton
            key={`social-connect-${index}`}
            title={connect.name}
            icon={getFooterItemIcon(connect.id)}
            url={connect.link}
          />
        ))}
      </footer>
    </section>
  );
};

export default memo(PersonalInfoSection);
