import HeadDesktopText from "../text/HeadDesktopText";
import HeadIcon from "../icons/HeadIcon";
import HeadButton from "../buttons/HeadButton";
import KebabIcon from "../icons/KebabIcon";
import { document } from "postcss";
let headDesktopTextdatas = ["About", "Work", "Testimonials", "Contact"];

const Kebabmenu = () => {
  return (
    <div className="max-w-96">
      <div className="flex justify-between p-6 ">
        <p className="text-gray-900 font-extrabold  text-3xl">TOM</p>
        <KebabIcon />
      </div>
      <div className="flex flex-col items-start gap-4 p-4 border-t-2 border-gray-100">
        {headDesktopTextdatas.map((headDesktopTextdata, index) => {
          return <HeadDesktopText key={index} text={headDesktopTextdata} />;
        })}
      </div>
      <div className="flex flex-col p-4 gap-4 border-t-2  border-gray-100">
        <div className="flex justify-between">
          <HeadDesktopText text="Switch Theme" />
          <HeadIcon />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-72 bg-gray-900 border-2 rounded-xl border-none">
            <HeadButton text="Download CV" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kebabmenu;
