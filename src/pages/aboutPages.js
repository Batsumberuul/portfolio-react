import AboutMeTextComponent from "@/components/text/AboutMeTextComponent";
import AboutMeList from "../components/text/AboutMeList";
import AboutMeImg from "../components/pictures/AboutMeImg";
import Button from "../components/buttons/Button";

let aboutMeDatas = [
  "I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.",

  "Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.",

  "With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.",
  "Finally, some quick bits about me.",
];
let aboutListDatas = [
  "B.E. in Computer Engineering",
  "Full time freelancer",
  "Avid learner",
];

const AboutMePages = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-50">
      <Button text="About me" />

      <AboutMeImg />
      <p className="text-gray-900 font-semibold text-2xl">
        Curious about me? Here you have it:
      </p>
      {aboutMeDatas.map((data, index) => {
        return (
          <AboutMeTextComponent
            key={index}
            text={data}
          />
        );
      })}
      {aboutListDatas.map((listdata, index) => {
        return (
          <AboutMeList
            key={index}
            textList={listdata}
          />
        );
      })}
      <p className="text-gray-600 font-normal text-base">
        One last thing, I'm available for freelance work, so feel free to reach
        out and say hello! I promise I don't bite 😉{" "}
      </p>
    </div>
  );
};
export default AboutMePages;
