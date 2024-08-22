import HeadDesktopText from "./text/HeadDesktopText";
import HeadIcon from "./icons/HeadIcon";
import HeadButton from "./buttons/HeadButton";

let headDesktopTextdatas = ["About", "Work", "Testimonials", "Contact"];

const HeadDesktop = () => {
  return (
    <div className="flex justify-between py-1.5 px-4">
      <p className="text-gray-900 font-extrabold  text-3xl">TOM</p>
      <div className="flex gap-6 items-center">
        <div className="flex gap-6">
          {headDesktopTextdatas.map((headDesktopTextdata) => {
            return <HeadDesktopText text={headDesktopTextdata} />;
          })}
        </div>
        <div>
          <HeadIcon />
        </div>
        <div>
          <HeadButton text="Download CV" />
        </div>
      </div>
    </div>
  );
};
export default HeadDesktop;
