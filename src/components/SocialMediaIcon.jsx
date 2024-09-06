import React from 'react';

const SocialMediaIcon = () => {
  return (
    <div className="flex justify-center mt-4 relative gap-8 h-20">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
        <a
          className="h-full w-full flex items-center justify-center"
          href="https://www.facebook.com/devdatourstravels"
        >
          <img
            className="h-[80%] w-[80%]"
            src="/images/icons-social/facebook.svg"
            alt="Facebook Icon Of Devda Tours And Travels"
          />
        </a>
      </div>
      <div className="w-16 h-16 bg-blue-400 text-white rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
        <a className="h-full w-full flex items-center justify-center" href="https://wa.me/6355168597">
          <img
            className="h-[80%] w-[80%]"
            src="/images/icons-social/whatsapp-business.svg"
            alt="Whatsapp Business Icon Of Devda Tours And Travels"
          />
        </a>
      </div>
      <div className="w-16 h-16 bg-pink-600 text-white rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
        <a
          className="h-full w-full flex items-center justify-center"
          href="https://www.instagram.com/devdatourstravels"
        >
          <img
            className="h-[80%] w-[80%]"
            src="/images/icons-social/instagram.svg"
            alt="Instagram Icon Of Devda Tours And Travels"
          />
        </a>
      </div>

      {/* Hand Icon */}
      <div
        className="w-10 h-10 bg-cover bg-center absolute top-14 left-1/2 transform -translate-x-1/2 animate-moveToIcons"
        style={{
          backgroundImage:
            "url('https://cdn-icons-png.flaticon.com/128/1612/1612781.png')",
        }}
      ></div>
    </div>
  );
};

export default SocialMediaIcon;
