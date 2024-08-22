const AboutMeTextComponent = (props) => {
  const {text} = props;
  return (
    <p className=" text-gray-600 font-normal text-base md:flex md:gap-2 ">
      {text}
    </p>
  );
};
export default AboutMeTextComponent;
