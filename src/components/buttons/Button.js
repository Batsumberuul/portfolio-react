const Button = (props) => {
  return (
    <div className="flex justify-center">
      <button className="bg-gray-200 border-2 rounded-r-xl rounded-l-xl text-gray-600 font-medium text-sm py-1 pr-5 pl-5 w-fit dark:bg-gray-700 dark:border-none dark:text-gray-50">
        {props.text}
      </button>
    </div>
  );
};
export default Button;
