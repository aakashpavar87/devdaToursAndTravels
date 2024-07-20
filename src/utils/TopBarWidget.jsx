function TopBarWidget({ icon, heading, mainText }) {
  let mainTag = ""
  if(mainText === "6355-168-597") {
    mainTag = <a href="tel:6355168597" className="text-lg md:text-xl text-gray-500 font-mono flex text-wrap font-bold">{mainText}</a>
  }else if(mainText === "jaydevada201184@gmail.com") {
    mainTag = <a href="mailto:jaydevada201184@gmail.com" className="text-lg md:text-xl text-gray-500 font-mono flex text-wrap font-bold">{mainText}</a>
  }
  else{
    mainTag = <p className="text-lg md:text-xl text-gray-500 font-mono flex text-wrap font-bold">{mainText}</p>
  }
  return (
    <div className="h-full w-screen md:h-auto md:w-auto flex flex-col md:flex-row gap-4 justify-start items-start md:justify-center md:items-center">
      <span className="text-yellow-400">{icon}</span>
      <div className="flex flex-col">
        <h4 className="text-base text-gray-300">{heading}</h4>
          {mainTag}
      </div>
    </div>
  );
}

export default TopBarWidget;
