import LocationIcon24 from "./icons/LocationIcon24";
import DotEmerald500 from "./icons/DotEmerald";

const Action = () => {
  return (
    <div className="flex flex-col gap-2 mx-5">
      <div className="flex justify-start gap-5">
        <LocationIcon24 />
        <p className="text-gray-600 font-normal text-base dark:text-gray-300">
          Ulaanbaatar, Mongolia
        </p>
      </div>

      <div className="flex justify-start gap-5">
        <div className="w-6 h-6 flex justify-center items-center">
          <DotEmerald500 />
        </div>
        <p className="text-gray-600 font-normal text-base dark:text-gray-300">
          Available for new projects
        </p>
      </div>
    </div>
  );
};
export default Action;
