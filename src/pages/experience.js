import Button from "../components/buttons/Button";
import UpworkComponent from "../components/new/UpworkComponent";

const Experience = () => {
  return (
    <div className="bg-gray-50">
      <Button text="Experience" />
      <p className="font-normal text-base text-gray-600 text-center m-2">
        {" "}
        Here is a quick summary of my most recent experiences:
      </p>
      <UpworkComponent />
    </div>
  );
};
export default Experience;
