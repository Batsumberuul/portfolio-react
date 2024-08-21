import Image from "next/image";
import {Inter} from "next/font/google";
import HeadPhone from "../components/Head";
import TomPicture from "@/components/pictures/Tom";
import Text from "../components/text/text";
import Action from "../components/Action";
import Links from "../components/Links";
import Button from "../components/buttons/Button";
import AboutMePages from "./aboutPages";
import SkillsPages from "./skills";

import AboutMeImg from "../components/pictures/AboutMeImg";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <div className="w-96 border-2 ">
      <HeadPhone />

      <div className=" flex flex-col justify-between gap-12">
        <div className="w-96 flex justify-center mt-5">
          <TomPicture />
        </div>
        <Text />
        <Action />
        <Links />
      </div>

      <div className="w-96 pr-4 pl-4 pt-16 pb-16 bg-gray-50 ">
        <AboutMePages />
      </div>
      <div>
        <SkillsPages />
      </div>
    </div>
  );
}
