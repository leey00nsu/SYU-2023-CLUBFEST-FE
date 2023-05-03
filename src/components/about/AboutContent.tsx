import ClubImage from "../clubs/ClubImage";
import AboutButton from "./AboutButton";

interface AboutContentProps {
  title: string;
  contents: string;
  buttonName: string;
  img: string;
}

const AboutContent = (props: AboutContentProps) => {
  const contentsArr = props.contents.split("\\n");

  return (
    <section className="w-full flex px-8 justify-center xs:gap-10 gap-3">
      <ClubImage size="lg" url={props.img} />
      <article className="flex flex-col">
        <p className="font-PyeongChang text-white xs:text-lg text-md">
          {props.title}
        </p>
        <div className="w-9/12 border-b-2 my-2"></div>
        <div className="mb-4">
          {contentsArr.map((content, index) => (
            <p
              key={index}
              className="font-PyeongChang text-white xs:text-sm text-xs"
            >
              {content}
            </p>
          ))}
        </div>
        <AboutButton>{props.buttonName}</AboutButton>
      </article>
    </section>
  );
};

export default AboutContent;
