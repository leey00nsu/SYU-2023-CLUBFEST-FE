import { ClubProps } from "./ClubList";

interface ClubListBoxProps {
  data: ClubProps;
}

const ClubListBox = (props: ClubListBoxProps) => {
  const { clubName, clubSection, clubDesc, clubImg } = props.data;
  return (
    <div className="flex flex-col w-5/12 p-2  bg-white rounded-lg h-36">
      <section className="flex flex-col justify-center h-full ">
        <p className="text-xl font-PyeongChangPeaceBold text-clubfest-blue">
          {clubName}
        </p>
        <p className="text-base font-PyeongChang text-clubfest-blue">
          {clubDesc}
        </p>
      </section>
      <section className="flex justify-end h-full ">
        <div className="w-16 h-16 bg-gray-400 rounded-full "></div>
      </section>
    </div>
  );
};

export default ClubListBox;
