const HeadDesktopText = (props) => {
  const { text } = props;
  return (
    <p className="text-gray-600 font-medium  text-base text-center dark:text-gray-300">
      {text}
    </p>
  );
};

export default HeadDesktopText;
