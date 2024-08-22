const HeadButton = (props) => {
  const {text} = props;
  return (
    <button className="bg-gray-900 text-gray-50 font-medium  text-base text-center border-2 rounded-xl py-1.5 px-4">
      {text}
    </button>
  );
};
export default HeadButton;
