import Image from "next/image";
import { Inter } from "next/font/google";
import HeadPhone from "../components/Head";
import TomPicture from "@/components/pictures/Tom";
import Text from "../components/text/text";
import Action from "../components/Action";
import Links from "../components/Links";
import Button from "../components/buttons/Button";
import SkillsText from "../components/text/SkillsText";
import GetInTouch from "../components/new/GetInTouch";
import HeadDesktop from "../components/HeadDesktop";
import AboutMePages from "./aboutPages";
import SkillsPages from "./skills";
import Experience from "./experience";
import WorkPages from "./work";
import Links2 from "../components/Links2";
import CopyRight from "../components/icons/CopyRight";
import Kebabmenu from "../components/new/Kebabmenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto dark:bg-black">
      <div className=" md:hidden">
        <HeadPhone />
      </div>
      <div className="hidden md:block">
        <HeadDesktop />
      </div>
      <div className=" flex flex-col justify-between gap-12 px-4 py-16">
        <div className="md:flex md:flex-row-reverse ">
          <div className="flex justify-center md:flex-1 md:justify-end">
            <TomPicture />
          </div>
          <div className="flex flex-col gap-12 md:flex-1">
            <Text />

            <Action />
            <Links />
          </div>
        </div>
      </div>
      <div className=" bg-gray-50">
        <AboutMePages />
      </div>
      <div>
        <SkillsPages />
      </div>
      <div className="">
        <Experience />
      </div>
      <div className="">
        <WorkPages />
      </div>
      <div className="px-4 py-16 flex flex-col gap-6">
        <Button text="Get in touch" />
        <SkillsText text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
        <GetInTouch />
        <div className="flex flex-col justify-center gap-2">
          <p className="text-gray-600 font-normal text-base text-center">
            You may also find me on these platforms!
          </p>
          <Links2 />
        </div>
      </div>
      <div className="flex justify-center gap-2 bg-gray-50 py-6 px-20">
        <div className="flex items-center">
          <CopyRight />
        </div>

        <p className="text-gray-600 font-normal text-sm text-center">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </p>
      </div>

      <div className="md:hidden">
        <Kebabmenu />
      </div>
    </div>
  );
}
