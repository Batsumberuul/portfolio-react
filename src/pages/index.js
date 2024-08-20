import Image from "next/image";
import { Inter } from "next/font/google";
import HeadPhone from "../components/Head";
import TomPicture from "@/components/pictures/Tom";
import Text from "../components/text/text";
import Action from "../components/Action";
import Links from "../components/Links";

import AboutMe from "../components/pictures/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-96">
      <HeadPhone />

      <div className=" flex flex-col justify-between gap-12">
        <div className="w-96 flex justify-center mt-5">
          <TomPicture />
          {/* <img
            className="border-8 border-gray-50 flex justify-center items-center"
            src="/Tom.png"
            width={240}
            height={280}
          /> */}
        </div>
        <Text />
        <Action />
        <Links />
      </div>

      <div className="w-96 flex justify-center mt-5">
        <AboutMe />
      </div>
    </div>
  );
}
