import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import HomeMenu from "./HomeMenu";
import SmallMenu from "./SmallMenu";
import logo from "@/assets/image/navbar/Main logo.png";
import user from "@/assets/image/navbar/User.svg";
import bell from "@/assets/image/navbar/Bell.svg";
import Translate from "./Translate";

export default function Navbar() {
  return (
    <div className="z-[100]">
      <div className="sticky top-0 bg-white w-full">
        <div className="flex justify-between h-12 md:h-24 container mx-auto items-center">
          <div className="text-white">
            <Image src={logo} className="w-42 h-9 cursor-pointer" alt="Logo" />
          </div>

          <div className="hidden md:block">
            <HomeMenu />
          </div>
          {/*Small divice menu DropdownMenu */}
          <div className="md:hidden block">
            <div className="flex justify-between items-center gap-x-2">
              <div className="flex gap-x-2 text-lg text-seocundary">
                <div className="relative ">
                  <Image src={bell} alt="" className="cursor-pointer" />
                  <div className="h-4 w-4 top-0 right-0 absolute rounded-full bg-primary flex items-center justify-center text-[10px] text-white">
                    ০৫
                  </div>
                </div>
                <Image src={user} alt="" className="cursor-pointer" />
              </div>
              <SmallMenu />

              <ThemeToggle />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {/* Logo*/}

              <div className="flex items-center justify-between md:gap-x-5">
                <div className="flex items-center gap-x-5 text-lg text-seocundary">
                  <Translate />

                  <div className="relative cursor-pointer">
                    <Image src={bell} alt="" />
                    <div className="h-4 w-4 top-0 right-0 absolute rounded-full bg-primary flex items-center justify-center text-[10px] text-white">
                      ০৫
                    </div>
                  </div>
                  <Image src={user} alt="" className="cursor-pointer" />
                  <div className="hidden md:block">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
