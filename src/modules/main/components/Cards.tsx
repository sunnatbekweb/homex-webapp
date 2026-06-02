import React from "react";
interface ServiceCardProps {
  title: string;
  imageAlt: string;
  emojiPlaceholder: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  emojiPlaceholder,
}) => {
  return (
    <div className="bg-[#f1f3f4] rounded-2xl p-4 relative h-32.5 flex flex-col justify-between overflow-hidden cursor-pointer hover:bg-gray-100 transition-colors">
      <h3 className="text-[15px] font-bold text-gray-900 leading-tight max-w-[80%]">
        {title}
      </h3>

      <div className="absolute -bottom-2 -right-2 w-20 h-20 flex items-center justify-center text-5xl opacity-90">
        <img src={emojiPlaceholder} alt="" />
      </div>
    </div>
  );
};

export default function MobileAppUI() {
  return (
    <div className="flex justify-between container">
      <div className="max-w-90 p-5 font-sans flex flex-col">
        <div className="relative mb-4 bg-white p-4 rounded-[20px]">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Manzil kiriting"
            className="w-full bg-[#f1f3f4]  text-gray-900 rounded-xl py-3.5 pl-10 pr-4 text-[15px] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#f75426]/50 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-3.5 mb-4 bg-white rounded-[20px] p-4">
          <ServiceCard
            title="Konditsioner tamirlash"
            imageAlt="Konditsioner"
            emojiPlaceholder="/public/images/conditsioner.png"
          />
          <ServiceCard
            title="Santexnika ishlari"
            imageAlt="Santexnika quvuri"
            emojiPlaceholder="/public/images/santexnika.png"
          />
          <ServiceCard
            title="Katyol tamirlash"
            imageAlt="Isitish qozoni"
            emojiPlaceholder="/public/images/katyol.png"
          />
          <ServiceCard
            title="Elektrika ishlari"
            imageAlt="Rozetka va tok"
            emojiPlaceholder="/public/images/elektrika.png"
          />
        </div>

        <div className="mb-auto bg-white p-4 rounded-[20px]">
          <h2 className="text-[19px] font-bold text-black mb-4">
            Faol Buyurtmalar
          </h2>
          <div className="bg-[#f7f8fa] rounded-2xl p-6 py-5 flex items-center justify-center">
            <p className="text-[#b5b8c0] text-[15px] font-medium">
              Faol buyurtma mavjud emas
            </p>
          </div>
        </div>

        <div className="pt-6 mt-4 bg-white p-4 rounded-[20px]">
          <button className="w-full bg-[#fa511e] text-white font-medium text-[16px] py-4 rounded-2xl active:bg-[#e04518] hover:bg-[#eb4a19] transition-colors shadow-sm">
            Hizmat chaqirish
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[20px] h-fit flex max-w-75 cursor-pointer">
        <div className="p-4 w-[60%]">
          <span className="text-base font-semibold">Master Bo’lish</span>
          <p className="text-sm text-[#9aa0a6]">
            Homex master ilovasini yuklab oling
          </p>
        </div>
        <div className="w-[40%]">
          <img
            src="/public/images/master-bolish.png"
            alt="Master bo'lish"
            className="h-full w-full rounded-r-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
