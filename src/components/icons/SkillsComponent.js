const SkillsComponent = (props) => {
  const { icon, icontext } = props;
  return (
    <div className="w-fit grid place-self-center">
      <svg className="w-16 h-16 ">{icon}</svg>
      <p className="text-gray-600 font-normal text-base  pt-2 w-fit text-center dark:text-gray-300">
        {icontext}
      </p>
    </div>
  );
};
export default SkillsComponent;
