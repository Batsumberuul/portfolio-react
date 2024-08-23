import HeadDesktopText from "./text/HeadDesktopText";
import HeadIcon from "./icons/HeadIcon";
import HeadButton from "./buttons/HeadButton";

let headDesktopTextdatas = ["About", "Work", "Testimonials", "Contact"];

const darkMode = () => {
  document.documentElement.classList.add("dark");
};

const HeadDesktop = () => {
  return (
    <div className="flex justify-between py-1.5 px-4 dark:bg-gray-900">
      <p className="text-gray-900 font-extrabold  text-3xl dark:text-gray-50">
        TOM
      </p>
      <div className="flex gap-6 items-center">
        <div className="flex gap-6">
          {headDesktopTextdatas.map((headDesktopTextdata, index) => {
            return <HeadDesktopText key={index} text={headDesktopTextdata} />;
          })}
        </div>
        <div onClick={darkMode}>
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
