const AboutMeList = (props) => {
  const { textList } = props;
  return (
    <li className="text-gray-600 font-normal text-base dark:text-gray-300">
      {textList}
    </li>
  );
};
export default AboutMeList;
