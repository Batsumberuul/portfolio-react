const SkillsComponent = (props) => {
  const {icon, icontext} = props;
  return (
    <div className="">
      <svg className="w-16 h-16 ">{icon}</svg>
      <p className="text-gray-600 font-normal text-base ">{icontext}</p>
    </div>
  );
};
export default SkillsComponent;
