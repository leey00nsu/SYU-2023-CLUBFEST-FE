import { ClubProps } from "./ClubList";

interface ClubListBoxProps {
  data: ClubProps;
}

const ClubListBox = (props: ClubListBoxProps) => {
  const { clubName, clubSection, clubDesc, clubImg } = props.data;
  return (
    <div className="flex w-full h-32 my-4 bg-white rounded-lg">
      <div className="flex justify-center items-center w-20 h-20 bg-center bg-cover bg-no-repeat bg-[url('/img/banner.png')]">
        <p className="text-white">중앙</p>
      </div>
      <section className="flex items-center h-full p-2">
        <div className="w-20 h-20 bg-gray-400 rounded-full "></div>
      </section>
      <section className="flex flex-col justify-center h-full p-2">
        <p>{clubName}</p>
        <p>{clubSection}</p>
        <p>{clubDesc}</p>
      </section>
    </div>
  );
};

export default ClubListBox;
