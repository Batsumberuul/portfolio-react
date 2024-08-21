import Button from "../components/buttons/Button";
import SkillsText from "../components/text/SkillsText";

import UpworkImg from "../components/pictures/UpworkImg";
import {UpworkDate} from "../components/new/UpworkDate";
import {UpworkJobs} from "../components/new/UpworkJobs";
import UpworkList from "../components/new/UpworkList";

let developerDatas = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Ut pretium arcu et massa semper, id fringilla leo semper.",
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

let teamLeadDatas = [
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];
let fullstackdatas = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];
const Experience = () => {
  return (
    <div className="bg-gray-100 px-4 py-16 flex flex-col gap-6">
      <Button text="Experience" />
      <SkillsText text="Here is a quick summary of my most recent experiences:" />
      {/* <p className="font-normal text-base text-gray-600 text-center m-2">
        {" "}
        Here is a quick summary of my most recent experiences:
      </p> */}
      <div className="flex flex-col gap-4 border-2 rounded-xl bg-gray-50 p-8">
        <UpworkImg />
        <UpworkDate text="Nov 2021 - Present" />
        <div>
          <UpworkJobs text="Sr. Frontend Developer" />
          {developerDatas.map((developerData) => {
            return <UpworkList listtext={developerData} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 border-2 rounded-xl bg-gray-50 p-8">
        <UpworkImg />
        <UpworkDate text="Jul 2017 - Oct 2021" />
        <div>
          <UpworkJobs text="Team Lead" />
          {teamLeadDatas.map((teamLeadData) => {
            return <UpworkList listtext={teamLeadData} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 border-2 rounded-xl bg-gray-50 p-8">
        <UpworkImg />
        <UpworkDate text="Dec 2015 - May 2017" />
        <div>
          <UpworkJobs text="Full Stack Developer" />
          {fullstackdatas.map((fullstackdata) => {
            return <UpworkList listtext={fullstackdata} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Experience;
