import AboutContent from "./AboutContent";

const About = () => {
  return (
    <div className="flex flex-col w-full grow overflow-y-auto ">
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
        contents="멋쟁이사자처럼 삼육대학교는\n
        테크 기반의 아이디어를 실현을 위한\n
        전국 최대 규모의 대학연합 IT 동아리이자\n
        삼육대학교 중앙 동아리입니다."
        buttonName="삼육멋사 11기 페이지"
        img="/assets/img/clubIcon/Likelion.png"
      />
      <div className="w-full flex justify-center my-10">
        <img className="svg-glow w-12" src="/assets/x.svg" />
      </div>
      <AboutContent
        title="삼육대학교 동아리연합회 다원"
        contents="중앙동아리를 대표하는 학생자치기구로\n
        4개 분과의 40개 동아리를 지원합니다.\n
        '모두 다 원하는, 모두 다 사랑하는 사람'\n
        이라는 뜻을 가진 '다원'은 소통과 배려를\n
        중심으로 모두가 원하고, 사랑하는 동아리\n
        연합회가 되겠습니다."
        buttonName="삼육멋사 11기 페이지"
        img="/assets/img/clubIcon/Daone.png"
      />
    </div>
  );
};

export default About;
