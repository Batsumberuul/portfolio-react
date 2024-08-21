const WorkButton = (props) => {
  return (
    <button className="bg-gray-200 border-2 rounded-r-xl rounded-l-xl text-gray-600 font-medium text-sm py-1 pr-5 pl-5 w-fit">
      {props.text}
    </button>
  );
};
export default WorkButton;
