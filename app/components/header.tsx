import Image from "next/image";
import menturaLogo from "@/app/public/mentura_logo_tp.png";
import Profile from "./profile";

export default function Header() {
  return (
    <div className="bg-light_purple flex h-16 w-full items-center sticky top-0 z-10 shadow-2xl border-black px-2 transition-all duration-300 border-2 border-black">
      <div className="mr-auto flex flex-row justify-center items-center">
        <a href="/">
          <Image
            className="h-16 w-16 flex rounded-full transition-transform duration-200 hover:cursor-pointer hover:scale-110"
            alt=""
            src={menturaLogo}
          />
        </a>
      </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-6">
    </div>

    <div className="ml-auto pr-2">
      <Profile />
    </div>
  </div>
  );
}