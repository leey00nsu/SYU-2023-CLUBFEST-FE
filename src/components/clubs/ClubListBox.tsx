import { ClubProps } from "./ClubList";
import ClubImage from "./ClubImage";
import { useNavigate } from "react-router-dom";

interface ClubListBoxProps {
  data: ClubProps;
}

const ClubListBox = (props: ClubListBoxProps) => {
  const navigate = useNavigate();
  const { clubName, clubSection, clubDesc, clubImg } = props.data;

  const clickClubHandler = () => {
    navigate(`/clubs/${clubName}`);
  };
  return (
    <div
      onClick={clickClubHandler}
      className=" cursor-pointer flex flex-col w-5/12 p-2  bg-white rounded-lg h-36"
    >
      <section className="flex flex-col justify-center h-full ">
        <p className="text-xl font-PyeongChangPeaceBold text-clubfest-blue">
          {clubName}
        </p>
        <p className="text-base font-PyeongChang text-clubfest-blue">
          {clubDesc}
        </p>
      </section>
      <section className="flex justify-end h-full ">
        <ClubImage />
      </section>
    </div>
  );
};

export default ClubListBox;
