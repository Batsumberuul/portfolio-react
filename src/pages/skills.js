import Button from "../components/buttons/Button";
import SkillsText from "../components/text/SkillsText";
import SkillsComponent from "../components/icons/SkillsComponent";
import JavascriptIcon from "../components/icons/JavascriptIcon";
import TypescriptIcon from "../components/icons/TypescriptIcon";
import ReactIcon from "../components/icons/ReactIcon";
import NextIcon from "../components/icons/NextIcon";
import NodeIcon from "../components/icons/NodeIcon";
import ExpressIcon from "../components/icons/ExpressIcon";
import NestIcon from "../components/icons/NestIcon";
import SocketIcon from "../components/icons/SocketIcon";
import MongonDBIcon from "../components/icons/MongoDBIcon";
import SassIcon from "../components/icons/SassIcon";
import TailwindcssIcon from "../components/icons/TailwindcssIcon";
import FigmaIcon from "@/components/icons/FigmaIcon";
import CypressIcon from "../components/icons/CypressIcon";
import StorybookIcon from "../components/icons/StorybookIcon";
import GitIcon from "../components/icons/GitIcon";
let iconDatas = [
  {
    id: 1,
    logo: <JavascriptIcon />,
    text: "Javascript",
  },
  {
    id: 2,
    logo: <TypescriptIcon />,
    text: "Typescript",
  },
  {
    id: 3,
    logo: <ReactIcon />,
    text: "React",
  },
  {
    id: 4,
    logo: <NodeIcon />,
    text: "Node.js",
  },
  {
    id: 5,
    logo: <ExpressIcon />,
    text: "Express.js",
  },
  {
    id: 6,
    logo: <NestIcon />,
    text: "Nest.js",
  },
  {
    id: 7,
    logo: <SocketIcon />,
    text: "Socket.io",
  },
  {
    id: 8,
    logo: <MongonDBIcon />,
    text: "MongoDB",
  },
  {
    id: 9,
    logo: <SassIcon />,
    text: "Sass/Scss",
  },
  {
    id: 10,
    logo: <FigmaIcon />,
    text: "Figma",
  },
  {
    id: 11,
    logo: <CypressIcon />,
    text: "Cypress",
  },
  {
    id: 12,
    logo: <StorybookIcon />,
    text: "Storybook",
  },
  {
    id: 13,
    logo: <GitIcon />,
    text: "Git",
  },
];

const SkillsPages = () => {
  return (
    <div className="px-4 py-16">
      <Button text="Skills" />

      <SkillsText text="The skills, tools and technologies I am really good at:" />
      <div className="grid grid-cols-3 pt-2 md:grid-cols-8">
        {iconDatas.map((icondata) => {
          return (
            <SkillsComponent
              key={icondata.id}
              icon={icondata.logo}
              icontext={icondata.text}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SkillsPages;
