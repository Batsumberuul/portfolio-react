import Button from "../components/buttons/Button";
import SkillsText from "../components/text/SkillsText";
import WorkImg from "../components/pictures/WorkImg";
import WorkTittle from "../components/text/workTittle";
import WorkText from "../components/text/WorkText";
import WorkIcon from "../components/icons/WorkIcon";
import WorkButton from "../components/buttons/WorkButton";

let workButtonDatas = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Next.js",
  },
  {
    id: 3,
    name: "Typescript",
  },
  {
    id: 4,
    name: "Nest.js",
  },
  {
    id: 5,
    name: "PostgreSQL",
  },
  {
    id: 6,
    name: "Tailwindcss",
  },
  {
    id: 7,
    name: "Figma",
  },
  {
    id: 8,
    name: "Cypress",
  },
  {
    id: 9,
    name: "Storybook",
  },
  {
    id: 10,
    name: "Git",
  },
];

const WorkPages = () => {
  return (
    <div className=" px-4 py-16 ">
      <div className="flex flex-col gap-6">
        <div className=" flex flex-col gap-4">
          <Button text="Work" />
          <SkillsText text="Some of the noteworthy projects I have built:" />
        </div>
        <div className="border-2 rounded-xl">
          <div className="p-8 bg-gray-50">
            <WorkImg src="/ubcub.png" />
          </div>
          <div className=" flex flex-col gap-6 p-8">
            <WorkTittle tittle="UBCab" />
            <WorkText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
            <div className="grid grid-cols-2 gap-2 w-fit">
              {workButtonDatas.map((workButtonData) => {
                return (
                  <WorkButton
                    key={workButtonData.id}
                    text={workButtonData.name}
                  />
                );
              })}
            </div>
            <WorkIcon />
          </div>
        </div>

        <div className="border-2 rounded-xl">
          <div className="p-8 bg-gray-50">
            <WorkImg src="/mentorhub.png" />
          </div>
          <div className=" flex flex-col gap-6 p-8">
            <WorkTittle tittle="Mentorhub" />
            <WorkText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />
            <div className="grid grid-cols-2 gap-2 w-fit">
              {workButtonDatas.map((workButtonData) => {
                return (
                  <WorkButton
                    key={workButtonData.id}
                    text={workButtonData.name}
                  />
                );
              })}
            </div>
            <WorkIcon />
          </div>
        </div>
        <div className="border-2 rounded-xl">
          <div className="p-8 bg-gray-50">
            <WorkImg src="/itom.png" />
          </div>
          <div className=" flex flex-col gap-6 p-8">
            <WorkTittle tittle="iToim" />
            <WorkText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." />

            <div className="grid grid-cols-2 gap-2 w-fit">
              {workButtonDatas.map((workButtonData) => {
                return (
                  <WorkButton
                    key={workButtonData.id}
                    text={workButtonData.name}
                  />
                );
              })}
            </div>

            <WorkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkPages;
