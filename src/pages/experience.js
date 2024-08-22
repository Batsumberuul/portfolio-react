import Button from "../components/buttons/Button";
import SkillsText from "../components/text/SkillsText";

import UpworkImg from "../components/pictures/UpworkImg";
import { UpworkDate } from "../components/new/UpworkDate";
import { UpworkJobs } from "../components/new/UpworkJobs";
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
    <div className="bg-gray-100 px-4 py-16 flex flex-col gap-6 items-center">
      <Button text="Experience" />
      <SkillsText text="Here is a quick summary of my most recent experiences:" />
      {/* <p className="font-normal text-base text-gray-600 text-center m-2">
        {" "}
        Here is a quick summary of my most recent experiences:
      </p> */}
      <div className="flex flex-col gap-4 border-2 rounded-xl bg-gray-50 p-8 md:flex md:flex-row md:gap-20 md:justify-between">
        <div>
          <UpworkImg />
        </div>
        <div className="flex flex-col gap-4 md:flex md:flex-row-reverse md:justify-between md:gap-20">
          <div>
            <UpworkDate text="Nov 2021 - Present" />
          </div>
          <div>
            <div>
              <UpworkJobs text="Sr. Frontend Developer" />
            </div>
            <div>
              {developerDatas.map((developerData) => {
                return <UpworkList listtext={developerData} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-2 rounded-xl bg-gray-50 p-8 md:flex md:flex-row md:gap-20 md:justify-between">
        <div>
          <UpworkImg />
        </div>
        <div className="flex flex-col gap-4 md:flex md:flex-row-reverse md:justify-between md:gap-20">
          <UpworkDate text="Jul 2017 - Oct 2021" />
          <div>
            <div className="flex flex-col gap-4 md:w-96">
              <UpworkJobs text="Team Lead" />
            </div>
            <div>
              {teamLeadDatas.map((teamLeadData) => {
                return <UpworkList listtext={teamLeadData} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-2 rounded-xl bg-gray-50 p-8 md:flex md:flex-row md:gap-20 md:justify-between">
        <div>
          <UpworkImg />
        </div>

        <div className=" flex flex-col gap-4 md:flex md:flex-row-reverse md:justify-between md:gap-20">
          <div>
            <UpworkDate text="Dec 2015 - May 2017" />
          </div>
          <div>
            <div className=" flex flex-col gap-4 md:w-96">
              <UpworkJobs text="Full Stack Developer" />
            </div>
            <div>
              {fullstackdatas.map((fullstackdata) => {
                return <UpworkList listtext={fullstackdata} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
