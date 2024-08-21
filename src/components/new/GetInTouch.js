import Email from "../icons/Email";
import WorkTittle from "../text/workTittle";
import Copy from "../icons/Copy";
import Phone from "../icons/Phone";

const GetInTouch = () => {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <Email />
        <WorkTittle tittle="tom@pinecone.mn" />
        <Copy />
      </div>
      <div className="flex justify-center gap-4">
        <Phone />
        <WorkTittle tittle="+976 88112233" />
        <Copy />
      </div>
    </div>
  );
};
export default GetInTouch;
