/*  ClubProps : 리스트에 표시되는 동아리 정보
    clubName : 동아리명
    clubSection : 동아리 분과
    clubDesc : 동아리 소개
    clubRank : 동아리 순위
    clubImg : 동아리 아이콘 url
    clubTag : 동아리 해시태그
    clubActivity : 동아리 활동
    clubContact : 동아리 연락처
*/

export interface clubListTypes {
  clubName: string;
  clubSection: string;
  clubDesc: string;
  clubImg: string;
  clubRank: number;
  clubTag: string;
  clubActivity: string;
  clubContact: string;
}

export const clubList: clubListTypes[] = [
  {
    clubSection: "문화",
    clubName: "루미큐브",
    clubImg: "",
    clubTag: "#보드게임 #두뇌활동 #수학",
    clubDesc:
      "저희 동아리는 지친 피로와 스트레스를 루미큐브라는 보드게임을 통해 해소하고 서로 게임을 통해 가까워지고 유익한 시간이 되기를 바라는 동아리가 되겠습니다",
    clubActivity: "동아리내 토너먼트",
    clubContact: "",
    clubRank: 999,
  },
  {
    clubSection: "문화",
    clubName: "맛-따라 멋-따라",
    clubImg: "/assets/img/clubIcon/Matddara.png",
    clubTag: "#맛집탐방 #최대규모 #친목",
    clubDesc:
      "안녕하세요 저희는 맛따라멋따라 입니다! 저희는 일주일에 한 번 맛집탐방을 하고 여러 사람들도 만날 수 있고 인생이 재밌어지는 지름길 1순위인 동아리입니다!",
    clubActivity: "맛집탐방 및 친목활동",
    clubContact: "인스타 @matmut_syu",
    clubRank: 26,
  },
  {
    clubSection: "문화",
    clubName: "빛감",
    clubImg: "/assets/img/clubIcon/Bitgam.png",
    clubTag: "#포토 #모델 #미디어아트",
    clubDesc:
      '빛으로 그린 그림"이라는 뜻의 빛감은 삼육대학교를 대표하는 인물사진 위주의 멀티미디어 촬영동아리입니다. 다양한 빛을 활용하여 청춘의 아름다운 순간을 기록합니다.',
    clubActivity: "스튜디오/야외 출사, 프로젝트 촬영",
    clubContact: "",
    clubRank: 17,
  },
  {
    clubSection: "문화",
    clubName: "삼육유학생의 집",
    clubImg: "/assets/img/clubIcon/Uhak.png",
    clubTag: "#유학생 #집 #서비스",
    clubDesc:
      '삼육유학생의 집은 중국 유학생으로 구성된 동아리입니다. 저희의 목표는 유학생들이 좋은 학습 및 생활 환경을 제공받을 수 있도록 돕고, 한국 생활에 잘 적응하도록 지원하는 것입니다.\n\n저희 동아리는 "덕육, 지육, 체육"이라는 삼육대학교의 교육 이념을 따르며, 유학생들의 종합적인 역량을 개발하는 데 중점을 둡니다.\n\n정기적으로 학술 강연, 문화 교류, 야외 스포츠 등 다양한 활동을 개최하여 유학생들이 여러 분야에서 성장할 수 있도록 지원합니다.\n\n한국과 중국의 문화 교류를 촉진하기 위해 다양한 문화 활동, 한국어 학습, 한국 문화 이해, 여행 등을 조직합니다.\n\n저희는 또한 유학생들이 생활에서 마주치는 다양한 문제와 어려움을 해결할 수 있도록 지원하기 위해 노력합니다.\n\n저희 동아리에서는 다른 지역 출신 중국 유학생들을 만나 한국의 문화, 관습 및 사람들을 탐험하고 자신의 유학 경험과 노하우를 공유할 수 있는 기회를 제공합니다.\n\n저희는 다양하고 재미있는 문화, 소셜, 야외 활동을 포함한 다채로운 활동을 제공하여 유학생들이 바쁜 학업 생활 속에서 더 많은 즐거움과 성과를 누릴 수 있도록 지원합니다.\n\n한국 생활에 더 잘 적응하고 삼육대학교 유학생 거주센터에서 함께 새로운 도전과 즐거움으로 가득한 유학 생활을 시작해 보세요',
    clubActivity:
      "한국과 중국의 문화 교류를 촉진하기 위해 다양한 문화 활동, 한국어 학습, 한국 문화 이해, 여행 등을 조직합니다.",
    clubContact: "",
    clubRank: 999,
  },
  {
    clubSection: "문화",
    clubName: "요소",
    clubImg: "/assets/img/clubIcon/Yoso.png",
    clubTag: "#연극 #낭만 #공연예술",
    clubDesc:
      "동아리 요소는 연극에 대해 배우고, 함께 작품을 만들며 협동능력을 키워나가는 동아리입니다. 어렵게만 느껴졌던 예술, 무대를 직접 경험해볼 수 있는 특별함이 오직 이곳, 요소에 있습니다!",
    clubActivity: "연극 놀이 활동 및 정기공연 진행",
    clubContact: "대표 010-8664-6519\n인스타 @yoso_art_36",
    clubRank: 11,
  },
  {
    clubSection: "문화",
    clubName: "클래시아",
    clubImg: "/assets/img/clubIcon/Clasia.png",
    clubTag: "#음악 #버스킹 #밴드",
    clubDesc:
      "음악을 사랑하는 사람들이 모여 서로의 음악취향을 공유하며 소통하는 중앙동아리 중 유일한 음악동아리입니다. 배움을 원하시는 분들을 위해 기타강습도 진행하고 뜻이 맞는 사람들끼리 모여 버스킹, 밴드 공연을 정기적으로 가집니다.",
    clubActivity: "버스킹 공연, 밴드 공연, 기타 강습",
    clubContact: "대표 010-6808-9074\n인스타 @class_is_a_ /",
    clubRank: 3,
  },
  {
    clubSection: "문화",
    clubName: "한편",
    clubImg: "",
    clubTag: "#영화 #자유 #인싸희망자",
    clubDesc:
      "한편’은 영화 감상 및 영화 비평 활동을 하는 교내 문화 동아입니다. 단순 감상에 그치지 않고 조원들과 토론하며 한 영화에 대한 여러 견해를 들을 수 있는 것이 우리 동아리의 특징입니다.  다양한 학과의 학생들이 ‘영화’라는 공통 주제로 소통하며 양질의 문화생활을 할 수 있다. 회장으로서 내향적인 성격의 사람들도 활발히 활동할 수 있는 분위기를 만드는 것을 중요하게 생각하는 동아리입니다.",
    clubActivity: "정기 영화관람",
    clubContact: "",
    clubRank: 999,
  },
  {
    clubSection: "문화",
    clubName: "호버링",
    clubImg: "/assets/img/clubIcon/Hovering.png",
    clubTag: "#탐조 #생태 #힐링",
    clubDesc:
      "탐조동아리 호버링은 새를 관찰하며 기록하고, 그 지역의 조류상을 밝혀냄으로써 생태적 가치를 입증하는 동아리입니다. 또한 자연 속을 걸으며 건강해지고 스트레스를 날려버릴 수 있는 힐링동아리입니다.",
    clubActivity: "탐조활동",
    clubContact: "대표 010-3393-5746",
    clubRank: 999,
  },
  {
    clubSection: "문화",
    clubName: "화소",
    clubImg: "/assets/img/clubIcon/Hwaso.png",
    clubTag: "#꽃 #친목 #힐링",
    clubDesc:
      "꽃 화(花), 소통할 소(疏): '꽃으로 소통하다'\n꽃 동아리 화소는 꽃과 사람이 함께하며 소통하고 힐링하는 문화 중앙동아리입니다.",
    clubActivity: "꽃 공예 작품 제작 정기활동 진행",
    clubContact: "인스타 @with_hwaso",
    clubRank: 18,
  },
  {
    clubSection: "문화",
    clubName: "ADIOS",
    clubImg: "/assets/img/clubIcon/ADIOS.png",
    clubTag: "#치어리딩 #응원단 #치어리더",
    clubDesc:
      "대학 응원 문화 증진을 목표로 설립된 동아리로 여러분의 대학 생활에 뜨거운 응원을 전하기 위해 노력하겠습니다",
    clubActivity: "치어리딩 연습",
    clubContact: "인스타 @syu_adios.cheer",
    clubRank: 22,
  },
  {
    clubSection: "문화",
    clubName: "D.M",
    clubImg: "/assets/img/clubIcon/DM.png",
    clubTag: "#열정 #열정 #열정",
    clubDesc:
      "D.M은 Dynamic Movement의 약자이며, 2018학년도에 창설된 삼육대학교 중앙 댄스 동아리입니다. D.M은 교내 공연 참여, 영상 촬영 기획 및 진행, 친목 활동 진행 등 다양한 활동을 진행합니다. 동아리제에서 진행될 공연도 많은 관심 부탁드리며, 언제나 뜨거운 열정 보여드리겠습니다. 감사합니다.",
    clubActivity: "교내 공연 참여, 영상 촬영 기획 및 진행, 친목 활동 진행 등",
    clubContact: "인스타 @syu_dm_2023",
    clubRank: 7,
  },
  {
    clubSection: "문화",
    clubName: "Draftmation",
    clubImg: "/assets/img/clubIcon/Draftmation.png",
    clubTag: "#애니메이션 #덕질 #OTAKU",
    clubDesc:
      "Draftmation은 '원고, 초안을 작성하다'라는 뜻을 가진 'Draft'와 '생기, 만화영화'라는 뜻을 가진 '(ani)mation'을 합친 단어로 다양한 사람들이 모여 여러 분야의 문화 예술 콘텐츠를 체험하고 공유하는 동아리입니다. 서브컬쳐를 주력으로 탐구하여 즐기고, 더 나아가 서브컬쳐를 좋아하는 사람이라면 누구나 즐길 수 있는 동아리 Draftmation이 되겠습니다.",
    clubActivity: "애니메이션 감상, J-POP 감상, 덕질 토크 등 진행",
    clubContact: "오픈 채팅방 - https://open.kakao.com/o/str5zq8e",
    clubRank: 1,
  },
  {
    clubSection: "문화",
    clubName: "Final Cut",
    clubImg: "/assets/img/clubIcon/Finalcut.png",
    clubTag: "#영화 #제작 #사랑 #예술",
    clubDesc:
      "영화를 사랑하는 사람들로 가득한 삼육대의 유일무이한 영화 제작 동아리 파이널 컷은 매 학기마다 하나의 단편영화 제작을 목표하고 활동하고 있습니다!",
    clubActivity: "단편영화 제작, 영화(뮤지컬, 연극, 전시회)관람 및 비평",
    clubContact: "대표 010-2370-2736",
    clubRank: 24,
  },
  {
    clubSection: "문화",
    clubName: "P.P.P",
    clubImg: "/assets/img/clubIcon/PPP.png",
    clubTag: "#패션 #개성 #색깔",
    clubDesc:
      "p.p.p는 삼육대학교 최초 패션동아리로서 자세 포즈 자부심이라는 세글자를 통해 형식에 구애받지 않고 본인만의 개성과 스타일을 추구하고 표현하자라는 목표를 향해 나아가고 있습니다.",
    clubActivity: "편집샵 방문 및 스냅샷 촬영",
    clubContact: "대표 010-4706-8664 \n인스타 @hxx_eno",
    clubRank: 999,
  },
  {
    clubSection: "문화",
    clubName: "Plague",
    clubImg: "/assets/img/clubIcon/Plague.png",
    clubTag: "#댄스 #춤꾼 #인싸",
    clubDesc:
      "PLAGUE는 삼육대학교의 중앙 댄스 동아리이며, 춤을 좋아하고 춤으로 소통하는 사람들이 모여 우리의 춤을 보는이들에게까지 즐거움과 기쁨을 나누자는  '전염병' 이라는 의미를 가지고 있습니다. 진정한 춤꾼들의 모임인 PLAGUE는 교내 공식 행사와 축제 무대 등에서 활발히 활동하고 있습니다.",
    clubActivity: "교내 공식 행사 무대 공연 및 동아리 자체 영상 제작 등",
    clubContact: "인스타 @plague_syu",
    clubRank: 9,
  },
  {
    clubSection: "문화",
    clubName: "View finder",
    clubImg: "/assets/img/clubIcon/Viewfinder.png",
    clubTag: "#사진 #필름카메라 #디지털카메라",
    clubDesc:
      "“View Finder”는 삼육대학교 중앙동아리 중 문화분과에 소속된 사진&카메라 동아리입니다. “View Finder”는 카메라에서 촬영범위나 구도, 초점 조정의 상태를 보기 위해 눈으로 들여다보는 부분을 뜻입니다. 그리고 저희 동아리에서는 View를 찾는 사람들이라는 뜻으로 이중적 의미를 두고 있습니다. 디지털카메라와 필름카메라를 모두 다루는 올라운더 사진동아리로써 모두가 함께 사진을 즐길 수 있는 동아리가 될 수 있도록 운영하고 있습니다.",
    clubActivity:
      "한 달에 2-4번 정도 진행되는 정기출사와, 가고싶은 날 마음대로 떠나는 번개출사를 주요 활동으로 하고 있습니다. 개강 후에는 개강총회가 종강 후에는 학기말 전시회를 진행하고 있습니다.",
    clubContact: "대표 010-2807-1834\n인스타 @vf_iridescence",
    clubRank: 14,
  },
  {
    clubSection: "봉사",
    clubName: "동행길",
    clubImg: "/assets/img/clubIcon/Donhanggil.png",
    clubTag: "#동물 #보호 #봉사",
    clubDesc: "동행길은 동물을 가장 가까이에서 보호하는 동물권 동아리입니다.",
    clubActivity:
      "유기동물보호소 봉사활동, 수제간식 만들기, 생물 키우기, 정기회의",
    clubContact: "대표 010-6274-4945\n인스타 @donghanggil2023",
    clubRank: 5,
  },
  {
    clubSection: "봉사",
    clubName: "보담",
    clubImg: "/assets/img/clubIcon/Bodam.png",
    clubTag: "#봉사#다양한#프로젝트개발",
    clubDesc:
      '보담은"사람을 보담, 세상을 보담" 보담은 다양한 분야의 뜻있는 사람들이 모여 활동하는 삼육대학교 최대 규모의 중앙 봉사동아리입니다.',
    clubActivity: "인형극,아동팀,노인팀,장애팀 봉사 진행",
    clubContact: "대표 010-4006-4150 \n인스타 @36bodamm",
    clubRank: 21,
  },
  {
    clubSection: "봉사",
    clubName: "오아시스",
    clubImg: "/assets/img/clubIcon/Oasis.png",
    clubTag: "#프로젝트봉사 #파견봉사 #사회봉사단소속",
    clubDesc:
      "오아시스는 사회봉사단 직속 봉사동아리로 봉사 기획부터 실행까지 학생들이 주도하는 학생 자치 봉사동아리입니다. 학기 중에는 지역 사회복지관과 연계하여 프로젝트 봉사를 진행하고, 종강 후에는 국내외 지역에 파견 봉사를 나가고 있습니다. 지역 사회에 귀를 기울이고 저희를 필요로 하는 곳에 오아시스 같은 존재가 될 수 있도록 노력하겠습니다.",
    clubActivity: "지역 사회복지관 연계 봉사, 국내외 파견 봉사, 재능기부 봉사",
    clubContact: "인스타 @syu_oasis",
    clubRank: 4,
  },
  {
    clubSection: "봉사",
    clubName: "은빛샘",
    clubImg: "/assets/img/clubIcon/Enbit.png",
    clubTag: "#봉사 #물리치료 #노인",
    clubDesc: "작은손길로 노인들의 마음을 움직이는 사람들",
    clubActivity:
      "탑골공원 어르신들을 위한 빵포장 봉사 및 지역사회노인 대상 운동 프로그램 실행",
    clubContact: "대표 010-4898-2650",
    clubRank: 8,
  },
  {
    clubSection: "봉사",
    clubName: "일곱빛",
    clubImg: "/assets/img/clubIcon/Ilgobbit.png",
    clubTag: "#봉사동아리 #장애인식개선 #무지개",
    clubDesc:
      "일곱빛은 장애인식개선을 목적으로 하여 다양한 활동을 하고 있는 봉사 동아리입니다. \n여러 색이 조화를 이루어 무지개를 이루고 있는 것처럼, 일곱빛은 따뜻한 마음을 가진 사람들이 모여 따뜻한 사회를 만드는 데 함께 하고 있습니다.\n앞으로도 가장 가까이에 있는 무지개, 일곱빛으로서 의미 있는 일에 동행하겠습니다.",
    clubActivity:
      "여러 부서로 나누어 장애인식개선을 위한 봉사활동 진행 - 수어율동팀 / 영상편집팀 / 카드뉴스팀 / 드림멘토팀 / 청년포럼팀",
    clubContact: "인스타 @7_light_36\n유튜브 일곱빛자원봉사터전",
    clubRank: 16,
  },
  {
    clubSection: "체육",
    clubName: "러너스하이",
    clubImg: "/assets/img/clubIcon/Runushigh.png",
    clubTag: "#건강 #운동동아리 #러하",
    clubDesc: "러하 (러너스하이 하이라는 뜻)",
    clubActivity: "야외 운동",
    clubContact: "",
    clubRank: 20,
  },
  {
    clubSection: "체육",
    clubName: "미스트",
    clubImg: "/assets/img/clubIcon/Mst.png",
    clubTag: "#축구 #여자축구 #행축",
    clubDesc:
      '못해도 괜찮아, 행복하니까!"\n\n안녕하세요! 열정을 대가로 행복을 사는 삼육대학교 유일 여자축구 동아리 미스트입니다. 저희 미스트는 실력이 아닌 운동에서의 재미와 행복을 추구하며, 여성 생활체육으로서의 축구를 많은 분들과 함께하고자 노력하는 동아리입니다!',
    clubActivity: "여성 축구 및 풋살 훈련, 경기 진행 및 타학교 축구 활동 교류",
    clubContact: "인스타 @syu_mst",
    clubRank: 15,
  },
  {
    clubSection: "체육",
    clubName: "싱클벙클",
    clubImg: "/assets/img/clubIcon/Sinkle.png",
    clubTag: "#클라이밍 #볼더링 #전완근",
    clubDesc:
      "싱클벙클은 클라이밍을 즐기는 동아리입니다. 싱클벙클은 신체적인 도전과 정신적인 성장을 추구하는 사람들의 모임입니다. 저희는 다양한 난이도와 스타일의 볼더링을 체험하고, 서로의 기술과 경험을 공유해 보다 즐거운 클라이밍을 도모하는 동아리입니다.",
    clubActivity: "실내암장에서 매주 월요일 실내암벽 등반 활동",
    clubContact: "대표 010-9192-7582",
    clubRank: 999,
  },
  {
    clubSection: "학술",
    clubName: "멋쟁이사자처럼",
    clubImg: "/assets/img/clubIcon/Likelion.png",
    clubTag: "#코딩 #전국연합 #웹페이지개발",
    clubDesc:
      "Possibility to Reality. \n멋쟁이사자처럼 삼육대학교는 테크 기반의 아이디어 실현을 위한 대학 연합 IT 동아리로 전공과 상관없이 다양한 전공자들이 모여 아이디어를 실현하는 삼육대학교 중앙동아리이자 전국 연합동아리입니다.",
    clubActivity:
      "정기스터디 및 정기세션 진행, 트랙별(프론트엔드, 백엔드, 기획디자인) 교육",
    clubContact:
      "카카오톡 채널 ‘멋쟁이사자처럼 삼육대학교'\n인스타그램 @likelion_syu",
    clubRank: 10,
  },
  {
    clubSection: "학술",
    clubName: "불기둥",
    clubImg: "/assets/img/clubIcon/Bulgidoong.png",
    clubTag: "#금융 #투자 # 전국대학생투자동아리연합",
    clubDesc:
      "동아리 불기둥은 삼육 대학교 No.1 금융투자 동아리로 전국대학생투자동아리연합회에 가입되어있습니다. 불기둥은 주가가 수직상승하는 현상을 뜻하는데 동아리명과 같이 수직 막힘없이 달려가는 인재를 양성하는 동아리입니다.",
    clubActivity:
      "신문 강독, 모의투자대회, 자격증 스터디, 교수님 강의, UIC를 통한 대외 활동",
    clubContact: "인스타 @syu_bull",
    clubRank: 19,
  },
  {
    clubSection: "학술",
    clubName: "Creator",
    clubImg: "/assets/img/clubIcon/Creator.png",
    clubTag: "#게임 #코딩 #기획",
    clubDesc:
      "크리에이터는 게임을 좋아하는 사람들이 모여, 게임을 플레이 하기도 하고 만들기도 하는 동아리입니다. 게임 기획부터 개발, 캐릭터 디자인 등 여러 분야의 게임 제작을 목표로 하며, 제작을 위한 경험을 쌓기 위해 같이 게임을 즐깁니다. 게임에 애정을 갖고 계신 분을 환영합니다!",
    clubActivity: "게임 개발 스터디, 게임 기획 스터디, 정기 게임 활동",
    clubContact: "",
    clubRank: 2,
  },
  {
    clubSection: "학술",
    clubName: "GDSC",
    clubImg: "/assets/img/clubIcon/GDSC.png",
    clubTag: "#구글 #개발자 #커뮤니티",
    clubDesc:
      "GDSC(Google Developer Student Clubs) Korea는 개발과 구글 기술에 관심이 있는 대학생 누구나 가입할 수 있는 대학생 커뮤니티입니다.",
    clubActivity: "정기 세션 및 스터디, 프로젝트",
    clubContact: "",
    clubRank: 7,
  },
  {
    clubSection: "학술",
    clubName: "Su-eco",
    clubImg: "/assets/img/clubIcon/Sueco.png",
    clubTag: "#경제학 #기초경제 #경제시사",
    clubDesc:
      "경제에 관심있는 학생들을 대표하며, 심화 분야를 수학할 기본기를 지향합니다.",
    clubActivity: "경제 기초 스터디 및 시사 세미나 진행",
    clubContact: "대표 010-3593-4682",
    clubRank: 13,
  },
  {
    clubSection: "학술",
    clubName: "Team MFS",
    clubImg: "/assets/img/clubIcon/TeamMFS.png",
    clubTag: "#3D프린트 #자기계발 #상상을현실로",
    clubDesc:
      "학술동아리 Team MFS는 학술동아리로써 최근 주목받고 있는 3D프린트를 직접 배우고 활용해보며 본인만의 경쟁력을 높여주는 동아리 입니다.",
    clubActivity: "정기 스터디 및 프로젝트 활동",
    clubContact: "대표 010-9608-8304",
    clubRank: 12,
  },
];
