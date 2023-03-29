import AboutContent from "./AboutContent";
import x_svg from "../../assets/x.svg";

const About = () => {
  return (
    <div className="flex flex-col w-full grow ">
      <section className="w-full flex flex-col items-center mb-14">
        <p className=" font-PyeongChang text-white text-sm mb-1">
          삼육대학교 학우 여러분, 안녕하세요!
        </p>
        <p className=" font-PyeongChang text-white text-sm mb-1">
          멋쟁이사자처럼 삼육대학교 X 동아리연합회 다원 입니다.
        </p>
        <p className=" font-PyeongChang text-white text-sm mb-1">
          다양한 동아리들의 활동을 한 눈에 보실 수 있도록
        </p>
        <p className=" font-PyeongChang text-white text-sm mb-1">
          멋사와 동연회가 연합해 동아리제 웹 페이지를 제작했습니다.
        </p>
        <p className=" font-PyeongChang text-white text-sm">
          일 년에 한 번뿐인 동아리제! 함께 즐겨요♡
        </p>
      </section>
      <AboutContent
        title="멋쟁이사자처럼 삼육대학교 11기"
        content1="멋쟁이사자처럼 삼육대학교는 "
        content2="테크 기반의 아이디어를 실현을 위한"
        content3="전국 최대 규모의 대학연합 IT 동아리이자"
        content4="삼육대학교 중앙 동아리입니다."
        buttonName="삼육멋사 11기 페이지"
      />
      <div className="w-full flex justify-center my-10">
        <img className="svg-glow w-12" src={x_svg} />
      </div>
      <AboutContent
        title="멋쟁이사자처럼 삼육대학교 11기"
        content1="멋쟁이사자처럼 삼육대학교는 "
        content2="테크 기반의 아이디어를 실현을 위한"
        content3="전국 최대 규모의 대학연합 IT 동아리이자"
        content4="삼육대학교 중앙 동아리입니다."
        buttonName="삼육멋사 11기 페이지"
      />
    </div>
  );
};

export default About;
