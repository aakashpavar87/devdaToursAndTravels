function TopBarWidget({ icon, heading, mainText }) {
  return (
    <div className="h-full w-screen md:h-auto md:w-auto flex flex-col md:flex-row gap-4 justify-start items-start md:justify-center md:items-center">
      <span className="text-yellow-400">{icon}</span>
      <div className="flex flex-col">
        <h4 className="text-base text-gray-300">{heading}</h4>
        <p className="text-lg md:text-xl text-gray-500 font-mono flex text-wrap font-bold">
          {mainText}
        </p>
      </div>
    </div>
  );
}

export default TopBarWidget;
