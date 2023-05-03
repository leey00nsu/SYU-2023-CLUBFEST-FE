import { clubListTypes } from "../../assets/clubList";
import ClubImage from "./ClubImage";
import { useNavigate } from "react-router-dom";

interface ClubListBoxProps {
  data: clubListTypes;
}

const ClubListBox = (props: ClubListBoxProps) => {
  const navigate = useNavigate();
  const { clubName, clubSection, clubTag, clubImg } = props.data;

  const clickClubHandler = () => {
    navigate(`/clubs/${clubName}`);
  };
  return (
    <div
      onClick={clickClubHandler}
      className=" cursor-pointer flex flex-col w-5/12 p-2  bg-white rounded-lg h-40 "
    >
      <section className="flex flex-col  h-full ">
        <p className="xs:text-xl text-lg font-PyeongChangPeaceBold text-clubfest-blue">
          {clubName}
        </p>
        <p className="xs:text-xs text-sm font-PyeongChang text-clubfest-blue">
          {clubTag}
        </p>
      </section>
      <section className="flex justify-end h-full ">
        <ClubImage url={clubImg} />
      </section>
    </div>
  );
};

export default ClubListBox;
