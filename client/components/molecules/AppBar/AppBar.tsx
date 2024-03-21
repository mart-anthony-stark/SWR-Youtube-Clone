"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { PiMicrophoneFill } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { Dispatch, SetStateAction, useContext } from "react";
import { SidepanelContext } from "@/components/templates/MainTemplate";

type AppBarProps = { setSidepanelOpen: Dispatch<SetStateAction<boolean>> };

const AppBar = ({ setSidepanelOpen }: AppBarProps) => {
  const {isOpen} = useContext(SidepanelContext)
  const toggleSidePanel = () => {
    setSidepanelOpen((prev) => !prev)
    console.log({isOpen})
  }

  return (
    <nav className="h-[60px] bg-white sticky mt-0 top-0 z-50 flex justify-between items-center px-4 py-2 w-full">
      <div className="flex items-center gap-5">
        <Button onClick={toggleSidePanel} className="hidden sm:block">
          <VscMenu size={20} />
        </Button>

        <Logo />
      </div>

      {/* SEARCHBAR HERE */}
      <div className="max-w-[600px] w-full gap-4 hidden md:flex px-4">
        <SearchBar />

        <Button className="bg-gray-200 self-center">
          <PiMicrophoneFill size={24} />
        </Button>
      </div>

      <div className="flex items-center gap-5">
        <Button className="md:hidden">
          <GoSearch size={24} strokeWidth={0.1} />
        </Button>

        <Button className="hidden sm:block md:hidden">
          <PiMicrophoneFill size={24} strokeWidth={0.1} />
        </Button>

        <Button className="hidden sm:block">
          <RiVideoAddLine size={24} strokeWidth={0.1} />
        </Button>

        <Button className="hidden sm:block">
          <Button.Badge
            icon={<IoIosNotificationsOutline size={28} />}
            value={10}
          />
        </Button>

        <Image
          src="https://yt3.ggpht.com/SKtlWY3vGARq6QT0jtCFRUzH2hNj7MKwA2mKPOitvXSZNlaODrPSDmo5mh_0grN8kgzhjco1=s88-c-k-c0x00ffffff-no-rj"
          alt="user"
          height={30}
          width={30}
          className="rounded-full mx-2"
        />
      </div>
    </nav>
  );
};

export default AppBar;
