import ClubImage from "../clubs/ClubImage";
import AboutButton from "./AboutButton";

interface AboutContentProps {
  title: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  buttonName: string;
}

const AboutContent = (props: AboutContentProps) => {
  return (
    <section className="w-full flex px-8 justify-center xs:gap-10 gap-3">
      <ClubImage size="lg" />
      <article className="flex flex-col">
        <p className="font-PyeongChang text-white xs:text-lg text-md">
          {props.title}
        </p>
        <div className="w-9/12 border-b-2 my-2"></div>
        <p className="font-PyeongChang text-white xs:text-sm text-xs">
          {props.content1}
        </p>
        <p className="font-PyeongChang text-white xs:text-sm text-xs">
          {props.content2}
        </p>
        <p className="font-PyeongChang text-white xs:text-sm text-xs">
          {props.content3}
        </p>
        <p className="font-PyeongChang text-white xs:text-sm text-xs mb-4">
          {props.content4}
        </p>
        <AboutButton>{props.buttonName}</AboutButton>
      </article>
    </section>
  );
};

export default AboutContent;
