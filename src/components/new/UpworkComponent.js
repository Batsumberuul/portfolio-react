import UpworkImg from "../pictures/UpworkImg";
import { UpworkDate } from "./UpworkDate";
import { UpworkJobs } from "./UpworkJobs";
import UpworkList from "./UpworkList";

let developerDatas = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Ut pretium arcu et massa semper, id fringilla leo semper.",
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];
const UpworkComponent = () => {
  return (
    <div className="flex flex-col gap-4 border-2 rounded-xl">
      <UpworkImg />
      <UpworkDate text="Nov 2021 - Present" />

      <div>
        <UpworkJobs text="Sr. Frontend Developer" />
        {developerDatas.map((developerData) => {
          return <UpworkList listtext={developerData} />;
        })}
      </div>
    </div>
  );
};
export default UpworkComponent;
